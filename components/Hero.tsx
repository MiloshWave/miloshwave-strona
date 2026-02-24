
import React from 'react';
import { MapPin, Phone, User } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import RevealOnScroll from './RevealOnScroll';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBackground}
          alt="Basen pływacki"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          <RevealOnScroll direction="down" duration={800}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-400/30 backdrop-blur-md mb-6">
              <MapPin size={14} className="text-primary-300" />
              <span className="text-xs font-semibold text-primary-100 uppercase tracking-wider">{t.hero.locationBadge}</span>
            </div>
          </RevealOnScroll>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold text-white leading-tight mb-6">
            <RevealOnScroll as="span" direction="up" delay={200} duration={800} className="block">
              {t.hero.titleMain}
            </RevealOnScroll>
            <RevealOnScroll as="span" direction="up" delay={400} duration={800} className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
                {t.hero.titleHighlight}
              </span>
            </RevealOnScroll>
          </h1>
          
          <RevealOnScroll direction="up" delay={600} duration={800}>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
              {t.hero.description}
            </p>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={800} duration={800}>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <a 
                href="#oferta" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-primary-400 rounded-full hover:bg-primary-300 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:shadow-[0_0_30px_rgba(56,189,248,0.7)]"
              >
                {t.hero.viewOffer}
              </a>
              
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-1 hover:scale-105"
              >
                <Phone className="mr-2 w-5 h-5" />
                {t.hero.callNow}
              </a>

              <a 
                href="#o-mnie" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-slate-600 rounded-full hover:bg-slate-800 hover:border-slate-700 transition-all hover:scale-105"
              >
                <User className="mr-2 w-5 h-5" />
                {t.hero.meetInstructor}
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={1000} duration={800}>
            <div className="mt-12 flex items-center gap-6 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                {t.hero.availableDates}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                {t.hero.individualApproach}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default Hero;
