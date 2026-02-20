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
    title: 'Ensaio Externo - Casal',
    description: 'Sessão de fotos ao pôr do sol',
    imageUrl: 'https://images.unsplash.com/photo-1606216174052-a76f1e57b2d1?w=600&h=600&fit=crop',
    category: 'casal',
    alt: 'Casal em ensaio fotográfico ao pôr do sol',
  },
  {
    id: '2',
    title: 'Casamento - Cerimônia',
    description: 'Momento solene da cerimônia',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop',
    category: 'casamentos',
    alt: 'Cerimônia de casamento',
  },
  {
    id: '3',
    title: 'Ensaio Profissional',
    description: 'Retrato corporativo elegante',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop',
    category: 'ensaios',
    alt: 'Retrato profissional',
  },
  {
    id: '4',
    title: 'Evento - Recepção',
    description: 'Momento de celebração',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=600&fit=crop',
    category: 'eventos',
    alt: 'Evento de celebração',
  },
  {
    id: '5',
    title: 'Ensaio Gestante',
    description: 'Momento especial da gravidez',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b2f?w=600&h=600&fit=crop',
    category: 'ensaios',
    alt: 'Ensaio gestante',
  },
  {
    id: '6',
    title: 'Casamento - Detalhes',
    description: 'Detalhes do dia especial',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop',
    category: 'casamentos',
    alt: 'Detalhes do casamento',
  },
  {
    id: '7',
    title: 'Ensaio em Casal',
    description: 'Conexão e emoção',
    imageUrl: 'https://images.unsplash.com/photo-1606216174052-a76f1e57b2d1?w=600&h=600&fit=crop',
    category: 'casal',
    alt: 'Ensaio em casal',
  },
  {
    id: '8',
    title: 'Evento Corporativo',
    description: 'Momento profissional',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=600&fit=crop',
    category: 'eventos',
    alt: 'Evento corporativo',
  },
];

// ============================================
// SERVIÇOS
// ============================================

export const services: Service[] = [
  {
    id: '1',
    title: 'Ensaios Externos',
    description: 'Sessões fotográficas em locais escolhidos, capturando momentos naturais e espontâneos.',
    icon: 'Camera',
    features: [
      'Locação escolhida',
      '1-2 horas de sessão',
      '100+ fotos editadas',
      'Entrega em alta resolução',
    ],
  },
  {
    id: '2',
    title: 'Casamentos',
    description: 'Cobertura completa do seu dia especial, de forma discreta e profissional.',
    icon: 'Heart',
    features: [
      'Cobertura full-day',
      'Cerimônia e recepção',
      '500+ fotos editadas',
      'Álbum premium incluído',
    ],
  },
  {
    id: '3',
    title: 'Eventos',
    description: 'Cobertura de eventos corporativos, festas e celebrações especiais.',
    icon: 'Sparkles',
    features: [
      'Cobertura por horas',
      'Múltiplos ambientes',
      'Edição profissional',
      'Entrega rápida',
    ],
  },
  {
    id: '4',
    title: 'Ensaios em Casal',
    description: 'Momentos íntimos e especiais para casais que querem eternizar seu amor.',
    icon: 'Users',
    features: [
      'Sessão de 2-3 horas',
      'Múltiplas locações',
      '150+ fotos editadas',
      'Álbum digital incluído',
    ],
  },
];

// ============================================
// DEPOIMENTOS
// ============================================

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marina Silva',
    role: 'Noiva',
    content:
      'Profissional excelente! Capturou cada momento do nosso casamento com perfeição. As fotos ficaram lindas e o atendimento foi impecável do início ao fim.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Carlos Mendes',
    role: 'Empresário',
    content:
      'Contratei para fotos corporativas e superou expectativas. Entendeu perfeitamente a identidade da marca e entregou imagens de qualidade profissional.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Juliana Costa',
    role: 'Casal',
    content:
      'Nosso ensaio de casal foi inesquecível! Criou um ambiente aconchegante e conseguiu capturar a nossa essência. Recomendo muito!',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

// ============================================
// PONTOS DE DOR
// ============================================

export const painPoints: PainPoint[] = [
  {
    id: '1',
    title: 'Clientes não encontram seu portfólio facilmente',
    description: 'Sem uma página profissional, potenciais clientes não conseguem ver seu trabalho de forma organizada.',
    icon: 'Search',
  },
  {
    id: '2',
    title: 'Instagram não organiza seus trabalhos',
    description: 'Redes sociais não permitem uma apresentação estruturada e profissional do seu portfólio.',
    icon: 'Grid',
  },
  {
    id: '3',
    title: 'Muitos pedem orçamento e desistem',
    description: 'Sem um processo claro de contato, muitos interessados não conseguem chegar até você.',
    icon: 'AlertCircle',
  },
];

// ============================================
// BENEFÍCIOS
// ============================================

export const benefits: Benefit[] = [
  {
    id: '1',
    title: 'Portfólio Organizado',
    description: 'Apresente seus trabalhos de forma profissional e estruturada em um único lugar.',
    icon: 'Layout',
  },
  {
    id: '2',
    title: 'Link Único para Enviar',
    description: 'Compartilhe um único link com clientes em potencial, WhatsApp, email ou redes sociais.',
    icon: 'Link',
  },
  {
    id: '3',
    title: 'Aparência Profissional',
    description: 'Transmita confiança e qualidade com um design premium e elegante.',
    icon: 'Sparkles',
  },
  {
    id: '4',
    title: 'Mais Pedidos de Orçamento',
    description: 'Facilite o contato e aumente conversões com formulário e WhatsApp integrados.',
    icon: 'TrendingUp',
  },
];
