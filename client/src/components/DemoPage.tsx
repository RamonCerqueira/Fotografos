/**
 * DemoPage - Componente para renderizar páginas de demo de fotógrafos
 * 
 * Renderiza layouts distintos baseados no estilo do fotógrafo (variant)
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { DemoPhotographerData } from '@/data/demoPortfolios';
import { Button } from '@/components/ui/button';
import { 
  Heart, Camera, Star, ArrowRight, Menu, X, Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, 
  ChevronDown, ArrowUpRight, Aperture, Image as ImageIcon, Layers 
} from 'lucide-react';

type DemoVariant = 'minimalista' | 'classico' | 'moderno' | 'artistico' | 'corporativo' | 'criativo';

interface DemoPageProps {
  photographer: DemoPhotographerData;
  variant?: DemoVariant;
}

export default function DemoPage({ photographer, variant = 'moderno' }: DemoPageProps) {
  const { theme } = useLanguageTheme();
  const [, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToAlbum = (albumId: string) => {
    setLocation(`/demo/${photographer.id}/album/${albumId}`);
  };

  const socialLinks = [
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' }
  ];

  // --- LAYOUT MINIMALISTA ---
  // Foco em tipografia, espaço em branco e simplicidade.
  const renderMinimalist = () => (
    <div className={`min-h-screen font-sans ${theme === 'dark' ? 'bg-[#0a0a0a] text-gray-200' : 'bg-white text-gray-800'}`}>
      {/* Header Minimalista */}
      <header className="fixed w-full z-50 mix-blend-difference text-white p-6 flex justify-between items-center">
        <h1 className="text-xl font-light tracking-widest uppercase">{photographer.name}</h1>
        <nav className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
          <a href="#portfolio" className="hover:opacity-70 transition-opacity">Portfólio</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">Sobre</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contato</a>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </Button>
      </header>

      {/* Hero Minimalista - Apenas texto e uma imagem sutil ou cor sólida */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.3em] uppercase mb-6"
        >
          {photographer.specialty}
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-thin tracking-tighter mb-8"
        >
          {photographer.name.split(' ')[0]}
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="h-16 w-[1px] bg-current mt-8"
        />
      </section>

      {/* Portfólio Minimalista - Grid limpo */}
      <section id="portfolio" className="py-24 px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {photographer.portfolio.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => goToAlbum(item.id)}
            >
              <div className="overflow-hidden mb-4 aspect-[3/4]">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105" 
                />
              </div>
              <div className="flex justify-between items-end border-b border-gray-200 dark:border-gray-800 pb-2">
                <h3 className="text-xl font-light">{item.title}</h3>
                <span className="text-xs tracking-widest opacity-50">0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Footer Minimalista */}
      <footer className="py-12 text-center text-xs tracking-widest uppercase opacity-50">
        <p>&copy; {new Date().getFullYear()} {photographer.name}. Todos os direitos reservados.</p>
      </footer>
    </div>
  );

  // --- LAYOUT CLÁSSICO ---
  // Serifas, bordas douradas, simetria, elegância.
  const renderClassic = () => (
    <div className={`min-h-screen font-serif ${theme === 'dark' ? 'bg-[#121212] text-[#E0E0E0]' : 'bg-[#FDFBF7] text-[#2C2C2C]'}`}>
      <div className="border-8 border-double border-transparent h-full fixed inset-0 pointer-events-none z-50" style={{ borderColor: photographer.colors.primary + '40' }} />
      
      {/* Header Clássico */}
      <header className="py-8 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl tracking-widest italic" style={{ color: photographer.colors.primary }}>
          {photographer.name}
        </h1>
        <p className="text-xs uppercase tracking-[0.2em] mt-2 opacity-70">Fotografia Fine Art</p>
      </header>

      {/* Hero Clássico */}
      <section className="relative h-[80vh] mx-4 md:mx-12 mb-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
          <div className="text-center text-white p-8 border border-white/30 backdrop-blur-sm max-w-2xl">
            <h2 className="text-5xl md:text-6xl italic mb-4 font-medium">Capturando a Eternidade</h2>
            <p className="text-lg font-sans font-light tracking-wide">{photographer.tagline}</p>
            <Button 
              className="mt-8 bg-white text-black hover:bg-gray-200 font-sans tracking-widest text-xs uppercase px-8 py-6 rounded-none"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Coleção
            </Button>
          </div>
        </div>
        {photographer.heroImage && (
          <img src={photographer.heroImage} alt="Hero" className="w-full h-full object-cover" />
        )}
      </section>

      {/* Portfólio Clássico - Grid com bordas e texto centralizado */}
      <section id="portfolio" className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <span className="block w-12 h-[1px] bg-current mx-auto mb-4" />
          <h3 className="text-2xl uppercase tracking-widest mb-2">Portfólio Selecionado</h3>
          <p className="font-sans text-sm text-gray-500 italic">Momentos únicos, memórias eternas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photographer.portfolio.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer text-center"
              onClick={() => goToAlbum(item.id)}
            >
              <div className="relative p-2 border border-gray-200 dark:border-gray-800 transition-colors group-hover:border-[var(--primary)]" style={{ '--primary': photographer.colors.primary } as any}>
                <div className="overflow-hidden aspect-[4/5]">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                </div>
              </div>
              <h4 className="mt-6 text-xl italic">{item.title}</h4>
              <p className="text-xs font-sans uppercase tracking-wider opacity-60 mt-1">Ver Álbum</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Clássico */}
      <section className="bg-opacity-5 py-24" style={{ backgroundColor: photographer.colors.primary + '10' }}>
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             {photographer.services.map((service) => (
               <div key={service.id} className="px-6">
                 <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full border border-current opacity-70">
                   <Star size={24} />
                 </div>
                 <h4 className="text-xl mb-4 font-bold">{service.title}</h4>
                 <p className="font-sans font-light opacity-80 leading-relaxed">{service.description}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );

  // --- LAYOUT MODERNO ---
  // Full-width, bold fonts, dark mode, paralaxe.
  const renderModern = () => (
    <div className={`min-h-screen font-sans ${theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-white text-black'}`}>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-10 mix-blend-difference text-white">
        <span className="text-2xl font-bold tracking-tighter">{photographer.name}</span>
        <Button variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black transition-colors">
          Menu
        </Button>
      </nav>

      {/* Hero Moderno */}
      <section className="h-screen relative flex items-center px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {photographer.heroImage && (
            <img src={photographer.heroImage} alt="Hero" className="w-full h-full object-cover opacity-60" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-9xl font-bold leading-none tracking-tighter mb-6 text-white"
          >
            CAPTURING<br/>
            <span style={{ color: photographer.colors.primary }}>REALITY.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-xl"
          >
            {photographer.description}
          </motion.p>
        </div>
      </section>

      {/* Portfolio Moderno - Masonry/Grid Assimétrico */}
      <section className="py-32 px-6 md:px-20">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-5xl font-bold tracking-tight">Trabalhos Recentes</h2>
          <span className="hidden md:block text-sm uppercase tracking-wider opacity-60">Scroll para explorar</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {photographer.portfolio.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`group cursor-pointer relative ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
              onClick={() => goToAlbum(item.id)}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <div className="overflow-hidden rounded-lg mb-6">
                <img src={item.imageUrl} alt={item.title} className="w-full object-cover aspect-[3/4] group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold">{item.title}</h3>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 group-hover:-translate-y-2" />
              </div>
              <p className="text-gray-500 mt-2">{item.category}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern Services */}
      <section className="py-32 bg-zinc-900 text-white px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Serviços Premium</h2>
            <p className="text-gray-400 text-lg">{photographer.tagline}</p>
          </div>
          <div className="space-y-12">
            {photographer.services.map((service, i) => (
              <div key={i} className="border-t border-zinc-700 pt-8 group cursor-pointer hover:pl-4 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-4">
                  <span className="text-sm font-normal text-zinc-500">0{i+1}</span>
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  // --- LAYOUT ARTÍSTICO ---
  // Formas orgânicas, cores vibrantes, layout quebrado.
  const renderArtistic = () => (
    <div className={`min-h-screen overflow-x-hidden font-sans ${theme === 'dark' ? 'bg-[#1a1a1a] text-white' : 'bg-[#f0f0f0] text-black'}`}>
      {/* Elementos decorativos de fundo */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-20"
          style={{ backgroundColor: photographer.colors.primary }}
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0], rotate: [0, -45, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-20"
          style={{ backgroundColor: photographer.colors.accent }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <header className="flex justify-between items-end mb-24">
          <div className="text-right">
             <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8]">
               AR<br/>TSY
             </h1>
          </div>
          <div className="text-sm font-bold uppercase tracking-widest writing-mode-vertical rotate-180 hidden md:block">
            {photographer.name} — Portfolio
          </div>
        </header>

        {/* Galeria Artística - Layout "Broken Grid" */}
        <section className="mb-32">
          <div className="grid grid-cols-12 gap-4 auto-rows-[minmax(100px,auto)]">
             {photographer.portfolio.map((item, index) => {
               // Layout logic simples para variar posições
               const colSpan = index % 3 === 0 ? 'col-span-12 md:col-span-8' : index % 3 === 1 ? 'col-span-12 md:col-span-4' : 'col-span-12 md:col-span-6 md:col-start-4';
               const height = index % 2 === 0 ? 'h-[400px]' : 'h-[500px]';
               
               return (
                 <motion.div 
                   key={item.id}
                   className={`${colSpan} relative group cursor-pointer`}
                   onClick={() => goToAlbum(item.id)}
                   whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1, zIndex: 20 }}
                   transition={{ type: "spring", stiffness: 300 }}
                 >
                   <div className={`${height} w-full overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl relative`}>
                     <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <h3 className="text-3xl font-bold text-white text-center px-4 transform rotate-[-5deg]">{item.title}</h3>
                     </div>
                   </div>
                 </motion.div>
               );
             })}
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-white/10 backdrop-blur-md rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Vamos criar algo único?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto relative z-10">{photographer.description}</p>
          <Button 
            className="rounded-full px-12 py-8 text-xl font-bold relative z-10 hover:scale-110 transition-transform"
            style={{ backgroundColor: photographer.colors.primary, color: 'white' }}
          >
            Fale Comigo
          </Button>
        </section>
      </div>
    </div>
  );

  // --- LAYOUT CORPORATIVO ---
  // Organizado, azul/cinza, badges de confiança, formulário visível.
  const renderCorporate = () => (
    <div className={`min-h-screen font-sans ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      <nav className="bg-white dark:bg-slate-800 shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
              {photographer.name.charAt(0)}
            </div>
            <span className="font-bold text-xl tracking-tight">{photographer.name}</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-sm text-slate-500">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Serviços</a>
            <a href="#" className="hover:text-blue-600">Portfólio</a>
            <a href="#" className="hover:text-blue-600">Clientes</a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Agendar Reunião</Button>
        </div>
      </nav>

      {/* Hero Corporativo */}
      <section className="bg-white dark:bg-slate-800 py-20 md:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Fotografia Profissional</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
              Imagem é tudo no mundo dos negócios.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {photographer.description} Especialistas em retratos corporativos, eventos e produtos.
            </p>
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6">Ver Portfólio</Button>
              <Button variant="outline" className="px-8 py-6 border-slate-300">Nossos Serviços</Button>
            </div>
            <div className="mt-12 flex gap-8 text-slate-400">
               <div className="flex items-center gap-2"><Star className="text-yellow-400 fill-yellow-400" /> 5.0 Avaliação</div>
               <div className="flex items-center gap-2"><Layers /> +500 Projetos</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
            {photographer.heroImage ? (
               <img src={photographer.heroImage} alt="Corporate" className="rounded-2xl shadow-xl relative z-10 w-full object-cover aspect-[4/3]" />
            ) : (
               <div className="rounded-2xl bg-slate-200 w-full aspect-[4/3] flex items-center justify-center">Imagem Hero</div>
            )}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nossas Soluções</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Serviços adaptados para elevar a marca da sua empresa.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {photographer.services.map((service) => (
              <div key={service.id} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Aperture size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-500 mb-6">{service.description}</p>
                <a href="#" className="text-blue-600 font-semibold flex items-center gap-1 text-sm hover:gap-2 transition-all">
                  Saiba mais <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold mb-12">Cases de Sucesso</h2>
           <div className="grid md:grid-cols-3 gap-8">
             {photographer.portfolio.map((item) => (
               <div 
                 key={item.id} 
                 className="group cursor-pointer rounded-lg overflow-hidden shadow-sm"
                 onClick={() => goToAlbum(item.id)}
               >
                 <div className="relative overflow-hidden aspect-video">
                   <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                 </div>
                 <div className="p-6 bg-white dark:bg-slate-800 border border-t-0 border-slate-100 dark:border-slate-700">
                   <p className="text-xs font-bold text-blue-600 uppercase mb-2">{item.category}</p>
                   <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                   <p className="text-slate-500 text-sm line-clamp-2">{item.description}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );

  // --- LAYOUT CRIATIVO ---
  // Cores fortes, formas arredondadas, tipografia display.
  const renderCreative = () => (
    <div className={`min-h-screen font-sans ${theme === 'dark' ? 'bg-[#18181b] text-white' : 'bg-[#fff1f2] text-[#be123c]'}`}>
      <div className="fixed top-6 right-6 z-50">
        <div className="bg-white dark:bg-zinc-800 rounded-full p-2 shadow-xl border-4 border-[#fda4af]">
          <div className="w-12 h-12 rounded-full bg-[#fb7185] flex items-center justify-center text-white font-bold animate-pulse">
            HI!
          </div>
        </div>
      </div>

      {/* Hero Criativo */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          style={{ backgroundColor: photographer.colors.primary, top: '10%', left: '20%' }}
        />
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
          style={{ backgroundColor: photographer.colors.accent, top: '20%', right: '20%' }}
        />

        <div className="relative z-10 text-center">
          <motion.div 
             initial={{ scale: 0, rotate: -180 }}
             animate={{ scale: 1, rotate: 0 }}
             transition={{ type: "spring", bounce: 0.5 }}
             className="inline-block mb-8 relative"
          >
             <div className="relative">
                <img 
                  src={photographer.heroImage || "https://github.com/shadcn.png"} 
                  alt="Profile" 
                  className="w-48 h-48 rounded-full object-cover border-8 border-white shadow-2xl" 
                />
                <div className="absolute -bottom-4 -right-4 bg-[#f43f5e] text-white px-6 py-2 rounded-full font-bold transform rotate-[-6deg] shadow-lg">
                  {photographer.specialty}
                </div>
             </div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#f43f5e] to-[#fb7185] drop-shadow-sm">
            {photographer.name}
          </h1>
          <p className="text-2xl font-bold opacity-70 max-w-2xl mx-auto leading-relaxed">
            {photographer.tagline}
          </p>

          <div className="mt-12 flex justify-center gap-6">
             {socialLinks.map((social, i) => (
               <a key={i} href="#" className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#f43f5e] hover:scale-125 transition-transform">
                 <social.icon size={20} />
               </a>
             ))}
          </div>
        </div>
      </section>

      {/* Galeria Criativa - Cards Coloridos */}
      <section className="py-24 px-4 container mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 text-[#881337]">Meus Cliques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {photographer.portfolio.map((item, index) => (
             <motion.div
               key={item.id}
               whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
               className="bg-white rounded-[2rem] p-4 shadow-xl cursor-pointer border-b-8 border-[#f43f5e]"
               onClick={() => goToAlbum(item.id)}
             >
               <div className="rounded-[1.5rem] overflow-hidden aspect-square mb-6">
                 <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
               </div>
               <h3 className="text-2xl font-bold text-center mb-2 text-[#881337]">{item.title}</h3>
               <div className="flex justify-center gap-2 mb-4">
                 <span className="px-3 py-1 bg-[#fff1f2] text-[#f43f5e] rounded-full text-xs font-bold uppercase">{item.category}</span>
               </div>
             </motion.div>
           ))}
        </div>
      </section>
    </div>
  );

  // Seleciona o layout baseado na variante
  switch (variant) {
    case 'minimalista': return renderMinimalist();
    case 'classico': return renderClassic();
    case 'artistico': return renderArtistic();
    case 'corporativo': return renderCorporate();
    case 'criativo': return renderCreative();
    case 'moderno':
    default: return renderModern();
  }
}
