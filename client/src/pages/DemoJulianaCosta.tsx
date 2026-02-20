import { demoPhotographers } from '@/data/demoPortfolios';
import DemoPage from '@/components/DemoPage';

export default function DemoJulianaCosta() {
  return <DemoPage photographer={demoPhotographers['juliana-costa']} />;
}
