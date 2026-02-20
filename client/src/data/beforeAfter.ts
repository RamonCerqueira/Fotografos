/**
 * Dados de Antes/Depois - Transformação com Landing Page
 * 
 * Exemplos de como a landing page transforma o negócio do fotógrafo
 */

export interface BeforeAfterCase {
  id: string;
  photographerName: string;
  location: string;
  specialty: string;
  beforeStats: {
    leads: number;
    conversionRate: number;
    averageRevenue: number;
  };
  afterStats: {
    leads: number;
    conversionRate: number;
    averageRevenue: number;
  };
  testimonial: string;
  result: string;
}

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: '1',
    photographerName: 'Marina Silva',
    location: 'São Paulo, SP',
    specialty: 'Fotografia de Casamentos',
    beforeStats: {
      leads: 2,
      conversionRate: 25,
      averageRevenue: 2000,
    },
    afterStats: {
      leads: 15,
      conversionRate: 60,
      averageRevenue: 18000,
    },
    testimonial:
      'Meu negócio cresceu 9x em 3 meses! A landing page transformou meu portfólio em vendas reais. Agora recebo leads qualificados todos os dias.',
    result: '+650% em receita mensal',
  },
  {
    id: '2',
    photographerName: 'Carlos Mendes',
    location: 'Rio de Janeiro, RJ',
    specialty: 'Fotografia Corporativa',
    beforeStats: {
      leads: 1,
      conversionRate: 20,
      averageRevenue: 1500,
    },
    afterStats: {
      leads: 12,
      conversionRate: 55,
      averageRevenue: 15000,
    },
    testimonial:
      'Profissionais de empresas grandes agora me encontram facilmente. A página profissional me posicionou como referência no mercado corporativo.',
    result: '+900% em receita mensal',
  },
  {
    id: '3',
    photographerName: 'Juliana Costa',
    location: 'Belo Horizonte, MG',
    specialty: 'Fotografia de Casal',
    beforeStats: {
      leads: 3,
      conversionRate: 30,
      averageRevenue: 2500,
    },
    afterStats: {
      leads: 18,
      conversionRate: 65,
      averageRevenue: 19500,
    },
    testimonial:
      'Casais agora me escolhem por causa da página! Meu portfólio antes estava no Instagram, mas a landing page fez toda a diferença na credibilidade.',
    result: '+680% em receita mensal',
  },
  {
    id: '4',
    photographerName: 'Rafael Santos',
    location: 'Curitiba, PR',
    specialty: 'Fotografia Artística',
    beforeStats: {
      leads: 2,
      conversionRate: 35,
      averageRevenue: 3000,
    },
    afterStats: {
      leads: 14,
      conversionRate: 70,
      averageRevenue: 21000,
    },
    testimonial:
      'Meu trabalho artístico finalmente tem a apresentação que merecia. Clientes premium agora me procuram especificamente pela página.',
    result: '+600% em receita mensal',
  },
];

export const transformationMetrics = [
  {
    metric: 'Aumento Médio de Leads',
    value: '+520%',
    description: 'Fotógrafos recebem em média 5x mais leads qualificados',
  },
  {
    metric: 'Taxa de Conversão',
    value: '+58%',
    description: 'Visitantes se tornam clientes com mais frequência',
  },
  {
    metric: 'Aumento de Receita',
    value: '+680%',
    description: 'Receita mensal média aumenta significativamente',
  },
  {
    metric: 'Tempo para ROI',
    value: '2-3 meses',
    description: 'Retorno do investimento em poucos meses',
  },
];
