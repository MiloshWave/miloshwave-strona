
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCookies } from '../contexts/CookieContext';
import { Cookie } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const { t } = useLanguage();
  const { isConsentGiven, acceptCookies, declineCookies } = useCookies();

  if (isConsentGiven !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-[100] p-4 md:p-6 animate-in slide-in-from-bottom-full duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start md:items-center gap-4">
          <div className="p-3 bg-primary-50 text-primary-600 rounded-full shrink-0">
            <Cookie size={24} />
          </div>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
            {t.cookies.text}
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button
            onClick={declineCookies}
            className="flex-1 md:flex-none px-6 py-2.5 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
          >
            {t.cookies.decline}
          </button>
          <button
            onClick={acceptCookies}
            className="flex-1 md:flex-none px-6 py-2.5 text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-md transition-all hover:scale-105 whitespace-nowrap"
          >
            {t.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
