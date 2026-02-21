/**
 * Dados do Portfólio
 * Array com imagens mockadas para demonstração
 * Substitua as URLs com imagens reais do fotógrafo
 */

import type { PortfolioImage, Service, Testimonial, PainPoint, Benefit } from '@/types';

// ============================================
// PORTFÓLIO
// ============================================

export const portfolioImages: PortfolioImage[] = [
  {
    id: '1',
    title: 'Ana Souza Fotografia',
    description: 'Landing Page Minimalista para Fotógrafa de Casamentos',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    category: 'casamentos',
    alt: 'Site de fotografia de casamento em laptop',
  },
  {
    id: '2',
    title: 'Studio Light & Art',
    description: 'Sistema de Agendamento e Galeria Online',
    imageUrl: 'https://images.unsplash.com/photo-1481487484168-9b930127f311?w=800&h=600&fit=crop',
    category: 'ensaios',
    alt: 'Interface de agendamento em tablet',
  },
  {
    id: '3',
    title: 'Marcos Eventos',
    description: 'Portfólio Dinâmico com Integração Instagram',
    imageUrl: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&h=600&fit=crop',
    category: 'eventos',
    alt: 'Site de eventos em monitor ultrawide',
  },
  {
    id: '4',
    title: 'Bela Vista Drones',
    description: 'Site Institucional para Fotografia Aérea',
    imageUrl: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop',
    category: 'outro',
    alt: 'Código fonte e design de interface',
  },
  {
    id: '5',
    title: 'Carla & João',
    description: 'Site Personalizado para Lista de Casamento',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
    category: 'casal',
    alt: 'Design de site de casamento',
  },
  {
    id: '6',
    title: 'Galeria Urbana',
    description: 'E-commerce para Venda de Fotos Fine Art',
    imageUrl: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop',
    category: 'outro',
    alt: 'Mockup de site em diversos dispositivos',
  },
];

// ============================================
// SERVIÇOS
// ============================================

export const services: Service[] = [
  {
    id: '1',
    title: 'Landing Page Premium',
    description: 'Sites de alta conversão projetados especificamente para fotógrafos exigentes.',
    icon: 'Layout',
    features: [
      'Design Exclusivo',
      'Carregamento Ultra-rápido',
      'Otimização SEO',
      'Responsivo (Mobile-first)',
    ],
  },
  {
    id: '2',
    title: 'Sistemas de Agendamento',
    description: 'Automatize sua agenda e receba pagamentos de sinais diretamente pelo site.',
    icon: 'Calendar',
    features: [
      'Sincronização com Google Calendar',
      'Pagamentos Online (Pix/Cartão)',
      'Lembretes Automáticos',
      'Gestão de Clientes',
    ],
  },
  {
    id: '3',
    title: 'Portfólio Dinâmico',
    description: 'Galerias inteligentes que valorizam suas fotos e são fáceis de atualizar.',
    icon: 'Image',
    features: [
      'Upload Simples',
      'Proteção contra Download (opcional)',
      'Integração com Instagram',
      'Categorização Automática',
    ],
  },
  {
    id: '4',
    title: 'Consultoria & Branding',
    description: 'Identidade visual completa para posicionar sua marca no mercado de luxo.',
    icon: 'PenTool',
    features: [
      'Logotipo e Paleta de Cores',
      'Material de Papelaria',
      'Estratégia Digital',
      'Análise de Concorrência',
    ],
  },
];

// ============================================
// DEPOIMENTOS
// ============================================

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Roberto Almeida',
    role: 'Fotógrafo de Casamentos',
    content:
      'Desde que lancei meu site novo, a percepção de valor dos meus clientes mudou completamente. Consigo cobrar mais e fechar contratos com mais facilidade.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Fernanda Costa',
    role: 'Fotógrafa de Família',
    content:
      'O sistema de agendamento foi um divisor de águas. Não perco mais tempo no WhatsApp tentando achar horário. O site trabalha por mim 24h por dia.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Lucas Pereira',
    role: 'Fotógrafo Corporativo',
    content:
      'O design é impecável e o suporte do Ramon é incrível. Ele entendeu exatamente o que eu precisava para transmitir profissionalismo para grandes empresas.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
];

// ============================================
// PONTOS DE DOR
// ============================================

export const painPoints: PainPoint[] = [
  {
    id: '1',
    title: 'Instagram não é Portfólio',
    description: 'Redes sociais limitam a qualidade das suas fotos e misturam seu trabalho profissional com conteúdo pessoal.',
    icon: 'Instagram',
  },
  {
    id: '2',
    title: 'Perdendo Clientes no WhatsApp',
    description: 'A demora para responder e a falta de profissionalismo no atendimento inicial custam contratos valiosos.',
    icon: 'MessageCircle',
  },
  {
    id: '3',
    title: 'Concorrência Desleal',
    description: 'Sem um site profissional, você é comparado apenas por preço, e não pelo valor da sua arte.',
    icon: 'TrendingDown',
  },
];

// ============================================
// BENEFÍCIOS
// ============================================

export const benefits: Benefit[] = [
  {
    id: '1',
    title: 'Autoridade Imediata',
    description: 'Um site premium transmite confiança instantânea e justifica orçamentos mais altos.',
    icon: 'Award',
  },
  {
    id: '2',
    title: 'Vendas Automáticas',
    description: 'Seu site apresenta, convence e até agenda clientes enquanto você está fotografando.',
    icon: 'Zap',
  },
  {
    id: '3',
    title: 'Encontrado no Google',
    description: 'Técnicas avançadas de SEO para que clientes te encontrem quando procurarem por fotógrafos na sua região.',
    icon: 'Search',
  },
  {
    id: '4',
    title: 'Experiência do Cliente',
    description: 'Entregue uma experiência digital à altura da qualidade das suas fotos.',
    icon: 'Smile',
  },
];
