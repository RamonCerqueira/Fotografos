/**
 * Dados de Showcase - Exemplos de Portfólios
 * 
 * Array com exemplos de diferentes estilos de fotógrafos
 * para inspirar e demonstrar as possibilidades da landing page
 */

export interface ShowcaseExample {
  id: string;
  photographerName: string;
  style: string;
  description: string;
  imageUrl: string;
  demoUrl: string; // URL para demo interativa
  colors: {
    primary: string;
    accent: string;
  };
}

export const showcaseExamples: ShowcaseExample[] = [
  {
    id: '1',
    photographerName: 'Marina Silva',
    style: 'Minimalista Elegante',
    description: 'Fotografia de casamentos com foco em momentos emocionantes e detalhes sofisticados.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    demoUrl: '/demo/marina-silva',
    colors: {
      primary: '#D4AF37',
      accent: '#1A1A1A',
    },
  },
  {
    id: '2',
    photographerName: 'Carlos Mendes',
    style: 'Moderno Vibrante',
    description: 'Fotografia corporativa e de eventos com cores vibrantes e composição dinâmica.',
    imageUrl: '/BannerDemo/carlos.jpg',
    demoUrl: '/demo/carlos-mendes',
    colors: {
      primary: '#FF6B6B',
      accent: '#4ECDC4',
    },
  },
  {
    id: '3',
    photographerName: 'Juliana Costa',
    style: 'Lifestyle Aconchegante',
    description: 'Fotografia de casal e lifestyle com atmosfera quente e aconchegante.',
    imageUrl: '/BannerDemo/juliana.jpg',
    demoUrl: '/demo/juliana-costa',
    colors: {
      primary: '#FF9F1C',
      accent: '#2D3436',
    },
  },
  {
    id: '4',
    photographerName: 'Rafael Santos',
    style: 'Artístico Premium',
    description: 'Fotografia artística com foco em composição e iluminação profissional.',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop',
    demoUrl: '/demo/rafael-santos',
    colors: {
      primary: '#9D4EDD',
      accent: '#3A86FF',
    },
  },
  {
    id: '5',
    photographerName: 'Beatriz Oliveira',
    style: 'Contemporâneo Minimalista',
    description: 'Fotografia contemporânea com estética minimalista e foco em geometria.',
    imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop',
    demoUrl: '/demo/beatriz-oliveira',
    colors: {
      primary: '#00B4D8',
      accent: '#0077B6',
    },
  },
  {
    id: '6',
    photographerName: 'Lucas Ferreira',
    style: 'Natureza e Aventura',
    description: 'Fotografia de natureza, viagens e aventura com cores naturais e composição épica.',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    demoUrl: '/demo/lucas-ferreira',
    colors: {
      primary: '#06A77D',
      accent: '#D62828',
    },
  },
];
