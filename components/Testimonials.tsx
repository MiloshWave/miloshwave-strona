import React from 'react';
import { Star, Quote } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = t.testimonials.items.map((item, idx) => ({
    ...item,
    id: idx.toString(),
    rating: 5,
  }));

  return (
    <section id="opinie" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="down">
          <div className="text-center mb-16">
            <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">{t.testimonials.subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              {t.testimonials.title}
            </h3>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <RevealOnScroll key={item.id} direction="up" delay={index * 150} className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative h-full flex flex-col">
                <Quote className="absolute top-6 right-6 text-primary-100" size={48} />
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic relative z-10 flex-grow">"{item.text}"</p>
                <div className="mt-auto">
                    <p className="font-bold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">{item.location}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;