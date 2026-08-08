import React, { useState } from 'react';
import { Cpu, Palette, Globe, Share2, CheckCircle2, ArrowRight, Layers, Sparkles, X, Check, Camera, Zap, ArrowUpRight } from 'lucide-react';

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

const DIGITAL_SERVICES: DigitalService[] = [
  {
    id: 'dig-1',
    num: '01',
    tag: 'IA Generativa & Automatización',
    title: 'Implementación de IA',
    subtitle: 'Asistentes Virtuales, Agendamiento & Workflows Neuronal',
    description: 'Desarrollo de asistentes virtuales con inteligencia artificial para atención 24/7, integración de apps para agendamiento automático de citas y automatización de procesos creativos de marca.',
    icon: Cpu,
    badge: 'Asistentes & Agendamiento',
    packType: 'ia',
    sampleImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Asistentes Virtuales & Chatbots IA 24/7 para atención al cliente',
      'Apps & Sistemas de Agendamiento Automático de citas y reservas',
      'Automatización de Workflows de trabajo y respuesta inteligente',
      'Postproducción visual asistida por modelos neuronales'
    ]
  },
  {
    id: 'dig-2',
    num: '02',
    tag: 'Branding & Identidad Visual',
    title: 'Diseño de Marca',
    subtitle: 'Identidades de Autor, Guías de Estilo & Sistemas Visuales',
    description: 'Construcción de identidades de marca memorables: logotipos vectoriales de alta precisión, paletas cromáticas con carácter, tipografía editorial y manuales corporativos.',
    icon: Palette,
    badge: 'Identidad & Branding',
    packType: 'branding',
    sampleImage: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Diseño de Logotipo principal y versión para fondo oscuro',
      'Manuales de Identidad Visual impresos y digitales',
      'Papelería corporativa, packagings y guías de estilo para redes'
    ]
  },
  {
    id: 'dig-3',
    num: '03',
    tag: 'Desarrollo Web & UI/UX',
    title: 'Diseño Web',
    subtitle: 'Web Landing Page, Plataformas Multi-Página & E-Commerce',
    description: 'Desarrollo de sitios web a medida centrados en la estética editorial, velocidad de carga instantánea, optimización SEO y producción audiovisual integrada.',
    icon: Globe,
    badge: 'Landing & E-Commerce',
    packType: 'web',
    sampleImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Landing Pages responsive de alto rendimiento',
      'Web Corporativa Multi-Página con portfolio de proyectos',
      'Tiendas Online E-Commerce con pasarelas de pago seguras'
    ]
  },
  {
    id: 'dig-4',
    num: '04',
    tag: 'Social Media & Contenido Continuo',
    title: 'Social Media & Redes',
    subtitle: 'Creación de Contenido Mensual, Reels Cinemáticos & Fotografía',
    description: 'Planes mensuales de contenido audiovisual diseñados para que las marcas mantengan una presencia constante, estética y con estándar de agencia profesional.',
    icon: Share2,
    badge: 'Planes Mensuales',
    packType: 'social',
    sampleImage: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1000&auto=format&fit=crop',
    features: [
      'Producción cinemática 4K de Reels y TikToks',
      'Sesiones fotográficas editoriales de producto y equipo',
      'Calendarios de contenido, estrategia y copys bilingües'
    ]
  }
];

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

