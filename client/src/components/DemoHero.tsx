'use client'

/**
 * DemoHero
 * Hero reutilizável para páginas demo de fotógrafos
 * - Background dinâmico
 * - Overlay configurável
 * - Animações suaves
 */

import { motion } from 'framer-motion'
import { useLanguageTheme } from '@/contexts/LanguageThemeContext'
import { Button } from '@/components/ui/button'
import { DemoPhotographerData } from '@/data/demoPortfolios'

interface DemoHeroProps {
  photographer: DemoPhotographerData
}

export default function DemoHero({ photographer }: DemoHeroProps) {
  const { theme } = useLanguageTheme()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Background Image */}
      {photographer.heroImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${photographer.heroImage})`,
          }}
        />
      )}

      {/* Overlay para contraste */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          opacity: photographer.heroOverlayOpacity ?? 0.6,
        }}
      />

      {/* Efeitos animados com cores do fotógrafo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: photographer.colors.primary }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: photographer.colors.accent }}
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Conteúdo */}
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Avatar com iniciais */}
          <motion.div
            className="mb-8 inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${photographer.colors.primary} 0%, ${photographer.colors.accent} 100%)`,
              }}
            >
              {photographer.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
          </motion.div>

          {/* Nome */}
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            {photographer.name}
          </h1>

          {/* Tagline */}
          <p
            className="text-2xl md:text-3xl font-semibold mb-6"
            style={{ color: photographer.colors.primary }}
          >
            {photographer.tagline}
          </p>

          {/* Descrição */}
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-200">
            {photographer.description}
          </p>

          {/* Botões */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              className="px-8 py-4 text-lg font-semibold rounded-lg text-white"
              style={{
                background: `linear-gradient(135deg, ${photographer.colors.primary} 0%, ${photographer.colors.accent} 100%)`,
              }}
            >
              Ver Portfólio
            </Button>

            <Button
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 bg-transparent"
              style={{
                borderColor: photographer.colors.primary,
                color: photographer.colors.primary,
              }}
            >
              Solicitar Orçamento
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}