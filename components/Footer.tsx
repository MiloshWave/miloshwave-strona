
import React from 'react';
import { Waves, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCookies } from '../contexts/CookieContext';
import LanguageSwitcher from './LanguageSwitcher';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { resetCookies } = useCookies();

  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-slate-800 text-primary-400">
              <Waves size={20} />
            </div>
            <span className="font-heading font-bold text-lg text-white">
              Milosh<span className="text-primary-500">Wave</span>
            </span>
          </div>

          <div className="flex gap-4">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="group relative text-slate-400 hover:text-primary-400 transition-colors bg-slate-800 p-2 rounded-full hover:bg-slate-700" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="group relative text-slate-400 hover:text-primary-400 transition-colors bg-slate-800 p-2 rounded-full hover:bg-slate-700" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="group relative text-slate-400 hover:text-primary-400 transition-colors bg-slate-800 p-2 rounded-full hover:bg-slate-700" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
             <div className="bg-slate-800 rounded-lg p-1">
               <LanguageSwitcher isScrolled={false} className="" />
             </div>
            <div className="text-slate-500 text-sm text-center md:text-right">
              <p>© {new Date().getFullYear()} Nauka Pływania Neustadt. {t.footer.rights}</p>
              <div className="flex gap-4 justify-center md:justify-end mt-2">
                <p>{t.footer.desc}</p>
                <button onClick={resetCookies} className="hover:text-primary-400 underline">
                  {t.footer.cookies}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
