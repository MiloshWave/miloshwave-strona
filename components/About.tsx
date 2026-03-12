
import React from 'react';
import { Award, Heart, MessageCircle } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../contexts/LanguageContext';
import EditableImage from './EditableImage';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="o-mnie" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <RevealOnScroll direction="left" className="relative">
            {/* Changed aspect ratio to 4:5 for better full-body fit and changed object-top to object-center */}
            <div className="aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 relative z-10 group">
              <EditableImage 
                imageKey="instructorPortrait"
                alt="Instruktor pływania" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Optional overlay gradient for better text readability if needed, currently subtle */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary-200 rounded-2xl z-0 hidden lg:block"></div>
            <div className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 z-20 animate-in slide-in-from-left-4 duration-1000">
              <div className="bg-primary-100 p-2 rounded-full text-primary-600">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">{t.about.languageBadgeLabel}</p>
                <p className="font-bold text-slate-800">{t.about.languageBadgeValue}</p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={200}>
            <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">{t.about.subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 whitespace-pre-line">
              {t.about.title}
            </h3>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <p>{t.about.p4}</p>
            </div>

            <RevealOnScroll direction="up" delay={400} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="flex flex-col gap-2 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary-100 transition-colors">
                <Award className="text-primary-500 mb-2" size={32} />
                <h4 className="font-bold text-slate-900">{t.about.card1Title}</h4>
                <p className="text-sm text-slate-500">{t.about.card1Desc}</p>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary-100 transition-colors">
                <Heart className="text-primary-500 mb-2" size={32} />
                <h4 className="font-bold text-slate-900">{t.about.card2Title}</h4>
                <p className="text-sm text-slate-500">{t.about.card2Desc}</p>
              </div>
            </RevealOnScroll>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default About;
