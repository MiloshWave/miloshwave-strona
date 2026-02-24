
import React from 'react';
import { Users, Waves, Award } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../contexts/LanguageContext';

const Stats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: t.stats.clients.value,
      label: t.stats.clients.label,
    },
    {
      icon: Waves,
      value: t.stats.lessons.value,
      label: t.stats.lessons.label,
    },
    {
      icon: Award,
      value: t.stats.certificates.value,
      label: t.stats.certificates.label,
    },
  ];

  return (
    <section className="bg-primary-600 py-16 text-white relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-primary-500/50">
          {stats.map((stat, index) => (
            <RevealOnScroll key={index} direction="up" delay={index * 150} className="p-6 flex flex-col items-center">
              <div className="mb-4 p-3 bg-primary-500/50 rounded-full text-primary-100 backdrop-blur-sm shadow-inner">
                <stat.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-primary-100 font-medium text-lg">
                {stat.label}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
