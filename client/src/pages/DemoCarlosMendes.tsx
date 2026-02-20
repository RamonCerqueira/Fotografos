import { demoPhotographers } from '@/data/demoPortfolios';
import DemoPage from '@/components/DemoPage';


export default function DemoCarlosMendes() {
  return <DemoPage photographer={demoPhotographers['carlos-mendes']} variant="corporativo" />;
}