const IA_SERVICES: ServicePackItem[] = [
  {
    id: 'ia-asistente',
    name: 'Asistente Virtual IA & Chatbot 24/7',
    categoryTag: 'Atención al Cliente Automática',
    priceCHF: 1200,
    description: 'Implementación de un asistente virtual entrenado con la información de tu empresa para responder consultas en tiempo real 24/7.',
    features: [
      { text: 'Entrenamiento con preguntas frecuentes y catálogo de tu empresa' },
      { text: 'Integración en sitio web, WhatsApp o Instagram Direct' },
      { text: 'Soporte multilingüe automático (Español, Alemán, Inglés, Francés)' },
      { text: 'Panel de métricas y derivación directa a agente humano' }
    ]
  },
  {
    id: 'ia-[#A594F9]',
    name: 'Sistema de Agendamiento Citas & Reservas',
    categoryTag: 'Reserva Automática de Clientes',
    priceCHF: 950,
    isPopular: true,
    badge: 'Muy Solicitado',
    description: 'Aplicación y sistema inteligente de reservas de citas sincronizado con tu calendario y recordatorios automáticos por SMS/Email.',
    features: [
      { text: 'Página de agendamiento personalizada con colores de tu marca' },
      { text: 'Sincronización bidireccional con Google Calendar / Outlook' },
      { text: 'Recordatorios automáticos pre-cita por email o WhatsApp' },
      { text: 'Pasarela opcional de pago anticipado o depósito de reserva' }
    ]
  },
  {
    id: 'ia-workflows',
    name: 'Automatización de Workflows Creativos',
    categoryTag: 'Generación & Procesos Visuales',
    priceCHF: 1600,
    description: 'Flujos de trabajo personalizados con herramientas de IA generativa para edición masiva de imágenes, upscaling 8K y activos de marketing.',
    features: [
      { text: 'Upscaling 8K y restauración cromática neuronal de fotografías' },
      { text: 'Generación y extensión de fondos con inteligencia artificial' },
      { text: 'Automatización de plantillas de diseño para redes sociales' }
    ]
  }
];

const WEB_PACKS: ServicePackItem[] = [
  {
    id: 'web-landing',
    name: 'Pack Web Landing Page Exprés',
    categoryTag: 'Landing Page + Foto + Vídeo Intro',
    priceCHF: 2500,
    description: 'Ideal para lanzar una presencia digital impecable de una sola página básica con producción audiovisual propia.',
    referenceVideoUrl: 'https://player.vimeo.com/video/1126177678',
    features: [
      { text: 'Desarrollo Web Landing Page de una sola página (Diseño responsive & ultra-rápido)' },
      { text: 'Incluye 1 Sesión Fotográfica corporativa o de producto' },
      { text: 'Incluye 1 Vídeo Intro / Presentación Cinemática de marca', hasVideoTrigger: true },
      { text: 'Formulario de contacto directo, mapa interactivo y SEO básico técnico' }
    ]
  },
  {
    id: 'web-corp',
    name: 'Pack Web Corporativa Multi-Página',
    categoryTag: 'Sitio Web Completo (Hasta 5 páginas)',
    priceCHF: 4200,
    isPopular: true,
    badge: 'Recomendado',
    description: 'Para empresas y firmas que requieren estructura de secciones independientes, portfolio y SEO avanzado.',
    referenceVideoUrl: 'https://player.vimeo.com/video/1126177678',
    features: [
      { text: 'Sitio Web Corporativo de hasta 5 páginas (Inicio, Servicios, Sobre Nosotros, Galería, Contacto)' },
      { text: 'Incluye 1 Sesión Fotográfica Completa de Instalaciones & Equipo' },
      { text: 'Incluye 1 Vídeo Cinemático de Presentación de Marca (edición 4K)', hasVideoTrigger: true },
      { text: 'Micro-animaciones fluidas, panel autogestionable y SEO técnico avanzado' }
    ]
  },
  {
    id: 'web-ecommerce',
    name: 'Pack Plataforma Web & E-Commerce',
    categoryTag: 'Tienda Online / Catálogo de Venta',
    priceCHF: 6800,
    description: 'Desarrollo web avanzado con pasarela de pagos integradas (Credit Card, TWINT, Apple Pay) y catálogo interactivo.',
    referenceVideoUrl: 'https://player.vimeo.com/video/1126177678',
    features: [
      { text: 'Plataforma E-Commerce o Catálogo Interactivo a medida' },
      { text: 'Pasarela de pagos seguros (TWINT, Stripe, Apple Pay, Tarjeta)' },
      { text: 'Producción de Vídeos para Productos/Servicios', hasVideoTrigger: true },
      { text: 'Fotografía de Catálogo Completa y soporte prioritario' }
    ]
  }
];

