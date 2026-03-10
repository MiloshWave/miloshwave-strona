
import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle, XCircle, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../constants';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Format phone for WhatsApp
  const whatsappNumber = CONTACT_INFO.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const YOUR_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID; 
    const YOUR_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const YOUR_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!YOUR_SERVICE_ID || !YOUR_TEMPLATE_ID || !YOUR_PUBLIC_KEY) {
      console.error("Missing EmailJS environment variables");
      alert("Błąd konfiguracji formularza. Skontaktuj się z nami telefonicznie.");
      setStatus('error');
      return;
    }

    if (form.current) {
      emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setStatus('success');
            setTimeout(() => {
              if (form.current) form.current.reset();
              setStatus('idle');
            }, 5000);
        }, (error) => {
            console.log(error.text);
            setStatus('error');
        });
    }
  };

  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <RevealOnScroll direction="left">
            <div>
              <h2 className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-3">{t.contact.subtitle}</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-8">
                {t.contact.title}
              </h3>
              
              <p className="text-slate-600 mb-10 text-lg">
                {t.contact.description}
              </p>

              <div className="space-y-6 mb-10">
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{t.contact.call}</p>
                    <p className="text-lg font-bold text-slate-900">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">WhatsApp</p>
                    <p className="text-lg font-bold text-slate-900">{t.contact.whatsapp}</p>
                  </div>
                </a>

                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{t.contact.email}</p>
                    <p className="text-lg font-bold text-slate-900">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{t.contact.addressLabel}</p>
                    <p className="text-lg font-bold text-slate-900">{CONTACT_INFO.address}</p>
                    <p className="text-slate-600">{CONTACT_INFO.city}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder/Link */}
              <div className="w-full h-64 bg-slate-100 rounded-2xl overflow-hidden relative group">
                <img 
                  src={IMAGES.contactMapImage}
                  alt="Mapa lokalizacji"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <a 
                    href={CONTACT_INFO.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white px-6 py-3 rounded-full shadow-lg font-bold text-slate-900 hover:text-primary-600 flex items-center gap-2 transition-transform transform hover:scale-105 pointer-events-auto"
                  >
                    <MapPin size={18} />
                    {t.contact.openMap}
                  </a>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Contact Form */}
          <RevealOnScroll direction="right" delay={200}>
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
              
              {/* Success Overlay */}
              {status === 'success' && (
                <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">{t.contact.success}</h4>
                  <p className="text-slate-500">Odezwiemy się najszybciej jak to możliwe.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 text-primary-600 font-bold hover:underline">
                    Wyślij kolejną wiadomość
                  </button>
                </div>
              )}

              <h4 className="text-2xl font-bold text-slate-900 mb-6">{t.contact.formTitle}</h4>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.nameLabel}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                    placeholder={t.contact.namePlaceholder}
                    disabled={status === 'loading'}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.phoneLabel}</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="user_phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                      placeholder="+49 ..."
                      disabled={status === 'loading'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.emailLabel}</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="user_email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                      placeholder="adres@email.com"
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{t.contact.messageLabel}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white resize-none"
                    placeholder={t.contact.messagePlaceholder}
                    disabled={status === 'loading'}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className={`w-full py-4 font-bold rounded-xl shadow-md transition-all transform flex items-center justify-center gap-2
                    ${status === 'loading' 
                      ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                      : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:scale-105'
                    }`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Wysyłanie...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      {t.contact.submit}
                    </>
                  )}
                </button>
                
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                    <XCircle size={16} />
                    <span>Wystąpił błąd. Spróbuj ponownie lub zadzwoń do nas.</span>
                  </div>
                )}

                <p className="text-xs text-center text-slate-500 mt-4">
                  {t.contact.privacy}
                </p>
              </form>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default Contact;
