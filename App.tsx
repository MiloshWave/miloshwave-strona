
import { useEffect, useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ImageProvider } from './contexts/ImageContext';
import { CookieProvider } from './contexts/CookieContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import AnalyticsLoader from './components/AnalyticsLoader';
import Stats from './components/Stats';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Global smooth scroll handler for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#') && link.origin === window.location.origin) {
        e.preventDefault();
        const targetId = link.hash.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          const headerOffset = 85; // Approx height of navbar (scrolled state is ~80px) + buffer
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          
          // Update URL hash without causing a jump
          window.history.pushState(null, '', link.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <LanguageProvider>
      <CookieProvider>
        <ImageProvider>
          {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
          
          {/* Analytics script only loads if consent given */}
          <AnalyticsLoader />

          <div className={`min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-white selection:bg-primary-100 selection:text-primary-900 transition-opacity duration-1000 ${isLoading ? 'opacity-0 overflow-hidden h-screen' : 'opacity-100'}`}>
            <Navbar />
            <main className="flex-grow">
              <Hero />
              <About />
              <Stats />
              <Services />
              <Pricing />
              <Testimonials />
              <FAQ />
              <Calendar />
              <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
            <CookieBanner />
          </div>
        </ImageProvider>
      </CookieProvider>
    </LanguageProvider>
  );
}

export default App;
