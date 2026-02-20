/**
 * DemoPage - Componente para renderizar páginas de demo de fotógrafos
 * 
 * Renderiza uma página completa e profissional com dados customizados
 */

import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { DemoPhotographerData } from '@/data/demoPortfolios';
import { Button } from '@/components/ui/button';
import { Heart, Camera, Star, ArrowRight } from 'lucide-react';
import DemoHero from '@/components/DemoHero'
import HeroDemo from '@/components/HeroDemo';

type DemoVariant = 'minimalista' | 'classico' | 'moderno' | 'artistico' | 'corporativo' | 'criativo';

interface DemoPageProps {
  photographer: DemoPhotographerData;
  variant?: DemoVariant;
}

export default function DemoPage({ photographer, variant = 'moderno' }: DemoPageProps) {
  const { theme } = useLanguageTheme();
  const [, setLocation] = useLocation();

  const isMinimalist = variant === 'minimalista';
  const isClassic = variant === 'classico';
  const isModern = variant === 'moderno';
  const isArtistic = variant === 'artistico';
  const isCorporate = variant === 'corporativo';
  const isCreative = variant === 'criativo';

  const portfolioSectionBackground =
    variant === 'minimalista'
      ? theme === 'dark'
        ? 'bg-[#0F0F0F]'
        : 'bg-white'
      : variant === 'corporativo'
        ? theme === 'dark'
          ? 'bg-gradient-to-b from-[#050816] via-[#020617] to-[#020617]'
          : 'bg-gradient-to-b from-[#F5F7FB] via-white to-[#EEF2FF]'
        : variant === 'artistico'
          ? theme === 'dark'
            ? 'bg-gradient-to-br from-[#050505] via-[#111111] to-[#1A1A1A]'
            : 'bg-gradient-to-br from-[#FDF2FF] via-white to-[#E0ECFF]'
          : variant === 'criativo'
            ? theme === 'dark'
              ? 'bg-gradient-to-b from-[#020617] via-[#0F172A] to-[#020617]'
              : 'bg-gradient-to-b from-[#ECFEFF] via-[#F9F5FF] to-white'
            : theme === 'dark'
              ? 'bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F]'
              : 'bg-gradient-to-b from-[#F9F9F9] to-white';

  const servicesSectionBackground =
    variant === 'minimalista'
      ? theme === 'dark'
        ? 'bg-[#050505]'
        : 'bg-[#FAFAFA]'
      : variant === 'corporativo'
        ? theme === 'dark'
          ? 'bg-gradient-to-b from-[#020617] to-[#020617]'
          : 'bg-gradient-to-b from-white to-[#EFF6FF]'
        : theme === 'dark'
          ? 'bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]'
          : 'bg-gradient-to-b from-white to-[#F9F9F9]';

  const testimonialsSectionBackground =
    variant === 'artistico'
      ? theme === 'dark'
        ? 'bg-gradient-to-b from-[#1A1A1A] via-[#050505] to-[#0F0F0F]'
        : 'bg-gradient-to-b from-[#F9F5FF] via-white to-[#F9F9F9]'
      : variant === 'criativo'
        ? theme === 'dark'
          ? 'bg-gradient-to-b from-[#020617] via-[#0B1120] to-[#020617]'
          : 'bg-gradient-to-b from-[#FDF2FF] via-white to-[#EEF2FF]'
        : theme === 'dark'
          ? 'bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F]'
          : 'bg-gradient-to-b from-[#F9F9F9] to-white';

  const ctaSectionBorder =
    variant === 'minimalista'
      ? theme === 'dark'
        ? 'border-[#2A2A2A]'
        : 'border-[#E5E5E5]'
      : variant === 'corporativo'
        ? theme === 'dark'
          ? 'border-[#1F2937]'
          : 'border-[#CBD5F5]'
        : theme === 'dark'
          ? 'border-[#3A3A3A]'
          : 'border-[#E5E5E5]';

  const portfolioCardBase =
    theme === 'dark'
      ? 'bg-[#1A1A1A] border border-[#3A3A3A]'
      : 'bg-white border border-[#E5E5E5]';

  const portfolioCardVariant =
    isMinimalist
      ? 'rounded-xl shadow-sm hover:shadow-md'
      : isClassic
        ? 'rounded-3xl shadow-lg hover:shadow-2xl'
        : isArtistic
          ? 'rounded-3xl shadow-xl hover:-translate-y-3 hover:shadow-2xl'
          : isCorporate
            ? 'rounded-xl shadow-md hover:shadow-xl'
            : isCreative
              ? 'rounded-2xl shadow-lg hover:rotate-[-1deg]'
              : 'rounded-2xl shadow-lg';


  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0F0F0F] text-white' : 'bg-white text-[#1A1A1A]'}`}>
      {/* HERO */}
      {/* className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" */}
      <section >
            <DemoHero photographer={photographer} />
      </section>

      {/* PORTFOLIO */}
      <section className={`section-gap ${portfolioSectionBackground}`}>
        <div className="container">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h2 className="text-5xl font-bold mb-4">Portfólio</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'}`}>Trabalhos selecionados</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }}>
            {photographer.portfolio.map((item, index) => (
              <motion.div
                key={item.id}
                className={`rounded-2xl overflow-hidden group cursor-pointer ${theme === 'dark' ? 'bg-[#1A1A1A] border border-[#3A3A3A]' : 'bg-white border border-[#E5E5E5]'}`}
                onClick={() => setLocation(`/demo/${photographer.id}/album/${item.id}`)}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <Camera size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'}`}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={`section-gap ${theme === 'dark' ? 'bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]' : 'bg-gradient-to-b from-white to-[#F9F9F9]'}`}>
        <div className="container">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h2 className="text-5xl font-bold mb-4">Serviços</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'}`}>Opções personalizadas</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.15 }}>
            {photographer.services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-[#1A1A1A] border border-[#3A3A3A]' : 'bg-white border border-[#E5E5E5]'}`}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="mb-4 inline-block p-3 rounded-xl" style={{ backgroundColor: `${photographer.colors.primary}20` }}>
                  <Heart size={32} style={{ color: photographer.colors.primary }} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className={`mb-6 ${theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'}`}>{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: photographer.colors.primary }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={`section-gap ${theme === 'dark' ? 'bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F]' : 'bg-gradient-to-b from-[#F9F9F9] to-white'}`}>
        <div className="container">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h2 className="text-5xl font-bold mb-4">Depoimentos</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'}`}>O que nossos clientes dizem</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.15 }}>
            {photographer.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-[#1A1A1A] border border-[#3A3A3A]' : 'bg-white border border-[#E5E5E5]'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {testimonial.imageUrl && <img src={testimonial.imageUrl} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />}
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm" style={{ color: photographer.colors.primary }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-current" style={{ color: photographer.colors.primary }} />
                  ))}
                </div>
                <p className={`italic ${theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'}`}>"{testimonial.content}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className={`section-gap border-t ${theme === 'dark' ? 'border-[#3A3A3A]' : 'border-[#E5E5E5]'}`}
        style={{
          background: theme === 'dark' 
            ? `linear-gradient(135deg, ${photographer.colors.primary}10 0%, ${photographer.colors.accent}10 100%)`
            : `linear-gradient(135deg, ${photographer.colors.primary}10 0%, ${photographer.colors.accent}10 100%)`
        }}
      >
        <div className="container">
          <motion.div className="text-center max-w-3xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h2 className="text-5xl font-bold mb-6">Pronto para começar?</h2>
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'}`}>Entre em contato para conhecer melhor meu trabalho e discutir seu projeto.</p>
            <Button
              className="px-8 py-4 text-lg font-semibold rounded-lg text-white inline-flex items-center gap-2"
              style={{ background: `linear-gradient(135deg, ${photographer.colors.primary} 0%, ${photographer.colors.accent} 100%)` }}
            >
              Solicitar Orçamento
              <ArrowRight size={20} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`${theme === 'dark' ? 'bg-[#0F0F0F] border-t border-[#3A3A3A]' : 'bg-[#F9F9F9] border-t border-[#E5E5E5]'} py-12`}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">{photographer.name}</h4>
              <p className={`text-sm ${theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'}`}>{photographer.description}</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>📱 (XX) 9XXXX-XXXX</li>
                <li>📧 contato@fotografia.com</li>
                <li>📍 Brasil</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm">
                <li>📸 @fotografo</li>
                <li>💬 WhatsApp</li>
                <li>🔗 LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className={`border-t ${theme === 'dark' ? 'border-[#3A3A3A]' : 'border-[#E5E5E5]'} pt-8 text-center text-sm`}>
            <p className={theme === 'dark' ? 'text-[#999999]' : 'text-[#666666]'}>©2026 {photographer.name}. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
