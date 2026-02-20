/**
 * Pricing - Seção de Preços (Design Premium)
 * 
 * Componente que exibe 3 planos de preço com:
 * - Cards com destaque para o plano mais popular
 * - Features listadas com checkmarks
 * - Botões CTA
 * - Animações suaves
 */

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { pricingPlans } from '@/data/pricing';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { getLanguageTexts } from '@/data/languages';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function Pricing() {
  const { ref, controls } = useScrollReveal();
  const { theme } = useLanguageTheme();

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
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 bg-gradient-to-br from-[#D4AF37] to-[#B8860B]"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity }}
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
            <span className="text-sm font-semibold text-[#D4AF37]">Planos e Preços</span>
          </div>
          <h2
            className={`text-heading-1 mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
            }`}
          >
            Escolha o Plano Perfeito
          </h2>
          <p
            className={`text-body max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
            }`}
          >
            Planos flexíveis para fotógrafos de todos os tamanhos. Comece pequeno e escale conforme seu negócio cresce.
          </p>
        </motion.div>

        {/* Grid de Planos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          ref={ref}
          animate={controls}
          variants={containerVariants as any}
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? theme === 'dark'
                    ? 'bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 border-2 border-[#D4AF37] shadow-2xl'
                    : 'bg-gradient-to-br from-[#D4AF37]/10 to-[#B8860B]/5 border-2 border-[#D4AF37] shadow-2xl'
                  : theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#3A3A3A]'
                  : 'bg-gradient-to-br from-white to-[#F5F5F5] border border-[#E5E5E5]'
              }`}
              variants={itemVariants as any}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Badge "Mais Popular" */}
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="px-4 py-1 mt-8 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white text-xs font-bold"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🌟 MAIS POPULAR
                  </motion.div>
                </div>
              )}

              <div className={`p-8 ${plan.highlighted ? 'pt-12' : ''}`}>
                {/* Nome do Plano */}
                <h3
                  className={`text-heading-2 mb-2 font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Descrição */}
                <p
                  className={`text-body-sm mb-6 ${
                    theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
                  }`}
                >
                  {plan.description}
                </p>

                {/* Preço */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-[#D4AF37]">
                      {plan.currency}
                    </span>
                    <span className="text-5xl font-bold text-[#D4AF37]">
                      {plan.price}
                    </span>
                    <span
                      className={`text-body-sm ${
                        theme === 'dark' ? 'text-[#999999]' : 'text-[#666666]'
                      }`}
                    >
                      /total
                    </span>
                  </div>
                  <p
                    className={`text-body-sm mt-2 ${
                      theme === 'dark' ? 'text-[#999999]' : 'text-[#666666]'
                    }`}
                  >
                    pague com pix e ganhe 10% de desconto
                  </p>
                </div>

                {/* Botão CTA */}
                <motion.div
                  className="mb-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white hover:shadow-lg'
                        : theme === 'dark'
                        ? 'bg-[#1A1A1A] text-white border border-[#D4AF37] hover:bg-[#2A2A2A]'
                        : 'bg-white text-[#1A1A1A] border border-[#D4AF37] hover:bg-[#F5F5F5]'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>

                {/* Separador */}
                <div
                  className={`h-px mb-8 ${
                    theme === 'dark' ? 'bg-[#3A3A3A]' : 'bg-[#E5E5E5]'
                  }`}
                ></div>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Check size={20} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <span
                        className={`text-body-sm ${
                          theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#1A1A1A]'
                        }`}
                      >
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Nota de Rodapé */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p
            className={`text-body-sm ${
              theme === 'dark' ? 'text-[#999999]' : 'text-[#666666]'
            }`}
          >
            Todos os planos incluem suporte técnico, atualizações e garantia de satisfação de 30 dias.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
