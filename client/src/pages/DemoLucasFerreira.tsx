import { getDemoPhotographer } from '@/data/demoPortfolios';
import DemoPage from '@/components/DemoPage';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';

export default function DemoLucasFerreira() {
  const { language } = useLanguageTheme();
  const photographer = getDemoPhotographer('lucas-ferreira', language);
  
  if (!photographer) return null;

  return <DemoPage photographer={photographer} variant="classico" />;
}
