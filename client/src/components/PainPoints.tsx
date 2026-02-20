/**
 * PainPoints - Seção de Pontos de Dor (Design Premium)
 * 
 * Componente refatorado com design muito mais moderno e premium:
 * - Gradientes sofisticados
 * - Cards com efeito de profundidade
 * - Animações suaves
 * - Tipografia elegante
 */

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { painPoints } from '@/data/portfolio';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { getLanguageTexts } from '@/data/languages';
import * as Icons from 'lucide-react';

export default function PainPoints() {
  const { ref, controls } = useScrollReveal();
  const { theme, language } = useLanguageTheme();
  const texts = getLanguageTexts(language);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      {/* Decoração de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            theme === 'dark' ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]'
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            theme === 'dark' ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]'
          }`}
        ></div>
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
            <span className="text-sm font-semibold text-[#D4AF37]">Desafios Reais</span>
          </div>
          <h2
            className={`text-heading-1 mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
            }`}
          >
            {texts.painPoints.title}
          </h2>
          <p
            className={`text-body max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
            }`}
          >
            {texts.painPoints.subtitle}
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          ref={ref}
          animate={controls}
          variants={containerVariants as any}
        >
          {painPoints.map((point, index) => {
            const IconComponent = Icons[point.icon as keyof typeof Icons] as React.ComponentType<any>;

            return (
              <motion.div
                key={point.id}
                className={`relative group p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#3A3A3A] hover:border-[#D4AF37]/50 hover:bg-gradient-to-br hover:from-[#2A2A2A] hover:to-[#1A1A1A]'
                    : 'bg-gradient-to-br from-white to-[#F5F5F5] border border-[#E5E5E5] hover:border-[#D4AF37]/50 hover:shadow-2xl'
                }`}
                variants={itemVariants as any}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Número do card */}
                <div className="absolute top-4 right-4 text-4xl font-bold opacity-10 text-[#D4AF37]">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Ícone com gradiente */}
                <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10 group-hover:from-[#D4AF37]/30 group-hover:to-[#D4AF37]/20 transition-all duration-300">
                  <IconComponent size={32} className="text-[#D4AF37]" />
                </div>

                {/* Título */}
                <h3
                  className={`text-heading-3 mb-3 font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
                  }`}
                >
                  {point.title}
                </h3>

                {/* Descrição */}
                <p
                  className={`text-body-sm leading-relaxed ${
                    theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
                  }`}
                >
                  {point.description}
                </p>

                {/* Linha decorativa ao hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent w-0 group-hover:w-full transition-all duration-300 rounded-full"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
