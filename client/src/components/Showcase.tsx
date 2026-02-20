/**
 * Showcase - Seção de Exemplos de Portfólios
 * 
 * Componente que exibe exemplos de diferentes estilos de fotógrafos
 * para inspirar e demonstrar as possibilidades da landing page.
 * 
 * Design: Premium e moderno
 * - Cards com imagem e informações
 * - Botão "Ver Demo" para cada exemplo
 * - Animações suaves
 * - Responsivo
 */

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { showcaseExamples } from '@/data/showcase';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { getLanguageTexts } from '@/data/languages';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Showcase() {
  const { ref, controls } = useScrollReveal();
  const { theme } = useLanguageTheme();
  const texts = getLanguageTexts(useLanguageTheme().language);

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
      className={`section-gap ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F]'
          : 'bg-gradient-to-b from-[#F5F5F5] to-white'
      }`}
    >
      <div className="container">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16"
          ref={ref}
          animate={controls}
          variants={itemVariants as any}
        >
          <h2
            className={`text-heading-1 mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
            }`}
          >
            {texts.showcase.title}
          </h2>
          <p
            className={`text-body max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
            }`}
          >
            {texts.showcase.subtitle}
          </p>
        </motion.div>

        {/* Grid de Exemplos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
          animate={controls}
          variants={containerVariants as any}
        >
          {showcaseExamples.map((example) => (
            <motion.div
              key={example.id}
              className={`rounded-xl overflow-hidden group cursor-pointer ${
                theme === 'dark'
                  ? 'bg-[#2A2A2A] border border-[#3A3A3A]'
                  : 'bg-white border border-[#E5E5E5]'
              } hover:shadow-2xl transition-all duration-300`}
              variants={itemVariants as any}
              whileHover={{ y: -8 }}
            >
              {/* Imagem */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={example.imageUrl}
                  alt={example.photographerName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Overlay com informações */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {example.photographerName}
                  </h3>
                  <p className="text-white/90 text-sm">{example.description}</p>
                </div>

                {/* Badge de Estilo */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: example.colors.primary }}
                >
                  {example.style}
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3
                  className={`text-heading-3 mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
                  }`}
                >
                  {example.photographerName}
                </h3>
                <p
                  className={`text-body-sm mb-4 ${
                    theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
                  }`}
                >
                  {example.style}
                </p>

                {/* Botão Ver Demo */}
                <motion.div
                  className="inline-flex items-center gap-2 text-sm font-semibold cursor-pointer"
                  style={{ color: example.colors.primary }}
                  whileHover={{ x: 4 }}
                  onClick={() => (window.location.href = example.demoUrl)}
                >
                  {texts.showcase.viewDemo}
                  <ArrowRight size={16} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
