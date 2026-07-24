import React from 'react';
import { Printer, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface TechniqueSection {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  samples: {
    title: string;
    type: string;
    imageUrl: string;
    details: string;
  }[];
}

const MERCH_SECTIONS: TechniqueSection[] = [
  {
    id: 'tech-1',
    tag: 'Técnica 01 • Corte & Adherencia Térmica',
    title: 'Vinilo de Corte & Transfer Textil',
    subtitle: 'Acabados Metalizados, Reflectantes, Mates & Dorsales de Alta Durabilidad',
    description: 'Técnica de estampado térmico mediante lámina de polímero termoadhesiva recortada por plotter digital. Ideal para logotipos monocromáticos, dorsales numerados, acabados dorados, plateados, fosforescentes y vinilo textil flocado tipo terciopelo.',
    features: ['Acabados especiales (Dorado, Plata, Reflectante 3M)', 'Especial para sudaderas, camisetas y prendas deportivas', 'Alta resistencia a lavados intensos'],
    samples: [
      {
        title: 'Vinilo Metalizado Dorado sobre Sudadera Heavyweight',
        type: 'Vinilo de Corte Premium',
        imageUrl: '/images/marcas/PIPO-12.jpg',
        details: 'Gramaje 450g con logotipo en relieve vinílico dorado espejo.'
      },
      {
        title: 'Transfer Textil Reflectante en Gorras & Accesorios',
        type: 'Transfer Térmico Reflectante',
        imageUrl: '/images/marcas/PIPO-21.jpg',
        details: 'Perfil bajo de algodón lavado con estampado reflectante visibilidad nocturna.'
      },
      {
        title: 'Vinilo Flocado Mate sobre Camiseta de Algodón',
        type: 'Vinilo Flocado Efecto Velvet',
        imageUrl: '/images/marcas/PIPO-41.jpg',
        details: 'Textura con tacto suave aterciopelado sobre algodón orgánico 240g.'
      }
    ]
  },
  {
    id: 'tech-2',
    tag: 'Técnica 02 • Impresión Directa a Film',
    title: 'Estampado DTF HD (Direct to Film)',
    subtitle: 'Fotocromía Full Color, Gradientes Complejos & Micro-Detalles de Ilustración',
    description: 'La tecnología revolución en personalización textil. Se imprime mediante tintas CMYK + Blanco de pigmento fotográfico sobre film pet de transferencia, fusionando la tinta directamente en las fibras de algodón, poliéster o mezcla.',
    features: ['Sin límite de colores ni degradados (Calidad Fotográfica HD)', 'Tacto suave ultra-flexible que no se cuartea', 'Apto para prendas oscuras y claras sin marco transparente'],
    samples: [
      {
        title: 'Ilustración Fotográfica en Espalda de Camiseta Oversized',
        type: 'DTF Full Color HD',
        imageUrl: '/images/marcas/PIPO-29.jpg',
        details: 'Algodón peinado 280g con estampado de gradiente fotográfico en alta resolución.'
      },
      {
        title: 'Bolsas Tote Bag de Algodón Reciclado con Logotipo Multicolor',
        type: 'DTF Textil Eco-Friendly',
        imageUrl: '/images/marcas/PIPO-54.jpg',
        details: 'Lona de algodón 300g personalizada con degradados y líneas de alta definición.'
      },
      {
        title: 'Detalle de Marca en Manga & Pecho de Sudadera',
        type: 'DTF Micro-Detalle',
        imageUrl: '/images/marcas/PIPO-70.jpg',
        details: 'Estampado de precisión milimétrica en puños, mangas y cuellos.'
      }
    ]
  },
  {
    id: 'tech-3',
    tag: 'Técnica 03 • Dirección de Arte & Preparación de Artes',
    title: 'Diseño Gráfico & Adaptación de Marca',
    subtitle: 'Vectorización, Maquetación en Mockups 3D & Preparación de Fotolitos',
    description: 'No solo estampamos: desarrollamos y adaptamos el lenguaje visual de tu marca. Redibujamos vectorialmente tu logotipo, ajustamos la escala óptima de impresión según la talla de la prenda y generamos maquetas digitales hiperrealistas antes de entrar en máquinas.',
    features: ['Vectorización profesional de archivos pesados', 'Maquetación previa en Mockups 3D de prendas', 'Asesoramiento técnico en gramajes y tintas'],
    samples: [
      {
        title: 'Maquetación Digital de Colección Capsule Merch',
        type: 'Diseño & Mockup 3D',
        imageUrl: '/images/marcas/SAN07748.jpg',
        details: 'Previsualización exacta de posición de estampados y etiquetas.'
      },
      {
        title: 'Identidad Visual & Etiquetado Personalizado',
        type: 'Diseño de Etiqueta & Packaging',
        imageUrl: '/images/marcas/venta instrumentos-1.jpg',
        details: 'Etiqueta tejida cosida al cuello y packaging de presentación.'
      },
      {
        title: 'Adaptación Vectorial para Serigrafía & Vinilo',
        type: 'Separación de Color & Vectores',
        imageUrl: '/images/marcas/SAN08125.jpg',
        details: 'Optimización de líneas de corte y fotolitos de impresión.'
      }
    ]
  }
];

interface MerchShowcaseProps {
  onOpenBooking: (type?: string) => void;
}

export const MerchShowcase: React.FC<MerchShowcaseProps> = ({ onOpenBooking }) => {
  return (
    <section id="merch" className="pt-56 pb-24 bg-white w-full border-0">
      
      {/* BACKGROUND LENS FLARE */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(165,148,249,0.12),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-[100vw] px-4 sm:px-8 md:px-12 lg:px-16 space-y-24 relative z-10">
        
        {/* HEADER BLOCK */}
        <div className="border-b border-gray-100 pb-8 max-w-4xl space-y-3">
          <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#A594F9] font-bold">
            <Printer className="w-4 h-4" />
            <span>Técnicas de Estampado & Producción Textil</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F0F12] tracking-tight">
            Personalización de Merch: <span className="font-editorial-italic font-normal text-3xl sm:text-5xl text-[#A594F9]">Vinilo, DTF & Diseño</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#666670] font-normal leading-relaxed">
            Desglose completo de nuestros procesos de estampado y desarrollo de marca. Seleccionamos el soporte y la técnica idónea para tu proyecto.
          </p>
        </div>

        {/* 3 TECHNIQUE SECTIONS (PROYECTOS PAGE LAYOUT STRUCTURE) */}
        <div className="space-y-28">
          {MERCH_SECTIONS.map((section, idx) => (
            <div
              key={section.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-gray-100 pb-20 last:border-b-0"
            >
              
              {/* LEFT SIDE: TECHNIQUE EDITORIAL STORYTELLING & SPECS */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-xs font-sans text-[#A594F9]">
                    <span className="font-bold text-[#0F0F12]">0{idx + 1}</span>
                    <span>•</span>
                    <span className="uppercase tracking-widest font-semibold">{section.tag}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F0F12] font-outfit tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-xs font-sans text-gray-500 font-medium">
                    {section.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#666670] font-light leading-relaxed">
                  {section.description}
                </p>

                {/* FEATURES LIST */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-sans text-gray-400 uppercase tracking-widest block font-bold">
                    Ventajas de la Técnica:
                  </span>
                  <div className="space-y-1.5 text-xs font-sans">
                    {section.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2 text-[#0F0F12]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A594F9] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenBooking(`Cotización Técnica: ${section.title}`)}
                    className="inline-flex items-center space-x-2 text-xs font-sans font-bold text-[#0F0F12] hover:text-[#A594F9] transition-colors uppercase tracking-wider group cursor-pointer"
                  >
                    <span>Solicitar Estampado en {section.title}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

              {/* RIGHT SIDE: 3 SAMPLE ITEMS SHOWCASE FOR THIS TECHNIQUE */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {section.samples.map((sample, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-white border border-gray-100 rounded-none overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                          <img
                            src={sample.imageUrl}
                            alt={sample.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-none"
                          />
                          <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-none text-[9px] font-sans text-white uppercase tracking-wider">
                            {sample.type}
                          </div>
                        </div>

                        <div className="p-4 space-y-2">
                          <h4 className="text-xs font-bold text-[#0F0F12] font-outfit group-hover:text-[#A594F9] transition-colors leading-snug">
                            {sample.title}
                          </h4>
                          <p className="text-[11px] text-[#666670] font-light leading-relaxed">
                            {sample.details}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <button
                          onClick={() => onOpenBooking(`Estampado: ${sample.title}`)}
                          className="w-full py-2 bg-gray-50 hover:bg-[#A594F9] text-[#0F0F12] hover:text-white text-[10px] font-sans font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-none"
                        >
                          Cotizar Muestra
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="p-8 sm:p-12 bg-gray-900 text-white rounded-none space-y-6 text-center max-w-4xl mx-auto border-0">
          <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#A594F9] font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Desarrollo Integral de Merchandising de Autor</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-outfit">
            ¿Tienes dudas sobre qué técnica (Vinilo, DTF o Diseño) usar?
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
            Te guiamos de principio a fin: enviamos maquetas 3D digitalizadas de tus prendas y muestras físicas de estampado antes de entrar a producción.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onOpenBooking('Asesoría Técnica de Merch & Estampado')}
              className="px-8 py-4 rounded-none bg-[#A594F9] hover:bg-indigo-500 text-white font-bold text-xs tracking-widest uppercase transition-colors inline-flex items-center space-x-2 cursor-pointer shadow-xl font-outfit"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Solicitar Asesoría de Estampado</span>
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
