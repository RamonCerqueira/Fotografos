import { demoPhotographers } from '@/data/demoPortfolios';
import DemoPage from '@/components/DemoPage';


export default function DemoBeatrizOliveira() {
  return <DemoPage photographer={demoPhotographers['beatriz-oliveira']} variant="criativo" />;
}