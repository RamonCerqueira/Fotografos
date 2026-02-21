import { getDemoPhotographer } from '@/data/demoPortfolios';
import { getLanguageTexts } from '@/data/languages';
import DemoPage from '@/components/DemoPage';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';

export default function DemoBeatrizOliveira() {
  const { language } = useLanguageTheme();
  const texts = getLanguageTexts(language);
  const photographer = getDemoPhotographer('beatriz-oliveira', language);

  if (!photographer) return null;

  return <DemoPage photographer={photographer} variant="criativo" />;
}