const BRANDING_PACKS: ServicePackItem[] = [
  {
    id: 'brand-express',
    name: 'Pack Identidad Esencial & Logo',
    categoryTag: 'Diseño Rápido & Manual Básico',
    priceCHF: 700,
    description: 'Diseño ágil de logotipo y guía básica de marca para proyectos que necesitan lanzar rápido.',
    features: [
      { text: 'Diseño rápido de Logotipo principal y versión para fondo oscuro' },
      { text: 'Manual de uso de marca básico (paleta de colores y tipografía principal)' },
      { text: 'Entrega de archivos vectoriales originales (SVG, EPS, PDF, PNG HD)' }
    ]
  },
  {
    id: 'brand-full',
    name: 'Pack Sistema de Marca Completo',
    categoryTag: 'Branding 360º & Guía Editorial',
    priceCHF: 1500,
    isPopular: true,
    badge: 'Branding Completo',
    description: 'Desarrollo visual profundo con variantes de marca, maquetación de papelería y guía de aplicación integral.',
    features: [
      { text: 'Identidad visual 360º (Logo principal, secundario, isotipo y marca de agua)' },
      { text: 'Manual de Identidad de Marca avanzado (guía de uso digital e impreso)' },
      { text: 'Maquetación de papelería corporativa, plantillas para redes sociales y firmas de correo' }
    ]
  }
];

const PACK_360: ServicePackItem = {
  id: 'pack-360-vip',
  name: 'Pack 360º Brand & Digital Transformation',
  categoryTag: 'Pack Integral: Marca + Web + Vídeo + Fotos Team',
  priceCHF: 5000,
  isPopular: true,
  badge: 'Pack VIP CHF 5.000',
  description: 'La solución completa de CHF 5.000 para crear o transformar tu marca con branding, landing page web, vídeo de presentación cinemático y fotos del equipo.',
  referenceVideoUrl: 'https://player.vimeo.com/video/1126177678',
  extraNote: 'Sesión Fotográfica de Producto disponible como valor extra a cotizar según volumen y necesidades del catálogo.',
  features: [
    { text: 'Creación de Marca Básica (Diseño de Logo + Manual de uso de marca básico)' },
    { text: 'Desarrollo Web Landing Page de Autor de una sola página (responsive & ultra-rápida)' },
    { text: 'Vídeo Intro / Presentación Cinemática de Marca', hasVideoTrigger: true },
    { text: 'Sesión Fotográfica del Equipo (Retratos editoriales del equipo retocados)' }
  ]
};

const SOCIAL_PACKS: ServicePackItem[] = [
  {
    id: 'pack-starter',
    name: 'Pack Essential Presence',
    categoryTag: 'Sencillo • Para Marcas que Inician',
    priceCHF: 449,
    period: '/ mes',
    description: 'Ideal para mantener el perfil actualizado con material profesional sin una gran inversión.',
    referenceVideoUrl: 'https://player.vimeo.com/video/1126177678',
    features: [
      { text: '1 Vídeo Reel/TikTok cinemático 4K (duración final: 30 a 60 segundos)', hasVideoTrigger: true },
      { text: '1 Sesión fotográfica de producto/equipo (15 fotos HD retocadas)' },
      { text: 'Planificación de calendario de contenidos mensual' },
      { text: 'Redacción de copys bilingües (ES / DE / EN) y hashtags' }
    ]
  },
  {
    id: 'pack-growth',
    name: 'Pack Growth Accelerator',
    categoryTag: 'Recomendado • Publicación Semanal',
    priceCHF: 999,
    period: '/ mes',
    isPopular: true,
    badge: 'Más Popular',
    description: 'Para negocios que requieren tracción constante, interacción semanal y crecimiento de audiencia.',
    referenceVideoUrl: 'https://player.vimeo.com/video/1126177678',
    features: [
      { text: '4 Vídeos Reels/TikToks cinemáticos 4K (duración final: 15 a 45 seg c/u - 1/semana)', hasVideoTrigger: true },
      { text: '2 Sesiones fotográficas mensuales (35 fotos HD retocadas)' },
      { text: 'Diseño de Carruseles editoriales y Stories semanales' },
      { text: 'Programación de publicaciones y gestión básica de comunidad' },
      { text: 'Estrategia de contenido mensual e informes de rendimiento' }
    ]
  },
  {
    id: 'pack-empire',
    name: 'Pack Empire Full Scale',
    categoryTag: 'Pro • Cobertura Integral',
    priceCHF: 1899,
    period: '/ mes',
    badge: 'Máximo Impacto',
    description: 'Delegación total de la producción audiovisual y redes sociales para marcas consolidadas.',
    referenceVideoUrl: 'https://player.vimeo.com/video/1126177678',
    features: [
      { text: '8 a 10 Vídeos Reels/TikToks cinemáticos 4K (duración final: 15 a 60 seg c/u - 2/semana)', hasVideoTrigger: true },
      { text: '4 Sesiones fotográficas mensuales (60+ fotos HD retocadas)' },
      { text: 'Estrategia integral de contenido, dirección de arte e identidad' },
      { text: 'Gestión y optimización de campañas de publicidad (Social Ads)' },
      { text: 'Informes mensuales avanzados de analítica y soporte prioritario 24/7' }
    ]
  }
];

