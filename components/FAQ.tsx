import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="down">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-primary-50 text-primary-600 rounded-full mb-4">
              <HelpCircle size={24} />
            </div>
            <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">{t.faq.subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              {t.faq.title}
            </h3>
          </div>
        </RevealOnScroll>

        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <RevealOnScroll key={index} direction="up" delay={index * 100}>
              <div 
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  openIndex === index 
                    ? 'border-primary-200 bg-primary-50/30 shadow-sm' 
                    : 'border-slate-100 bg-white hover:border-slate-200'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-primary-700' : 'text-slate-800'}`}>
                    {item.question}
                  </span>
                  <span className={`ml-4 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180 text-primary-500' : 'text-slate-400'}`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                
                <div 
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;