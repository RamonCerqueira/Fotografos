import { demoPhotographers } from '@/data/demoPortfolios';
import DemoPage from '@/components/DemoPage';


export default function DemoLucasFerreira() {
  return <DemoPage photographer={demoPhotographers['lucas-ferreira']} variant="classico" />;
}