interface DigitalShowcaseProps {
  onOpenBooking: (type?: string) => void;
}

export const DigitalShowcase: React.FC<DigitalShowcaseProps> = ({ onOpenBooking }) => {
  const [activeModalTab, setActiveModalTab] = useState<'360' | 'ia' | 'web' | 'branding' | 'social'>('ia');
  const [isPacksModalOpen, setIsPacksModalOpen] = useState<boolean>(false);
  const [previewVideoUrl, setPreviewVideoUrl] = useState<string | null>(null);

  const openPacksModalWithTab = (tab: '360' | 'ia' | 'web' | 'branding' | 'social') => {
    setActiveModalTab(tab);
    setIsPacksModalOpen(true);
  };

  return (
    <section id="digital" className="pt-52 pb-28 bg-[#FAFAFC] w-full border-0 cursor-default text-[#0F0F12]">
      
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(165,148,249,0.14),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-[100vw] px-6 sm:px-10 md:px-14 lg:px-16 space-y-20 relative z-10">
        
        {/* UNIFIED EDITORIAL HEADER */}
        <div className="border-b border-gray-200 pb-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2.5 text-sm font-sans uppercase tracking-[0.2em] text-[#A594F9] font-extrabold">
            <Layers className="w-4 h-4" />
            <span>Soluciones Digitales & Servicios</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0F0F12] font-outfit tracking-tight leading-tight">
            Servicios Digitales Integrados: <br />
            <span className="font-editorial-italic font-normal text-4xl sm:text-6xl text-[#A594F9]">
              IA, Marca, Web & Redes Sociales
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#555560] font-light leading-relaxed">
            Estructura transparente de servicios diseñados para impulsar marcas en Suiza: desarrollo de asistentes virtuales e inteligencia artificial, identidad de marca, sitios web a medida y gestión mensual de contenidos.
          </p>
        </div>

        {/* MODERN 4 CATEGORIES GRID (CLEAN DESCRIPTIONS ONLY - NO PACK LISTS ON OUTER CARDS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIGITAL_SERVICES.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className="bg-white border border-gray-200 shadow-sm rounded-none overflow-hidden transition-all duration-500 flex flex-col justify-between group hover:shadow-2xl hover:border-[#A594F9]"
              >
                <div>
                  {/* MINIMALIST ARCHITECTURAL/STUDIO IMAGE HEADER */}
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

                  {/* CARD CONTENT WITH CLEAN DESCRIPTION & CAPABILITIES */}
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
                        Capacidades Principales:
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
                    <span>Ver Paquetes & Tarifas</span>
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
              <span>Pack 360º Transformación Digital</span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F0F12] font-outfit">
              Branding + Web Landing + Vídeo Intro + Fotos Team
            </h3>

            <p className="text-sm text-gray-500 font-light max-w-2xl leading-relaxed">
              El paquete definitivo para crear tu marca básica, landing page web responsive, vídeo de presentación cinemático y fotografías del equipo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button
              onClick={() => openPacksModalWithTab('360')}
              className="px-8 py-4.5 bg-[#A594F9] hover:bg-[#0F0F12] text-white font-extrabold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-md whitespace-nowrap flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ver Detalle Pack 360º</span>
            </button>

            <button
              onClick={() => onOpenBooking('Contratación Pack 360º')}
              className="px-8 py-4.5 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-extrabold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-md flex items-center justify-center space-x-2 whitespace-nowrap"
            >
              <span>Contratar Pack 360º</span>
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
            >
              <X className="w-7 h-7" />
            </button>

            {/* MODAL HEADER */}
            <div className="border-b border-gray-100 pb-5 space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#A594F9] font-extrabold">
                <Layers className="w-4 h-4" />
                <span>Tarifario Oficial & Paquetes Digitales (en CHF)</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F0F12] font-outfit">
                Explora los Paquetes Digitales de Matices
              </h2>
            </div>

            {/* TAB NAVIGATION IN MODAL WITH BIGGER TEXT */}
            <div className="flex border-b border-gray-200 space-x-4 overflow-x-auto text-xs sm:text-sm font-sans font-extrabold uppercase tracking-wider">
              {[
                { id: '360', label: 'Pack 360º VIP (CHF 5.000)' },
                { id: 'ia', label: 'IA & Asistentes (3 Packs)' },
                { id: 'web', label: 'Diseño Web (3 Packs)' },
                { id: 'branding', label: 'Diseño de Marca (2 Packs)' },
                { id: 'social', label: 'Social Media (3 Packs)' }
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

            {/* TAB CONTENT 1: PACK 360º VIP (CHF 5,000) */}
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
                      <span className="text-xs text-gray-500 uppercase tracking-widest font-sans font-semibold">Pago Único / Proyecto Completo</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {PACK_360.description}
                  </p>

                  {/* INCLUDED SERVICES CHECKLIST WITH VER TRIGGER */}
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
                            <span>Ver</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* PRODUCT PHOTO EXTRA NOTE */}
                  <div className="p-4 bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm font-sans font-medium flex items-center space-x-3">
                    <Camera className="w-5 h-5 text-amber-700 shrink-0" />
                    <span><strong>Nota sobre Producto:</strong> {PACK_360.extraNote}</span>
                  </div>

                  <div className="pt-2 text-right">
                    <button
                      onClick={() => {
                        setIsPacksModalOpen(false);
                        onOpenBooking('Contratación Pack 360º (CHF 5.000)');
                      }}
                      className="w-full sm:w-auto px-10 py-4.5 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-xl inline-flex items-center justify-center space-x-2"
                    >
                      <span>Contratar Pack 360º Integral (CHF 5.000)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* TAB CONTENT 2: IA & ASISTENTES (3 PACKS) */}
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
                          Incluye:
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
                          onOpenBooking(`Contratación IA: ${pack.name} (CHF ${pack.priceCHF})`);
                        }}
                        className="w-full py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-extrabold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-md flex items-center justify-center space-x-2"
                      >
                        <span>Contratar {pack.name}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB CONTENT 3: DISEÑO WEB (3 PACKS) */}
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
                          Incluye:
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
                                <span>Ver</span>
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
                          onOpenBooking(`Contratación Web: ${pack.name} (CHF ${pack.priceCHF})`);
                        }}
                        className="w-full py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-extrabold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-md flex items-center justify-center space-x-2"
                      >
                        <span>Contratar {pack.name}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB CONTENT 4: DISEÑO DE MARCA / BRANDING (2 PACKS) */}
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
                          Entregables del Proyecto:
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
                          onOpenBooking(`Contratación Marca: ${pack.name} (CHF ${pack.priceCHF})`);
                        }}
                        className="w-full py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-extrabold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-md flex items-center justify-center space-x-2"
                      >
                        <span>Contratar {pack.name}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB CONTENT 5: SOCIAL MEDIA (3 PACKS) */}
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
                          Servicios Mensuales:
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
                                <span>Ver</span>
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
                          onOpenBooking(`Contratación Social: ${pack.name} (CHF ${pack.priceCHF}/mes)`);
                        }}
                        className="w-full py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-extrabold text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none font-outfit shadow-md flex items-center justify-center space-x-2"
                      >
                        <span>Contratar {pack.name}</span>
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
            aria-label="Cerrar vídeo"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-[16/9] bg-black shadow-2xl overflow-hidden cursor-default border border-white/20"
          >
            <iframe
              src={previewVideoUrl}
              title="Vídeo de Muestra"
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
