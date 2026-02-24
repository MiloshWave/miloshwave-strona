
import React from 'react';
import { Baby, User, Trophy, Check } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'kids',
      title: t.services.kids.title,
      description: t.services.kids.description,
      price: t.services.kids.price,
      features: t.services.kids.features,
      icon: Baby,
    },
    {
      id: 'adults',
      title: t.services.adults.title,
      description: t.services.adults.description,
      price: t.services.adults.price,
      features: t.services.adults.features,
      icon: User,
      popular: true,
    },
    {
      id: 'pro',
      title: t.services.pro.title,
      description: t.services.pro.description,
      price: t.services.pro.price,
      features: t.services.pro.features,
      icon: Trophy,
    },
  ];

  return (
    <section id="oferta" className="py-24 bg-slate-900 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll direction="down">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary-400 font-bold tracking-wide uppercase text-sm mb-3">{t.services.subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              {t.services.title}
            </h3>
            <p className="text-slate-400 text-lg">
              {t.services.description}
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={service.id} direction="up" delay={index * 150} className="h-full">
              <div 
                className={`relative flex flex-col rounded-2xl transition-all duration-300 h-full p-8 group ${
                  service.popular 
                    ? 'bg-slate-800 border-2 border-primary-500 shadow-xl scale-100 md:scale-105 z-10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/30 hover:border-primary-400' 
                    : 'bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:-translate-y-2 hover:border-primary-400 hover:shadow-xl hover:shadow-primary-500/20'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-xl">
                    {t.services.adults.popularTag}
                  </div>
                )}

                {/* Animated Icon Container */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ease-out transform group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.6)] ${
                  service.popular 
                    ? 'bg-primary-500 text-white shadow-[0_0_15px_rgba(14,165,233,0.4)]' 
                    : 'bg-slate-700 text-primary-400 group-hover:bg-primary-500 group-hover:text-white'
                }`}>
                  <service.icon size={28} className="transition-transform duration-500 group-hover:scale-110" strokeWidth={2} />
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
                <p className="text-slate-400 mb-6 flex-grow">{service.description}</p>
                
                <div className="text-3xl font-bold text-white mb-6">
                  {service.price}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm group/item">
                      <Check size={18} className="text-primary-500 shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#kontakt" 
                  className={`w-full py-3 rounded-lg font-bold text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    service.popular 
                      ? 'bg-primary-500 text-white hover:bg-primary-400' 
                      : 'bg-slate-700 text-white hover:bg-primary-500'
                  }`}
                >
                  {t.services.choose}
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
