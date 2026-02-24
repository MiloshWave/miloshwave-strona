
import React from 'react';
import { Tag, Clock, Users, User, CheckCircle, Info } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="cennik" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="down">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-white text-primary-600 rounded-full mb-4 shadow-sm border border-slate-100">
              <Tag size={24} />
            </div>
            <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">{t.pricing.subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              {t.pricing.title}
            </h3>
          </div>
        </RevealOnScroll>

        {/* Removed the big wrapper RevealOnScroll to allow individual items to animate */}
          
          {/* DESKTOP TABLE VIEW (Hidden on mobile) */}
          <div className="hidden md:block mb-12">
             <RevealOnScroll direction="up" delay={100} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200">
                      <th className="p-4 md:p-6 text-sm font-bold text-slate-700 uppercase tracking-wider min-w-[200px]">{t.pricing.headers.service}</th>
                      <th className="p-4 md:p-6 text-sm font-bold text-slate-700 uppercase tracking-wider">{t.pricing.headers.time}</th>
                      <th className="p-4 md:p-6 text-sm font-bold text-slate-700 uppercase tracking-wider">{t.pricing.headers.single}</th>
                      <th className="p-4 md:p-6 text-sm font-bold text-primary-600 uppercase tracking-wider bg-primary-50/50">{t.pricing.headers.pack5}</th>
                      <th className="p-4 md:p-6 text-sm font-bold text-primary-700 uppercase tracking-wider bg-primary-100/50">{t.pricing.headers.pack10}</th>
                      <th className="p-4 md:p-6 text-sm font-bold text-slate-700 uppercase tracking-wider min-w-[250px]">{t.pricing.headers.info}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {t.pricing.rows.map((row, index) => (
                      <RevealOnScroll 
                        as="tr"
                        key={index} 
                        direction="up"
                        delay={200 + (index * 100)} // Staggered delay starting after table container
                        className="hover:bg-slate-50 transition-colors group"
                      >
                        <td className="p-4 md:p-6 font-bold text-slate-900">
                          {row.name}
                          {(row as any).badge && (
                            <span className="ml-2 inline-block px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">
                              {(row as any).badge}
                            </span>
                          )}
                        </td>
                        <td className="p-4 md:p-6 text-slate-600">{row.time}</td>
                        <td className="p-4 md:p-6 font-medium text-slate-900">{row.single}</td>
                        <td className="p-4 md:p-6 font-bold text-primary-600 bg-primary-50/30 group-hover:bg-primary-50/60 transition-colors">
                          <div className="flex flex-col">
                            <span>{row.pack5}</span>
                            {(row as any).pack5PerLesson && row.pack5 !== '-' && (
                              <span className="text-xs font-medium text-primary-500/80 mt-1">{(row as any).pack5PerLesson}</span>
                            )}
                          </div>
                        </td>
                        <td className="p-4 md:p-6 font-bold text-primary-700 bg-primary-100/30 group-hover:bg-primary-100/60 transition-colors">
                          <div className="flex flex-col">
                            <span>{row.pack10}</span>
                            {(row as any).pack10PerLesson && row.pack10 !== '-' && (
                              <span className="text-xs font-medium text-primary-600/80 mt-1">{(row as any).pack10PerLesson}</span>
                            )}
                          </div>
                        </td>
                        <td className="p-4 md:p-6 text-sm text-slate-500 italic">{row.info}</td>
                      </RevealOnScroll>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 bg-slate-50 border-t border-slate-100 text-center md:text-right">
                <p className="text-xs text-slate-500">{t.pricing.note}</p>
              </div>
             </RevealOnScroll>
          </div>

          {/* MOBILE CARD VIEW (Visible only on mobile) */}
          <div className="md:hidden space-y-4 mb-12">
            {t.pricing.rows.map((row, index) => (
              <RevealOnScroll key={index} direction="up" delay={index * 100}>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                  <div className="flex justify-between items-start mb-4 border-b border-slate-100 pb-4">
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">
                        {row.name}
                        {(row as any).badge && (
                          <span className="block mt-1 w-fit px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">
                            {(row as any).badge}
                          </span>
                        )}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                        <Clock size={14} /> {row.time}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Single Lesson */}
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm font-medium text-slate-600">{t.pricing.headers.single}</span>
                      <span className="font-bold text-slate-900">{row.single}</span>
                    </div>

                    {/* Pack 5 */}
                    {row.pack5 !== '-' && (
                      <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg border border-primary-100">
                        <span className="text-sm font-medium text-primary-700">{t.pricing.headers.pack5}</span>
                        <div className="text-right">
                          <span className="block font-bold text-primary-700">{row.pack5}</span>
                          {(row as any).pack5PerLesson && (
                            <span className="text-xs text-primary-600 block">{(row as any).pack5PerLesson}</span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Pack 10 */}
                    {row.pack10 !== '-' && (
                      <div className="flex justify-between items-center p-3 bg-primary-100 rounded-lg border border-primary-200">
                        <span className="text-sm font-medium text-primary-800">{t.pricing.headers.pack10}</span>
                        <div className="text-right">
                          <span className="block font-bold text-primary-800">{row.pack10}</span>
                          {(row as any).pack10PerLesson && (
                            <span className="text-xs text-primary-700 block">{(row as any).pack10PerLesson}</span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500 italic">
                    <Info size={14} className="shrink-0 mt-0.5" />
                    {row.info}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
            <div className="text-center mt-4">
              <p className="text-xs text-slate-500">{t.pricing.note}</p>
            </div>
          </div>

          {/* Feature Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {t.pricing.pricingFeatures && t.pricing.pricingFeatures.map((feature, idx) => {
               // Choose icon based on index
               const Icon = idx === 0 ? Users : (idx === 1 ? User : Users);
               
               return (
                <RevealOnScroll key={idx} direction="up" delay={300 + (idx * 150)} className="h-full">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full relative overflow-hidden">
                    {(feature as any).badge && (
                      <div className="absolute top-4 right-4 bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-full border border-amber-200">
                        {(feature as any).badge}
                      </div>
                    )}
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                        <Icon size={24} />
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                        <Clock size={14} />
                        <span>{feature.duration}</span>
                      </div>
                    </div>
                    
                    <h4 className="font-bold text-lg text-slate-900">{feature.title}</h4>
                    <p className="text-sm text-slate-500 mb-4">{feature.subtitle}</p>
                    
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-primary-600">{feature.price}</span>
                      {feature.priceDetail && (
                        <span className="block text-xs text-slate-400 font-medium">{feature.priceDetail}</span>
                      )}
                    </div>
                    
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle size={14} className="text-green-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
               );
            })}
          </div>

          <div className="text-center">
            <RevealOnScroll direction="up" delay={600}>
              <a 
                href="#kontakt" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
              >
                {t.nav.bookLesson}
              </a>
            </RevealOnScroll>
          </div>
      </div>
    </section>
  );
};

export default Pricing;
