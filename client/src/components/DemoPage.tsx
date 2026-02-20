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

      {/* Services Minimalista */}
      <section className="py-24 bg-gray-50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-12 text-center opacity-40">Serviços</span>
          <div className="grid gap-12">
            {photographer.services.map((service) => (
              <div key={service.id} className="flex flex-col md:flex-row gap-8 items-baseline border-b border-gray-200 dark:border-gray-800 pb-8 last:border-0">
                <h3 className="text-2xl font-light min-w-[200px]">{service.title}</h3>
                <div>
                  <p className="opacity-70 mb-4 font-light">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm opacity-50">
                    {service.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Minimalista */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="block text-xs font-bold tracking-[0.2em] uppercase mb-8 opacity-40">Sobre</span>
          <p className="text-xl md:text-2xl leading-relaxed font-light mb-8">
            {photographer.description}
          </p>
          <img 
            src={photographer.heroImage} 
            alt={photographer.name} 
            className="w-full h-96 object-cover grayscale mt-8"
          />
        </div>
      </section>

      {/* Contact Minimalista */}
      <section id="contact" className="py-24 px-4 bg-black text-white text-center">
        <h2 className="text-3xl font-light mb-8">Vamos Conversar?</h2>
        <div className="flex flex-col gap-4 text-sm tracking-widest uppercase opacity-70 mb-12">
          <a href="mailto:contact@example.com" className="hover:opacity-100 transition-opacity">contact@example.com</a>
          <a href="tel:+5511999999999" className="hover:opacity-100 transition-opacity">+55 11 99999-9999</a>
        </div>
        <div className="flex justify-center gap-8">
          {socialLinks.map((social, i) => (
            <a key={i} href={social.href} className="hover:text-gray-400 transition-colors">
              <social.icon size={20} />
            </a>
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

      {/* About Clássico */}
      <section className="py-24 px-4 container mx-auto text-center max-w-3xl">
        <h3 className="text-3xl italic font-serif mb-8 text-[var(--primary)]" style={{ color: photographer.colors.primary }}>Sobre a Artista</h3>
        <p className="text-lg leading-loose font-serif text-gray-600 dark:text-gray-300">
          <span className="text-6xl float-left mr-4 leading-[0.8] font-serif" style={{ color: photographer.colors.primary }}>"</span>
          {photographer.description} A fotografia não é apenas um registro, é a captura da alma do momento. 
          Cada clique é uma história contada através da luz e da sombra, eternizando sentimentos que as palavras não conseguem expressar.
        </p>
        <div className="mt-12">
          <img src="/assinatura-fake.png" alt="Assinatura" className="h-16 mx-auto opacity-50" onError={(e) => e.currentTarget.style.display = 'none'} />
        </div>
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
           <div className="text-center mb-16">
             <h3 className="text-3xl italic font-serif mb-4">Nossos Serviços</h3>
             <div className="w-24 h-[1px] bg-current mx-auto opacity-30"></div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             {photographer.services.map((service) => (
               <div key={service.id} className="px-6 group hover:-translate-y-2 transition-transform duration-500">
                 <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full border border-current opacity-70 group-hover:bg-[var(--primary)] group-hover:text-white group-hover:border-transparent transition-all" style={{ '--primary': photographer.colors.primary } as any}>
                   <Star size={24} />
                 </div>
                 <h4 className="text-xl mb-4 font-bold font-serif">{service.title}</h4>
                 <p className="font-sans font-light opacity-80 leading-relaxed text-sm">{service.description}</p>
                 <ul className="mt-6 space-y-2 text-xs font-sans uppercase tracking-widest opacity-60">
                   {service.features.slice(0, 3).map((f, i) => <li key={i}>{f}</li>)}
                 </ul>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Contact Clássico */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-xl mx-auto border-y border-double border-gray-200 dark:border-gray-800 py-12">
          <h3 className="text-4xl italic font-serif mb-6">Solicite um Orçamento</h3>
          <p className="font-sans text-gray-500 mb-8">Disponível para casamentos e ensaios em todo o Brasil.</p>
          <Button 
            className="rounded-none px-12 py-6 uppercase tracking-widest text-xs font-sans hover:opacity-80 transition-opacity"
            style={{ backgroundColor: photographer.colors.primary, color: 'white' }}
          >
            Entrar em Contato
          </Button>
        </div>
        <footer className="mt-24 text-xs uppercase tracking-[0.3em] opacity-40 font-sans">
          {photographer.name} © {new Date().getFullYear()}
        </footer>
      </section>
    </div>
  );

  // --- LAYOUT MODERNO ---
  // Full-width, bold fonts, dark mode, paralaxe.
  const renderModern = () => (
    <div className={`min-h-screen font-sans ${theme === 'dark' ? 'bg-[#050505] text-white' : 'bg-white text-black'}`}>
      
      {/* Menu Overlay Fullscreen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-black text-white flex flex-col justify-center items-center"
          >
            <Button 
              variant="ghost" 
              className="absolute top-8 right-8 text-white hover:bg-white/20 rounded-full p-4 h-auto w-auto"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={48} />
            </Button>
            <nav className="flex flex-col gap-8 text-center">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Sobre', id: 'sobre' },
                { label: 'Portfólio', id: 'portfolio' },
                { label: 'Serviços', id: 'servicos' },
                { label: 'Contato', id: 'contato' }
              ].map((item, index) => (
                <motion.a 
                  key={item.label} 
                  href={`#${item.id}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-6xl md:text-8xl font-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-gray-500 transition-all uppercase tracking-tighter"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            
            <div className="absolute bottom-12 flex gap-8">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} className="text-gray-400 hover:text-white transition-colors">
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-10 mix-blend-difference text-white">
        <span className="text-2xl font-bold tracking-tighter uppercase">{photographer.name}</span>
        <Button 
          variant="outline" 
          className="rounded-full border-white text-white bg-transparent hover:bg-white hover:text-black transition-all px-8 py-6 text-sm tracking-widest uppercase font-bold"
          onClick={() => setIsMenuOpen(true)}
        >
          Menu
        </Button>
      </nav>

      {/* Hero Moderno */}
      <section id="home" className="h-screen relative flex items-center px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {photographer.heroImage ? (
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
              className="w-full h-full"
            >
              <img src={photographer.heroImage} alt="Hero" className="w-full h-full object-cover" />
            </motion.div>
          ) : (
            <div className="w-full h-full bg-gray-900" />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </div>
        
        <div className="relative z-10 max-w-6xl pt-20">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] bg-white mb-8"
            style={{ backgroundColor: photographer.colors.primary }}
          />
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tighter mb-8 text-white uppercase mix-blend-overlay"
          >
            {photographer.tagline.split(' ').slice(0, 2).join(' ')}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              {photographer.tagline.split(' ').slice(2).join(' ')}
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-200 max-w-xl font-light tracking-wide leading-relaxed"
          >
            {photographer.description}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] opacity-70">Scroll Down</span>
          <ChevronDown className="animate-bounce" />
        </motion.div>
      </section>

      {/* About Moderno */}
      <section id="sobre" className="py-32 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100 dark:bg-zinc-900/50 -skew-x-12 transform translate-x-20 z-0" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div>
               <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.85] uppercase">
                 Além da<br/>
                 <span style={{ color: photographer.colors.primary }}>Imagem.</span>
               </h2>
               <div className="h-2 w-24 bg-black dark:bg-white mb-12" />
             </div>
             <div>
               <p className="text-2xl md:text-3xl leading-relaxed font-light mb-8">
                 "{photographer.description}"
               </p>
               <p className="text-lg opacity-60 leading-relaxed max-w-md">
                 Nosso objetivo é transformar o ordinário em extraordinário. Utilizamos técnicas avançadas de iluminação e composição para criar narrativas visuais impactantes que resistem ao teste do tempo.
               </p>
               
               <div className="mt-12 flex gap-12">
                 <div>
                   <h3 className="text-4xl font-bold mb-2">10+</h3>
                   <p className="text-sm uppercase tracking-widest opacity-50">Anos de Exp.</p>
                 </div>
                 <div>
                   <h3 className="text-4xl font-bold mb-2">500+</h3>
                   <p className="text-sm uppercase tracking-widest opacity-50">Projetos</p>
                 </div>
                 <div>
                   <h3 className="text-4xl font-bold mb-2">12</h3>
                   <p className="text-sm uppercase tracking-widest opacity-50">Prêmios</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Portfolio Moderno - Masonry/Grid Assimétrico */}
      <section id="portfolio" className="py-32 px-6 md:px-20 bg-zinc-50 dark:bg-[#0a0a0a]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-gray-200 dark:border-zinc-800 pb-8">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase">Selected<br/>Works</h2>
          <div className="flex items-center gap-4 mt-8 md:mt-0">
            <span className="text-sm uppercase tracking-wider opacity-60">Explorar Galeria</span>
            <ArrowRight className="opacity-60" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
          {photographer.portfolio.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`group cursor-pointer relative ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
              onClick={() => goToAlbum(item.id)}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <div className="overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10 duration-500" />
                <img src={item.imageUrl} alt={item.title} className="w-full object-cover aspect-[3/4] grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-4 right-4 bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  Ver Projeto
                </div>
              </div>
              <div className="flex justify-between items-start border-t border-gray-300 dark:border-zinc-800 pt-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors" style={{ '--primary': photographer.colors.primary } as any}>{item.title}</h3>
                  <p className="text-sm uppercase tracking-widest opacity-50">{item.category}</p>
                </div>
                <ArrowUpRight className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all transform" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-32">
          <Button variant="outline" className="rounded-full px-12 py-8 text-xl uppercase tracking-widest border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
            Ver Todos os Projetos
          </Button>
        </div>
      </section>

      {/* Modern Services */}
      <section id="servicos" className="py-32 bg-black text-white px-6 md:px-20 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 sticky top-32 h-fit">
            <span className="text-sm font-bold text-[var(--primary)] uppercase tracking-widest mb-4 block" style={{ color: photographer.colors.primary }}>O que fazemos</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase leading-none">Serviços<br/>Premium</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Soluções fotográficas de alto padrão para quem não aceita menos que a perfeição. Cada serviço é executado com maestria técnica e visão artística.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 font-bold uppercase tracking-wider">
              Solicitar Orçamento
            </Button>
          </div>
          
          <div className="md:col-span-8 space-y-px bg-zinc-800">
            {photographer.services.map((service, i) => (
              <div key={i} className="bg-black p-8 md:p-12 group hover:bg-zinc-900 transition-colors duration-500">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <span className="text-4xl font-thin text-zinc-600 group-hover:text-white transition-colors">0{i+1}</span>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                    <p className="text-gray-400 mb-8 max-w-xl group-hover:text-gray-300">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-4">
                       {service.features.map((f, j) => (
                         <li key={j} className="text-sm text-zinc-500 flex items-center gap-2 group-hover:text-zinc-400">
                           <span className="w-1.5 h-1.5 bg-zinc-700 group-hover:bg-[var(--primary)] transition-colors" style={{ backgroundColor: photographer.colors.primary }}></span>
                           {f}
                         </li>
                       ))}
                    </ul>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity self-center">
                    <ArrowRight size={32} className="-rotate-45" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Moderno */}
      <section id="contato" className="py-40 px-6 md:px-20 bg-zinc-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        
        <div className="relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.5em] mb-8 text-gray-400">Vamos conversar?</p>
          <h2 className="text-[12vw] font-bold tracking-tighter leading-none mb-12 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-gray-500 transition-all cursor-pointer mix-blend-exclusion">
            LET'S TALK
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-20">
            <div className="group">
              <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-4">Email</h3>
              <a href={`mailto:hello@${photographer.id}.com`} className="text-xl md:text-2xl font-light hover:underline decoration-1 underline-offset-8">hello@{photographer.id}.com</a>
            </div>
            <div className="group">
              <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-4">Telefone</h3>
              <a href="tel:+5511999999999" className="text-xl md:text-2xl font-light hover:underline decoration-1 underline-offset-8">+55 11 99999-9999</a>
            </div>
            <div className="group">
              <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-4">Social</h3>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.href} className="hover:text-[var(--primary)] transition-colors transform hover:scale-110" style={{ color: 'white' }}>
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <footer className="border-t border-zinc-800 pt-12 flex flex-col md:flex-row justify-between text-xs text-zinc-600 uppercase tracking-widest">
             <p>© {new Date().getFullYear()} {photographer.name}. Todos os direitos reservados.</p>
             <p>Design by Fotografo Landing Page</p>
          </footer>
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

        {/* Artistic Services */}
        <section className="mb-32">
           <h2 className="text-5xl md:text-7xl font-black mb-16 text-center tracking-tighter">O PROCESSO</h2>
           <div className="grid md:grid-cols-3 gap-8">
             {photographer.services.map((service, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ y: -20 }}
                 className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-[2rem] relative overflow-hidden"
               >
                 <div className="absolute -right-4 -top-4 text-9xl font-black opacity-5 select-none">{i+1}</div>
                 <h3 className="text-2xl font-bold mb-4 relative z-10">{service.title}</h3>
                 <p className="opacity-70 mb-6 relative z-10">{service.description}</p>
                 <div className="flex flex-wrap gap-2 relative z-10">
                   {service.features.map((f, j) => (
                     <span key={j} className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider">{f}</span>
                   ))}
                 </div>
               </motion.div>
             ))}
           </div>
        </section>

        {/* Info Section / Contact */}
        <section className="bg-white/10 backdrop-blur-md rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Vamos criar algo único?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto relative z-10">{photographer.description}</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10 mb-12">
             <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
                <Mail className="mx-auto mb-2 opacity-70" />
                <p>art@example.com</p>
             </div>
             <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm">
                <Phone className="mx-auto mb-2 opacity-70" />
                <p>+55 11 99999-9999</p>
             </div>
          </div>

          <Button 
            className="rounded-full px-12 py-8 text-xl font-bold relative z-10 hover:scale-110 transition-transform shadow-xl"
            style={{ backgroundColor: photographer.colors.primary, color: 'white' }}
          >
            Iniciar Projeto
          </Button>
        </section>
        
        <footer className="text-center opacity-30 text-sm font-bold uppercase tracking-widest pb-8">
          Designed for {photographer.name}
        </footer>
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

      {/* Corporate About */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" alt="Office" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blue-900/20"></div>
            </div>
            <div>
               <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Excelência em Fotografia Corporativa</h2>
               <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                 Com mais de 10 anos de experiência no mercado, nossa equipe entende a importância de uma imagem sólida para sua empresa. 
                 Trabalhamos com equipamentos de última geração e uma visão estratégica para alinhar cada clique aos valores da sua marca.
               </p>
               <ul className="space-y-4">
                 {['Equipe Especializada', 'Entrega em Alta Resolução', 'Cobertura Nacional', 'Atendimento Personalizado'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                     <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
         </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nossas Soluções</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Serviços adaptados para elevar a marca da sua empresa.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {photographer.services.map((service) => (
              <div key={service.id} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Aperture size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-500 mb-6">{service.description}</p>
                <ul className="mb-6 space-y-2">
                   {service.features.slice(0, 3).map((f, i) => (
                     <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                       {f}
                     </li>
                   ))}
                </ul>
                <a href="#" className="text-blue-600 font-semibold flex items-center gap-1 text-sm hover:gap-2 transition-all">
                  Saiba mais <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold mb-12">Cases de Sucesso</h2>
           <div className="grid md:grid-cols-3 gap-8">
             {photographer.portfolio.map((item) => (
               <div 
                 key={item.id} 
                 className="group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800"
                 onClick={() => goToAlbum(item.id)}
               >
                 <div className="relative overflow-hidden aspect-video">
                   <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded shadow">
                     CASE
                   </div>
                 </div>
                 <div className="p-6 border border-t-0 border-slate-100 dark:border-slate-700">
                   <p className="text-xs font-bold text-blue-600 uppercase mb-2 tracking-wider">{item.category}</p>
                   <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-100">{item.title}</h3>
                   <p className="text-slate-500 text-sm line-clamp-2">{item.description}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Corporate Contact / Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
           <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6 text-white">
                <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center font-bold">
                  {photographer.name.charAt(0)}
                </div>
                <span className="font-bold text-xl">{photographer.name}</span>
             </div>
             <p className="max-w-md text-slate-400 mb-8">
               Transformando a identidade da sua empresa através de imagens profissionais de alto impacto.
             </p>
             <div className="flex gap-4">
               {socialLinks.map((social, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                   <social.icon size={18} />
                 </a>
               ))}
             </div>
           </div>
           
           <div>
             <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
             <ul className="space-y-4 text-sm">
               <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Serviços</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Portfólio</a></li>
               <li><a href="#" className="hover:text-blue-400 transition-colors">Contato</a></li>
             </ul>
           </div>

           <div>
             <h4 className="text-white font-bold mb-6">Contato</h4>
             <ul className="space-y-4 text-sm">
               <li className="flex items-start gap-3">
                 <MapPin size={18} className="text-blue-500 mt-1" />
                 <span>Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP</span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone size={18} className="text-blue-500" />
                 <span>+55 11 3333-4444</span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail size={18} className="text-blue-500" />
                 <span>contato@corporativo.com</span>
               </li>
             </ul>
           </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {photographer.name}. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );

  // --- LAYOUT CRIATIVO ---
  // Cores fortes, formas arredondadas, tipografia display.
  const renderCreative = () => (
    <div className={`min-h-screen font-sans ${theme === 'dark' ? 'bg-[#18181b] text-white' : 'bg-[#fff1f2] text-[#be123c]'}`}>
      <div className="fixed top-6 right-6 z-50">
        <div className="bg-white dark:bg-zinc-800 rounded-full p-2 shadow-xl border-4 border-[#fda4af] hover:scale-110 transition-transform cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-[#fb7185] flex items-center justify-center text-white font-bold">
            HI!
          </div>
        </div>
      </div>

      {/* Hero Criativo Modernizado */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        {/* Background Elements */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-[800px] h-[800px] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{ backgroundColor: photographer.colors.primary, top: '-20%', left: '-10%' }}
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{ backgroundColor: photographer.colors.accent, bottom: '-10%', right: '-10%' }}
        />

        <div className="relative z-10 text-center max-w-5xl">
          <motion.div 
             initial={{ scale: 0, rotate: -180 }}
             animate={{ scale: 1, rotate: 0 }}
             transition={{ type: "spring", bounce: 0.5 }}
             className="inline-block mb-12 relative group"
          >
             <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f43f5e] to-[#fb7185] rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <img 
                  src={photographer.heroImage || "https://github.com/shadcn.png"} 
                  alt="Profile" 
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-8 border-white dark:border-zinc-800 shadow-2xl relative z-10" 
                />
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="absolute -bottom-6 -right-6 bg-[#f43f5e] text-white px-8 py-3 rounded-full font-black transform rotate-[-6deg] shadow-lg z-20 text-lg md:text-xl border-4 border-white dark:border-zinc-800"
                >
                  {photographer.specialty} ✨
                </motion.div>
             </div>
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#f43f5e] to-[#fb7185] drop-shadow-sm leading-none">
            {photographer.name}
          </h1>
          <p className="text-2xl md:text-4xl font-bold opacity-80 max-w-3xl mx-auto leading-tight mb-12">
            {photographer.tagline}
          </p>

          <div className="flex justify-center gap-6">
             {socialLinks.map((social, i) => (
               <a key={i} href="#" className="w-14 h-14 rounded-full bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center text-[#f43f5e] hover:scale-125 hover:rotate-12 transition-all border-2 border-transparent hover:border-[#f43f5e]">
                 <social.icon size={24} />
               </a>
             ))}
          </div>
        </div>
        
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={40} className="text-[#f43f5e]" />
        </div>
      </section>

      {/* Services Criativo - Cards Modernizados */}
      <section className="py-32 px-4 container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <h2 className="text-6xl md:text-8xl font-black text-[#881337] uppercase leading-[0.8]">
            O que<br/>
            <span className="text-[#f43f5e]">eu faço</span>
          </h2>
          <p className="text-xl font-bold max-w-md text-right opacity-70">
            Serviços pensados para capturar a essência de cada momento com criatividade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {photographer.services.map((service, i) => (
             <motion.div 
               key={i} 
               whileHover={{ y: -15 }}
               className="group relative bg-white dark:bg-zinc-800 rounded-[3rem] p-10 shadow-xl border-2 border-transparent hover:border-[#f43f5e] transition-all overflow-hidden"
             >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] opacity-20 transition-all group-hover:scale-150 ${
                  i % 3 === 0 ? 'bg-[#f43f5e]' : 
                  i % 3 === 1 ? 'bg-[#22c55e]' : 
                  'bg-[#eab308]'
                }`} />

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm ${
                  i % 3 === 0 ? 'bg-[#fff1f2] text-[#f43f5e]' : 
                  i % 3 === 1 ? 'bg-[#f0fdf4] text-[#22c55e]' : 
                  'bg-[#fefce8] text-[#eab308]'
                }`}>
                  {i === 0 ? '✨' : i === 1 ? '📸' : '💡'}
                </div>

                <h3 className="text-3xl font-black mb-4 uppercase leading-none group-hover:text-[#f43f5e] transition-colors">
                  {service.title}
                </h3>
                <p className="font-bold opacity-60 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 font-bold text-sm bg-gray-50 dark:bg-zinc-700/50 p-3 rounded-xl group-hover:bg-[#fff1f2] dark:group-hover:bg-[#f43f5e]/10 transition-colors">
                      <div className={`w-2 h-2 rounded-full ${
                        i % 3 === 0 ? 'bg-[#f43f5e]' : 
                        i % 3 === 1 ? 'bg-[#22c55e]' : 
                        'bg-[#eab308]'
                      }`} />
                      {f}
                    </div>
                  ))}
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Galeria Criativa Modernizada */}
      <section className="py-32 px-4 container mx-auto bg-white dark:bg-zinc-900 rounded-[4rem] my-20">
        <div className="text-center mb-20">
          <span className="bg-[#fff1f2] text-[#f43f5e] px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm mb-6 inline-block">
            Portfolio
          </span>
          <h2 className="text-6xl md:text-8xl font-black text-[#881337] mb-8">Meus Cliques</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
           {photographer.portfolio.map((item, index) => (
             <motion.div
               key={item.id}
               whileHover={{ scale: 0.98, rotate: 0 }}
               className={`relative rounded-[2.5rem] overflow-hidden aspect-[4/5] cursor-pointer group ${
                 index % 2 === 0 ? 'md:translate-y-12' : ''
               }`}
               onClick={() => goToAlbum(item.id)}
             >
               <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                 <span className="text-[#f43f5e] font-black uppercase tracking-widest text-sm mb-2 bg-white inline-block px-3 py-1 rounded-lg w-fit">
                   {item.category}
                 </span>
                 <h3 className="text-3xl font-bold text-white leading-tight">{item.title}</h3>
               </div>
             </motion.div>
           ))}
        </div>
        
        <div className="text-center mt-32">
          <Button className="bg-[#f43f5e] hover:bg-[#be123c] text-white text-xl font-black px-12 py-8 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
             Ver Galeria Completa ➔
          </Button>
        </div>
      </section>

      {/* Contact Criativo Modernizado */}
      <section className="py-32 bg-[#f43f5e] text-white text-center relative overflow-hidden">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
           className="absolute -top-[50%] -left-[20%] w-[1000px] h-[1000px] border-[100px] border-white/10 border-dashed rounded-full"
         />
         <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-7xl md:text-[12rem] font-black mb-8 leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-sm">
              DIGA OI!
            </h2>
            <p className="text-2xl md:text-3xl font-bold mb-16 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Pronto para criar memórias incríveis e coloridas juntos? Vamos transformar suas ideias em realidade.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
              <Button className="bg-white text-[#f43f5e] hover:bg-yellow-300 hover:text-black text-xl font-black px-12 py-8 rounded-full shadow-2xl border-4 border-transparent hover:border-black transition-all hover:scale-105">
                 Me manda um zap!
              </Button>
              <Button variant="outline" className="bg-transparent border-4 border-white text-white hover:bg-white hover:text-[#f43f5e] text-xl font-black px-12 py-8 rounded-full transition-all hover:scale-105">
                 Enviar E-mail
              </Button>
            </div>

            <footer className="font-mono text-sm opacity-60 bg-black/20 inline-block px-6 py-3 rounded-full">
              © {new Date().getFullYear()} Feito com amor, cores e criatividade.
            </footer>
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
