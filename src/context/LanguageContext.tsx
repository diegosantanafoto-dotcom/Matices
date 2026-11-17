import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'DE' | 'EN';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const TRANSLATIONS: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.portfolio': { DE: 'PORTFOLIO', EN: 'PORTFOLIO' },
  'nav.proyectos': { DE: 'PROJEKTE', EN: 'PROJECTS' },
  'nav.videos': { DE: 'VIDEOS', EN: 'VIDEOS' },
  'nav.merch': { DE: 'MERCH & SHOP', EN: 'MERCH & SHOP' },
  'nav.digital': { DE: 'DIGITAL & KI', EN: 'DIGITAL & AI' },
  'nav.info': { DE: 'ÜBER UNS', EN: 'ABOUT US' },

  // Submenu & Filter Categories
  'sub.todos': { DE: 'ALLE PROJEKTE', EN: 'ALL PROJECTS' },
  'sub.bodas': { DE: 'HOCHZEITEN', EN: 'WEDDINGS' },
  'sub.lifestyle': { DE: 'LIFESTYLE', EN: 'LIFESTYLE' },
  'sub.retratos': { DE: 'PORTRÄTS', EN: 'PORTRAITS' },
  'sub.moda': { DE: 'MODE', EN: 'FASHION' },
  'sub.marcas': { DE: 'MARKEN', EN: 'BRANDS' },
  'portfolio.empty': { DE: 'Keine Projekte in dieser Kategorie gefunden.', EN: 'No projects found in this category.' },

  // Header
  'header.homeTitle': { DE: 'matices — Zurück zur Startseite', EN: 'matices — Back to Home' },
  'header.whatsappDirect': { DE: 'WhatsApp Kontakt', EN: 'WhatsApp Direct' },
  'header.cartTitle': { DE: 'Warenkorb / Presets', EN: 'Shopping Cart / Presets' },

  // Contact / Footer
  'contact.heading': { DE: 'Haben Sie ein visuelles Projekt', EN: 'Do you have a visual project' },
  'contact.headingItalic': { DE: 'im Sinn?', EN: 'in mind?' },
  'contact.description': { 
    DE: 'Wir stehen für visuelle Regie, ganzheitliche Produktionen in der Schweiz und weltweite Aufträge zur Verfügung.', 
    EN: 'We are available for visual direction, full-scale productions in Switzerland, and worldwide assignments.' 
  },
  'contact.location': { DE: 'Schweiz & International', EN: 'Switzerland & International' },
  'contact.newsletterPlaceholder': { DE: 'Ihre E-Mail-Adresse', EN: 'Your email address' },
  'contact.newsletterButton': { DE: 'Abonnieren', EN: 'Subscribe' },
  'contact.newsletterSuccess': { DE: 'Vielen Dank fürs Abonnieren. Wir melden uns in Kürze.', EN: 'Thank you for subscribing. We will be in touch shortly.' },
  'contact.ctaBooking': { DE: 'Session buchen', EN: 'Book a Session' },
  'contact.quickAvailability': { DE: 'Sofortige Verfügbarkeit in der Schweiz & Europa', EN: 'Immediate availability in Switzerland & Europe' },
  'contact.directPhone': { DE: 'Direktes Telefon', EN: 'Direct Phone' },
  'contact.office': { DE: 'Studio St. Gallen, Schweiz', EN: 'Studio St. Gallen, Switzerland' },
  'contact.rights': { DE: 'Alle Rechte vorbehalten.', EN: 'All rights reserved.' },

  // About Section
  'about.tag': { DE: 'Über uns', EN: 'About Us' },
  'about.role': { DE: 'Regie & Fotografie', EN: 'Direction & Photography' },
  'about.headlinePart1': { DE: 'Diego & Jessi', EN: 'Diego & Jessi' },
  'about.headlinePart2': { DE: 'Zwei Blicke, eine visuelle Vision', EN: 'Two gazes, one single visual vision' },
  'about.operationsBase': { DE: 'Standort', EN: 'Location' },
  'about.bio1': {
    DE: 'Wir sind Diego Santana und Jessi, visuelle Gestalter mit Sitz in St. Gallen, Schweiz. Wir verbinden filmische Ästhetik, redaktionelle Fotografie und emotionale Bildregie für anspruchsvolle Marken und Paare.',
    EN: 'We are Diego Santana and Jessi, visual creators based in St. Gallen, Switzerland. We merge cinematic aesthetics, editorial photography, and emotive direction for discerning brands and couples.'
  },
  'about.bio2': {
    DE: 'Von Autorenhochzeiten und Markenkampagnen bis hin zu Werbespots und redaktionellen Porträts widmen wir jedem Frame höchste Aufmerksamkeit, natürliches Licht und zeitlose Poesie.',
    EN: 'From bespoke weddings and brand campaigns to cinematic commercials and editorial portraits, we dedicate the highest attention to detail, natural light, and timeless visual poetry to every frame.'
  },
  'about.ctaBtn': { DE: 'Session oder Projekt buchen', EN: 'Book Session or Project' },
  'about.gearTag': { DE: 'Technischer Standard', EN: 'Technical Standard' },
  'about.gearHeadline': { DE: 'Kino- und Optik-Standard der Spitzenklasse', EN: 'Top-tier Cinema & Optical Standard' },
  'about.gearDesc': {
    DE: 'Wir arbeiten mit Sony FX Cinema Line Kameras, Festbrennweiten der G-Master Serie und 4K 10-Bit Farbabstimmung für maximale Bildqualität.',
    EN: 'We work with Sony FX Cinema Line cameras, G-Master prime lenses, and 4K 10-bit color grading for maximum image fidelity.'
  },

  // Digital Section
  'digital.tag': { DE: 'Digitale Lösungen & KI', EN: 'Digital Solutions & AI' },
  'digital.headline': { DE: 'Entwicklung, Branding & Künstliche Intelligenz', EN: 'Development, Branding & Artificial Intelligence' },
  'digital.subtitle': { 
    DE: 'Maßgeschneiderte digitale Lösungen: von virtuellen KI-Assistenten und automatisierten Buchungs-Apps bis hin zu Autoren-Branding und modernen Webplattformen.', 
    EN: 'Bespoke digital solutions: from virtual AI assistants and automated booking apps to bespoke branding and modern web platforms.' 
  },
  'digital.viewPack': { DE: 'Paket ansehen', EN: 'View Package' },
  'digital.closePack': { DE: 'Schließen', EN: 'Close' },
  'digital.requestService': { DE: 'Diesen Service anfragen', EN: 'Request this Service' },

  // Video Section
  'video.watch': { DE: 'Ansehen', EN: 'Watch' },
  'video.close': { DE: 'Schließen', EN: 'Close' },

  // Modals & General
  'modal.close': { DE: 'Schließen', EN: 'Close' },
  'booking.directBriefing': { DE: 'Direkte Briefing-Anfrage', EN: 'Direct Project Briefing' },
  'booking.title': { DE: 'Projekt / Session anfragen', EN: 'Book Project / Session' },
  'booking.subtitle': { DE: 'Teilen Sie uns Ihre Wünsche mit. Wir antworten innerhalb von 12 Stunden.', EN: 'Tell us about your project. We respond within 12 hours.' },
  'booking.name': { DE: 'Vollständiger Name *', EN: 'Full Name *' },
  'booking.namePlaceholder': { DE: 'z.B. Sarah Müller', EN: 'e.g. Sarah Miller' },
  'booking.email': { DE: 'E-Mail-Adresse *', EN: 'Email Address *' },
  'booking.phone': { DE: 'Telefon / WhatsApp', EN: 'Phone / WhatsApp' },
  'booking.category': { DE: 'Projektkategorie', EN: 'Project Category' },
  'booking.budget': { DE: 'Budgetrahmen (CHF)', EN: 'Estimated Budget (CHF)' },
  'booking.date': { DE: 'Voraussichtliches Datum', EN: 'Estimated Date' },
  'booking.notes': { DE: 'Details zum Briefing / Vision', EN: 'Briefing Details / Vision' },
  'booking.notesPlaceholder': { DE: 'Beschreiben Sie den Ort, gewünschte Deliverables, Videoformat, Marke oder Design...', EN: 'Describe the location, deliverables, video format, brand or design...' },
  'booking.submit': { DE: 'Briefing-Anfrage absenden', EN: 'Submit Briefing Request' },
  'booking.successTitle': { DE: 'Anfrage erfolgreich erhalten!', EN: 'Inquiry Successfully Received!' },
  'booking.successDesc': { DE: 'Vielen Dank! Wir haben Ihre Anfrage erhalten und melden uns in Kürze per E-Mail bei Ihnen.', EN: 'Thank you! We have received your inquiry and will contact you via email shortly.' },
  'booking.backBtn': { DE: 'Zurück zur Website', EN: 'Back to Website' },

  // Legal
  'legal.badge': { DE: 'Schweizer Rechtskonformität (DSG / nLPD & DSGVO)', EN: 'Swiss Legal Compliance (nLPD / FADP & GDPR)' },
  'legal.title': { DE: 'Rechtliche Hinweise & Datenschutz', EN: 'Legal Notice & Privacy' },
  'legal.subtitle': { DE: 'matices.ch • St. Gallen, Schweiz & Weltweit', EN: 'matices.ch • St. Gallen, Switzerland & Worldwide' },
  'legal.impressum': { DE: 'Impressum', EN: 'Legal Notice / Impressum' },
  'legal.privacy': { DE: 'Datenschutz', EN: 'Privacy Policy' },
  'legal.cookies': { DE: 'Cookies', EN: 'Cookie Policy' }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'DE',
  setLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('matices_lang') as Language;
      if (saved && (saved === 'DE' || saved === 'EN')) {
        return saved;
      }
    }
    return 'DE';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('matices_lang', newLang);
      document.documentElement.lang = newLang.toLowerCase();
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = lang.toLowerCase();
    }
  }, [lang]);

  const t = (key: string): string => {
    const item = TRANSLATIONS[key];
    if (!item) return key;
    return item[lang] || item['DE'] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
