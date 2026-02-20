/**
 * Home - Página Principal
 * 
 * Página que integra todos os componentes da landing page
 * em uma sequência lógica de conversão.
 * 
 * Estrutura:
 * 1. Hero - Seção principal com impacto
 * 2. Showcase - Exemplos de portfólios
 * 3. PainPoints - Desafios do cliente
 * 4. Benefits - Benefícios da solução
 * 5. Portfolio - Galeria de trabalhos
 * 6. Services - Serviços oferecidos
 * 7. Testimonials - Depoimentos de clientes
 * 8. CTA - Chamada à ação
 * 9. ContactForm - Formulário de contato
 * 10. Footer - Rodapé com contatos
 * 11. WhatsAppButton - Botão flutuante
 */

import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import PainPoints from '@/components/PainPoints';
import Benefits from '@/components/Benefits';
import BeforeAfter from '@/components/BeforeAfter';
import Pricing from '@/components/Pricing';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  const { theme } = useLanguageTheme();

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === 'dark' ? 'bg-[#0F0F0F] text-white' : 'bg-white text-[#1A1A1A]'
      }`}
    >
      {/* Seção Hero */}
      <Hero />

      {/* Seção Showcase */}
      <Showcase />

      {/* Seção Pontos de Dor */}
      <PainPoints />

      {/* Seção Benefícios */}
      <Benefits />

      {/* Seção Antes/Depois */}
      <BeforeAfter />

      {/* Seção de Preços */}
      <Pricing />

      {/* Seção Portfólio */}
      <Portfolio />

      {/* Seção Serviços */}
      <Services />

      {/* Seção Depoimentos */}
      <Testimonials />

      {/* Seção CTA */}
      <CTA />

      {/* Seção Formulário de Contato */}
      <ContactForm />

      {/* Rodapé */}
      <Footer />

      {/* Botão WhatsApp Flutuante */}
      <WhatsAppButton />
    </div>
  );
}
