/**
 * DemoLayout - Layout para Páginas de Demonstração
 * 
 * Componente que envolve as páginas de demo com:
 * - Botão de voltar
 * - Informações do estilo
 * - Opção de customizar cores
 */

import { motion } from 'framer-motion';
import { ArrowLeft, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'wouter';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';

interface DemoLayoutProps {
  children: React.ReactNode;
  photographerName: string;
  style: string;
  primaryColor: string;
  accentColor: string;
}

export default function DemoLayout({
  children,
  photographerName,
  style,
  primaryColor,
  accentColor,
}: DemoLayoutProps) {
  const [, setLocation] = useLocation();
  const { theme } = useLanguageTheme();
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    const code = `<!-- Cores deste template -->
Primary: ${primaryColor}
Accent: ${accentColor}
Photographer: ${photographerName}
Style: ${style}`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === 'dark' ? 'bg-[#0F0F0F]' : 'bg-white'
      }`}
    >
      {/* Header da Demo */}
      <motion.div
        className={`sticky top-16 z-40 border-b backdrop-blur-md ${
          theme === 'dark'
            ? 'bg-[#0F0F0F]/80 border-[#2A2A2A]'
            : 'bg-white/80 border-[#E5E5E5]'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container flex items-center justify-between py-4">
          {/* Botão Voltar */}
          <motion.button
            onClick={() => setLocation('/')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white'
                : 'bg-[#F5F5F5] hover:bg-[#E5E5E5] text-[#1A1A1A]'
            }`}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-semibold">Voltar</span>
          </motion.button>

          {/* Informações */}
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p
                className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-[#1A1A1A]'
                }`}
              >
                {photographerName}
              </p>
              <p
                className={`text-xs ${
                  theme === 'dark' ? 'text-[#999999]' : 'text-[#666666]'
                }`}
              >
                {style}
              </p>
            </div>

            {/* Cores */}
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <motion.div
                  className="w-6 h-6 rounded-full border-2 border-white shadow-lg"
                  style={{ backgroundColor: primaryColor }}
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div
                  className="w-6 h-6 rounded-full border-2 border-white shadow-lg"
                  style={{ backgroundColor: accentColor }}
                  whileHover={{ scale: 1.2 }}
                />
              </div>

              {/* Botão Copiar */}
              <motion.button
                onClick={handleCopyCode}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white'
                    : 'bg-[#F5F5F5] hover:bg-[#E5E5E5] text-[#1A1A1A]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Cores</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conteúdo da Demo */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
