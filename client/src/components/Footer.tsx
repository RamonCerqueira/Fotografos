/**
 * Footer - Rodapé da Página
 * 
 * Componente que exibe informações de contato e links sociais
 * no rodapé da página com suporte a tema e idioma.
 * 
 * Design: Premium e moderno
 * - Fundo com gradiente sutil
 * - Separador em ouro
 * - Links clicáveis para WhatsApp, email e Instagram
 * - Layout responsivo e centrado
 */

import { Mail, MessageCircle, Instagram } from 'lucide-react';
import { pageConfig } from '@/data/config';
import { useLanguageTheme } from '@/contexts/LanguageThemeContext';
import { getLanguageTexts } from '@/data/languages';

export default function Footer() {
  const { theme, language } = useLanguageTheme();
  const texts = getLanguageTexts(language);

  return (
    <footer
      className={`py-12 border-t ${
        theme === 'dark' ? 'bg-[#0F0F0F] border-[#2A2A2A]' : 'bg-white border-[#F5F5F5]'
      }`}
    >
      {/* Separador em ouro */}
      <div className="h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-transparent mb-12"></div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contato WhatsApp */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-2">
              <MessageCircle size={20} className="text-[#D4AF37]" />
              <span
                className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#1A1A1A]'
                }`}
              >
                WhatsApp
              </span>
            </div>
            <a
              href={pageConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-[#D4AF37] transition-colors duration-300 ${
                theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#1A1A1A]'
              }`}
            >
              {pageConfig.contact.whatsappNumber}
            </a>
          </div>

          {/* Contato Email */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-2">
              <Mail size={20} className="text-[#D4AF37]" />
              <span
                className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#1A1A1A]'
                }`}
              >
                E-mail
              </span>
            </div>
            <a
              href={`mailto:${pageConfig.contact.email}`}
              className={`hover:text-[#D4AF37] transition-colors duration-300 ${
                theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#1A1A1A]'
              }`}
            >
              {pageConfig.contact.email}
            </a>
          </div>

          {/* Instagram */}
          {pageConfig.contact.instagramHandle && (
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-2">
                <Instagram size={20} className="text-[#D4AF37]" />
                <span
                  className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-[#D4AF37]' : 'text-[#1A1A1A]'
                  }`}
                >
                  Instagram
                </span>
              </div>
              <a
                href={`https://instagram.com/${pageConfig.contact.instagramHandle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-[#D4AF37] transition-colors duration-300 ${
                  theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#1A1A1A]'
                }`}
              >
                {pageConfig.contact.instagramHandle}
              </a>
            </div>
          )}
        </div>

        {/* Separador */}
        <div
          className={`h-px my-8 ${theme === 'dark' ? 'bg-[#2A2A2A]' : 'bg-[#F5F5F5]'}`}
        ></div>

        {/* Copyright */}
        <div
          className={`text-center text-sm ${
            theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#1A1A1A]'
          }`}
        >
          <p>{texts.footer.copyright}</p>
          <p
            className={`mt-2 text-xs ${
              theme === 'dark' ? 'text-[#999999]' : 'text-[#1A1A1A]/60'
            }`}
          >
            Landing Page Template para Fotógrafos Profissionais
          </p>
        </div>
      </div>
    </footer>
  );
}
