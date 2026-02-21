import { getDemoPhotographer } from '@/data/demoPortfolios';
import DemoPage from '@/components/DemoPage';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';

export default function DemoCarlosMendes() {
  const { language } = useLanguageTheme();
  const photographer = getDemoPhotographer('carlos-mendes', language);

  if (!photographer) return null;

  return <DemoPage photographer={photographer} variant="corporativo" />;
}
