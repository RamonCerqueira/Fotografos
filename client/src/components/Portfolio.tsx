/**
 * Portfolio - Seção de Portfólio
 * 
 * Componente que exibe uma galeria de fotos em grid responsivo
 * com efeito de zoom ao hover e modal ao clicar.
 * 
 * Design: Minimalismo Elegante
 * - Grid responsivo (1 coluna mobile, 2 tablet, 4 desktop)
 * - Efeito zoom suave ao hover
 * - Modal para visualizar imagem em tamanho maior
 * - Animação de entrada ao scroll
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { portfolioImages } from '@/data/portfolio';
import { pageTexts } from '@/data/config';
import { X } from 'lucide-react';

export default function Portfolio() {
  const { ref, controls } = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="section-gap bg-white">
      <div className="container">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16"
          ref={ref}
          animate={controls}
          variants={itemVariants as any}
        >
          <h2 className="text-heading-1 text-[#1A1A1A] mb-4">
            {pageTexts.portfolio.title}
          </h2>
          <p className="text-body text-[#666666] max-w-2xl mx-auto mb-2">
            {pageTexts.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Grid de Imagens */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          ref={ref}
          animate={controls}
          variants={containerVariants as any}
        >
          {portfolioImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              variants={itemVariants as any}
              onClick={() => setSelectedImage(image.imageUrl)}
            >
              {/* Imagem */}
              <img
                src={image.imageUrl}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay ao hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center text-sm font-semibold px-4">
                    {image.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal de Imagem */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Imagem em Modal */}
              <img
                src={selectedImage}
                alt="Imagem ampliada"
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Botão Fechar */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors duration-300"
              >
                <X size={24} className="text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
