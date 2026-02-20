/**
 * Dados de Preços - Planos de Landing Page
 * 
 * 3 planos diferentes para monetizar o template
 */

import { Check } from 'lucide-react';

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basico',
    name: 'Básico',
    price: 2500,
    currency: 'R$',
    description: 'Perfeito para começar',
    highlighted: false,
    features: [
      'Landing page responsiva',
      '5 seções personalizáveis',
      'Integração WhatsApp',
      'Tema claro/escuro',
      'Suporte por email',
      'Domínio próprio (não incluído)',
      'Analytics básico',
    ],
    cta: 'Começar Agora',
  },
  {
    id: 'profissional',
    name: 'Profissional',
    price: 3500,
    currency: 'R$',
    description: 'Mais recursos e suporte',
    highlighted: true,
    features: [
      'Tudo do plano Básico',
      'Todas as 10 seções',
      'Galeria de portfólio ilimitada',
      'Formulário de contato avançado',
      'Integração com email automático',
      'SEO otimizado',
      'Suporte prioritário',
      'Customização de cores avançada',
      '3 meses de suporte técnico',
    ],
    cta: 'Escolher Profissional',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 5000,
    currency: 'R$',
    description: 'Solução completa e profissional',
    highlighted: false,
    features: [
      'Tudo do plano Profissional',
      'Domínio personalizado (1 ano)',
      'Hospedagem incluída (1 ano)',
      'Integração com redes sociais',
      'Blog integrado',
      'Sistema de agendamento',
      'Suporte 24/7 por chat',
      'Atualizações automáticas',
      '12 meses de suporte técnico',
      'Consultoria de marketing',
    ],
    cta: 'Upgrade para Premium',
  },
];

export const pricingComparison = [
  {
    feature: 'Landing Page Responsiva',
    basico: true,
    profissional: true,
    premium: true,
  },
  {
    feature: 'Seções Personalizáveis',
    basico: '5',
    profissional: '10',
    premium: '10+',
  },
  {
    feature: 'Galeria de Portfólio',
    basico: 'Limitada',
    profissional: 'Ilimitada',
    premium: 'Ilimitada',
  },
  {
    feature: 'Integração WhatsApp',
    basico: true,
    profissional: true,
    premium: true,
  },
  {
    feature: 'Formulário de Contato',
    basico: 'Básico',
    profissional: 'Avançado',
    premium: 'Avançado',
  },
  {
    feature: 'Email Automático',
    basico: false,
    profissional: true,
    premium: true,
  },
  {
    feature: 'SEO Otimizado',
    basico: false,
    profissional: true,
    premium: true,
  },
  {
    feature: 'Tema Claro/Escuro',
    basico: true,
    profissional: true,
    premium: true,
  },
  {
    feature: 'Suporte Técnico',
    basico: 'Email',
    profissional: 'Prioritário',
    premium: '24/7',
  },
  {
    feature: 'Domínio Personalizado',
    basico: false,
    profissional: false,
    premium: '1 ano incluído',
  },
  {
    feature: 'Hospedagem',
    basico: false,
    profissional: false,
    premium: '1 ano incluído',
  },
  {
    feature: 'Blog Integrado',
    basico: false,
    profissional: false,
    premium: true,
  },
  {
    feature: 'Sistema de Agendamento',
    basico: false,
    profissional: false,
    premium: true,
  },
];
