/**
 * Demo Portfolios - Dados customizados para cada página de demonstração
 * 
 * Cada fotógrafo tem seu próprio portfólio, serviços e depoimentos
 */

import { PortfolioImage, Service, Testimonial } from '@/types/index';

export interface DemoPhotographerData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  specialty: string;
  portfolio: PortfolioImage[];
  services: Service[];
  testimonials: Testimonial[];
  heroImage?: string
  heroOverlayOpacity?: number
  colors: {
    primary: string;
    accent: string;
  };
}

export const demoPhotographers: Record<string, DemoPhotographerData> = {
  'marina-silva': {
    id: 'marina-silva',
    name: 'Marina Silva',
    tagline: 'Fotógrafa de Casamentos Profissional',
    description: 'Especializada em capturar os momentos mais emocionantes do seu casamento com elegância e sofisticação.',
    specialty: 'Casamentos',
    heroImage: '/BannerDemo/marina.jpg',
    colors: {
      primary: '#D4AF37',
      accent: '#1A1A1A',
    },
    portfolio: [
      {
        id: '1',
        title: 'Casamento Marina & João',
        category: 'casamentos',
        imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
        description: 'Um casamento elegante repleto de emoção e detalhes sofisticados.',
      },
      {
        id: '2',
        title: 'Casamento Ana & Carlos',
        category: 'casamentos',
        imageUrl: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
        description: 'Cerimônia ao ar livre com decoração minimalista e elegante.',
      },
      {
        id: '3',
        title: 'Casamento Sofia & Pedro',
        category: 'casamentos',
        imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
        description: 'Recepção intimista com momentos inesquecíveis capturados.',
      },
      // {
      //   id: '4',
      //   title: 'Casamento Lucia & Marco',
      //   category: 'casamentos',
      //   imageUrl: 'https://images.unsplash.com/photo-1606216174052-a76f1e57b2d1?w=600&h=400&fit=crop',
      //   description: 'Detalhes sofisticados e composições atemporais.',
      // },
    ],
    services: [
      {
        id: '1',
        title: 'Cobertura Completa',
        description: 'Cobertura do dia inteiro com 2 fotógrafas',
        icon: 'Camera',
        features: ['Preparação da noiva', 'Cerimônia completa', 'Recepção', 'Edição profissional'],
      },
      {
        id: '2',
        title: 'Ensaio Pré-Casamento',
        description: 'Sessão de fotos antes do grande dia',
        icon: 'Heart',
        features: ['Locação escolhida', '2 horas de sessão', '100+ fotos editadas', 'Álbum digital'],
      },
      {
        id: '3',
        title: 'Álbum Premium',
        description: 'Álbum físico de alta qualidade',
        icon: 'BookOpen',
        features: ['Impressão premium', 'Design personalizado', 'Encadernação luxo', 'Entrega em 30 dias'],
      },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Beatriz Costa',
        role: 'Noiva',
        content: 'Marina capturou cada momento especial do nosso casamento com perfeição. Profissionalismo impecável!',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      },
      {
        id: '2',
        name: 'Fernanda Oliveira',
        role: 'Noiva',
        content: 'As fotos são simplesmente lindas. Marina tem um olhar único para capturar emoções genuínas.',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      },
    ],
  },
  'carlos-mendes': {
    id: 'carlos-mendes',
    name: 'Carlos Mendes',
    tagline: 'Fotógrafo Corporativo & Eventos',
    description: 'Especializado em fotografia corporativa, eventos e cobertura profissional com estilo vibrante e moderno.',
    specialty: 'Corporativo',
    heroImage: '/BannerDemo/carlos.jpg',
    colors: {
      primary: '#FF6B6B',
      accent: '#4ECDC4',
    },
    portfolio: [
      {
        id: '1',
        title: 'Evento Corporativo Tech Summit',
        category: 'corporativo',
        imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
        description: 'Cobertura completa de conferência com 500+ participantes.',
      },
      {
        id: '2',
        title: 'Lançamento de Produto XYZ',
        category: 'corporativo',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        description: 'Evento de lançamento com cobertura profissional e dinâmica.',
      },
      {
        id: '3',
        title: 'Retrato Corporativo CEO',
        category: 'corporativo',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
        description: 'Retrato profissional de executivo para LinkedIn e materiais corporativos.',
      },
      // {
      //   id: '4',
      //   title: 'Conferência Anual2026',
      //   category: 'corporativo',
      //   imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      //   description: 'Cobertura de 3 dias de conferência com múltiplas palestras.',
      // },
    ],
    services: [
      {
        id: '1',
        title: 'Cobertura de Evento',
        description: 'Fotografia profissional para seu evento corporativo',
        icon: 'Camera',
        features: ['Múltiplos fotógrafos', 'Edição em tempo real', 'Entrega rápida', 'Galeria online'],
      },
      {
        id: '2',
        title: 'Retratos Corporativos',
        description: 'Fotos profissionais para LinkedIn e materiais',
        icon: 'User',
        features: ['Estúdio ou local', 'Múltiplas poses', 'Edição profissional', 'Alta resolução'],
      },
      {
        id: '3',
        title: 'Vídeo + Foto',
        description: 'Cobertura combinada de foto e vídeo',
        icon: 'Video',
        features: ['Vídeo 4K', 'Fotos em alta resolução', 'Edição profissional', 'Entrega em 1 semana'],
      },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Roberto Silva',
        role: 'Diretor de Marketing',
        content: 'Carlos é extremamente profissional. Nossas fotos corporativas ficaram incríveis!',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      },
      {
        id: '2',
        name: 'Mariana Santos',
        role: 'Gerente de Eventos',
        content: 'Trabalhar com Carlos foi uma experiência excelente. Recomendo muito!',
        rating: 5,
        imageUrl: './public/BannerDemo/juliana.jpg',
      },
    ],
  },
  'juliana-costa': {
    id: 'juliana-costa',
    name: 'Juliana Costa',
    tagline: 'Fotógrafa de Casal & Lifestyle',
    description: 'Especializada em capturar a essência do amor e momentos genuínos com atmosfera quente e aconchegante.',
    specialty: 'Casal',
    heroImage: '/BannerDemo/juliana.jpg',
    colors: {
      primary: '#FF9F1C',
      accent: '#2D3436',
    },
    portfolio: [
      {
        id: '1',
        title: 'Ensaio Casal Marina & João',
        category: 'casal',
        imageUrl: '/Portifolio/mariaejoao.jpg',
        description: 'Ensaio ao entardecer com atmosfera romântica e aconchegante.',
      },
      {
        id: '2',
        title: 'Lifestyle Family Session',
        category: 'casal',
        imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
        description: 'Sessão em família capturando momentos genuínos e naturais.',
      },
      {
        id: '3',
        title: 'Gestante Ensaio',
        category: 'casal',
        imageUrl: '/Portifolio/gestante.jpg',
        description: 'Ensaio gestante com celebração da maternidade.',
      },
      // {
      //   id: '4',
      //   title: 'Casal em Viagem',
      //   category: 'casal',
      //   imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
      //   description: 'Ensaio de casal em destino exótico com paisagens incríveis.',
      // },
    ],
    services: [
      {
        id: '1',
        title: 'Ensaio de Casal',
        description: 'Sessão fotográfica para casais apaixonados',
        icon: 'Heart',
        features: ['2 horas de sessão', 'Locação escolhida', '150+ fotos', 'Edição profissional'],
      },
      {
        id: '2',
        title: 'Lifestyle Session',
        description: 'Fotos do seu dia a dia com naturalidade',
        icon: 'Smile',
        features: ['Ambiente natural', 'Sem poses forçadas', 'Momentos genuínos', 'Edição natural'],
      },
      {
        id: '3',
        title: 'Ensaio Gestante',
        description: 'Celebre a maternidade com fotos lindas',
        icon: 'Baby',
        features: ['Estúdio confortável', 'Poses seguras', 'Edição delicada', 'Impressões incluídas'],
      },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Camila Ferreira',
        role: 'Noiva',
        content: 'Juliana tem um talento especial para capturar emoções genuínas. Nossas fotos são perfeitas!',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      },
      {
        id: '2',
        name: 'Gabriela Souza',
        role: 'Gestante',
        content: 'Meu ensaio gestante foi maravilhoso! Juliana fez eu me sentir confortável e linda.',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      },
    ],
  },
  'rafael-santos': {
    id: 'rafael-santos',
    name: 'Rafael Santos',
    tagline: 'Fotógrafo Artístico Premium',
    description: 'Fotografia artística com foco em composição, iluminação profissional e visão criativa única.',
    specialty: 'Artístico',
    heroImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=800&fit=crop',
    colors: {
      primary: '#9D4EDD',
      accent: '#3A86FF',
    },
    portfolio: [
      {
        id: '1',
        title: 'Série Urbana - Cores da Cidade',
        category: 'artistico',
        imageUrl: '/Portifolio/corcidade.jpg',
        description: 'Série de fotos artísticas capturando a essência urbana.',
      },
      // {
      //   id: '2',
      //   title: 'Retratos em Preto e Branco',
      //   category: 'artistico',
      //   imageUrl: '/BannerDemo/pb.jpg',
      //   description: 'Retratos artísticos com composição e iluminação profissional.',
      // },
      {
        id: '3',
        title: 'Natureza Abstrata',
        category: 'artistico',
        imageUrl: '/Portifolio/natureza.jpg',
        description: 'Série de fotos abstratas explorando formas e texturas.',
      },
      {
        id: '4',
        title: 'Luz e Sombra',
        category: 'artistico',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        description: 'Exploração de luz e sombra em composições criativas.',
      },
    ],
    services: [
      {
        id: '1',
        title: 'Sessão Artística',
        description: 'Fotos artísticas personalizadas com visão criativa',
        icon: 'Palette',
        features: ['Conceito único', 'Composição profissional', 'Edição artística', 'Impressão premium'],
      },
      {
        id: '2',
        title: 'Série Fotográfica',
        description: 'Série de fotos com tema coeso',
        icon: 'Grid',
        features: ['Tema personalizado', 'Múltiplas locações', 'Edição consistente', 'Portfólio completo'],
      },
      {
        id: '3',
        title: 'Consultoria Criativa',
        description: 'Consultoria para projetos fotográficos',
        icon: 'Lightbulb',
        features: ['Conceituação', 'Planejamento', 'Direção criativa', 'Acompanhamento'],
      },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Isabela Martins',
        role: 'Curadora de Arte',
        content: 'Rafael é um artista genuíno. Suas fotos transcendem a fotografia comum.',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      },
      {
        id: '2',
        name: 'Diego Rocha',
        role: 'Colecionador de Arte',
        content: 'Adquiri várias obras de Rafael. Sua visão artística é impressionante!',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      },
    ],
  },
  'beatriz-oliveira': {
    id: 'beatriz-oliveira',
    name: 'Beatriz Oliveira',
    tagline: 'Fotógrafa Contemporânea Minimalista',
    description: 'Fotografia contemporânea com estética minimalista, foco em geometria e composição limpa.',
    specialty: 'Minimalista',
    heroImage: '/BannerDemo/beatriz.jpg',
    colors: {
      primary: '#00B4D8',
      accent: '#0077B6',
    },
    portfolio: [
      {
        id: '1',
        title: 'Série Minimalista Urbana',
        category: 'minimalista',
        imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop',
        description: 'Série explorando linhas e formas em ambientes urbanos.',
      },
      {
        id: '2',
        title: 'Geometria e Cores',
        category: 'minimalista',
        imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&h=400&fit=crop',
        description: 'Composições geométricas com paleta de cores limitada.',
      },
      {
        id: '3',
        title: 'Espaço Negativo',
        category: 'minimalista',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        description: 'Fotos que exploram o poder do espaço vazio.',
      },
      // {
      //   id: '4',
      //   title: 'Minimalismo em Preto e Branco',
      //   category: 'minimalista',
      //   imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
      //   description: 'Série em preto e branco com composição limpa.',
      // },
    ],
    services: [
      {
        id: '1',
        title: 'Fotografia Minimalista',
        description: 'Fotos com estética minimalista e composição limpa',
        icon: 'Minimize2',
        features: ['Composição geométrica', 'Paleta limitada', 'Edição minimalista', 'Impressão premium'],
      },
      {
        id: '2',
        title: 'Retrato Contemporâneo',
        description: 'Retratos com abordagem contemporânea',
        icon: 'User',
        features: ['Estilo único', 'Composição criativa', 'Edição moderna', 'Alta qualidade'],
      },
      {
        id: '3',
        title: 'Projeto Personalizado',
        description: 'Projeto fotográfico customizado',
        icon: 'Briefcase',
        features: ['Conceito único', 'Múltiplas sessões', 'Edição profissional', 'Portfólio completo'],
      },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Lucas Alves',
        role: 'Designer',
        content: 'Beatriz tem uma visão minimalista impecável. Suas fotos são perfeitas para nossos projetos.',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      },
      {
        id: '2',
        name: 'Fernanda Gomes',
        role: 'Arquiteta',
        content: 'As fotos de Beatriz capturam a essência do minimalismo. Excelente trabalho!',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      },
    ],
  },
  'lucas-ferreira': {
    id: 'lucas-ferreira',
    name: 'Lucas Ferreira',
    tagline: 'Fotógrafo de Natureza e Aventura',
    description: 'Especializado em fotografia de natureza, viagens e aventura com composição épica e cores naturais.',
    specialty: 'Natureza',
    heroImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&h=800&fit=crop',
    colors: {
      primary: '#06A77D',
      accent: '#D62828',
    },
    portfolio: [
      {
        id: '1',
        title: 'Trilha na Montanha - Amanhecer',
        category: 'natureza',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        description: 'Amanhecer espetacular capturado em trilha de montanha.',
      },
      {
        id: '2',
        title: 'Floresta Amazônica',
        category: 'natureza',
        imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
        description: 'Exploração da biodiversidade amazônica através da fotografia.',
      },
      {
        id: '3',
        title: 'Praia Selvagem ao Pôr do Sol',
        category: 'natureza',
        imageUrl: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop',
        description: 'Praia intocada com pôr do sol espetacular.',
      },
      {
        id: '4',
        title: 'Vida Selvagem - Animais em Ação',
        category: 'natureza',
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop',
        description: 'Fotografia de vida selvagem em seu habitat natural.',
      },
    ],
    services: [
      {
        id: '1',
        title: 'Expedição Fotográfica',
        description: 'Expedição para capturar natureza selvagem',
        icon: 'Map',
        features: ['Destino escolhido', 'Múltiplos dias', 'Guia especializado', 'Edição profissional'],
      },
      {
        id: '2',
        title: 'Fotografia de Viagem',
        description: 'Cobertura fotográfica de sua viagem',
        icon: 'Plane',
        features: ['Múltiplos dias', 'Locações variadas', 'Edição completa', 'Álbum digital'],
      },
      {
        id: '3',
        title: 'Workshop Fotográfico',
        description: 'Workshop de fotografia de natureza',
        icon: 'BookOpen',
        features: ['Ensino prático', 'Locação natural', 'Mentoria individual', 'Certificado'],
      },
    ],
    testimonials: [
      {
        id: '1',
        name: 'Marcelo Dias',
        role: 'Aventureiro',
        content: 'Lucas capturou a essência de nossas aventuras. Fotos incríveis!',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      },
      {
        id: '2',
        name: 'Patricia Silva',
        role: 'Viajante',
        content: 'As fotos de Lucas fazem eu reviver cada momento da viagem. Perfeito!',
        rating: 5,
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      },
    ],
  },
};
