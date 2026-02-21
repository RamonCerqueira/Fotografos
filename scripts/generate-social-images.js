
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.resolve(__dirname, '../social-images');
const BASE_URL = 'http://localhost:3000'; // Vite dev server default

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function captureScreenshots() {
  console.log('📸 Iniciando captura de imagens para redes sociais...');
  console.log(`📂 Salvando em: ${OUTPUT_DIR}`);
  console.log(`🌐 URL Alvo: ${BASE_URL}`);

  let browser;
  try {
    // Tenta encontrar o executável do Chrome
    const executablePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
    
    console.log('🚀 Iniciando navegador...');
    browser = await puppeteer.launch({
      headless: true, // headless: "new" é o padrão agora, mas "true" é mais compatível
      executablePath: fs.existsSync(executablePath) ? executablePath : undefined,
      protocolTimeout: 120000, // Aumentar timeout do protocolo para evitar desconexões
      defaultViewport: null,
      args: [
        '--no-sandbox', 
        '--disable-setuid-sandbox',
        '--window-size=1920,1080',
        '--font-render-hinting=none', // Melhora renderização de fontes
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process'
      ],
    });

    const page = await browser.newPage();
    
    // Tentar conectar ao servidor com retries
    let connected = false;
    for (let i = 0; i < 3; i++) {
      try {
        console.log(`📡 Tentativa de conexão ${i + 1}/3...`);
        await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
        connected = true;
        break;
      } catch (e) {
        console.warn(`⚠️ Falha na conexão: ${e.message}`);
        await new Promise(r => setTimeout(r, 2000));
      }
    }

    if (!connected) {
      throw new Error('Não foi possível conectar ao servidor local. Verifique se "npm run dev" está rodando.');
    }

    console.log('⏳ Aguardando renderização inicial e animações (5s)...');
    await new Promise(r => setTimeout(r, 5000));

    // Injetar estilos para garantir que screenshots fiquem bonitos (opcional)
    await page.addStyleTag({ content: 'body { overflow-x: hidden; }' });

    // Configurações de Viewport para diferentes formatos
    const viewports = {
      story: { width: 1080, height: 1920, deviceScaleFactor: 2, isMobile: true },
      post: { width: 1080, height: 1350, deviceScaleFactor: 2, isMobile: true }, // 4:5 Portrait
      square: { width: 1080, height: 1080, deviceScaleFactor: 2, isMobile: true },
      desktop: { width: 1920, height: 1080, deviceScaleFactor: 2, isMobile: false },
    };

    // Função auxiliar robusta para capturar
    async function takeScreenshot(name, selectorOrElement, viewportName = 'post') {
      const vp = viewports[viewportName];
      await page.setViewport(vp);
      
      // Pequeno delay após mudar viewport para layout se ajustar
      await new Promise(r => setTimeout(r, 1000));

      const fileName = `${name}-${viewportName}.png`;
      const filePath = path.join(OUTPUT_DIR, fileName);

      try {
        if (selectorOrElement === 'full') {
          await page.screenshot({ path: filePath, fullPage: true });
          console.log(`✅ Capturado (Full Page): ${fileName}`);
          return;
        }

        let element;
        if (typeof selectorOrElement === 'string') {
          try {
            await page.waitForSelector(selectorOrElement, { timeout: 5000 });
            element = await page.$(selectorOrElement);
          } catch (e) {
            console.warn(`⚠️ Elemento "${selectorOrElement}" não encontrado.`);
          }
        } else {
          element = selectorOrElement;
        }

        if (element) {
          // Tentar capturar o elemento específico
          try {
            await element.screenshot({ path: filePath });
            console.log(`✅ Capturado (Elemento): ${fileName}`);
          } catch (e) {
            // Se falhar (ex: Node has 0 height), captura a viewport inteira como fallback
            console.warn(`⚠️ Falha ao capturar elemento "${name}" (${e.message}). Capturando viewport...`);
            await page.screenshot({ path: filePath });
            console.log(`✅ Capturado (Fallback Viewport): ${fileName}`);
          }
        } else {
          console.warn(`⚠️ Elemento não disponível para captura: ${name}`);
        }
      } catch (error) {
        console.error(`❌ Erro fatal ao capturar ${name}:`, error.message);
      }
    }

    // --- ROTEIRO DE CAPTURA ---

    // 0. Debug - Página inteira Desktop
    console.log('\n--- 0. Capturando Página Completa (Referência) ---');
    await takeScreenshot('00-overview', 'full', 'desktop');

    // 1. Hero Section (A primeira impressão)
    console.log('\n--- 1. Capturando Hero Section ---');
    // Estratégia: Pegar a primeira section que contém um H1
    const heroSelector = 'section:has(h1)';
    await takeScreenshot('01-hero-impact', heroSelector, 'story');
    await takeScreenshot('01-hero-impact', heroSelector, 'post');

    // 2. Benefícios (Geralmente a segunda ou terceira seção com grid)
    console.log('\n--- 2. Capturando Benefícios/Pain Points ---');
    // Tentar identificar por texto
    const benefitsHandle = await page.evaluateHandle(() => {
      const elements = Array.from(document.querySelectorAll('h2, h3'));
      const target = elements.find(el => 
        el.textContent.includes('Problemas') || 
        el.textContent.includes('Benefícios') ||
        el.textContent.includes('Por que ter')
      );
      return target ? target.closest('section') : null;
    });
    if (benefitsHandle) {
      await takeScreenshot('02-benefits', benefitsHandle, 'post');
    }

    // 3. Portfólio (Visualmente rico)
    console.log('\n--- 3. Capturando Portfólio ---');
    try {
      const portfolioHandle = await page.evaluateHandle(() => {
        const elements = Array.from(document.querySelectorAll('h2'));
        const target = elements.find(el => el.textContent.includes('Projetos Desenvolvidos') || el.textContent.includes('Portfólio'));
        return target ? target.closest('section') : null;
      });
      const portfolioElement = portfolioHandle.asElement();
      if (portfolioElement) {
        // Scroll para o elemento antes de capturar para ativar animações
        await portfolioElement.scrollIntoView();
        await new Promise(r => setTimeout(r, 1000));
        await takeScreenshot('03-portfolio', portfolioElement, 'post');
        // await takeScreenshot('03-portfolio', portfolioElement, 'story'); // Story pode ser muito alto e falhar
      } else {
        console.warn('⚠️ Seção Portfólio não encontrada pelo título.');
      }
    } catch (e) {
      console.warn('⚠️ Erro ao tentar capturar Portfólio:', e.message);
    }

    // 4. Serviços (O que é oferecido)
    console.log('\n--- 4. Capturando Serviços ---');
    const servicesHandle = await page.evaluateHandle(() => {
      const elements = Array.from(document.querySelectorAll('h2'));
      const target = elements.find(el => el.textContent.includes('Soluções para Fotógrafos') || el.textContent.includes('Serviços'));
      return target ? target.closest('section') : null;
    });
    const servicesElement = servicesHandle.asElement();
    if (servicesElement) {
      await takeScreenshot('04-services', servicesElement, 'post');
    }

    // 5. Preços (Oferta)
    console.log('\n--- 5. Capturando Preços ---');
    const pricingHandle = await page.evaluateHandle(() => {
      const elements = Array.from(document.querySelectorAll('h2'));
      const target = elements.find(el => el.textContent.includes('Escolha o Plano') || el.textContent.includes('Planos'));
      return target ? target.closest('section') : null;
    });
    const pricingElement = pricingHandle.asElement();
    if (pricingElement) {
      await takeScreenshot('05-pricing', pricingElement, 'post');
    }

    // 6. Depoimentos (Prova Social)
    console.log('\n--- 6. Capturando Depoimentos ---');
    const testimonialsHandle = await page.evaluateHandle(() => {
      const elements = Array.from(document.querySelectorAll('h2'));
      const target = elements.find(el => el.textContent.includes('O que dizem') || el.textContent.includes('Depoimentos'));
      return target ? target.closest('section') : null;
    });
    const testimonialsElement = testimonialsHandle.asElement();
    if (testimonialsElement) {
      await takeScreenshot('06-testimonials', testimonialsElement, 'square');
    }

    // 7. Call to Action Final
    console.log('\n--- 7. Capturando CTA Final ---');
    // Geralmente a penúltima seção antes do footer
    const ctaHandle = await page.evaluateHandle(() => {
      const sections = document.querySelectorAll('section');
      // Tentar pegar a última section que não seja o footer
      if (sections.length > 0) return sections[sections.length - 1];
      return null;
    });
    const ctaElement = ctaHandle.asElement();
    if (ctaElement) {
      await takeScreenshot('07-cta', ctaElement, 'post');
    }

    console.log('\n✨ Processo concluído! Verifique a pasta "social-images".');

  } catch (error) {
    console.error('❌ Erro fatal no script:', error);
  } finally {
    if (browser) {
      await browser.close();
      console.log('🔒 Navegador fechado.');
    }
  }
}

captureScreenshots();
