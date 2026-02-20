/**
 * BeforeAfter - Seção de Antes/Depois (Design Premium)
 * 
 * Componente que mostra a transformação e resultados reais
 * de fotógrafos que usaram a landing page
 */

import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { beforeAfterCases, transformationMetrics } from '@/data/beforeAfter';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { TrendingUp, Users, DollarSign, Zap } from 'lucide-react';

export default function BeforeAfter() {
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

  const metricIcons = [Users, TrendingUp, DollarSign, Zap];

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
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 bg-gradient-to-br from-[#D4AF37] to-[#B8860B]"
          animate={{ y: [0, 50, 0] }}
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
            <span className="text-sm font-semibold text-[#D4AF37]">Resultados Reais</span>
          </div>
          <h2
            className={`text-heading-1 mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
            }`}
          >
            Veja a Transformação
          </h2>
          <p
            className={`text-body max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
            }`}
          >
            Fotógrafos que usaram nossa landing page viram seus negócios crescer exponencialmente.
            Conheça histórias reais de sucesso.
          </p>
        </motion.div>

        {/* Métricas de Transformação */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          ref={ref}
          animate={controls}
          variants={containerVariants as any}
        >
          {transformationMetrics.map((metric, index) => {
            const IconComponent = metricIcons[index];

            return (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl text-center ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#3A3A3A]'
                    : 'bg-gradient-to-br from-white to-[#F5F5F5] border border-[#E5E5E5]'
                }`}
                variants={itemVariants as any}
                whileHover={{ y: -8 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/10">
                    <IconComponent size={32} className="text-[#D4AF37]" />
                  </div>
                </div>
                <p className="text-4xl font-bold text-[#D4AF37] mb-2">{metric.value}</p>
                <p
                  className={`font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
                  }`}
                >
                  {metric.metric}
                </p>
                <p
                  className={`text-body-sm ${
                    theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
                  }`}
                >
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Casos de Sucesso */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          ref={ref}
          animate={controls}
          variants={containerVariants as any}
        >
          {beforeAfterCases.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              className={`rounded-2xl overflow-hidden ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#3A3A3A]'
                  : 'bg-gradient-to-br from-white to-[#F5F5F5] border border-[#E5E5E5]'
              }`}
              variants={itemVariants as any}
              whileHover={{ y: -8 }}
            >
              <div className="p-8">
                {/* Cabeçalho do Caso */}
                <div className="mb-6">
                  <h3
                    className={`text-heading-2 font-bold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
                    }`}
                  >
                    {caseStudy.photographerName}
                  </h3>
                  <p className="text-body-sm text-[#D4AF37] font-semibold">
                    {caseStudy.location} • {caseStudy.specialty}
                  </p>
                </div>

                {/* Comparação Antes/Depois */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {/* Antes */}
                  <div
                    className={`p-4 rounded-xl ${
                      theme === 'dark'
                        ? 'bg-[#1A1A1A] border border-[#3A3A3A]'
                        : 'bg-white border border-[#E5E5E5]'
                    }`}
                  >
                    <p
                      className={`text-body-sm font-semibold mb-3 ${
                        theme === 'dark' ? 'text-[#999999]' : 'text-[#666666]'
                      }`}
                    >
                      ❌ ANTES
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p
                          className={`text-2xl font-bold ${
                            theme === 'dark' ? 'text-[#FF6B6B]' : 'text-[#FF6B6B]'
                          }`}
                        >
                          {caseStudy.beforeStats.leads}
                        </p>
                        <p
                          className={`text-body-sm ${
                            theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
                          }`}
                        >
                          leads/mês
                        </p>
                      </div>
                      <div>
                        <p
                          className={`text-lg font-bold ${
                            theme === 'dark' ? 'text-[#FF6B6B]' : 'text-[#FF6B6B]'
                          }`}
                        >
                          {caseStudy.beforeStats.conversionRate}%
                        </p>
                        <p
                          className={`text-body-sm ${
                            theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
                          }`}
                        >
                          conversão
                        </p>
                      </div>
                      <div>
                        <p
                          className={`text-lg font-bold ${
                            theme === 'dark' ? 'text-[#FF6B6B]' : 'text-[#FF6B6B]'
                          }`}
                        >
                          R$ {caseStudy.beforeStats.averageRevenue.toLocaleString()}
                        </p>
                        <p
                          className={`text-body-sm ${
                            theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
                          }`}
                        >
                          receita/mês
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Depois */}
                  <div
                    className={`p-4 rounded-xl ${
                      theme === 'dark'
                        ? 'bg-[#1A1A1A] border border-[#D4AF37]/30'
                        : 'bg-white border border-[#D4AF37]/30'
                    }`}
                  >
                    <p
                      className={`text-body-sm font-semibold mb-3 text-[#D4AF37]`}
                    >
                      ✅ DEPOIS
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="text-2xl font-bold text-[#D4AF37]">
                          {caseStudy.afterStats.leads}
                        </p>
                        <p
                          className={`text-body-sm ${
                            theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
                          }`}
                        >
                          leads/mês
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-[#D4AF37]">
                          {caseStudy.afterStats.conversionRate}%
                        </p>
                        <p
                          className={`text-body-sm ${
                            theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
                          }`}
                        >
                          conversão
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-[#D4AF37]">
                          R$ {caseStudy.afterStats.averageRevenue.toLocaleString()}
                        </p>
                        <p
                          className={`text-body-sm ${
                            theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
                          }`}
                        >
                          receita/mês
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resultado */}
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-[#D4AF37]/10 to-[#B8860B]/10 border border-[#D4AF37]/30">
                  <p className="text-center text-2xl font-bold text-[#D4AF37]">
                    {caseStudy.result}
                  </p>
                </div>

                {/* Depoimento */}
                <p
                  className={`text-body-sm italic ${
                    theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'
                  }`}
                >
                  "{caseStudy.testimonial}"
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
