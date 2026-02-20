/**
 * CTA - Chamada à Ação (Design Premium)
 * 
 * Componente refatorado com design muito mais moderno e premium:
 * - Gradientes sofisticados
 * - Animações suaves
 * - Efeito de profundidade
 * - Tipografia elegante
 */

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { getLanguageTexts } from '@/data/languages';
import { pageConfig } from '@/data/config';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const { ref, controls } = useScrollReveal();
  const { theme, language } = useLanguageTheme();
  const texts = getLanguageTexts(language);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      className={`section-gap relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F]'
          : 'bg-gradient-to-b from-white via-[#F9F9F9] to-white'
      }`}
    >
      {/* Decoração de fundo com gradientes animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-[#D4AF37] to-[#B8860B]"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          ref={ref}
          animate={controls}
          variants={containerVariants as any}
        >
          {/* Badge */}
          <motion.div
            className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30"
            variants={itemVariants as any}
          >
            <span className="text-sm font-semibold text-[#D4AF37]">Próximo Passo</span>
          </motion.div>

          {/* Título */}
          <motion.h2
            className={`text-display mb-8 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
            }`}
            variants={itemVariants as any}
          >
            {texts.cta.title}
          </motion.h2>

          {/* Descrição opcional */}
          <motion.p
            className={`text-body mb-8 max-w-xl mx-auto ${
              theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
            }`}
            variants={itemVariants as any}
          >
            Transforme seu portfólio em vendas. Comece agora mesmo com uma página profissional.
          </motion.p>

          {/* Botão CTA */}
          <motion.div variants={itemVariants as any}>
            <a href={pageConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <motion.button
                className="inline-flex items-center gap-3 px-12 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {texts.cta.button}
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.button>
            </a>
          </motion.div>

          {/* Elemento decorativo */}
          <motion.div
            className="mt-12 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div
              className={`h-1 w-12 rounded-full ${
                theme === 'dark' ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]'
              }`}
            ></div>
            <div
              className={`h-1 w-12 rounded-full ${
                theme === 'dark' ? 'bg-[#D4AF37]/50' : 'bg-[#D4AF37]/50'
              }`}
            ></div>
            <div
              className={`h-1 w-12 rounded-full ${
                theme === 'dark' ? 'bg-[#D4AF37]/25' : 'bg-[#D4AF37]/25'
              }`}
            ></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
