
import React, { useEffect } from 'react';
import { useCookies } from '../contexts/CookieContext';
import { ANALYTICS_CONFIG } from '../constants';

const AnalyticsLoader: React.FC = () => {
  const { isConsentGiven } = useCookies();

  useEffect(() => {
    if (isConsentGiven && ANALYTICS_CONFIG.gtmId) {
      // Inject Script into Head if not already present
      if (!document.querySelector(`script[src*="${ANALYTICS_CONFIG.gtmId}"]`)) {
        const script = document.createElement('script');
        script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${ANALYTICS_CONFIG.gtmId}');`;
        document.head.appendChild(script);

        // Inject NoScript into Body
        const noscript = document.createElement('noscript');
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.googletagmanager.com/ns.html?id=${ANALYTICS_CONFIG.gtmId}`;
        iframe.height = "0";
        iframe.width = "0";
        iframe.style.display = "none";
        iframe.style.visibility = "hidden";
        noscript.appendChild(iframe);
        document.body.insertBefore(noscript, document.body.firstChild);
        
        console.log(`GTM (${ANALYTICS_CONFIG.gtmId}) loaded after consent.`);
      }
    }
  }, [isConsentGiven]);

  return null;
};

export default AnalyticsLoader;
