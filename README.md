# Landing Page para Fotógrafo Profissional

Uma landing page moderna, responsiva e de alta conversão construída especificamente para fotógrafos profissionais. Desenvolvida com React, TypeScript, Tailwind CSS, shadcn/ui, lucide-react e framer-motion.

## Características Principais

**Design Premium**
- Minimalismo elegante com foco em tipografia
- Paleta de cores sofisticada (branco, preto profundo e ouro)
- Tipografia curada (Playfair Display, Poppins, Inter)
- Animações suaves e microinterações

**Otimizado para Conversão**
- Múltiplos CTAs estrategicamente posicionados
- Integração com WhatsApp para contato direto
- Formulário de contato para geração de leads
- Botão flutuante de WhatsApp
- Estrutura de navegação intuitiva

**Responsivo e Acessível**
- Design mobile-first
- Totalmente responsivo em todos os dispositivos
- Acessibilidade WCAG
- Carregamento rápido

**SEO Otimizado**
- Meta tags semânticas
- Open Graph para compartilhamento em redes sociais
- Schema.org estruturado
- Tipografia semântica HTML

## Stack Tecnológico

- **React 19** - Framework UI
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - Componentes UI reutilizáveis
- **lucide-react** - Ícones
- **framer-motion** - Animações
- **react-intersection-observer** - Scroll reveal
- **Vite** - Build tool
- **Sonner** - Toast notifications

## Estrutura do Projeto

```
cliente/
├── public/              # Assets estáticos
├── src/
│   ├── components/      # Componentes React reutilizáveis
│   │   ├── Hero.tsx
│   │   ├── PainPoints.tsx
│   │   ├── Benefits.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── ui/          # Componentes shadcn/ui
│   ├── data/            # Dados e configurações
│   │   ├── portfolio.ts # Portfólio, serviços, depoimentos
│   │   └── config.ts    # Configurações e textos
│   ├── hooks/           # Custom React hooks
│   │   └── useScrollReveal.ts
│   ├── types/           # Tipos TypeScript
│   │   └── index.ts
│   ├── pages/           # Páginas
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx          # Componente raiz
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos globais e design system
└── index.html           # Template HTML
```

## Seções da Landing Page

### 1. Hero Section
Seção principal com imagem de fundo, overlay elegante, título impactante e CTA para WhatsApp. Inclui animação de entrada suave.

### 2. Pain Points
Exibe os desafios que fotógrafos enfrentam em cards com ícones. Ajuda o visitante a se identificar com o problema.

### 3. Benefits
Apresenta os benefícios de ter uma landing page profissional em cards modernos com ícones em ouro.

### 4. Portfolio
Galeria responsiva de fotos com efeito de zoom ao hover e modal para visualização em tamanho maior.

### 5. Services
Exibe os serviços oferecidos (ensaios, casamentos, eventos, casal) em cards com features listadas.

### 6. Testimonials
Depoimentos de clientes fictícios com avaliação em estrelas, foto e informações do cliente.

### 7. CTA Section
Chamada à ação forte com título impactante e botão para solicitar orçamento.

### 8. Contact Form
Formulário de contato com campos: nome, WhatsApp, tipo de ensaio e mensagem. Integrado com email.

### 9. Footer
Rodapé com informações de contato (WhatsApp, email, Instagram) e links clicáveis.

### 10. WhatsApp Button
Botão flutuante fixo no canto inferior direito com link para WhatsApp.

## Personalização

### Dados Principais

Edite `client/src/data/config.ts` para personalizar:

```typescript
export const pageConfig: PageConfig = {
  photographerName: 'Seu Nome',
  tagline: 'Fotógrafo Profissional',
  description: 'Transformando momentos em memórias eternas',
  contact: {
    whatsappUrl: 'https://wa.me/5571981270742',
    whatsappNumber: '(71) 98127-0742',
    email: 'ramonssa100@gmail.com',
    instagramHandle: '@seu_instagram',
  },
};
```

### Portfólio, Serviços e Depoimentos

Edite `client/src/data/portfolio.ts` para:
- Adicionar/remover imagens do portfólio
- Modificar serviços oferecidos
- Atualizar depoimentos de clientes
- Personalizar pontos de dor e benefícios

### Cores e Tipografia

Edite `client/src/index.css` para personalizar:
- Paleta de cores (variáveis CSS)
- Tipografia (fonts do Google)
- Espaçamento e tamanhos

## Como Usar

### Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Acessar em http://localhost:3000
```

### Build para Produção

```bash
# Build
pnpm build

# Preview do build
pnpm preview
```

## Otimizações Implementadas

**Performance**
- Lazy loading de imagens
- Code splitting automático
- Otimização de assets
- Minificação de CSS/JS

**SEO**
- Meta tags semânticas
- Open Graph
- Schema.org
- Sitemap (pode ser adicionado)

**Conversão**
- Múltiplos CTAs
- Formulário otimizado
- Integração WhatsApp
- Prova social (depoimentos)
- Estrutura de confiança (portfólio)

## Animações

O projeto utiliza framer-motion para:
- Fade-in ao scroll (scroll reveal)
- Stagger animations em grids
- Hover effects em cards
- Transições suaves em modais
- Animação de botão flutuante

## Acessibilidade

- Semântica HTML apropriada
- ARIA labels onde necessário
- Contraste de cores adequado
- Navegação por teclado
- Focus rings visíveis

## Deployment

O projeto está pronto para deploy em:
- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Qualquer host estático**

### Deploy no Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Suporte e Customização

Este é um template comercial pronto para ser vendido a fotógrafos. Cada cliente pode:
- Trocar fotos do portfólio
- Trocar nome e contatos
- Personalizar cores (mantendo o design system)
- Adicionar/remover seções conforme necessário

## Licença

Este projeto é um template comercial. Sinta-se livre para usá-lo como base para seus projetos.

## Changelog

### v1.0.0
- Lançamento inicial
- 10 seções completas
- Design system implementado
- Otimizações de SEO
- Responsividade total
- Animações suaves

---

**Desenvolvido com ❤️ para fotógrafos profissionais**
