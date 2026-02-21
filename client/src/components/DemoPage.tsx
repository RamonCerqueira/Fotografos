/**
 * DemoPage - Componente para renderizar páginas de demo de fotógrafos
 * 
 * Renderiza layouts distintos baseados no estilo do fotógrafo (variant)
 */

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { getLanguageTexts } from '@/data/languages';
import { DemoPhotographerData } from '@/data/demoPortfolios';
import CameraLensLoader from './CameraLensLoader';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
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
  const { theme, language } = useLanguageTheme();
  const texts = getLanguageTexts(language);
  const [location, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const seoTitle = `${photographer.name} | ${photographer.tagline}`;
  const seoDesc = photographer.description;
  const seoImage = photographer.heroImage || photographer.portfolio[0]?.imageUrl;
  const fullUrl = `https://fotografos-beta.vercel.app${location}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Photographer",
    "name": photographer.name,
    "description": photographer.description,
    "image": seoImage,
    "url": fullUrl,
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "makesOffer": photographer.services.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.title,
        "description": service.description
      }
    }))
  };

  const goToAlbum = (albumId: string) => {
    setLocation(`/demo/${photographer.id}/album/${albumId}`);
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' }
  ];

  // --- LAYOUT MINIMALISTA ---
  // Foco em tipografia, espaço em branco e simplicidade.
  const renderMinimalist = () => (
    <div className={`min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white ${theme === 'dark' ? 'bg-[#0f0f0f] text-[#e0e0e0]' : 'bg-[#fcfcfc] text-[#2c2c2c]'}`}>
      {/* Header Minimalista */}
      <header className={`fixed w-full z-50 p-8 flex justify-between items-center transition-all duration-300 ${isMenuOpen ? 'bg-white dark:bg-black' : 'bg-transparent mix-blend-difference text-white'}`}>
        <h1 className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase z-50">{photographer.name}</h1>
        
        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-12 text-xs font-medium tracking-[0.2em] uppercase">
          <a href="#portfolio" className="hover:text-[#D4AF37] transition-colors relative group">
            {texts.demo.nav.portfolio}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#services" className="hover:text-[#D4AF37] transition-colors relative group">
            {texts.demo.nav.services}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-[#D4AF37] transition-colors relative group">
            {texts.demo.nav.about}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors relative group">
            {texts.demo.nav.contact}
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Menu Mobile Button */}
        <button 
          className="md:hidden z-50 p-2 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Mobile Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col justify-center items-center gap-8"
            >
              <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-2xl font-light tracking-widest uppercase hover:text-[#D4AF37]">{texts.demo.nav.portfolio}</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-light tracking-widest uppercase hover:text-[#D4AF37]">{texts.demo.nav.services}</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-light tracking-widest uppercase hover:text-[#D4AF37]">{texts.demo.nav.about}</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-light tracking-widest uppercase hover:text-[#D4AF37]">{texts.demo.nav.contact}</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Minimalista Refinado */}
      <section className="h-screen relative flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background Sutil */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-400 via-transparent to-transparent opacity-40 blur-3xl transform scale-150"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <span className="block text-xs md:text-sm tracking-[0.5em] uppercase text-[#D4AF37] mb-6">
            {photographer.specialty} {texts.demo.hero.photography}
          </span>
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-extralight tracking-tighter mb-8 leading-none">
            {photographer.name.split(' ').map((word, i) => (
              <span key={i} className="inline-block mx-2">{word}</span>
            ))}
          </h2>
          <div className="w-[1px] h-24 bg-[#D4AF37] mx-auto mt-8 opacity-60"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-0 w-full flex justify-center animate-bounce"
        >
          <ChevronDown className="opacity-30" size={32} />
        </motion.div>
      </section>

      {/* Portfólio - Grid Assimétrico Moderno */}
      <section id="portfolio" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-gray-200 dark:border-gray-800 pb-8"
          >
            <div>
              <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase block mb-2">{texts.demo.portfolio.selectedWorks}</span>
              <h3 className="text-3xl md:text-5xl font-light">{texts.demo.portfolio.title}</h3>
            </div>
            <p className="text-sm opacity-50 max-w-xs mt-4 md:mt-0 text-right">
              {texts.demo.portfolio.curation}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {photographer.portfolio.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group cursor-pointer relative ${
                  index % 3 === 0 ? 'md:col-span-8' : 
                  index % 3 === 1 ? 'md:col-span-4 md:mt-32' : 
                  'md:col-span-12 mt-12'
                }`}
                onClick={() => goToAlbum(item.id)}
              >
                <div className="overflow-hidden relative aspect-[3/4] md:aspect-[4/3]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500 z-10"></div>
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out transform group-hover:scale-110" 
                  />
                  <div className="absolute bottom-0 left-0 p-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-white/80 text-xs tracking-widest uppercase block mb-2">{item.category}</span>
                    <h3 className="text-white text-3xl font-light">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-24 text-center">
            <Button variant="outline" className="rounded-full px-12 py-6 border-gray-300 hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-all duration-300 uppercase tracking-widest text-xs">
              Ver Portfólio Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Services - Layout Limpo e Estruturado */}
      <section id="services" className="py-32 bg-[#fafafa] dark:bg-[#0c0c0c]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase block mb-4">{texts.demo.services.whatIOffer}</span>
            <h3 className="text-4xl md:text-5xl font-light">{texts.demo.services.title}</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
            {photographer.services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-[#0a0a0a] p-12 hover:bg-[#fafafa] dark:hover:bg-[#111] transition-colors duration-500 flex flex-col items-center text-center group"
              >
                <div className="mb-8 p-4 rounded-full bg-gray-50 dark:bg-gray-900 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500">
                  {service.icon === 'Camera' && <Camera size={28} strokeWidth={1} />}
                  {service.icon === 'Heart' && <Heart size={28} strokeWidth={1} />}
                  {service.icon === 'BookOpen' && <Layers size={28} strokeWidth={1} />}
                </div>
                <h4 className="text-xl font-medium mb-4">{service.title}</h4>
                <p className="text-sm opacity-60 leading-relaxed mb-8">{service.description}</p>
                <ul className="text-xs space-y-3 opacity-50 uppercase tracking-wider">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center justify-center gap-2">
                      <span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About - Layout Editorial */}
      <section id="about" className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <img 
                src={photographer.heroImage || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&fit=crop"} 
                alt={photographer.name} 
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[#D4AF37] hidden md:block z-[-1]"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-gray-50 dark:bg-zinc-900 hidden md:block z-[-1]"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase block mb-6">{texts.demo.about.title}</span>
            <h3 className="text-4xl md:text-5xl font-light mb-8 leading-tight">{texts.demo.about.description}</h3>
            <p className="text-lg opacity-70 font-light leading-relaxed mb-8">
              {photographer.description}
            </p>
            <p className="text-sm opacity-60 leading-relaxed mb-12">
              Com mais de 10 anos de experiência, busco não apenas tirar fotos, mas criar memórias tangíveis que resistirão ao teste do tempo. Minha abordagem é documental e artística, focando nas emoções genuínas e nos detalhes que tornam seu dia único.
            </p>
            <div className="flex gap-4">
               <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" alt="Sony" className="h-4 opacity-30 grayscale" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Canon_logo.svg" alt="Canon" className="h-4 opacity-30 grayscale" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Minimalista */}
      <section className="py-32 bg-[#fafafa] dark:bg-[#0c0c0c] px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-6xl text-[#D4AF37] font-serif opacity-30 block mb-8">"</span>
          <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-12">
            {photographer.testimonials[0]?.content}
          </p>
          <div>
            <h5 className="text-sm font-bold tracking-[0.2em] uppercase">{photographer.testimonials[0]?.name}</h5>
            <span className="text-xs opacity-50 uppercase tracking-widest mt-2 block">{photographer.testimonials[0]?.role}</span>
          </div>
        </div>
      </section>

      {/* Contact Minimalista */}
      <section id="contact" className="py-32 px-6 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&fit=crop" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/80"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extralight mb-8">{texts.demo.contact.title}</h2>
          <p className="text-lg text-gray-300 font-light mb-12 max-w-lg mx-auto">
            {texts.demo.contact.subtitle}
          </p>
          <Button 
            className="bg-white text-black hover:bg-[#D4AF37] hover:text-white rounded-none px-12 py-8 text-xs tracking-[0.2em] uppercase transition-all duration-300"
            onClick={() => window.location.href = `mailto:contato@${photographer.id}.com`}
          >
            {texts.demo.contact.button}
          </Button>
          
          <div className="flex justify-center gap-12 mt-24">
            {socialLinks.map((link, i) => (
              <a key={i} href={link.href} className="text-white/50 hover:text-[#D4AF37] transition-colors" aria-label={link.name}>
                <link.icon size={20} />
              </a>
            ))}
          </div>
          
          <div className="mt-12 pt-12 border-t border-white/10 text-xs text-white/30 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} {photographer.name}. {texts.demo.footer.rights}
          </div>
        </div>
      </section>
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
             <h3 className="text-3xl italic font-serif mb-4">{texts.demo.services.solutions}</h3>
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
          <h3 className="text-4xl italic font-serif mb-6">{texts.contactForm.title}</h3>
          <p className="font-sans text-gray-500 mb-8">{texts.demo.contact.subtitle}</p>
          <Button 
            className="rounded-none px-12 py-6 uppercase tracking-widest text-xs font-sans hover:opacity-80 transition-opacity"
            style={{ backgroundColor: photographer.colors.primary, color: 'white' }}
          >
            {texts.demo.contact.button}
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
              className="absolute top-8 right-8 text-white hover:bg-white/20 rounded-full p-4 h-auto w-auto cursor-pointer z-[101]"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
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
                  className="text-6xl md:text-8xl font-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-gray-500 transition-all uppercase tracking-tighter cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            
            <div className="absolute bottom-12 flex gap-8">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} className="text-gray-400 hover:text-white transition-colors" aria-label={social.name}>
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-10 mix-blend-difference text-white pointer-events-none">
        <span className="text-2xl font-bold tracking-tighter uppercase pointer-events-auto">{photographer.name}</span>
        <Button 
          variant="outline" 
          className="rounded-full border-white text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all px-8 py-6 text-sm tracking-widest uppercase font-bold pointer-events-auto cursor-pointer z-50"
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
              <img 
                src={photographer.heroImage} 
                alt="Hero" 
                loading="eager"
                className="w-full h-full object-cover" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.parentElement?.classList.add('bg-gradient-to-br', 'from-gray-900', 'to-black');
                }}
              />
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
          <span className="text-xs uppercase tracking-[0.2em] opacity-70">{texts.demo.hero.scrollDown}</span>
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
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase">
            {texts.demo.portfolio.selectedWorks.split(' ')[0]}<br/>
            {texts.demo.portfolio.selectedWorks.split(' ').slice(1).join(' ')}
          </h2>
          <div className="flex items-center gap-4 mt-8 md:mt-0">
            <span className="text-sm uppercase tracking-wider opacity-60">{texts.demo.portfolio.viewCollection}</span>
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
              <div className="overflow-hidden mb-6 relative shadow-2xl rounded-sm">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10 duration-500" />
                <img src={item.imageUrl} alt={item.title} loading="lazy" className="w-full object-cover aspect-[3/4] grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-4 right-4 bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  {texts.demo.portfolio.viewCollection}
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
            {texts.demo.portfolio.viewAll}
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
              <div key={i} className="bg-black p-8 md:p-12 group hover:bg-zinc-900 transition-colors duration-500 border-l-4 border-transparent hover:border-[var(--primary)]" style={{ '--primary': photographer.colors.primary } as any}>
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
          <h2 className="text-[12vw] 2xl:text-[180px] font-bold tracking-tighter leading-none mb-12 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-gray-500 transition-all cursor-pointer mix-blend-exclusion">
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
                  <a key={i} href={social.href} className="hover:text-[var(--primary)] transition-colors transform hover:scale-110" style={{ color: 'white' }} aria-label={social.name}>
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
            {photographer.name} — {texts.demo.portfolio.title}
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
                     <img 
                       src={item.imageUrl} 
                       alt={item.title} 
                       className="w-full h-full object-cover" 
                       loading="lazy"
                     />
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
           <h2 className="text-5xl md:text-7xl font-black mb-16 text-center tracking-tighter">{texts.demo.services.process}</h2>
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
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">{texts.demo.contact.title}</h2>
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
            {texts.demo.contact.button}
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
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-sm text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Portfólio</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Clientes</a>
          </div>
          
          <div className="flex items-center gap-4">
             <Button 
               className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white"
               onClick={() => document.getElementById('contact-corporate')?.scrollIntoView({ behavior: 'smooth' })}
             >
               Agendar Reunião
             </Button>
             
             {/* Mobile Menu Toggle */}
             <button 
               className="md:hidden p-2 text-slate-600 dark:text-slate-300"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
             >
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4 text-slate-600 dark:text-slate-300">
                <a href="#" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-blue-600">Home</a>
                <a href="#" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-blue-600">Serviços</a>
                <a href="#" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-blue-600">Portfólio</a>
                <a href="#" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-blue-600">Clientes</a>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-2"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('contact-corporate')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Agendar Reunião
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
              <Button variant="outline" className="px-8 py-6 border-slate-300 dark:border-slate-600 dark:text-white">Nossos Serviços</Button>
            </div>
            <div className="mt-12 flex gap-8 text-slate-400">
               <div className="flex items-center gap-2"><Star className="text-yellow-400 fill-yellow-400" /> 5.0 Avaliação</div>
               <div className="flex items-center gap-2"><Layers /> +500 Projetos</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
            {photographer.heroImage ? (
               <img 
                 src={photographer.heroImage} 
                 alt="Corporate Hero" 
                 className="rounded-2xl shadow-xl relative z-10 w-full object-cover aspect-[4/3]"
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.parentElement?.querySelector('.fallback-hero')?.classList.remove('hidden');
                 }} 
               />
            ) : null}
            <div className={`fallback-hero rounded-2xl bg-slate-200 dark:bg-slate-700 w-full aspect-[4/3] flex items-center justify-center text-slate-400 ${photographer.heroImage ? 'hidden' : ''}`}>
              <ImageIcon size={48} />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate About */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" 
                alt="Office" 
                className="w-full h-full object-cover" 
                loading="lazy"
              />
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
                   <img 
                     src={item.imageUrl} 
                     alt={item.title} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                     loading="lazy"
                   />
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
      <footer id="contact-corporate" className="bg-slate-900 text-slate-300 py-16">
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

  const renderContent = () => {
    switch (variant) {
      case 'minimalista': return renderMinimalist();
      case 'classico': return renderClassic();
      case 'artistico': return renderArtistic();
      case 'corporativo': return renderCorporate();
      case 'criativo': return renderCreative();
      case 'moderno':
      default: return renderModern();
    }
  };

  const handleLoaderComplete = useCallback(() => setIsLoading(false), []);

  return (
    <>
      <SEO 
        title={seoTitle}
        description={seoDesc}
        image={seoImage}
        url={fullUrl}
        structuredData={structuredData}
      />
      <AnimatePresence mode="wait">
        {isLoading && (
          <CameraLensLoader key="loader" onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>
      <div className={isLoading ? 'h-screen overflow-hidden' : ''}>
        {renderContent()}
      </div>
    </>
  );
}