/**
 * Testimonials - Seção de Depoimentos (Design Premium)
 * 
 * Componente refatorado com design muito mais moderno e premium:
 * - Cards com gradientes sofisticados
 * - Animações suaves
 * - Efeito de profundidade
 * - Estrelas animadas
 */

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { testimonials } from '@/data/portfolio';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { getLanguageTexts } from '@/data/languages';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
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
          ? 'bg-gradient-to-b from-[#1A1A1A] via-[#0F0F0F] to-[#1A1A1A]'
          : 'bg-gradient-to-b from-[#F9F9F9] via-white to-[#F9F9F9]'
      }`}
    >
      {/* Decoração de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 bg-[#D4AF37]"
          animate={{ scale: [1, 1.2, 1] }}
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
            <span className="text-sm font-semibold text-[#D4AF37]">Prova Social</span>
          </div>
          <h2
            className={`text-heading-1 mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
            }`}
          >
            {texts.testimonials.title}
          </h2>
          <p
            className={`text-body max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
            }`}
          >
            {texts.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Grid de Depoimentos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          ref={ref}
          animate={controls}
          variants={containerVariants as any}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className={`group relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#3A3A3A] hover:border-[#D4AF37]/50'
                  : 'bg-gradient-to-br from-white to-[#F5F5F5] border border-[#E5E5E5] hover:border-[#D4AF37]/50 hover:shadow-2xl'
              }`}
              variants={itemVariants as any}
              whileHover={{ y: -8 }}
            >
              {/* Ícone de aspas */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote size={48} className="text-[#D4AF37]" />
              </div>

              {/* Avaliação em Estrelas */}
              <motion.div
                className="flex gap-1 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star size={16} className="fill-[#D4AF37] text-[#D4AF37]" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Conteúdo */}
              <p
                className={`text-body-sm mb-6 italic leading-relaxed relative z-10 ${
                  theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
                }`}
              >
                \"{testimonial.content}\"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-4 relative z-10">
                {testimonial.imageUrl && (
                  <motion.img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]/30"
                    whileHover={{ scale: 1.1 }}
                  />
                )}
                <div>
                  <p
                    className={`font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
                    }`}
                  >
                    {testimonial.name}
                  </p>
                  <p className="text-body-sm text-[#D4AF37]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
