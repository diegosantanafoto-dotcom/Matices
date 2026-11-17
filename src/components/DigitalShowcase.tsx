import React, { useState } from 'react';
import { Cpu, Palette, Globe, Share2, CheckCircle2, ArrowRight, Layers, Sparkles, X, Check, Camera, Zap, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DigitalService {
  id: string;
  num: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  sampleImage: string;
  badge: string;
  packType: 'ia' | 'branding' | 'web' | 'social';
}

interface FeatureItem {
  text: string;
  hasVideoTrigger?: boolean;
}

interface ServicePackItem {
  id: string;
  name: string;
  categoryTag: string;
  priceCHF: number;
  period?: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  features: FeatureItem[];
  referenceVideoUrl?: string;
  extraNote?: string;
}

interface DigitalShowcaseProps {
  onOpenBooking: (type?: string) => void;
}

export const DigitalShowcase: React.FC<DigitalShowcaseProps> = ({ onOpenBooking }) => {
  const { lang, t } = useLanguage();
  const isDe = lang === 'DE';

  const [activeModalTab, setActiveModalTab] = useState<'360' | 'ia' | 'web' | 'branding' | 'social'>('ia');
  const [isPacksModalOpen, setIsPacksModalOpen] = useState<boolean>(false);
  const [previewVideoUrl, setPreviewVideoUrl] = useState<string | null>(null);

  const openPacksModalWithTab = (tab: '360' | 'ia' | 'web' | 'branding' | 'social') => {
    setActiveModalTab(tab);
    setIsPacksModalOpen(true);
  };

  const DIGITAL_SERVICES: DigitalService[] = [
    {
      id: 'dig-1',
      num: '01',
      tag: isDe ? 'Generative KI & Automatisierung' : 'Generative AI & Automation',
      title: isDe ? 'KI-Implementierung' : 'AI Implementation',
      subtitle: isDe ? 'Virtuelle Assistenten, Buchungs-Apps & Neuronale Workflows' : 'Virtual Assistants, Booking Apps & Neural Workflows',
      description: isDe
        ? 'Entwicklung intelligenter virtueller Assistenten für 24/7-Kundenservice, Integration automatisierter Terminbuchungs-Apps und Workflow-Automatisierung für Schweizer Unternehmen.'
        : 'Development of AI virtual assistants for 24/7 customer care, integration of automated booking apps, and creative brand workflow automation.',
      icon: Cpu,
      badge: isDe ? 'Assistenten & Buchung' : 'Assistants & Booking',
      packType: 'ia',
      sampleImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
      features: isDe
        ? [
            'Virtuelle KI-Assistenten & 24/7 Chatbots für Kundenservice',
            'Automatisierte Termin- & Buchungssysteme für Kunden',
            'Automatisierung von Workflows und intelligenter Datenverarbeitung',
            'KI-gestützte visuelle Postproduktion und Bildoptimierung'
          ]
        : [
            'AI Virtual Assistants & 24/7 Chatbots for customer care',
            'Automated Booking & Appointment Systems for clients',
            'Workflow Automation and intelligent process routing',
            'AI-assisted visual post-production and image upscaling'
          ]
    },
    {
      id: 'dig-2',
      num: '02',
      tag: isDe ? 'Branding & Visuelle Identität' : 'Branding & Visual Identity',
      title: isDe ? 'Brand Design' : 'Brand Design',
      subtitle: isDe ? 'Autorenidentitäten, Styleguides & Visuelle Systeme' : 'Signature Identities, Style Guides & Visual Systems',
      description: isDe
        ? 'Aufbau einprägsamer Markenidentitäten: präzise Vektorlogos, charakterstarke Farbwelten, redaktionelle Typografie und umfassende Corporate Design Manuals.'
        : 'Crafting memorable brand identities: high-precision vector logos, distinctive color palettes, editorial typography, and comprehensive corporate manuals.',
      icon: Palette,
      badge: isDe ? 'Identität & Branding' : 'Identity & Branding',
      packType: 'branding',
      sampleImage: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1000&auto=format&fit=crop',
      features: isDe
        ? [
            'Design des Hauptlogos und Version für dunkle Hintergründe',
            'Corporate Identity Manuals (digital & druckfertig)',
            'Geschäftsausstattung, Verpackungen und Social-Media-Guides'
          ]
        : [
            'Primary Logo design and dark background variant',
            'Corporate Identity Manuals (digital & print-ready)',
            'Stationery design, packaging concepts, and social media guides'
          ]
    },
    {
      id: 'dig-3',
      num: '03',
      tag: isDe ? 'Webentwicklung & UI/UX' : 'Web Development & UI/UX',
      title: isDe ? 'Webdesign' : 'Web Design',
      subtitle: isDe ? 'Landing Pages, Corporate Websites & E-Commerce' : 'Landing Pages, Corporate Platforms & E-Commerce',
      description: isDe
        ? 'Maßgeschneiderte Webentwicklung mit Fokus auf redaktionelle Ästhetik, blitzschnelle Ladezeiten, Schweizer Hosting-Standard, SEO und integrierte Medienproduktion.'
        : 'Bespoke web development focused on editorial aesthetics, instant load speed, Swiss hosting standards, SEO optimization, and integrated media production.',
      icon: Globe,
      badge: isDe ? 'Landing & E-Commerce' : 'Landing & E-Commerce',
      packType: 'web',
      sampleImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
      features: isDe
        ? [
            'Responsive High-Performance Landing Pages',
            'Mehrseitige Unternehmenswebsites mit Projektportfolio',
            'Online-Shops mit sicheren Schweizer Zahlungsgateways (TWINT, Stripe)'
          ]
        : [
            'High-performance responsive Landing Pages',
            'Multi-page Corporate Websites with project portfolio',
            'E-Commerce shops with secure Swiss payment gateways (TWINT, Stripe)'
          ]
    },
    {
      id: 'dig-4',
      num: '04',
      tag: isDe ? 'Social Media & Content Creation' : 'Social Media & Content Creation',
      title: isDe ? 'Social Media & Content' : 'Social Media & Content',
      subtitle: isDe ? 'Monatliche Content-Pläne, Kinoreels & Fotografie' : 'Monthly Content Plans, Cinematic Reels & Photography',
      description: isDe
        ? 'Monatliche audiovisuelle Content-Pläne, damit Marken eine konsistente, ästhetische und professionelle Präsenz auf höchstem Niveau aufrechterhalten.'
        : 'Monthly audiovisual content packages designed to maintain a consistent, high-end agency standard across all digital touchpoints.',
      icon: Share2,
      badge: isDe ? 'Monatspläne' : 'Monthly Plans',
      packType: 'social',
      sampleImage: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1000&auto=format&fit=crop',
      features: isDe
        ? [
            'Kinoreife 4K-Produktion von Reels und TikToks',
            'Redaktionelle Fotoshootings von Produkten und Team',
            'Content-Kalender, strategische Ausrichtung und zweisprachige Copys'
          ]
        : [
            'Cinematic 4K production of Reels and TikToks',
            'Editorial photo sessions of products and team',
            'Content calendar, strategy, and bilingual copywriting'
          ]
    }
  ];

  const PACK_360: ServicePackItem = {
    id: 'pack-360-vip',
    name: 'Pack 360º Brand & Digital Transformation',
    categoryTag: isDe ? 'Gesamtpaket: Marke + Web + Video + Teamfotos' : 'Full Package: Brand + Web + Video + Team Photos',
    priceCHF: 5000,
    isPopular: true,
    badge: 'VIP CHF 5.000',
    description: isDe
      ? 'Die schlüsselfertige Gesamtlösung für CHF 5.000: Markenidentität, responsive Landing Page, kinoreifer Imagefilm und professionelle Teamporträts.'
      : 'The complete CHF 5,000 turnkey solution: brand identity, responsive landing page, cinematic intro video, and professional team portraits.',
    referenceVideoUrl: 'https://player.vimeo.com/video/1126177678',
    extraNote: isDe
      ? 'Produktfotoshooting als zubuchbare Option je nach Sortimentsumfang verfügbar.'
      : 'Product photography available as an add-on depending on catalog volume.',
    features: isDe
      ? [
          { text: 'Basis-Branding (Logo-Design + Brand Styleguide)' },
          { text: 'Responsive Autoren-Landing Page (ultra-schnell & mobiloptimiert)' },
          { text: 'Kinoreifes Marken-Intro / Imagevideo (4K)', hasVideoTrigger: true },
          { text: 'Team-Fotoshooting (retuschierte redaktionelle Porträts)' }
        ]
      : [
          { text: 'Core Brand Design (Logo + Brand Style Guide)' },
          { text: 'Bespoke Single-Page Landing Page (ultra-fast & responsive)' },
          { text: 'Cinematic Brand Intro / Showcase Video (4K)', hasVideoTrigger: true },
          { text: 'Team Photoshoot (editorial retouched portraits)' }
        ]
  };

  const IA_SERVICES: ServicePackItem[] = [
    {
      id: 'ia-asistente',
      name: isDe ? 'Virtueller KI-Assistent & 24/7 Chatbot' : 'AI Virtual Assistant & 24/7 Chatbot',
      categoryTag: isDe ? 'Automatischer Kundenservice' : 'Automated Customer Care',
      priceCHF: 1200,
      description: isDe
        ? 'Implementierung eines maßgeschneiderten KI-Assistenten, trainiert mit Ihren Unternehmensdaten für präzise 24/7-Antworten in Echtzeit.'
        : 'Deployment of a bespoke AI assistant trained on your business data to handle customer inquiries in real time 24/7.',
      features: isDe
        ? [
            { text: 'Training mit FAQs und Firmenkatalogen' },
            { text: 'Integration in Website, WhatsApp oder Instagram Direct' },
            { text: 'Automatische Mehrsprachigkeit (Deutsch, Englisch, Französisch, Spanisch)' },
            { text: 'Dashboard & Weiterleitung an Mitarbeiter bei komplexen Fragen' }
          ]
        : [
            { text: 'Trained with your business knowledge base and catalog' },
            { text: 'Website, WhatsApp, and Instagram Direct integration' },
            { text: 'Automatic multilingual support (German, English, French, Spanish)' },
            { text: 'Analytics dashboard & seamless human handoff' }
          ]
    },
    {
      id: 'ia-booking',
      name: isDe ? 'Intelligentes Buchungs- & Terminsystem' : 'Smart Booking & Reservation App',
      categoryTag: isDe ? 'Automatische Terminvergabe' : 'Automated Client Scheduling',
      priceCHF: 950,
      isPopular: true,
      badge: isDe ? 'Sehr Beliebt' : 'Most Popular',
      description: isDe
        ? 'Intelligente Buchungs-App synchronisiert mit Google Calendar / Outlook mit automatischen Erinnerungen via E-Mail/SMS.'
        : 'Smart client scheduling system synchronized with Google Calendar / Outlook, featuring automatic SMS/Email reminders.',
      features: isDe
        ? [
            { text: 'Personalisierte Buchungsseite im Markendesign' },
            { text: 'Echtzeit-Synchronisation mit Google Calendar / Outlook' },
            { text: 'Automatische Terminerinnerungen vorab' },
            { text: 'Optionale Anzahlung oder Vorauszahlung' }
          ]
        : [
            { text: 'Customized booking page matching your brand design' },
            { text: 'Two-way sync with Google Calendar & Outlook' },
            { text: 'Automated pre-appointment notifications' },
            { text: 'Optional deposit / upfront payment gateway' }
          ]
    },
    {
      id: 'ia-workflows',
      name: isDe ? 'Kreative Workflow-Automatisierung' : 'Creative Workflow Automation',
      categoryTag: isDe ? 'Visuelle KI-Prozesse' : 'Visual AI Workflows',
      priceCHF: 1600,
      description: isDe
        ? 'Automatisierte Pipelines mit generativer KI für Bildoptimierung, 8K-Upscaling und strukturierte Content-Erstellung.'
        : 'Custom pipelines leveraging generative AI for high-res image enhancement, 8K upscaling, and marketing asset creation.',
      features: isDe
        ? [
            { text: '8K-Upscaling und neuronale Farbkorrektur von Fotos' },
            { text: 'KI-gestützte Hintergrunderweiterung und Produktinszenierung' },
            { text: 'Automatisierte Social-Media-Template-Generierung' }
          ]
        : [
            { text: '8K neural image upscaling and color restoration' },
            { text: 'AI generative background extension and staging' },
            { text: 'Automated social media asset generation' }
          ]
    }
  ];

  const WEB_PACKS: ServicePackItem[] = [
    {
      id: 'web-landing',
      name: isDe ? 'Pack Web Landing Page Express' : 'Pack Web Landing Page Express',
      categoryTag: isDe ? 'Landing Page + Foto + Video Intro' : 'Landing Page + Photo + Video Intro',
      priceCHF: 2500,
      description: isDe
        ? 'Perfekt für den schnellen Markteintritt mit einer modernen Single-Page-Präsenz inklusive eigener Medienproduktion.'
        : 'Ideal for a swift, high-impact digital launch with custom audiovisual assets and single-page speed.',
      referenceVideoUrl: 'https://player.vimeo.com/video/1126177678',
      features: isDe
        ? [
            { text: 'Entwicklung einer responsiven, ultra-schnellen Landing Page' },
            { text: 'Inklusive 1 professionellem Fotoshooting (Produkt oder Team)' },
            { text: 'Inklusive 1 kinoreifem Marken-Intro / Video', hasVideoTrigger: true },
            { text: 'Kontaktformular, interaktive Karte und Basis-SEO' }
          ]
        : [
            { text: 'Ultra-fast responsive single-page web development' },
            { text: 'Includes 1 professional photo session (product or team)' },
            { text: 'Includes 1 cinematic brand intro video', hasVideoTrigger: true },
            { text: 'Direct contact form, map integration, and technical SEO' }
          ]
    },
    {
      id: 'web-corp',
      name: isDe ? 'Pack Corporate Website (Bis 5 Seiten)' : 'Pack Corporate Website (Up to 5 Pages)',
      categoryTag: isDe ? 'Komplette Unternehmenswebsite' : 'Complete Corporate Website',
      priceCHF: 4200,
      isPopular: true,
      badge: isDe ? 'Empfohlen' : 'Recommended',
      description: isDe
        ? 'Für Unternehmen, die eine fundierte Seitenstruktur, Leistungsübersichten, Portfolio und erweitertes SEO benötigen.'
        : 'For businesses requiring structured multi-page architecture, project portfolio, and advanced search optimization.',
      referenceVideoUrl: 'https://player.vimeo.com/video/1126177678',
      features: isDe
        ? [
            { text: 'Website mit bis zu 5 Unterseiten (Home, Services, Über uns, Portfolio, Kontakt)' },
            { text: 'Inklusive umfassendem Foto-Shooting der Räumlichkeiten & Team' },
            { text: 'Inklusive 4K-Kino-Imagefilm der Marke', hasVideoTrigger: true },
            { text: 'Flüssige Mikro-Animationen, Content-Management und erweitertes SEO' }
          ]
        : [
            { text: 'Corporate website with up to 5 pages (Home, Services, About, Portfolio, Contact)' },
            { text: 'Includes full facility & team photography session' },
            { text: 'Includes 4K cinematic brand showcase video', hasVideoTrigger: true },
            { text: 'Fluid micro-interactions, CMS capability, and advanced SEO' }
          ]
    },
    {
      id: 'web-ecommerce',
      name: isDe ? 'Pack E-Commerce & Webplattform' : 'Pack E-Commerce & Platform',
      categoryTag: isDe ? 'Online-Shop & Verkaufskatalog' : 'Online Store & Catalog',
      priceCHF: 6800,
      description: isDe
        ? 'Leistungsstarker Online-Shop mit Schweizer Zahlungsgateways (TWINT, Stripe, Apple Pay, Kreditkarte) und Produktkatalog.'
        : 'Advanced e-commerce platform with integrated Swiss payments (TWINT, Stripe, Apple Pay, Card) and interactive catalog.',
      referenceVideoUrl: 'https://player.vimeo.com/video/1126177678',
      features: isDe
        ? [
            { text: 'Maßgeschneiderter E-Commerce-Shop oder Buchungsplattform' },
            { text: 'Sichere Bezahlung (TWINT, Stripe, Apple Pay, Kreditkarten)' },
            { text: 'Videoproduktion für Schlüsselprodukte/Dienstleistungen', hasVideoTrigger: true },
            { text: 'Vollständige Katalogfotografie und priorisierter Support' }
          ]
        : [
            { text: 'Custom e-commerce store or booking platform' },
            { text: 'Secure payments (TWINT, Stripe, Apple Pay, Credit Card)' },
            { text: 'Video production for featured products/services', hasVideoTrigger: true },
            { text: 'Complete catalog photography and priority support' }
          ]
    }
  ];

  const BRANDING_PACKS: ServicePackItem[] = [
    {
      id: 'brand-express',
      name: isDe ? 'Pack Essential Brand & Logo' : 'Pack Essential Brand & Logo',
      categoryTag: isDe ? 'Logo & Basis-Styleguide' : 'Logo & Core Style Guide',
      priceCHF: 700,
      description: isDe
        ? 'Prägnantes Logo-Design und grundlegender Styleguide für Projekte mit schnellem Startbedarf.'
        : 'Agile logo design and essential brand manual for ventures requiring a swift launch.',
      features: isDe
        ? [
            { text: 'Design des Hauptlogos und Version für dunkle Hintergründe' },
            { text: 'Basis-Styleguide (Farbpalette und primäre Typografie)' },
            { text: 'Lieferung aller Vektordateien (SVG, EPS, PDF, PNG HD)' }
          ]
        : [
            { text: 'Primary logo design and dark background version' },
            { text: 'Basic brand manual (color palette and primary typography)' },
            { text: 'Full vector asset delivery (SVG, EPS, PDF, PNG HD)' }
          ]
    },
    {
      id: 'brand-full',
      name: isDe ? 'Pack 360º Brand System & Manual' : 'Pack 360º Brand System & Manual',
      categoryTag: isDe ? 'Umfassendes Corporate Design' : 'Comprehensive Corporate Design',
      priceCHF: 1500,
      isPopular: true,
      badge: isDe ? 'Vollständiges Branding' : 'Full Branding',
      description: isDe
        ? 'Tiefgehende Markenentwicklung mit Markenzeichen, Geschäftspapieren, Social-Media-Templates und Gestaltungsrichtlinien.'
        : 'In-depth visual identity design with submarks, stationery templates, social media layouts, and comprehensive guidelines.',
      features: isDe
        ? [
            { text: '360º Markenidentität (Hauptlogo, Sekundärlogo, Isotyp und Wasserzeichen)' },
            { text: 'Umfassendes Corporate Design Manual (digital & druckfertig)' },
            { text: 'Gestaltung von Geschäftsausstattung, Social-Media-Vorlagen und E-Mail-Signaturen' }
          ]
        : [
            { text: '360º visual identity (Primary logo, secondary logo, submark, and watermark)' },
            { text: 'Comprehensive Brand Identity Manual (digital and print guidelines)' },
            { text: 'Stationery layouts, social media templates, and email signatures' }
          ]
    }
  ];

  const SOCIAL_PACKS: ServicePackItem[] = [
    {
      id: 'pack-starter',
      name: 'Pack Essential Presence',
      categoryTag: isDe ? 'Basis • Für junge Marken' : 'Essential • For New Brands',
      priceCHF: 449,
      period: isDe ? '/ Monat' : '/ month',
      description: isDe
        ? 'Ideal für eine kontinuierliche, professionelle Präsenz ohne übermäßigen Aufwand.'
        : 'Ideal for keeping your profile updated with high-end assets on a disciplined budget.',
      referenceVideoUrl: 'https://player.vimeo.com/video/1126177678',
      features: isDe
        ? [
            { text: '1 kinoreifes 4K-Reel/TikTok (30 bis 60 Sekunden)', hasVideoTrigger: true },
            { text: '1 Fotoshooting (15 retuschierte HD-Fotos für Posts)' },
            { text: 'Monatliche Redaktions- und Content-Planung' },
            { text: 'Zweisprachige Texte (DE / EN) und Hashtag-Strategie' }
          ]
        : [
            { text: '1 cinematic 4K Reel/TikTok (30 to 60 seconds)', hasVideoTrigger: true },
            { text: '1 photo session (15 retouched HD photos)' },
            { text: 'Monthly content calendar planning' },
            { text: 'Bilingual captions (DE / EN) and hashtag strategy' }
          ]
    },
    {
      id: 'pack-growth',
      name: 'Pack Growth Accelerator',
      categoryTag: isDe ? 'Empfohlen • Wöchentlicher Content' : 'Recommended • Weekly Content',
      priceCHF: 999,
      period: isDe ? '/ Monat' : '/ month',
      isPopular: true,
      badge: isDe ? 'Beliebteste Wahl' : 'Most Popular',
      description: isDe
        ? 'Für Unternehmen, die stetiges Wachstum, Interaktion und wöchentliche Frische benötigen.'
        : 'For businesses demanding steady audience growth, weekly touchpoints, and regular traction.',
      referenceVideoUrl: 'https://player.vimeo.com/video/1126177678',
      features: isDe
        ? [
            { text: '4 kinoreife 4K-Reels/TikToks (1 pro Woche)', hasVideoTrigger: true },
            { text: '2 Fotoshootings monatlich (35 retuschierte HD-Fotos)' },
            { text: 'Design von redaktionellen Karussells & wöchentlichen Stories' },
            { text: 'Beitragsplanung und Basis-Community-Management' },
            { text: 'Monatlicher Performance-Report und Optimierung' }
          ]
        : [
            { text: '4 cinematic 4K Reels/TikToks (1 per week)', hasVideoTrigger: true },
            { text: '2 monthly photo sessions (35 retouched HD photos)' },
            { text: 'Design of editorial carousels & weekly stories' },
            { text: 'Post scheduling and core community care' },
            { text: 'Monthly performance analytics and strategy review' }
          ]
    },
    {
      id: 'pack-empire',
      name: 'Pack Empire Full Scale',
      categoryTag: isDe ? 'Pro • Ganzheitliche Betreuung' : 'Pro • Full Scale Coverage',
      priceCHF: 1899,
      period: isDe ? '/ Monat' : '/ month',
      badge: isDe ? 'Maximaler Impact' : 'Maximum Impact',
      description: isDe
        ? 'Vollständige Delegation der audiovisuellen Produktion und Social Media für etablierte Marken.'
        : 'Complete delegation of audiovisual content and social media presence for established brands.',
      referenceVideoUrl: 'https://player.vimeo.com/video/1126177678',
      features: isDe
        ? [
            { text: '8 bis 10 kinoreife 4K-Reels/TikToks (2 pro Woche)', hasVideoTrigger: true },
            { text: '4 Fotoshootings monatlich (60+ retuschierte HD-Fotos)' },
            { text: 'Ganzheitliche Content-Strategie, Art Direction & Markenführung' },
            { text: 'Betreuung und Optimierung von Social-Media-Werbeanzeigen' },
            { text: 'Detaillierte Monatsanalysen und 24/7 Priority Support' }
          ]
        : [
            { text: '8 to 10 cinematic 4K Reels/TikToks (2 per week)', hasVideoTrigger: true },
            { text: '4 monthly photo sessions (60+ retouched HD photos)' },
            { text: 'Comprehensive content strategy, art direction & brand guardianship' },
            { text: 'Social media ads management and creative optimization' },
            { text: 'Advanced monthly analytics and 24/7 priority support' }
          ]
    }
  ];

  return (
    <section id="digital" className="pt-52 pb-28 bg-[#FAFAFC] w-full border-0 cursor-default text-[#0F0F12]">
      
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(165,148,249,0.14),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-[100vw] px-6 sm:px-10 md:px-14 lg:px-16 space-y-20 relative z-10">
        
        {/* UNIFIED EDITORIAL HEADER */}
        <div className="border-b border-gray-200 pb-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2.5 text-sm font-sans uppercase tracking-[0.2em] text-[#A594F9] font-extrabold">
            <Layers className="w-4 h-4" />
            <span>{t('digital.tag')}</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0F0F12] font-outfit tracking-tight leading-tight">
            {isDe ? 'Integrierte Digitale Lösungen:' : 'Integrated Digital Services:'} <br />
            <span className="font-editorial-italic font-normal text-4xl sm:text-6xl text-[#A594F9]">
              {isDe ? 'KI, Marke, Web & Social Media' : 'AI, Brand, Web & Social Media'}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#555560] font-light leading-relaxed">
            {t('digital.subtitle')}
          </p>
        </div>

        {/* MODERN 4 CATEGORIES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIGITAL_SERVICES.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className="bg-white border border-gray-200 shadow-sm rounded-none overflow-hidden transition-all duration-500 flex flex-col justify-between group hover:shadow-2xl hover:border-[#A594F9]"
              >
                <div>
                  {/* IMAGE HEADER */}
                  <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                    <img
                      src={service.sampleImage}
                      alt={service.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-none font-sans"
                    />
                    
                    <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 text-xs font-sans font-bold text-white uppercase tracking-widest">
                      {service.num} • {service.tag}
                    </div>

                    <div className="absolute bottom-4 right-4 bg-[#A594F9] text-white px-3 py-1.5 text-xs font-sans font-extrabold uppercase tracking-wider shadow-lg">
                      {service.badge}
                    </div>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="p-7 space-y-5">
                    
                    <div className="flex items-center space-x-3.5">
                      <div className="p-3 bg-[#FAFAFC] border border-gray-200 text-[#0F0F12] shrink-0">
                        <IconComponent className="w-6 h-6 text-[#A594F9]" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F0F12] font-outfit leading-snug group-hover:text-[#A594F9] transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-xs font-sans text-gray-500 font-medium pt-0.5">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-[#555560] font-light leading-relaxed">
                      {service.description}
                    </p>

                    {/* CAPABILITIES CHECKLIST */}
                    <div className="space-y-3 pt-3 border-t border-gray-100">
                      <span className="text-xs font-sans text-gray-400 uppercase tracking-widest block font-extrabold">
                        {isDe ? 'Hauptmerkmale:' : 'Core Capabilities:'}
                      </span>
                      <div className="space-y-2.5 text-xs sm:text-sm font-sans">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start space-x-2.5 text-[#0F0F12]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#A594F9] shrink-0 mt-0.5" />
                            <span className="font-light text-xs sm:text-sm leading-snug">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* ACTION BUTTON */}
                <div className="p-7 pt-0">
                  <button
                    onClick={() => openPacksModalWithTab(service.packType)}
                    className="w-full py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-extrabold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-md flex items-center justify-center space-x-2"
                  >
                    <Zap className="w-4 h-4" />
                    <span>{t('digital.viewPack')}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* FEATURED BANNER FOR PACK 360º VIP */}
        <div className="p-8 sm:p-14 bg-white border border-gray-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#A594F9] font-extrabold">
              <Sparkles className="w-4 h-4 text-[#A594F9]" />
              <span>{PACK_360.name}</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F0F12] font-outfit">
              {PACK_360.categoryTag}
            </h3>

            <p className="text-sm text-gray-500 font-light max-w-2xl leading-relaxed">
              {PACK_360.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button
              onClick={() => openPacksModalWithTab('360')}
              className="px-8 py-4.5 bg-[#A594F9] hover:bg-[#0F0F12] text-white font-extrabold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-md whitespace-nowrap flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isDe ? 'Details Pack 360º' : 'View Pack 360º Details'}</span>
            </button>

            <button
              onClick={() => onOpenBooking(isDe ? 'Buchung Pack 360º (CHF 5.000)' : 'Booking Pack 360º (CHF 5,000)')}
              className="px-8 py-4.5 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-extrabold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-md flex items-center justify-center space-x-2 whitespace-nowrap"
            >
              <span>{isDe ? 'Pack 360º anfragen' : 'Request Pack 360º'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* ALL PACKAGES & TARIFS INTERACTIVE MODAL */}
      {isPacksModalOpen && (
        <div
          onClick={() => setIsPacksModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 overflow-y-auto cursor-default"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-gray-200 max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative p-6 sm:p-12 animate-in fade-in duration-200 space-y-8 text-[#0F0F12]"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsPacksModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-[#0F0F12] transition-colors cursor-pointer"
              aria-label={t('modal.close')}
            >
              <X className="w-7 h-7" />
            </button>

            {/* MODAL HEADER */}
            <div className="border-b border-gray-100 pb-5 space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#A594F9] font-extrabold">
                <Layers className="w-4 h-4" />
                <span>{isDe ? 'Offizielle Tarife & Digitale Pakete (in CHF)' : 'Official Tariffs & Digital Packages (in CHF)'}</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F0F12] font-outfit">
                {isDe ? 'Digitale Pakete von matices' : 'Explore Digital Packages by matices'}
              </h2>
            </div>

            {/* TAB NAVIGATION IN MODAL */}
            <div className="flex border-b border-gray-200 space-x-4 overflow-x-auto text-xs sm:text-sm font-sans font-extrabold uppercase tracking-wider">
              {[
                { id: '360', label: 'Pack 360º VIP (CHF 5.000)' },
                { id: 'ia', label: isDe ? 'KI & Assistenten (3 Pakete)' : 'AI & Assistants (3 Packs)' },
                { id: 'web', label: isDe ? 'Webdesign (3 Pakete)' : 'Web Design (3 Packs)' },
                { id: 'branding', label: isDe ? 'Brand Design (2 Pakete)' : 'Brand Design (2 Packs)' },
                { id: 'social', label: isDe ? 'Social Media (3 Pakete)' : 'Social Media (3 Packs)' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveModalTab(tab.id as '360' | 'ia' | 'web' | 'branding' | 'social')}
                  className={`py-3.5 px-5 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    activeModalTab === tab.id
                      ? 'border-[#0F0F12] text-[#0F0F12] font-extrabold bg-gray-50'
                      : 'border-transparent text-gray-400 hover:text-[#0F0F12]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB CONTENT 1: PACK 360º VIP */}
            {activeModalTab === '360' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="p-8 sm:p-10 bg-[#FAFAFC] border-2 border-[#A594F9] shadow-xl relative space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-5">
                    <div>
                      <span className="text-xs font-bold text-[#A594F9] uppercase tracking-widest block font-sans">
                        {PACK_360.categoryTag}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-outfit text-[#0F0F12] pt-1">
                        {PACK_360.name}
                      </h3>
                    </div>

                    <div className="text-right">
                      <div className="text-4xl font-extrabold text-[#0F0F12] font-outfit">
                        CHF 5.000
                      </div>
                      <span className="text-xs text-gray-500 uppercase tracking-widest font-sans font-semibold">
                        {isDe ? 'Einmalzahlung / Gesamtprojekt' : 'One-time Payment / Full Project'}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {PACK_360.description}
                  </p>

                  {/* INCLUDED SERVICES CHECKLIST */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans pt-2">
                    {PACK_360.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center justify-between text-[#0F0F12] bg-white p-4 border border-gray-200">
                        <div className="flex items-center space-x-2.5">
                          <Check className="w-4 h-4 text-[#A594F9] shrink-0" />
                          <span className="font-semibold text-sm">{feat.text}</span>
                        </div>

                        {feat.hasVideoTrigger && (
                          <button
                            type="button"
                            onClick={() => setPreviewVideoUrl('https://player.vimeo.com/video/1126177678?autoplay=1')}
                            className="px-3 py-1 bg-[#A594F9] hover:bg-[#0F0F12] text-white text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer flex items-center space-x-1 shrink-0 ml-2"
                          >
                            <span>{t('video.watch')}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* PRODUCT PHOTO EXTRA NOTE */}
                  <div className="p-4 bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm font-sans font-medium flex items-center space-x-3">
                    <Camera className="w-5 h-5 text-amber-700 shrink-0" />
                    <span><strong>{isDe ? 'Hinweis zu Produkten:' : 'Note on Products:'}</strong> {PACK_360.extraNote}</span>
                  </div>

                  <div className="pt-2 text-right">
                    <button
                      onClick={() => {
                        setIsPacksModalOpen(false);
                        onOpenBooking(isDe ? 'Buchung Pack 360º (CHF 5.000)' : 'Booking Pack 360º (CHF 5,000)');
                      }}
                      className="w-full sm:w-auto px-10 py-4.5 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-xl inline-flex items-center justify-center space-x-2"
                    >
                      <span>{isDe ? 'Pack 360º anfragen (CHF 5.000)' : 'Request Pack 360º (CHF 5,000)'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* TAB CONTENT 2: IA & ASISTENTES */}
            {activeModalTab === 'ia' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
                {IA_SERVICES.map((pack) => (
                  <div
                    key={pack.id}
                    className={`border p-7 flex flex-col justify-between relative transition-all duration-300 ${
                      pack.isPopular ? 'border-[#A594F9] bg-[#FAFAFC] shadow-xl' : 'border-gray-200 bg-white'
                    }`}
                  >
                    {pack.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#A594F9] text-white px-3 py-0.5 text-[10px] font-sans font-bold uppercase tracking-widest shadow-md">
                        {pack.badge}
                      </div>
                    )}

                    <div className="space-y-4 pt-2">
                      <div>
                        <span className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest block">
                          {pack.categoryTag}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-outfit text-[#0F0F12] pt-1">
                          {pack.name}
                        </h3>
                      </div>

                      <div className="border-y border-gray-200/80 py-4">
                        <div className="text-3xl sm:text-4xl font-extrabold text-[#0F0F12] font-outfit">
                          CHF {pack.priceCHF.toLocaleString('de-CH')}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 font-light pt-1.5 leading-relaxed">
                          {pack.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-1 text-xs sm:text-sm font-sans">
                        <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest block">
                          {isDe ? 'Leistungsumfang:' : 'Included:'}
                        </span>
                        {pack.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start justify-between text-[#0F0F12] py-1 border-b border-gray-100 last:border-b-0">
                            <div className="flex items-start space-x-2">
                              <Check className="w-4 h-4 text-[#A594F9] shrink-0 mt-0.5" />
                              <span className="font-light leading-snug">{feat.text}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={() => {
                          setIsPacksModalOpen(false);
                          onOpenBooking(`${isDe ? 'Anfrage KI:' : 'AI Inquiry:'} ${pack.name} (CHF ${pack.priceCHF})`);
                        }}
                        className="w-full py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-extrabold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-md flex items-center justify-center space-x-2"
                      >
                        <span>{isDe ? `${pack.name} anfragen` : `Request ${pack.name}`}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB CONTENT 3: WEBDESIGN */}
            {activeModalTab === 'web' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
                {WEB_PACKS.map((pack) => (
                  <div
                    key={pack.id}
                    className={`border p-7 flex flex-col justify-between relative transition-all duration-300 ${
                      pack.isPopular ? 'border-[#A594F9] bg-[#FAFAFC] shadow-xl' : 'border-gray-200 bg-white'
                    }`}
                  >
                    {pack.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#A594F9] text-white px-3 py-0.5 text-[10px] font-sans font-bold uppercase tracking-widest shadow-md">
                        {pack.badge}
                      </div>
                    )}

                    <div className="space-y-4 pt-2">
                      <div>
                        <span className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest block">
                          {pack.categoryTag}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-outfit text-[#0F0F12] pt-1">
                          {pack.name}
                        </h3>
                      </div>

                      <div className="border-y border-gray-200/80 py-4">
                        <div className="text-3xl sm:text-4xl font-extrabold text-[#0F0F12] font-outfit">
                          CHF {pack.priceCHF.toLocaleString('de-CH')}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 font-light pt-1.5 leading-relaxed">
                          {pack.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-1 text-xs sm:text-sm font-sans">
                        <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest block">
                          {isDe ? 'Leistungsumfang:' : 'Included:'}
                        </span>
                        {pack.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start justify-between text-[#0F0F12] py-1 border-b border-gray-100 last:border-b-0">
                            <div className="flex items-start space-x-2">
                              <Check className="w-4 h-4 text-[#A594F9] shrink-0 mt-0.5" />
                              <span className="font-light leading-snug">{feat.text}</span>
                            </div>

                            {feat.hasVideoTrigger && (
                              <button
                                type="button"
                                onClick={() => setPreviewVideoUrl('https://player.vimeo.com/video/1126177678?autoplay=1')}
                                className="px-2.5 py-0.5 bg-[#A594F9] text-white text-[11px] font-extrabold uppercase tracking-wider hover:bg-[#0F0F12] transition-colors cursor-pointer flex items-center space-x-0.5 shrink-0 ml-2"
                              >
                                <span>{t('video.watch')}</span>
                                <ArrowUpRight className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={() => {
                          setIsPacksModalOpen(false);
                          onOpenBooking(`${isDe ? 'Anfrage Web:' : 'Web Inquiry:'} ${pack.name} (CHF ${pack.priceCHF})`);
                        }}
                        className="w-full py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-extrabold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-md flex items-center justify-center space-x-2"
                      >
                        <span>{isDe ? `${pack.name} anfragen` : `Request ${pack.name}`}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB CONTENT 4: BRANDING */}
            {activeModalTab === 'branding' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
                {BRANDING_PACKS.map((pack) => (
                  <div
                    key={pack.id}
                    className={`border p-8 sm:p-10 flex flex-col justify-between relative transition-all duration-300 ${
                      pack.isPopular ? 'border-[#A594F9] bg-[#FAFAFC] shadow-xl' : 'border-gray-200 bg-white'
                    }`}
                  >
                    {pack.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#A594F9] text-white px-3 py-0.5 text-[10px] font-sans font-bold uppercase tracking-widest shadow-md">
                        {pack.badge}
                      </div>
                    )}

                    <div className="space-y-4 pt-2">
                      <div>
                        <span className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest block">
                          {pack.categoryTag}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-[#0F0F12] pt-1">
                          {pack.name}
                        </h3>
                      </div>

                      <div className="border-y border-gray-200/80 py-4">
                        <div className="text-4xl font-extrabold text-[#0F0F12] font-outfit">
                          CHF {pack.priceCHF.toLocaleString('de-CH')}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 font-light pt-1.5 leading-relaxed">
                          {pack.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-2 text-xs sm:text-sm font-sans">
                        <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest block">
                          {isDe ? 'Projekt-Deliverables:' : 'Project Deliverables:'}
                        </span>
                        {pack.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start space-x-2.5 text-[#0F0F12]">
                            <Check className="w-4 h-4 text-[#A594F9] shrink-0 mt-0.5" />
                            <span className="font-light leading-relaxed">{feat.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8">
                      <button
                        onClick={() => {
                          setIsPacksModalOpen(false);
                          onOpenBooking(`${isDe ? 'Anfrage Branding:' : 'Branding Inquiry:'} ${pack.name} (CHF ${pack.priceCHF})`);
                        }}
                        className="w-full py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-extrabold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-md flex items-center justify-center space-x-2"
                      >
                        <span>{isDe ? `${pack.name} anfragen` : `Request ${pack.name}`}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB CONTENT 5: SOCIAL MEDIA */}
            {activeModalTab === 'social' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
                {SOCIAL_PACKS.map((pack) => (
                  <div
                    key={pack.id}
                    className={`border p-7 flex flex-col justify-between relative transition-all duration-300 ${
                      pack.isPopular ? 'border-[#A594F9] bg-[#FAFAFC] shadow-xl' : 'border-gray-200 bg-white'
                    }`}
                  >
                    {pack.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#A594F9] text-white px-3 py-0.5 text-[10px] font-sans font-bold uppercase tracking-widest shadow-md">
                        {pack.badge}
                      </div>
                    )}

                    <div className="space-y-4 pt-2">
                      <div>
                        <span className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest block">
                          {pack.categoryTag}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-outfit text-[#0F0F12] pt-1">
                          {pack.name}
                        </h3>
                      </div>

                      <div className="border-y border-gray-200/80 py-4">
                        <div className="text-3xl sm:text-4xl font-extrabold text-[#0F0F12] font-outfit">
                          CHF {pack.priceCHF.toLocaleString('de-CH')}
                          <span className="text-xs font-normal text-gray-500 font-sans pl-1">{pack.period}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 font-light pt-1.5 leading-relaxed">
                          {pack.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-1 text-xs sm:text-sm font-sans">
                        <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest block">
                          {isDe ? 'Monatliche Leistungen:' : 'Monthly Deliverables:'}
                        </span>
                        {pack.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start justify-between text-[#0F0F12] py-1 border-b border-gray-100 last:border-b-0">
                            <div className="flex items-start space-x-2">
                              <Check className="w-4 h-4 text-[#A594F9] shrink-0 mt-0.5" />
                              <span className="font-light leading-snug">{feat.text}</span>
                            </div>

                            {feat.hasVideoTrigger && (
                              <button
                                type="button"
                                onClick={() => setPreviewVideoUrl('https://player.vimeo.com/video/1126177678?autoplay=1')}
                                className="px-2.5 py-0.5 bg-[#A594F9] text-white text-[11px] font-extrabold uppercase tracking-wider hover:bg-[#0F0F12] transition-colors cursor-pointer flex items-center space-x-0.5 shrink-0 ml-2"
                              >
                                <span>{t('video.watch')}</span>
                                <ArrowUpRight className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={() => {
                          setIsPacksModalOpen(false);
                          onOpenBooking(`${isDe ? 'Anfrage Social Media:' : 'Social Media Inquiry:'} ${pack.name} (CHF ${pack.priceCHF})`);
                        }}
                        className="w-full py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-extrabold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-md flex items-center justify-center space-x-2"
                      >
                        <span>{isDe ? `${pack.name} anfragen` : `Request ${pack.name}`}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      )}

      {/* VIDEO PREVIEW OVERLAY PLAYER */}
      {previewVideoUrl && (
        <div
          onClick={() => setPreviewVideoUrl(null)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200 cursor-default"
        >
          <button
            onClick={() => setPreviewVideoUrl(null)}
            className="absolute top-6 right-6 z-50 p-2 text-white hover:text-[#A594F9] transition-colors focus:outline-none cursor-pointer"
            aria-label={t('video.close')}
          >
            <X className="w-8 h-8" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-[16/9] bg-black shadow-2xl overflow-hidden cursor-default border border-white/20"
          >
            <iframe
              src={previewVideoUrl}
              title="Showcase Video"
              className="w-full h-full border-0 outline-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
};
