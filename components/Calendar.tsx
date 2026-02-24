
import React from 'react';
import { Calendar as CalendarIcon, ExternalLink, Clock, CheckCircle, Lock } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../contexts/LanguageContext';
import { useCookies } from '../contexts/CookieContext';
import { CALENDAR_CONFIG } from '../constants';

const Calendar: React.FC = () => {
  const { t } = useLanguage();
  const { isConsentGiven, resetCookies } = useCookies();

  return (
    <section id="kalendarz" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-primary-50/30 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll direction="down">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary-400 to-primary-600 text-white rounded-2xl mb-6 shadow-lg shadow-primary-500/20 transform rotate-3">
              <CalendarIcon size={28} />
            </div>
            <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">{t.calendar.subtitle}</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              {t.calendar.title}
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              {t.calendar.description}
            </p>

            {/* Quick instructions/benefits */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                <Clock size={16} className="text-primary-500" />
                <span>24/7 Online</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                <CheckCircle size={16} className="text-green-500" />
                <span>Natychmiastowe potwierdzenie</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={200}>
          {/* Main Calendar Card Wrapper */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-2 md:p-3 relative">
              {/* Top decoration bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-gradient-to-r from-primary-300 via-primary-500 to-primary-300 rounded-b-xl opacity-80"></div>
              
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/60 relative">
                 {/* Loading placeholder logic implies styling the iframe container */}
                <div className="relative w-full h-[800px] bg-white">
                   {isConsentGiven ? (
                     <iframe 
                      src={CALENDAR_CONFIG.googleCalendarUrl} 
                      style={{border: 0}} 
                      width="100%" 
                      height="100%" 
                      frameBorder="0" 
                      title="Kalendarz dostępności"
                      className="w-full h-full"
                    ></iframe>
                   ) : (
                     <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 p-6 text-center">
                       <div className="p-4 bg-slate-200 rounded-full text-slate-500 mb-4">
                         <Lock size={32} />
                       </div>
                       <h4 className="text-xl font-bold text-slate-800 mb-2">Google Calendar</h4>
                       <p className="text-slate-500 mb-6 max-w-md">
                         {t.calendar.cookiesRequired}
                       </p>
                       <button 
                        onClick={resetCookies}
                        className="px-6 py-2 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition-colors"
                       >
                         {t.calendar.enableCookies}
                       </button>
                     </div>
                   )}
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-slate-500 mb-4 text-sm">Masz problem z widokiem?</p>
              <a 
                href={CALENDAR_CONFIG.googleCalendarUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-primary-300 text-slate-700 hover:text-primary-600 font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                {t.calendar.openNewWindow}
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Calendar;
