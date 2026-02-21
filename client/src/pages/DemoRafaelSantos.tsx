import { getDemoPhotographer } from '@/data/demoPortfolios';
import DemoPage from '@/components/DemoPage';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';

export default function DemoRafaelSantos() {
  const { language } = useLanguageTheme();
  const photographer = getDemoPhotographer('rafael-santos', language);

  if (!photographer) return null;

  return <DemoPage photographer={photographer} variant="moderno" />;
}
