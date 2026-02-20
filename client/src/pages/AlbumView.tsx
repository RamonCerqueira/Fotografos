import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Heart } from 'lucide-react';
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
          <p className="text-lg mb-6">Fotógrafo não encontrado.</p>
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
          <p className="text-lg mb-6">Álbum não encontrado.</p>
          <Button onClick={() => setLocation(`/demo/${photographer.id}`)}>Voltar para o portfólio</Button>
        </div>
      </div>
    );
  }

  // Generate 12 images for the gallery
  const baseImages = photographer.portfolio.length > 0 ? photographer.portfolio.map((item) => item.imageUrl) : [portfolioItem.imageUrl];
  const galleryImages = Array.from({ length: 12 }, (_, index) => ({
    id: `${portfolioItem.id}-${index + 1}`,
    src: baseImages[index % baseImages.length],
    alt: `${portfolioItem.title} - Foto ${index + 1}`,
    featured: index % 6 === 0 // Highlight every 6th image
  }));

  const backgroundClass =
    theme === 'dark'
      ? 'bg-[#0F0F0F] text-white'
      : 'bg-white text-[#1A1A1A]';

  return (
    <div className={`min-h-screen ${backgroundClass} transition-colors duration-500`}>
      {/* Navigation Bar */}
      <nav className={`sticky top-0 z-40 backdrop-blur-md border-b ${theme === 'dark' ? 'bg-[#0F0F0F]/80 border-[#2A2A2A]' : 'bg-white/80 border-[#E5E5E5]'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            className="flex items-center gap-2 hover:bg-transparent pl-0"
            onClick={() => setLocation(`/demo/${photographer.id}`)}
          >
            <ArrowLeft size={20} />
            <span className="hidden md:inline">Voltar para o portfólio</span>
          </Button>
          
          <div className="flex items-center gap-4">
             <div className="text-right hidden sm:block">
               <p className="text-sm font-bold leading-none">{portfolioItem.title}</p>
               <p className="text-xs opacity-60 leading-none mt-1">{photographer.name}</p>
             </div>
             <Button size="icon" variant="ghost" className="rounded-full">
               <Heart size={20} />
             </Button>
             <Button size="icon" variant="ghost" className="rounded-full">
               <Share2 size={20} />
             </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {/* Album Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4" 
            style={{ backgroundColor: `${photographer.colors.primary}20`, color: photographer.colors.primary }}>
            {portfolioItem.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{portfolioItem.title}</h1>
          <p className="text-lg md:text-xl opacity-70 leading-relaxed max-w-2xl mx-auto">
            {portfolioItem.description} Capturando a essência de momentos únicos com um olhar {photographer.specialty.toLowerCase()}.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
           <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-[#151515]' : 'bg-gray-50'}`}>
             <h3 className="font-bold mb-2">Sobre o Serviço</h3>
             <p className="text-sm opacity-70">Sessão fotográfica completa com direção de arte e pós-produção profissional.</p>
           </div>
           <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-[#151515]' : 'bg-gray-50'}`}>
             <h3 className="font-bold mb-2">O Fotógrafo</h3>
             <p className="text-sm opacity-70">{photographer.description}</p>
           </div>
           <div className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-[#151515]' : 'bg-gray-50'}`}>
             <h3 className="font-bold mb-2">Detalhes Técnicos</h3>
             <p className="text-sm opacity-70">12 fotos em alta resolução. Edição fine art. Entrega digital.</p>
           </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${image.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-[4/3] w-full h-full">
                 <img
                   src={image.src}
                   alt={image.alt}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   loading="lazy"
                 />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <Button variant="secondary" className="scale-90 group-hover:scale-100 transition-transform">
                   Ver Foto
                 </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-24 text-center">
           <p className="mb-6 opacity-60">Gostou do que viu?</p>
           <Button size="lg" className="rounded-full px-8" style={{ backgroundColor: photographer.colors.primary, color: 'white' }}>
             Solicitar Orçamento
           </Button>
        </div>
      </main>
    </div>
  );
}
