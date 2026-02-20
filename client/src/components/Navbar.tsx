/**
 * Navbar - Barra de Navegação
 * 
 * Componente que exibe a barra de navegação com:
 * - Logo/Título
 * - Seletor de idioma (PT, EN, ES)
 * - Toggle de tema (claro/escuro)
 * 
 * Design: Premium e moderno
 * - Sticky no topo
 * - Fundo com backdrop blur
 * - Transições suaves
 */

import { motion } from 'framer-motion';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { getLanguageTexts } from '@/data/languages';
import { pageConfig } from '@/data/config';
import { Moon, Sun, Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Navbar() {
  const { language, setLanguage, theme, toggleTheme } = useLanguageTheme();
  const texts = getLanguageTexts(language);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0F0F0F]/80 backdrop-blur-md border-b border-[#E5E5E5] dark:border-[#2A2A2A]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo/Título */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center">
            <span className="text-white font-bold text-lg">📸</span>
          </div>
          <div>
            <p className="font-bold text-[#1A1A1A] dark:text-white text-sm">
              {pageConfig.photographerName}
            </p>
            <p className="text-xs text-[#666666] dark:text-[#999999]">
              {pageConfig.tagline}
            </p>
          </div>
        </motion.div>

        {/* Controles */}
        <div className="flex items-center gap-4">
          {/* Seletor de Idioma */}
          <Select value={language} onValueChange={(value: any) => setLanguage(value)}>
            <SelectTrigger className="w-32 bg-white dark:bg-[#1A1A1A] border-[#E5E5E5] dark:border-[#2A2A2A]">
              <Globe size={16} className="mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pt">Português</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>

          {/* Toggle Tema */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[#F5F5F5] dark:bg-[#1A1A1A] hover:bg-[#E5E5E5] dark:hover:bg-[#2A2A2A] transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon size={18} className="text-[#1A1A1A]" />
            ) : (
              <Sun size={18} className="text-[#D4AF37]" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
