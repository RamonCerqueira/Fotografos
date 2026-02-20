import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useLocation, useRoute } from 'wouter';
import { Button } from '@/components/ui/button';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { demoPhotographers } from '@/data/demoPortfolios';

export default function AlbumView() {
  const { theme } = useLanguageTheme();
  const [, setLocation] = useLocation();
  const [match, params] = useRoute('/demo/:photographerId/album/:portfolioId');

  if (!match || !params) {
    return null;
  }

  const photographer = demoPhotographers[params.photographerId];

  if (!photographer) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-[#0F0F0F] text-white' : 'bg-white text-[#1A1A1A]'}`}>
        <div className="container text-center">
          <p className="text-lg mb-6">Álbum não encontrado.</p>
          <Button onClick={() => setLocation('/')}>Voltar para a página inicial</Button>
        </div>
      </div>
    );
  }

  const portfolioItem = photographer.portfolio.find((item) => item.id === params.portfolioId);

  if (!portfolioItem) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-[#0F0F0F] text-white' : 'bg-white text-[#1A1A1A]'}`}>
        <div className="container text-center">
          <p className="text-lg mb-6">Projeto de portfólio não encontrado.</p>
          <Button onClick={() => setLocation(`/demo/${photographer.id}`)}>Voltar para o portfólio</Button>
        </div>
      </div>
    );
  }

  const baseImages = photographer.portfolio.length > 0 ? photographer.portfolio.map((item) => item.imageUrl) : [portfolioItem.imageUrl];

  const galleryImages = Array.from({ length: 12 }, (_, index) => ({
    id: `${portfolioItem.id}-${index + 1}`,
    src: baseImages[index % baseImages.length],
    alt: `${portfolioItem.title} - Foto ${index + 1}`,
  }));

  const backgroundClass =
    theme === 'dark'
      ? 'bg-gradient-to-b from-[#0F0F0F] via-[#050505] to-[#0F0F0F] text-white'
      : 'bg-gradient-to-b from-white via-[#F9F9F9] to-white text-[#1A1A1A]';

  return (
    <div className={`min-h-screen ${backgroundClass}`}>
      <div className="container py-16 md:py-24">
        <motion.div
          className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setLocation(`/demo/${photographer.id}`)}
            >
              <ArrowLeft size={18} />
              <span>Voltar para o portfólio</span>
            </Button>
            <div className="h-6 w-px bg-[#E5E5E5] dark:bg-[#2A2A2A]" />
            <div>
              <p className="text-sm uppercase tracking-[0.2em]" style={{ color: photographer.colors.primary }}>
                Álbum fotográfico
              </p>
              <h1 className="text-2xl md:text-3xl font-semibold">{portfolioItem.title}</h1>
            </div>
          </div>
          <div className="text-sm md:text-right">
            <p className="font-semibold">{photographer.name}</p>
            <p className={theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'}>{photographer.specialty}</p>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.25fr)]">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium" style={{ backgroundColor: `${photographer.colors.primary}15`, color: photographer.colors.primary }}>
              {portfolioItem.category.toUpperCase()}
            </div>
            <p className={`text-base md:text-lg ${theme === 'dark' ? 'text-[#DDDDDD]' : 'text-[#4A4A4A]'}`}>
              {portfolioItem.description}
            </p>
            <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-[#BBBBBB]' : 'text-[#777777]'}`}>
              Este álbum reúne uma seleção curada de imagens realizadas por {photographer.name}, combinando direção de cena, iluminação e pós-produção para entregar uma narrativa visual coerente e envolvente.
            </p>
            <div className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-[#151515] border border-[#2A2A2A]' : 'bg-white border border-[#E5E5E5]'}`}>
              <h2 className="text-lg font-semibold mb-3">Sobre o fotógrafo</h2>
              <p className={`text-sm md:text-base mb-3 ${theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#666666]'}`}>
                {photographer.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-1">Especialidade</p>
                  <p className={theme === 'dark' ? 'text-[#DDDDDD]' : 'text-[#555555]'}>{photographer.specialty}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Estilo visual</p>
                  <p className={theme === 'dark' ? 'text-[#DDDDDD]' : 'text-[#555555]'}>Inspirado no layout {photographer.specialty.toLowerCase()}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-2xl ${
                  index % 5 === 0 ? 'md:row-span-2 aspect-[3/4]' : 'aspect-[4/3]'
                } ${theme === 'dark' ? 'bg-[#151515]' : 'bg-[#F5F5F5]'}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

