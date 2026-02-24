
import React, { createContext, useContext, useState, useEffect } from 'react';

interface CookieContextType {
  isConsentGiven: boolean | null;
  acceptCookies: () => void;
  declineCookies: () => void;
  resetCookies: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConsentGiven, setIsConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === 'true') {
      setIsConsentGiven(true);
    } else if (consent === 'false') {
      setIsConsentGiven(false);
    } else {
      setIsConsentGiven(null);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsConsentGiven(true);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'false');
    setIsConsentGiven(false);
  };

  const resetCookies = () => {
    localStorage.removeItem('cookie_consent');
    setIsConsentGiven(null);
  };

  return (
    <CookieContext.Provider value={{ isConsentGiven, acceptCookies, declineCookies, resetCookies }}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookies = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
};
