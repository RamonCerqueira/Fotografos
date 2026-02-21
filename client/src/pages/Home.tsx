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
import { getLanguageTexts } from '@/data/languages';
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
import { SEO } from '@/components/SEO';

export default function Home() {
  const { theme, language } = useLanguageTheme();
  const texts = getLanguageTexts(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Sistema de Landing Page para Fotógrafos",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock"
    },
    "description": texts.hero.description,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "120"
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0F0F0F] text-white' : 'bg-white text-[#1A1A1A]'} transition-colors duration-500`}>
      <SEO 
        title="Site para Fotógrafos | Crie seu Portfólio Profissional"
        description="Sistema completo para fotógrafos. Tenha um site profissional, galeria de fotos e aumente seus orçamentos com landing pages de alta conversão."
        keywords="site para fotografo, landing page fotografia, portfolio online, sistema para fotógrafos, marketing para fotógrafos, vendas fotografia, criador de site fotografia"
        image="/social-images/00-overview-desktop.png"
        structuredData={structuredData}
      />
      
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
