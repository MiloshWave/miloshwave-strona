
import React, { createContext, useContext, useState } from 'react';
import { content } from '../translations';

type Language = 'pl' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof content.pl;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize language based on browser settings
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language || (navigator.languages && navigator.languages[0]);
      // If browser language starts with 'de', default to German
      if (browserLang && browserLang.toLowerCase().startsWith('de')) {
        return 'de';
      }
    }
    // Default fallback to Polish
    return 'pl';
  });

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: content[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
