
import React, { useState, useEffect } from 'react';
import { Menu, X, Waves, Facebook, Instagram, Youtube, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.about, href: "#o-mnie" },
    { label: t.nav.offer, href: "#oferta" },
    { label: t.nav.reviews, href: "#opinie" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.calendar, href: "#kalendarz" },
    { label: t.nav.contact, href: "#kontakt" },
  ];

  // Pasek nawigacji ma białe tło, jeśli strona jest przewinięta LUB menu mobilne jest otwarte
  const isNavSolid = scrolled || isOpen;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isNavSolid ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer z-50 group" onClick={() => window.scrollTo(0,0)}>
            <div className={`p-2 rounded-full transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 ${isNavSolid ? 'bg-primary-50 text-primary-600' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
              <Waves size={24} strokeWidth={2.5} />
            </div>
            <span className={`font-heading font-bold text-xl tracking-tight transition-colors duration-300 ${isNavSolid ? 'text-slate-900' : 'text-white'}`}>
              Milosh<span className="text-primary-500">Wave</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary-500 ${scrolled ? 'text-slate-600' : 'text-slate-100'}`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Social Media Icons */}
            <div className={`flex items-center gap-3 border-l pl-6 ${scrolled ? 'border-slate-200 text-slate-400' : 'border-white/10 text-slate-300'}`}>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="group relative hover:text-primary-500 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap relative">
                    Facebook
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-800"></div>
                  </div>
                </div>
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="group relative hover:text-primary-500 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap relative">
                    Instagram
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-800"></div>
                  </div>
                </div>
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="group relative hover:text-primary-500 transition-colors" aria-label="YouTube">
                <Youtube size={18} />
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap relative">
                    YouTube
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-800"></div>
                  </div>
                </div>
              </a>
            </div>
            
            <LanguageSwitcher isScrolled={scrolled} className="ml-2 mr-2" />

            <a
              href="#kontakt"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm transform hover:scale-105 ${
                scrolled 
                  ? 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-md' 
                  : 'bg-white text-primary-700 hover:bg-slate-100'
              }`}
            >
              {t.nav.book}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <LanguageSwitcher isScrolled={isNavSolid} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-all duration-300 transform ${isOpen ? 'rotate-90' : 'rotate-0'} ${isNavSolid ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Staggered Animation */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full min-h-screen bg-white/95 backdrop-blur-xl transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <div className="flex-1 space-y-2">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`group flex items-center justify-between px-4 py-4 rounded-xl text-lg font-bold text-slate-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-500 ease-out transform ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${isOpen ? idx * 75 : 0}ms` }}
                onClick={() => setIsOpen(false)}
              >
                <span className="group-hover:translate-x-2 transition-transform duration-300">{item.label}</span>
                <ChevronRight size={20} className="text-primary-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Bottom CTA in Mobile Menu */}
          <div 
            className={`pt-6 mt-4 border-t border-slate-100 transition-all duration-500 ease-out transform ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: `${isOpen ? navItems.length * 75 : 0}ms` }}
          >
             <a
              href="#kontakt"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-5 rounded-2xl text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/30 active:scale-95 transition-all"
            >
              {t.nav.bookLesson}
            </a>
            
            <div className="flex justify-center gap-6 mt-8 text-slate-400">
               <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
               <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
               <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
