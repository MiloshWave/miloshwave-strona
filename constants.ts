

export const CONTACT_INFO = {
  // 👇 TUTAJ WPISZ SWÓJ NUMER TELEFONU (np. +49 170 1234567)
  // Będzie widoczny w sekcji kontakt i pod przyciskiem "Zadzwoń teraz"
  phone: "+49 176 67611458", 

  // 👇 TUTAJ WPISZ SWÓJ ADRES E-MAIL
  // Będzie widoczny w sekcji kontakt
  email: "miloszwiktorczyk@gmail.com", 

  address: "Stadionbad, Sauterstraße 14",
  city: "67433 Neustadt an der Weinstraße",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Stadionbad+Neustadt+an+der+Weinstraße"
};

export const SOCIAL_LINKS = {
  // 👇 TUTAJ WKLEJ LINKI DO SWOICH PROFILI
  // Jeśli nie masz któregoś konta, zostaw sam hash "#" lub pusty cudzysłów ""
  facebook: "https://www.facebook.com/", 
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/"
};

export const IMAGES = {
  // 👇 1. ZDJĘCIE GŁÓWNE (HERO) - duże zdjęcie na samej górze strony
  heroBackground: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",

  // 👇 2. TWOJE ZDJĘCIE (O MNIE) - portret instruktora
  // Zaktualizowano na Twoje zdjęcie.
  // Upewnij się, że plik "instructor.jpg" znajduje się w folderze "public".
  instructorPortrait: "/instructor.jpg",

  // 👇 3. ZDJĘCIE OBOK MAPY - w sekcji kontakt
  // Wrzuć plik o nazwie "mapa.jpg" do folderu "public"
  contactMapImage: "/mapa.jpg"
};

export const CALENDAR_CONFIG = {
  // 👇 TUTAJ WKLEJ LINK "SRC" Z INTEGRACJI KALENDARZA GOOGLE
  // Aby go pobrać: Ustawienia Kalendarza Google -> Twój kalendarz -> Integrowanie kalendarza -> Kod do umieszczenia na stronie (skopiuj tylko adres URL wewnątrz cudzysłowu src="...")
  googleCalendarUrl: "https://calendar.app.google/zKXzkVY5mPPTQDD2A"
};

export const ANALYTICS_CONFIG = {
  // 👇 TUTAJ WPISZ SWÓJ ID KONTENERA GTM (np. GTM-XXXXXX)
  // Zostaw puste (""), jeśli nie chcesz używać Google Tag Manager
  gtmId: "GTM-MQTVXMSR" 
};