import React from 'react';
import { Cpu, Palette, Globe, CheckCircle2, ArrowRight, Layers, Sparkles } from 'lucide-react';

interface DigitalService {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  sampleImage: string;
  badge: string;
}

const DIGITAL_SERVICES: DigitalService[] = [
  {
    id: 'dig-1',
    tag: 'Servicio 01 • Inteligencia Artificial Generativa',
    title: 'Implementación de IA',
    subtitle: 'Workflows de IA, Postproducción Avanzada & Automatización Creativa',
    description: 'Integración de herramientas de inteligencia artificial de última generación en los procesos creativos. Desde generación de maquetas hiperrealistas hasta upscaling de imágenes, retoque asistido y automatización de activos de marketing sin perder el alma de autor.',
    icon: Cpu,
    badge: 'AI Generativa & Automatización',
    sampleImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Generación y extensión de fondos con IA de alta resolución',
      'Upscaling 8K y restauración cromática asistida por modelos neuronales',
      'Flujos de trabajo personalizados para campañas publicitarias masivas'
    ]
  },
  {
    id: 'dig-2',
    tag: 'Servicio 02 • Identidad Visual & Dirección de Arte',
    title: 'Diseño de Marca',
    subtitle: 'Branding de Autor, Guías de Estilo & Sistemas Visuales Contemporáneos',
    description: 'Construimos identidades de marca sólidas y memorables. Definimos el lenguaje visual completo: logotipos vectoriales, paletas de color con carácter, selección tipográfica editorial, papelería de lujo y manuales de identidad corporativa.',
    icon: Palette,
    badge: 'Branding & Sistemas de Marca',
    sampleImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Creación de logotipos y marcas denominativas de alta precisión',
      'Manual de marca interactivo con directrices de aplicación digital e impresa',
      'Diseño de packaging, etiquetado corporativo y dirección de arte'
    ]
  },
  {
    id: 'dig-3',
    tag: 'Servicio 03 • Experiencias Digitales de Autor',
    title: 'Diseño Web',
    subtitle: 'Desarrollo Web Ultra-Rápido, UI/UX Minimalista & Arquitectura Moderna',
    description: 'Diseñamos y desarrollamos plataformas web a medida centradas en la excelencia estética y la velocidad. Aplicamos arquitecturas modernas (React, Next.js, Vite) con micro-animaciones fluidas, adaptabilidad móvil perfecta y optimización SEO técnica.',
    icon: Globe,
    badge: 'Desarrollo Web & UI/UX',
    sampleImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Páginas web a medida con estética premium y tiempos de carga instantáneos',
      'Experiencia de usuario (UI/UX) optimizada para conversión y captación',
      'Optimización SEO integral, accesibilidad e integración con APIs'
    ]
  }
];

interface DigitalShowcaseProps {
  onOpenBooking: (type?: string) => void;
}

export const DigitalShowcase: React.FC<DigitalShowcaseProps> = ({ onOpenBooking }) => {
  return (
    <section id="digital" className="pt-56 pb-24 bg-white w-full border-0 cursor-default">
      
      {/* BACKGROUND AMBIENT LENS FLARE */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(165,148,249,0.12),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-[100vw] px-4 sm:px-8 md:px-12 lg:px-16 space-y-24 relative z-10">
        
        {/* HEADER BLOCK */}
        <div className="border-b border-gray-100 pb-8 max-w-4xl space-y-3">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#A594F9] font-bold">
            <Layers className="w-4 h-4" />
            <span>Soluciones Digitales & Tecnología Creativa</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F0F12] font-outfit tracking-tight">
            Servicios Digitales: <span className="font-editorial-italic font-normal text-3xl sm:text-5xl text-[#A594F9]">IA, Marca & Web</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#666670] font-light leading-relaxed">
            Unimos la precisión de la inteligencia artificial generativa con la dirección de arte editorial y el desarrollo web de alto rendimiento para impulsar marcas contemporáneas.
          </p>
        </div>

        {/* 3 DIGITAL SERVICES BLOCKS */}
        <div className="space-y-28">
          {DIGITAL_SERVICES.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-gray-100 pb-20 last:border-b-0"
              >
                
                {/* LEFT SIDE: SERVICE DESCRIPTION & DETAILS */}
                <div className="lg:col-span-6 space-y-6">
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-xs font-sans text-[#A594F9]">
                      <span className="font-bold text-[#0F0F12]">0{idx + 1}</span>
                      <span>•</span>
                      <span className="uppercase tracking-widest font-semibold">{service.tag}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gray-50 border border-gray-100 text-[#0F0F12]">
                        <IconComponent className="w-6 h-6 text-[#A594F9]" />
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F0F12] font-outfit tracking-tight">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-xs font-sans text-gray-500 font-medium pt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#666670] font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* FEATURES LIST */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-sans text-gray-400 uppercase tracking-widest block font-bold">
                      Capacidades & Alcance:
                    </span>
                    <div className="space-y-2 text-xs font-sans">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2 text-[#0F0F12]">
                          <CheckCircle2 className="w-4 h-4 text-[#A594F9] shrink-0 mt-0.5" />
                          <span className="font-normal">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onOpenBooking(`Consulta Digital: ${service.title}`)}
                      className="inline-flex items-center space-x-2 text-xs font-sans font-bold text-[#0F0F12] hover:text-[#A594F9] transition-colors uppercase tracking-wider group cursor-pointer"
                    >
                      <span>Solicitar Propuesta de {service.title}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>

                {/* RIGHT SIDE: FEATURED IMAGE CARD */}
                <div className="lg:col-span-6">
                  <div className="relative group overflow-hidden bg-gray-100 border border-gray-200 rounded-none shadow-lg">
                    <div className="aspect-[16/10] w-full overflow-hidden relative">
                      <img
                        src={service.sampleImage}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-none"
                      />
                      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 text-[10px] font-sans text-white uppercase tracking-widest font-semibold">
                        {service.badge}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* BOTTOM DIGITAL CONSULTATION BANNER */}
        <div className="p-8 sm:p-12 bg-gray-50 border border-gray-200/80 rounded-none space-y-6 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#A594F9] font-bold">
            <Sparkles className="w-4 h-4 text-[#A594F9]" />
            <span>Consultoría Digital Integral</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F0F12] font-outfit">
            ¿Necesitas combinar IA, Diseño de Marca y Desarrollo Web?
          </h2>

          <p className="text-xs sm:text-sm text-[#666670] max-w-xl mx-auto font-light leading-relaxed">
            Diseñamos soluciones digitales personalizadas que integran branding, flujos de trabajo con inteligencia artificial y sitios web de alto rendimiento.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onOpenBooking('Proyecto Digital Integral (IA, Marca & Web)')}
              className="px-8 py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-bold text-xs tracking-widest uppercase transition-colors inline-flex items-center space-x-2 cursor-pointer shadow-lg font-outfit"
            >
              <span>Solicitar Asesoría Digital</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
