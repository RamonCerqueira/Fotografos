/**
 * Demo Portfolios - Dados customizados para cada página de demonstração
 * 
 * Cada fotógrafo tem seu próprio portfólio, serviços e depoimentos
 */

import { DemoPhotographerData } from '@/types/index';
import { demoPhotographersPt } from './demoPortfoliosPt';
import { demoPhotographersEn } from './demoPortfoliosEn';
import { demoPhotographersEs } from './demoPortfoliosEs';

export type { DemoPhotographerData };

/**
 * Obtém os dados do fotógrafo de demonstração no idioma selecionado
 */
export const getDemoPhotographer = (id: string, language: string = 'pt'): DemoPhotographerData | undefined => {
  const lang = language.toLowerCase();
  
  let data: Record<string, DemoPhotographerData>;
  
  if (lang.startsWith('en')) {
    data = demoPhotographersEn;
  } else if (lang.startsWith('es')) {
    data = demoPhotographersEs;
  } else {
    data = demoPhotographersPt;
  }
  
  return data[id];
};

// Mantém compatibilidade com código legado (padrão em Português)
export const demoPhotographers = demoPhotographersPt;
