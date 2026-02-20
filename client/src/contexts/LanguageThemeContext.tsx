/**
 * LanguageThemeContext - Gerenciador Global de Idioma e Tema
 * 
 * Fornece contexto para gerenciar o idioma (PT, EN, ES) e tema (claro/escuro)
 * em toda a aplicação, com persistência no localStorage.
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language } from '@/data/languages';

interface LanguageThemeContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
}

const LanguageThemeContext = createContext<LanguageThemeContextType | undefined>(undefined);

export function LanguageThemeProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Obter idioma do localStorage ou usar português como padrão
    const saved = localStorage.getItem('language') as Language | null;
    return saved || 'pt';
  });

  const [theme, setThemeState] = useState<'light' | 'dark'>(() => {
    // Obter tema do localStorage ou usar preferência do sistema
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (saved) return saved;

    // Verificar preferência do sistema
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Atualizar idioma
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Atualizar tema
  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);

    // Aplicar classe ao documento
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Toggle tema
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Aplicar tema ao montar
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <LanguageThemeContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </LanguageThemeContext.Provider>
  );
}

// Hook para usar o contexto
export function useLanguageTheme() {
  const context = useContext(LanguageThemeContext);
  if (!context) {
    throw new Error('useLanguageTheme deve ser usado dentro de LanguageThemeProvider');
  }
  return context;
}
