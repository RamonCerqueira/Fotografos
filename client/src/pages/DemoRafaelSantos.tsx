import { demoPhotographers } from '@/data/demoPortfolios';
import DemoPage from '@/components/DemoPage';


export default function DemoRafaelSantos() {
  return <DemoPage photographer={demoPhotographers['rafael-santos']} variant="moderno" />;
}