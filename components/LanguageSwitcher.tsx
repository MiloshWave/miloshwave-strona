import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  className?: string;
  isScrolled?: boolean;
}

const LanguageSwitcher: React.FC<Props> = ({ className = '', isScrolled = false }) => {
  const { language, setLanguage } = useLanguage();
  
  const activeClass = isScrolled 
    ? 'text-primary-700 bg-primary-100 font-bold' 
    : 'text-primary-500 bg-white font-bold';
    
  const inactiveClass = isScrolled
    ? 'text-slate-500 hover:text-slate-800'
    : 'text-slate-300 hover:text-white';

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button 
        onClick={() => setLanguage('pl')}
        className={`px-2 py-1 text-sm rounded transition-colors ${language === 'pl' ? activeClass : inactiveClass}`}
      >
        PL
      </button>
      <span className={isScrolled ? 'text-slate-300' : 'text-slate-400'}>|</span>
      <button 
        onClick={() => setLanguage('de')}
        className={`px-2 py-1 text-sm rounded transition-colors ${language === 'de' ? activeClass : inactiveClass}`}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;