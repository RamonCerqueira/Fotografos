/**
 * HeroDemo - Seção Hero Customizável para Páginas de Demo
 * 
 * Componente que exibe o Hero com dados customizados do fotógrafo
 */

import { motion } from 'framer-motion';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { DemoPhotographerData } from '@/data/demoPortfolios';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface HeroDemoProps {
  photographer: DemoPhotographerData;
}

export default function HeroDemo({ photographer }: HeroDemoProps) {
  const { theme } = useLanguageTheme();

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
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F]'
          : 'bg-gradient-to-br from-white via-[#F9F9F9] to-white'
      }`}
    >
      {/* Decoração de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: photographer.colors.primary }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: photographer.colors.accent }}
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants as any}
          initial="hidden"
          animate="visible"
        >
          {/* Logo/Iniciais */}
          <motion.div
            className="mb-8 inline-block"
            variants={itemVariants as any}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold"
              style={{ backgroundColor: photographer.colors.primary }}
            >
              {photographer.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
          </motion.div>

          {/* Nome */}
          <motion.h1
            className={`text-5xl md:text-7xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
            }`}
            variants={itemVariants as any}
          >
            {photographer.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-2xl md:text-3xl font-semibold mb-6"
            style={{ color: photographer.colors.primary }}
            variants={itemVariants as any}
          >
            {photographer.tagline}
          </motion.p>

          {/* Descrição */}
          <motion.p
            className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
            }`}
            variants={itemVariants as any}
          >
            {photographer.description}
          </motion.p>

          {/* Especialidade */}
          <motion.div
            className="mb-12 inline-block"
            variants={itemVariants as any}
          >
            <div
              className="px-6 py-3 rounded-full text-white font-semibold"
              style={{
                backgroundColor: photographer.colors.primary,
              }}
            >
              Especialista em {photographer.specialty}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={itemVariants as any}
          >
            <Button
              className="px-8 py-4 text-lg font-semibold rounded-lg text-white"
              style={{
                backgroundColor: photographer.colors.primary,
              }}
            >
              Ver Portfólio
            </Button>
            <Button
              className={`px-8 py-4 text-lg font-semibold rounded-lg border-2 ${
                theme === 'dark'
                  ? 'bg-transparent text-white'
                  : 'bg-transparent text-[#1A1A1A]'
              }`}
              style={{
                borderColor: photographer.colors.primary,
                color: photographer.colors.primary,
              }}
            >
              Solicitar Orçamento
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            variants={itemVariants as any}
          >
            <ChevronDown
              size={32}
              style={{ color: photographer.colors.primary }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
