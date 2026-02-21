import { getDemoPhotographer } from '@/data/demoPortfolios';
import DemoPage from '@/components/DemoPage';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';

export default function DemoMarinaSilva() {
  const { language } = useLanguageTheme();
  const photographer = getDemoPhotographer('marina-silva', language);

  if (!photographer) return null;

  return <DemoPage photographer={photographer} variant="minimalista" />;
}
