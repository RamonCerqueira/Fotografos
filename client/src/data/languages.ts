/**
 * Sistema de Idiomas - Português, Inglês, Espanhol
 * Centralize todas as traduções aqui para fácil manutenção
 */

export type Language = 'pt' | 'en' | 'es';

export interface LanguageTexts {
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };

  // Pain Points Section
  painPoints: {
    title: string;
    subtitle: string;
  };

  // Benefits Section
  benefits: {
    title: string;
    subtitle: string;
  };

  // Portfolio Section
  portfolio: {
    title: string;
    subtitle: string;
    allWorks: string;
  };

  // Services Section
  services: {
    title: string;
    subtitle: string;
  };

  // Pricing Section
  pricing: {
    title: string;
    subtitle: string;
    popular: string;
    features: string;
    cta: string;
    discount: string;
    footerNote: string;
  };

  // Testimonials Section
  testimonials: {
    title: string;
    subtitle: string;
  };

  // Showcase Section
  showcase: {
    title: string;
    subtitle: string;
    viewDemo: string;
    photographer: string;
    style: string;
  };

  // CTA Section
  cta: {
    title: string;
    button: string;
  };

  // Contact Form Section
  contactForm: {
    title: string;
    subtitle: string;
    labels: {
      name: string;
      whatsapp: string;
      instagram: string;
      currentSite: string;
      message: string;
    };
    placeholders: {
      name: string;
      whatsapp: string;
      instagram: string;
      currentSite: string;
      message: string;
    };
    submit: string;
    success: string;
    error: string;
  };

  // Footer
  footer: {
    copyright: string;
    followUs: string;
  };

  // Navbar
  navbar: {
    selectLanguage: string;
    selectTheme: string;
  };

  // Service Types
  serviceTypes: {
    ensaios: string;
    casamentos: string;
    eventos: string;
    casal: string;
    outro: string;
  };
}

// Português
export const pt: LanguageTexts = {
  hero: {
    title: 'Seu Portfólio Fotográfico em Outro Nível',
    subtitle:
      'Transforme visitantes em clientes com uma Landing Page de alta conversão, moderna e otimizada para fotógrafos.',
    cta: 'Quero meu Site Profissional',
  },
  painPoints: {
    title: 'Você está perdendo clientes?',
    subtitle: 'Sem um site profissional, seu trabalho incrível pode estar passando despercebido.',
  },
  benefits: {
    title: 'Por que ter um Site Exclusivo?',
    subtitle: 'Destaque-se no mercado e valorize sua marca pessoal com uma presença digital forte.',
  },
  portfolio: {
    title: 'Projetos Desenvolvidos',
    subtitle: 'Veja como transformamos a presença digital de outros fotógrafos com sites incríveis.',
    allWorks: 'Ver Todos os Projetos',
  },
  services: {
    title: 'Soluções para Fotógrafos',
    subtitle: 'Ferramentas e serviços pensados para alavancar sua carreira.',
  },
  pricing: {
    title: 'Escolha o Plano Perfeito',
    subtitle: 'Planos flexíveis para fotógrafos de todos os tamanhos. Comece pequeno e escale conforme seu negócio cresce.',
    popular: 'Mais Popular',
    features: 'Recursos Inclusos',
    cta: 'Começar Agora',
    discount: 'Pague com PIX e ganhe 10% de desconto',
    footerNote: 'Todos os planos incluem suporte técnico, atualizações e garantia de satisfação de 30 dias.',
  },
  testimonials: {
    title: 'O que dizem os fotógrafos',
    subtitle: 'Histórias de quem já elevou seu nível profissional com nossos sites.',
  },
  showcase: {
    title: 'Modelos Disponíveis',
    subtitle: 'Escolha o design que mais combina com seu estilo fotográfico.',
    viewDemo: 'Ver Demonstração',
    photographer: 'Estilo',
    style: 'Categoria',
  },
  cta: {
    title: 'Pronto para profissionalizar sua presença online?',
    button: 'Falar no WhatsApp',
  },
  contactForm: {
    title: 'Solicite seu Orçamento',
    subtitle: 'Preencha o formulário abaixo para receber uma proposta personalizada para seu site.',
    labels: {
      name: 'Nome completo',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram (Opcional)',
      currentSite: 'Site Atual (Opcional)',
      message: 'Mensagem',
    },
    placeholders: {
      name: 'Seu nome',
      whatsapp: '(11) 99999-9999',
      instagram: '@seu.perfil',
      currentSite: 'www.seusite.com.br',
      message: 'Conte sobre seu projeto ou dúvida...',
    },
    submit: 'Enviar Solicitação',
    success: 'Solicitação enviada com sucesso! Em breve entraremos em contato.',
    error: 'Erro ao enviar. Por favor, tente novamente.',
  },
  footer: {
    copyright: '©2026 Todos os direitos reservados.',
    followUs: 'Redes Sociais',
  },
  navbar: {
    selectLanguage: 'Idioma',
    selectTheme: 'Tema',
  },
  serviceTypes: {
    ensaios: 'Landing Page Completa',
    casamentos: 'Portfólio Minimalista',
    eventos: 'Sistema de Agendamento',
    casal: 'Consultoria SEO',
    outro: 'Outro',
  },
};

