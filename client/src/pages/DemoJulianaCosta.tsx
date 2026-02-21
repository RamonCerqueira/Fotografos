import { getDemoPhotographer } from '@/data/demoPortfolios';
import DemoPage from '@/components/DemoPage';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';

export default function DemoJulianaCosta() {
  const { language } = useLanguageTheme();
  const photographer = getDemoPhotographer('juliana-costa', language);

  if (!photographer) return null;

  return <DemoPage photographer={photographer} variant="artistico" />;
}
