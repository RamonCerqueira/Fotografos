import { demoPhotographers } from '@/data/demoPortfolios';
import DemoPage from '@/components/DemoPage';


export default function DemoMarinaSilva() {
  return <DemoPage photographer={demoPhotographers['marina-silva']} variant="minimalista" />;
}