// English
export const en: LanguageTexts = {
  hero: {
    title: 'More clients finding your work every day',
    subtitle:
      'A professional page that showcases your portfolio and transforms visitors into quote requests.',
    cta: 'Chat on WhatsApp',
  },
  painPoints: {
    title: 'You might be losing clients',
    subtitle: 'Discover the challenges photographers face',
  },
  benefits: {
    title: 'Benefits of a professional page',
    subtitle: 'Everything you need to grow',
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Your client decides in seconds if they trust you',
    allWorks: 'All works',
  },
  services: {
    title: 'Services',
    subtitle: 'We offer the best options for your special event',
  },
  pricing: {
    title: 'Choose the Perfect Plan',
    subtitle: 'Flexible plans for photographers of all sizes. Start small and scale as your business grows.',
    popular: 'Most Popular',
    features: 'Included Features',
    cta: 'Start Now',
  },
  testimonials: {
    title: 'Testimonials',
    subtitle: 'What our clients say',
  },
  showcase: {
    title: 'See Portfolio Examples',
    subtitle: 'Get inspired by different styles and page structures',
    viewDemo: 'View Demo',
    photographer: 'Photographer',
    style: 'Style',
  },
  cta: {
    title: 'Your story deserves to be recorded with professional quality',
    button: 'Request Quote',
  },
  contactForm: {
    title: 'Request Your Quote',
    subtitle: 'Fill out the form below and we will contact you',
    labels: {
      name: 'Full name',
      whatsapp: 'WhatsApp',
      ensaioType: 'Type of session',
      message: 'Message',
    },
    placeholders: {
      name: 'Your name',
      whatsapp: '(11) 99999-9999',
      message: 'Tell us a bit about your project...',
    },
    submit: 'Send Quote',
    success: 'Quote sent successfully!',
    error: 'Error sending quote. Try again.',
  },
  footer: {
    copyright: '©2026 All rights reserved.',
    followUs: 'Follow us',
  },
  navbar: {
    selectLanguage: 'Language',
    selectTheme: 'Theme',
  },
  serviceTypes: {
    ensaios: 'Sessions',
    casamentos: 'Weddings',
    eventos: 'Events',
    casal: 'Couple Sessions',
    outro: 'Other',
  },
};

// Español
export const es: LanguageTexts = {
  hero: {
    title: 'Más clientes encontrando tu trabajo cada día',
    subtitle:
      'Una página profesional que muestra tu portafolio y transforma visitantes en solicitudes de presupuesto.',
    cta: 'Chatear en WhatsApp',
  },
  painPoints: {
    title: 'Podrías estar perdiendo clientes',
    subtitle: 'Descubre los desafíos que enfrentan los fotógrafos',
  },
  benefits: {
    title: 'Beneficios de una página profesional',
    subtitle: 'Todo lo que necesitas para crecer',
  },
  portfolio: {
    title: 'Portafolio',
    subtitle: 'Tu cliente decide en segundos si confía en ti',
    allWorks: 'Todos los trabajos',
  },
  services: {
    title: 'Servicios',
    subtitle: 'Ofrecemos las mejores opciones para tu evento especial',
  },
  pricing: {
    title: 'Elige el Plan Perfecto',
    subtitle: 'Planes flexibles para fotógrafos de todos los tamaños. Empieza pequeño y escala a medida que tu negocio crece.',
    popular: 'Más Popular',
    features: 'Características Incluidas',
    cta: 'Empezar Ahora',
    discount: 'Paga con PIX y obtén 10% de descuento',
    footerNote: 'Todos los planes incluyen soporte técnico, actualizaciones y garantía de satisfacción de 30 días.',
  },
  testimonials: {
    title: 'Testimonios',
    subtitle: 'Lo que dicen nuestros clientes',
  },
  showcase: {
    title: 'Ver Ejemplos de Portafolios',
    subtitle: 'Inspírate con diferentes estilos y estructuras de páginas',
    viewDemo: 'Ver Demo',
    photographer: 'Fotógrafo',
    style: 'Estilo',
  },
  cta: {
    title: 'Tu historia merece ser registrada con calidad profesional',
    button: 'Solicitar Presupuesto',
  },
  contactForm: {
    title: 'Solicita tu Presupuesto',
    subtitle: 'Completa el formulario a continuación y nos pondremos en contacto',
    labels: {
      name: 'Nombre completo',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram (Opcional)',
      currentSite: 'Sitio Web Actual (Opcional)',
      message: 'Mensaje',
    },
    placeholders: {
      name: 'Tu nombre',
      whatsapp: '(11) 99999-9999',
      instagram: '@tu.perfil',
      currentSite: 'www.tusitioweb.com',
      message: 'Cuéntanos un poco sobre tu proyecto...',
    },
    submit: 'Enviar Presupuesto',
    success: '¡Presupuesto enviado con éxito!',
    error: 'Error al enviar presupuesto. Intenta de nuevo.',
  },
  footer: {
    copyright: '©2026 Todos los derechos reservados.',
    followUs: 'Síguenos',
  },
  navbar: {
    selectLanguage: 'Idioma',
    selectTheme: 'Tema',
  },
  serviceTypes: {
    ensaios: 'Sesiones',
    casamentos: 'Bodas',
    eventos: 'Eventos',
    casal: 'Sesiones de Pareja',
    outro: 'Otro',
  },
};

// Função para obter textos do idioma selecionado
export function getLanguageTexts(language: Language): LanguageTexts {
  switch (language) {
    case 'en':
      return en;
    case 'es':
      return es;
    case 'pt':
    default:
      return pt;
  }
}
