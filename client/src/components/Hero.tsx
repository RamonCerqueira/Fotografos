/**
 * Hero Section - Seção Principal
 * 
 * Componente que exibe a seção principal da página com:
 * - Imagem de fundo grande
 * - Overlay escuro elegante
 * - Título e subtítulo impactantes
 * - Botão CTA para WhatsApp
 * - Animações suaves com framer-motion
 * 
 * Design: Minimalismo Elegante
 * - Fundo branco com imagem de destaque
 * - Tipografia grande e clara
 * - Espaçamento generoso
 * - Animações de entrada suave
 */

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { pageConfig } from '@/data/config';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { getLanguageTexts } from '@/data/languages';

export default function Hero() {
  const { language, theme } = useLanguageTheme();
  const texts = getLanguageTexts(language);

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${
      theme === 'dark' ? 'bg-[#0F0F0F]' : 'bg-white'
    }`}>
      {/* Background Image com Overlay */}
      <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
style={{
  backgroundImage: "url('/hero/banner.jpg')",
}}
        // className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // style={{
        //   backgroundImage:
        //     'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=800&fit=crop)',
        // }}
      >
        {/* Overlay escuro elegante */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Conteúdo */}
      <motion.div
        className="relative z-10 container flex flex-col items-center justify-center text-center py-20 md:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Título Principal */}
        <motion.h1
          className="text-display text-white mb-6 max-w-4xl"
          variants={itemVariants as any}
        >
          {texts.hero.title}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-body text-white/90 mb-8 max-w-2xl"
          variants={itemVariants as any}
        >
          {texts.hero.subtitle}
        </motion.p>

        {/* Botão CTA */}
        <motion.div variants={itemVariants as any}>
          <a href={pageConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="button-primary text-lg px-10 py-6 hover:shadow-lg transition-all duration-300"
            >
              {texts.hero.cta}
            </Button>
          </a>
        </motion.div>

        {/* Seta para scroll */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
