
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
    browser = await puppeteer.launch({
      headless: 'new',
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      defaultViewport: null,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    
    // Tentar conectar ao servidor
    try {
      console.log('Navegando para ' + BASE_URL + '...');
      await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
      // Dar um tempo extra para garantir que tudo carregou
      await new Promise(r => setTimeout(r, 5000));
    } catch (e) {
      console.error('❌ Erro ao conectar ao servidor:', e.message);
      console.error('Dica: Abra um novo terminal e rode "npm run dev" antes de executar este script.');
      // Tentar continuar mesmo com erro de timeout, talvez a página tenha carregado parcialmente
    }

    // Configurações de Viewport para diferentes formatos
    const viewports = {
      story: { width: 1080, height: 1920, deviceScaleFactor: 2 },
      post: { width: 1080, height: 1350, deviceScaleFactor: 2 }, // 4:5 Portrait
      square: { width: 1080, height: 1080, deviceScaleFactor: 2 },
      desktop: { width: 1920, height: 1080, deviceScaleFactor: 2 },
    };

    // Função auxiliar para capturar com tratamento de erro
    async function takeScreenshot(name, selector, viewportName = 'post') {
      try {
        const vp = viewports[viewportName];
        await page.setViewport(vp);
        
        // Aguardar renderização e animações
        await new Promise(r => setTimeout(r, 1000));

        let element;
        if (selector === 'full') {
          element = page;
          const fileName = `${name}-${viewportName}.png`;
          const filePath = path.join(OUTPUT_DIR, fileName);
          await element.screenshot({ path: filePath, fullPage: true });
          console.log(`✅ Capturado: ${fileName}`);
          return;
        }

        if (typeof selector === 'string') {
            try {
              await page.waitForSelector(selector, { timeout: 5000 });
              element = await page.$(selector);
            } catch (e) {
              console.warn(`⚠️ Elemento ${selector} não encontrado, tentando buscar por texto...`);
            }
        } else {
            element = selector;
        }

        if (element) {
          const fileName = `${name}-${viewportName}.png`;
          const filePath = path.join(OUTPUT_DIR, fileName);
          
          await element.screenshot({
            path: filePath,
            type: 'png',
            omitBackground: false,
          });
          console.log(`✅ Capturado: ${fileName}`);
        } else {
            console.warn(`⚠️ Elemento não encontrado para ${name}`);
        }
      } catch (error) {
        console.error(`❌ Erro ao capturar ${name}:`, error.message);
      }
    }

    // --- CAPTURAS ESTRATÉGICAS PARA INSTAGRAM ---

    console.log('\n--- Capturando Página Completa (Debug) ---');
    await takeScreenshot('00-debug', 'full', 'desktop');

    // 1. Hero Section (Impacto Inicial)
    console.log('\n--- Capturando Hero Section ---');
    // Tentar encontrar o Hero pelo título H1 ou primeira seção
    const heroSection = await page.evaluateHandle(() => {
        const h1 = document.querySelector('h1');
        return h1 ? h1.closest('section') : document.querySelector('section');
    });
    
    if (heroSection) {
        await takeScreenshot('01-hero', heroSection, 'story');
        await takeScreenshot('01-hero', heroSection, 'post');
    } else {
        console.warn('⚠️ Hero section não encontrada');
    }

    // 2. Benefícios/Pain Points (Problema e Solução)
    // ... restante do código ...

    // Post 4:5: Foca no texto e ícones
    console.log('\n--- Capturando Benefícios ---');
    // Precisamos identificar a seção de benefícios. Geralmente é a 3ª ou 4ª.
    // Vamos tentar buscar pelo texto ou classe específica se possível.
    // Como não temos IDs garantidos, vamos tentar pegar seções específicas.
    
    // Vamos capturar a página inteira em desktop para referência
    console.log('\n--- Capturando Página Completa (Desktop) ---');
    await page.setViewport(viewports.desktop);
    await page.screenshot({ path: path.join(OUTPUT_DIR, '00-full-page-desktop.png'), fullPage: true });
    
    // 3. Portfólio (Prova Visual)
    // Story: Mostrar a galeria rolando
    console.log('\n--- Capturando Portfólio ---');
    // Assumindo que o portfólio tem um ID ou classe identificável. 
    // O componente Portfolio.tsx geralmente tem um ID ou é uma section.
    // Vamos tentar encontrar pelo texto "Projetos Desenvolvidos"
    const portfolioSection = await page.evaluateHandle(() => {
      const h2s = Array.from(document.querySelectorAll('h2'));
      const portfolioHeader = h2s.find(h => h.textContent.includes('Projetos Desenvolvidos') || h.textContent.includes('Portfólio'));
      return portfolioHeader ? portfolioHeader.closest('section') : null;
    });

    if (portfolioSection) {
        await portfolioSection.screenshot({ path: path.join(OUTPUT_DIR, '02-portfolio-post.png') });
        console.log('✅ Capturado: 02-portfolio-post.png');
    } else {
        console.warn('⚠️ Seção de Portfólio não encontrada automaticamente.');
    }

    // 4. Serviços (O que oferecemos)
    console.log('\n--- Capturando Serviços ---');
    const servicesSection = await page.evaluateHandle(() => {
        const h2s = Array.from(document.querySelectorAll('h2'));
        const header = h2s.find(h => h.textContent.includes('Soluções para Fotógrafos') || h.textContent.includes('Serviços'));
        return header ? header.closest('section') : null;
    });

    if (servicesSection) {
        await servicesSection.screenshot({ path: path.join(OUTPUT_DIR, '03-services-post.png') });
        console.log('✅ Capturado: 03-services-post.png');
    }

    // 5. Preços (Oferta)
    console.log('\n--- Capturando Preços ---');
    const pricingSection = await page.evaluateHandle(() => {
        const h2s = Array.from(document.querySelectorAll('h2'));
        const header = h2s.find(h => h.textContent.includes('Escolha o Plano') || h.textContent.includes('Preços'));
        return header ? header.closest('section') : null;
    });

    if (pricingSection) {
        await pricingSection.screenshot({ path: path.join(OUTPUT_DIR, '04-pricing-post.png') });
        console.log('✅ Capturado: 04-pricing-post.png');
    }

    // 6. Depoimentos (Prova Social)
    console.log('\n--- Capturando Depoimentos ---');
    const testimonialsSection = await page.evaluateHandle(() => {
        const h2s = Array.from(document.querySelectorAll('h2'));
        const header = h2s.find(h => h.textContent.includes('Depoimentos') || h.textContent.includes('O que dizem'));
        return header ? header.closest('section') : null;
    });

    if (testimonialsSection) {
        await testimonialsSection.screenshot({ path: path.join(OUTPUT_DIR, '05-testimonials-post.png') });
        console.log('✅ Capturado: 05-testimonials-post.png');
    }

    // 7. CTA Final + Footer
    console.log('\n--- Capturando CTA e Footer ---');
    await page.setViewport(viewports.post);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise(r => setTimeout(r, 500)); // Esperar scroll
    await page.screenshot({ path: path.join(OUTPUT_DIR, '06-footer-cta.png') });
    console.log('✅ Capturado: 06-footer-cta.png');

    console.log('\n✨ Concluído! Verifique a pasta "social-images" na raiz do projeto.');

  } catch (error) {
    console.error('❌ Erro fatal:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

captureScreenshots();
