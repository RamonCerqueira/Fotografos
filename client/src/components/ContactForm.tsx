/**
 * ContactForm - Formulário de Contato
 * 
 * Componente que exibe um formulário para gerar leads
 * com campos: nome, WhatsApp, tipo de ensaio e mensagem.
 * 
 * Design: Minimalismo Elegante
 * - Inputs com estilo limpo
 * - Validação básica
 * - Mensagem de sucesso/erro
 * - Integração com shadcn/ui
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { pageTexts, pageConfig } from '@/data/config';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import type { ContactFormData } from '@/types';

export default function ContactForm() {
  const { ref, controls } = useScrollReveal();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    whatsapp: '',
    message: '',
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
      toast.error('Por favor, preencha todos os campos obrigatórios');
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
      toast.success(pageTexts.contactForm.success);

      // Limpar formulário
      setFormData({
        name: '',
        whatsapp: '',
        message: '',
        plan: '',
        layoutModel: '',
      });
    } catch (error) {
      toast.error(pageTexts.contactForm.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section-gap bg-white">
      <div className="container">
        <motion.div
          className="max-w-2xl mx-auto"
          ref={ref}
          animate={controls}
          variants={containerVariants as any}
        >
          {/* Cabeçalho */}
          <motion.div className="text-center mb-12" variants={itemVariants as any}>
            <h2 className="text-heading-1 text-[#1A1A1A] mb-4">
              {pageTexts.contactForm.title}
            </h2>
            <p className="text-body text-[#666666]">
              {pageTexts.contactForm.subtitle}
            </p>
          </motion.div>

          {/* Formulário */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={containerVariants as any}
          >
            {/* Nome */}
            <motion.div variants={itemVariants as any}>
              <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                {pageTexts.contactForm.labels.name}
              </label>
              <Input
                type="text"
                name="name"
                placeholder={pageTexts.contactForm.placeholders.name}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors duration-300"
              />
            </motion.div>

            {/* WhatsApp */}
            <motion.div variants={itemVariants as any}>
              <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                {pageTexts.contactForm.labels.whatsapp}
              </label>
              <Input
                type="tel"
                name="whatsapp"
                placeholder={pageTexts.contactForm.placeholders.whatsapp}
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors duration-300"
              />
            </motion.div>

            {/* Plano Escolhido */}
            <motion.div variants={itemVariants as any}>
              <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                {pageTexts.contactForm.labels.plan}
              </label>
              <Input
                type="text"
                name="plan"
                placeholder={pageTexts.contactForm.placeholders.plan}
                value={formData.plan}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors duration-300"
              />
            </motion.div>

            {/* Modelo de Layout */}
            <motion.div variants={itemVariants as any}>
              <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                {pageTexts.contactForm.labels.layoutModel}
              </label>
              <Input
                type="text"
                name="layoutModel"
                placeholder={pageTexts.contactForm.placeholders.layoutModel}
                value={formData.layoutModel}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors duration-300"
              />
            </motion.div>

            {/* Mensagem */}
            <motion.div variants={itemVariants as any}>
              <label className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                {pageTexts.contactForm.labels.message}
              </label>
              <Textarea
                name="message"
                placeholder={pageTexts.contactForm.placeholders.message}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors duration-300 resize-none"
                rows={5}
              />
            </motion.div>

            {/* Botão Submit */}
            <motion.div variants={itemVariants as any}>
              <Button
                type="submit"
                disabled={isLoading}
                className="button-primary w-full text-lg py-6 hover:shadow-lg transition-all duration-300"
              >
                {isLoading ? 'Enviando...' : pageTexts.contactForm.submit}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
