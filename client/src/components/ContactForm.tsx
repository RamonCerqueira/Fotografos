/**
 * ContactForm - Formulário de Contato
 * 
 * Componente que exibe um formulário para gerar leads
 * com campos: nome, WhatsApp, site atual, instagram e mensagem.
 * 
 * Design: Moderno e Minimalista (Glassmorphism)
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { getLanguageTexts } from '@/data/languages';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import type { ContactFormData } from '@/types';
import { User, Phone, Globe, Instagram, MessageSquare, Send } from 'lucide-react';

export default function ContactForm() {
  const { ref, controls } = useScrollReveal();
  const { theme, language } = useLanguageTheme();
  const texts = getLanguageTexts(language);
  
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    whatsapp: '',
    message: '',
    currentSite: '',
    instagram: '',
    plan: '',
    layoutModel: '',
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name.trim() || !formData.whatsapp.trim()) {
      toast.error('Por favor, preencha nome e WhatsApp');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar email');
      }

      // Mostrar mensagem de sucesso
      toast.success(texts.contactForm.success);

      // Limpar formulário
      setFormData({
        name: '',
        whatsapp: '',
        message: '',
        currentSite: '',
        instagram: '',
        plan: '',
        layoutModel: '',
      });
    } catch (error) {
      toast.error(texts.contactForm.error);
    } finally {
      setIsLoading(false);
    }
  };

  const isDark = theme === 'dark';

  return (
    <section 
      className={`section-gap relative overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-b from-[#121212] to-[#000000]' 
          : 'bg-gradient-to-b from-[#FDFBF7] to-[#FFFFFF]'
      }`}
    >
      <div className="container relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          ref={ref}
          animate={controls}
          variants={containerVariants as any}
        >
          {/* Cabeçalho */}
          <motion.div className="text-center mb-16" variants={itemVariants as any}>
             <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30">
                <span className="text-sm font-semibold text-[#D4AF37]">Contato</span>
              </div>
            <h2 className={`text-heading-1 mb-4 ${isDark ? 'text-white' : 'text-[#1A1A1A]'}`}>
              {texts.contactForm.title}
            </h2>
            <p className={`text-body ${isDark ? 'text-[#CCCCCC]' : 'text-[#666666]'}`}>
              {texts.contactForm.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Informações de Contato / Lateral */}
            <motion.div 
              className={`md:col-span-2 p-8 rounded-3xl flex flex-col justify-between ${
                isDark ? 'bg-[#1A1A1A] border border-[#333]' : 'bg-[#F5F5F5] border border-[#E5E5E5]'
              }`}
              variants={itemVariants as any}
            >
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  Informações
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className={`text-sm opacity-70 ${isDark ? 'text-white' : 'text-black'}`}>WhatsApp</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>(71) 98127-0742</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                      <Instagram size={20} />
                    </div>
                    <div>
                      <p className={`text-sm opacity-70 ${isDark ? 'text-white' : 'text-black'}`}>Instagram</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>@rc_devweb</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <p className={`text-sm opacity-60 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  "Transforme visitantes em clientes com um site profissional."
                </p>
              </div>
            </motion.div>

            {/* Formulário Moderno */}
            <motion.form
              onSubmit={handleSubmit}
              className={`md:col-span-3 p-8 rounded-3xl backdrop-blur-md shadow-2xl border ${
                isDark 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-white border-gray-100'
              }`}
              variants={containerVariants as any}
            >
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {texts.contactForm.labels.name}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        name="name"
                        placeholder={texts.contactForm.placeholders.name}
                        value={formData.name}
                        onChange={handleChange}
                        className={`pl-10 h-12 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-50 border-gray-200'}`}
                      />
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {texts.contactForm.labels.whatsapp}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        name="whatsapp"
                        placeholder={texts.contactForm.placeholders.whatsapp}
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className={`pl-10 h-12 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-50 border-gray-200'}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   {/* Instagram */}
                   <div className="space-y-2">
                    <label className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {texts.contactForm.labels.instagram}
                    </label>
                    <div className="relative">
                      <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        name="instagram"
                        placeholder={texts.contactForm.placeholders.instagram}
                        value={formData.instagram}
                        onChange={handleChange}
                        className={`pl-10 h-12 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-50 border-gray-200'}`}
                      />
                    </div>
                  </div>

                  {/* Site Atual */}
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {texts.contactForm.labels.currentSite}
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        name="currentSite"
                        placeholder={texts.contactForm.placeholders.currentSite}
                        value={formData.currentSite}
                        onChange={handleChange}
                        className={`pl-10 h-12 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-50 border-gray-200'}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Mensagem */}
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {texts.contactForm.labels.message}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-gray-400" size={18} />
                    <Textarea
                      name="message"
                      placeholder={texts.contactForm.placeholders.message}
                      value={formData.message}
                      onChange={handleChange}
                      className={`pl-10 min-h-[120px] ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-gray-50 border-gray-200'}`}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B4941F] hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300"
                >
                  {isLoading ? 'Enviando...' : (
                    <span className="flex items-center gap-2">
                      {texts.contactForm.submit} <Send size={18} />
                    </span>
                  )}
                </Button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
