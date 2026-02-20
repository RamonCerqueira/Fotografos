/**
 * Configurações da Landing Page
 * Centralize todas as informações de contato e configuração aqui
 * Fácil de modificar para diferentes fotógrafos
 */

import type { PageConfig } from '@/types';

export const pageConfig: PageConfig = {
  photographerName: 'Ramon Cerqueira',
  tagline: 'Desenvolvedor Web Profissional',
  description: 'Transformando momentos em memórias eternas',
  contact: {
    whatsappUrl: 'https://wa.me/5571981270742',
    whatsappNumber: '(71) 98127-0742',
    email: 'ramonssa100@gmail.com',
    instagramHandle: '@rc_devweb',
  },
};

/**
 * Textos da página
 * Centralize todos os textos para facilitar tradução e customização
 */
export const pageTexts = {
  // Hero Section
  hero: {
    title: 'Mais clientes encontrando seu trabalho todos os dias',
    subtitle:
      'Uma página profissional que mostra seu portfólio e transforma visitantes em pedidos de orçamento.',
    cta: 'Falar no WhatsApp',
  },

  // Pain Points Section
  painPoints: {
    title: 'Você pode estar perdendo clientes',
    subtitle: 'Descubra os desafios que fotógrafos enfrentam',
  },

  // Benefits Section
  benefits: {
    title: 'Benefícios de uma página profissional',
    subtitle: 'Tudo que você precisa para crescer',
  },

  // Portfolio Section
  portfolio: {
    title: 'Portfólio',
    subtitle: 'Seu cliente decide em segundos se vai confiar em você',
    allWorks: 'Todos os trabalhos',
  },

  // Services Section
  services: {
    title: 'Serviços',
    subtitle: 'Oferecemos as melhores opções para seu evento especial',
  },

  // Testimonials Section
  testimonials: {
    title: 'Depoimentos',
    subtitle: 'O que nossos clientes dizem',
  },

  // CTA Section
  cta: {
    title: 'Sua história merece ser registrada com qualidade profissional',
    button: 'Solicitar Orçamento',
  },

  // Contact Form Section
  contactForm: {
    title: 'Solicite seu Orçamento',
    subtitle: 'Preencha o formulário abaixo e entraremos em contato',
    labels: {
      name: 'Nome completo',
      whatsapp: 'WhatsApp',
      plan: 'Plano Escolhido (Opcional)',
      layoutModel: 'Modelo de Layout (Opcional)',
      message: 'Mensagem',
    },
    placeholders: {
      name: 'Seu nome',
      whatsapp: '(11) 99999-9999',
      plan: 'Ex: Premium, Básico...',
      layoutModel: 'Ex: Rafael Santos, Beatriz Oliveira...',
      message: 'Conte um pouco sobre seu projeto...',
    },
    submit: 'Enviar Orçamento',
    success: 'Orçamento enviado com sucesso!',
    error: 'Erro ao enviar orçamento. Tente novamente.',
  },

  // Footer
  footer: {
    copyright: '© 2026 Todos os direitos reservados.',
    followUs: 'Siga-nos',
  },
};
