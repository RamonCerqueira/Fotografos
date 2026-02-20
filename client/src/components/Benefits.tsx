/**
 * Benefits - Seção de Benefícios (Design Premium)
 * 
 * Componente refatorado com design muito mais moderno e premium:
 * - Gradientes sofisticados
 * - Cards com efeito de vidro (glassmorphism)
 * - Animações suaves
 * - Ícones com cores vibrantes
 */

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { benefits } from '@/data/portfolio';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { getLanguageTexts } from '@/data/languages';
import * as Icons from 'lucide-react';

export default function Benefits() {
  const { ref, controls } = useScrollReveal();
  const { theme, language } = useLanguageTheme();
  const texts = getLanguageTexts(language);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const gradientColors = [
    'from-blue-500/20 to-blue-600/20',
    'from-purple-500/20 to-purple-600/20',
    'from-pink-500/20 to-pink-600/20',
    'from-amber-500/20 to-amber-600/20',
  ];

  const iconColors = ['text-blue-500', 'text-purple-500', 'text-pink-500', 'text-amber-500'];

  return (
    <section
      className={`section-gap relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#1A1A1A] via-[#0F0F0F] to-[#1A1A1A]'
          : 'bg-gradient-to-b from-[#F9F9F9] via-white to-[#F9F9F9]'
      }`}
    >
      {/* Decoração de fundo com gradientes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-blue-500 to-purple-500"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 -left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-pink-500 to-amber-500"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="container relative z-10">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16"
          ref={ref}
          animate={controls}
          variants={itemVariants as any}
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30">
            <span className="text-sm font-semibold text-[#D4AF37]">Vantagens</span>
          </div>
          <h2
            className={`text-heading-1 mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
            }`}
          >
            {texts.benefits.title}
          </h2>
          <p
            className={`text-body max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
            }`}
          >
            {texts.benefits.subtitle}
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          ref={ref}
          animate={controls}
          variants={containerVariants as any}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<any>;

            return (
              <motion.div
                key={benefit.id}
                className={`group relative p-6 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
                  theme === 'dark'
                    ? `bg-gradient-to-br ${gradientColors[index % 4]} border border-white/10 hover:border-[#D4AF37]/50`
                    : `bg-gradient-to-br ${gradientColors[index % 4]} border border-white/40 hover:border-[#D4AF37]/50`
                }`}
                variants={itemVariants as any}
                whileHover={{ y: -12, scale: 1.05 }}
              >
                {/* Ícone */}
                <div className="mb-4 inline-flex p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <IconComponent size={28} className={iconColors[index % 4]} />
                </div>

                {/* Título */}
                <h3
                  className={`text-heading-3 mb-2 font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
                  }`}
                >
                  {benefit.title}
                </h3>

                {/* Descrição */}
                <p
                  className={`text-body-sm leading-relaxed ${
                    theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
                  }`}
                >
                  {benefit.description}
                </p>

                {/* Efeito de brilho ao hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-white/20 to-transparent"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
