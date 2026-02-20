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
      ensaioType: string;
      message: string;
    };
    placeholders: {
      name: string;
      whatsapp: string;
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
    title: 'Mais clientes encontrando seu trabalho todos os dias',
    subtitle:
      'Uma página profissional que mostra seu portfólio e transforma visitantes em pedidos de orçamento.',
    cta: 'Falar no WhatsApp',
  },
  painPoints: {
    title: 'Você pode estar perdendo clientes',
    subtitle: 'Descubra os desafios que fotógrafos enfrentam',
  },
  benefits: {
    title: 'Benefícios de uma página profissional',
    subtitle: 'Tudo que você precisa para crescer',
  },
  portfolio: {
    title: 'Portfólio',
    subtitle: 'Seu cliente decide em segundos se vai confiar em você',
    allWorks: 'Todos os trabalhos',
  },
  services: {
    title: 'Serviços',
    subtitle: 'Oferecemos as melhores opções para seu evento especial',
  },
  testimonials: {
    title: 'Depoimentos',
    subtitle: 'O que nossos clientes dizem',
  },
  showcase: {
    title: 'Veja Exemplos de Portfólios',
    subtitle: 'Inspire-se com diferentes estilos e estruturas de páginas',
    viewDemo: 'Ver Demo',
    photographer: 'Fotógrafo',
    style: 'Estilo',
  },
  cta: {
    title: 'Sua história merece ser registrada com qualidade profissional',
    button: 'Solicitar Orçamento',
  },
  contactForm: {
    title: 'Solicite seu Orçamento',
    subtitle: 'Preencha o formulário abaixo e entraremos em contato',
    labels: {
      name: 'Nome completo',
      whatsapp: 'WhatsApp',
      ensaioType: 'Tipo de ensaio',
      message: 'Mensagem',
    },
    placeholders: {
      name: 'Seu nome',
      whatsapp: '(11) 99999-9999',
      message: 'Conte um pouco sobre seu projeto...',
    },
    submit: 'Enviar Orçamento',
    success: 'Orçamento enviado com sucesso!',
    error: 'Erro ao enviar orçamento. Tente novamente.',
  },
  footer: {
    copyright: '©2026 Todos os direitos reservados.',
    followUs: 'Siga-nos',
  },
  navbar: {
    selectLanguage: 'Idioma',
    selectTheme: 'Tema',
  },
  serviceTypes: {
    ensaios: 'Ensaios',
    casamentos: 'Casamentos',
    eventos: 'Eventos',
    casal: 'Ensaios em Casal',
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
      ensaioType: 'Tipo de sesión',
      message: 'Mensaje',
    },
    placeholders: {
      name: 'Tu nombre',
      whatsapp: '(11) 99999-9999',
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
