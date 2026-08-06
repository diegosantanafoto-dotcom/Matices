import React, { useState } from 'react';
import { Printer, ArrowRight, CheckCircle2, Send } from 'lucide-react';

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
        title: 'Botella de Agua & Termo Personalizado',
        type: 'Vinilo & Adherencia Térmica',
        imageUrl: '/images/marcas/1-5.jpg',
        details: 'Botella de agua/termo de acero con logotipo vinílico de alta resistencia y durabilidad.'
      },
      {
        title: 'Bolsas Tote Bag Personalizadas "Laura"',
        type: 'Transfer Textil & Vinilo',
        imageUrl: '/images/marcas/1-12.jpg',
        details: 'Lona de algodón peinado personalizada con tipografía en vinilo recortado de precisión.'
      },
      {
        title: 'Caja de Presentación con Camiseta Estampada',
        type: 'Packaging & Vinilo Textil',
        imageUrl: '/images/marcas/1-15.jpg',
        details: 'Camiseta de algodón con estampado en relieve presentada en caja corporativa.'
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
        title: 'Botella de Agua & Merchandising Full Color',
        type: 'DTF HD Full Color',
        imageUrl: '/images/marcas/1-5.jpg',
        details: 'Personalización de accesorios y botellas con estampado DTF en alta definición.'
      },
      {
        title: 'Bolsas Tote Bag de Algodón "Laura"',
        type: 'DTF Textil Eco-Friendly',
        imageUrl: '/images/marcas/1-12.jpg',
        details: 'Bolsas de algodón reciclado con diseño gráfico a todo color sin marco transparente.'
      },
      {
        title: 'Caja con Camiseta Estampada a Todo Color',
        type: 'DTF Premium & Packaging',
        imageUrl: '/images/marcas/1-15.jpg',
        details: 'Packaging corporativo con camiseta peinada y estampado DTF fotográfico ultra-flexible.'
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
        title: 'Diseño & Adaptación de Marca para Óptica / Gafas',
        type: 'Diseño Gráfico & Branding',
        imageUrl: '/images/marcas/1-125.jpg',
        details: 'Desarrollo visual, grabado de marca y diseño gráfico aplicado a monturas de gafas.'
      },
      {
        title: 'Dirección de Arte & Packaging para Gafas de Sol',
        type: 'Diseño & Packaging de Autor',
        imageUrl: '/images/marcas/1-128.jpg',
        details: 'Diseño de fundas, grabado personalizado e identidad gráfica para colecciones de óptica.'
      },
      {
        title: 'Maquetación Digital & Grabado en Monturas',
        type: 'Vectorización & Mockups 3D',
        imageUrl: '/images/marcas/1-139.jpg',
        details: 'Vectorización precisa y adaptación de logotipos para patillas y lentes.'
      }
    ]
  }
];

interface MerchShowcaseProps {
  onOpenBooking: (type?: string) => void;
  onOpenLegal?: (tab?: 'IMPRESSUM' | 'PRIVACY' | 'COOKIES') => void;
}

export const MerchShowcase: React.FC<MerchShowcaseProps> = ({ onOpenBooking, onOpenLegal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    technique: 'DTF Full Color HD',
    quantity: '50-200 uds',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

        {/* FORMULARIO MINIMALISTA DE PROYECTOS DE PERSONALIZACIÓN */}
        <div id="formulario-personalizacion" className="pt-16 pb-12 border-t border-gray-100 max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#A594F9] font-bold">
              <span>Solicitud Directa</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F0F12] font-outfit tracking-tight">
              Inicia tu Proyecto de Personalización
            </h2>
            <p className="text-xs sm:text-sm text-[#666670] font-light max-w-lg mx-auto leading-relaxed">
              Completa los detalles de tu marca o idea. Te responderemos con una propuesta técnica y maquetación sin compromiso.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-gray-50/70 p-8 sm:p-12 border border-gray-200/80 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-gray-500 block">
                    Nombre / Marca *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Laura / Studio Atelier"
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-xs font-sans text-[#0F0F12] placeholder-gray-400 outline-none focus:border-[#A594F9] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-gray-500 block">
                    Email de Contacto *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="hola@tumarca.com"
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-xs font-sans text-[#0F0F12] placeholder-gray-400 outline-none focus:border-[#A594F9] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-gray-500 block">
                    Técnica de Interés
                  </label>
                  <select
                    value={formData.technique}
                    onChange={(e) => setFormData({ ...formData, technique: e.target.value })}
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-xs font-sans text-[#0F0F12] outline-none focus:border-[#A594F9] transition-colors cursor-pointer"
                  >
                    <option value="DTF Full Color HD">Estampado DTF Full Color HD</option>
                    <option value="Vinilo de Corte & Transfer">Vinilo de Corte & Transfer Textil</option>
                    <option value="Diseño Gráfico & Adaptación">Diseño Gráfico & Adaptación para Gafas/Merch</option>
                    <option value="Asesoramiento Combinado">Asesoramiento Técnico Combinado</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-gray-500 block">
                    Unidades Estimadas
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-xs font-sans text-[#0F0F12] outline-none focus:border-[#A594F9] transition-colors cursor-pointer"
                  >
                    <option value="10-50 uds">10 – 50 unidades</option>
                    <option value="50-200 uds">50 – 200 unidades</option>
                    <option value="200-500 uds">200 – 500 unidades</option>
                    <option value="+500 uds">Más de 500 unidades</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-sans font-bold uppercase tracking-wider text-gray-500 block">
                  Detalles del Proyecto
                </label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe brevemente tus prendas, botellas, bolsas u objetos a personalizar..."
                  className="w-full bg-white border border-gray-200 p-4 text-xs font-sans text-[#0F0F12] placeholder-gray-400 outline-none focus:border-[#A594F9] transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-bold text-xs tracking-widest uppercase transition-colors inline-flex items-center justify-center space-x-2 cursor-pointer font-outfit shadow-md"
                >
                  <span>Enviar Proyecto de Personalización</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-gray-50 p-10 border border-gray-200 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-outfit text-[#0F0F12]">
                ¡Solicitud Recibida Correctamente!
              </h3>
              <p className="text-xs text-gray-600 font-light max-w-md mx-auto leading-relaxed">
                Gracias por contactarnos. Evaluaremos tu proyecto ({formData.technique}) y te responderemos en menos de 24 horas.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-[#A594F9] underline uppercase tracking-wider pt-2 cursor-pointer"
              >
                Enviar otra consulta
              </button>
            </div>
          )}

          {/* MINIMAL LEGAL FOOTER FOR MERCH PAGE */}
          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-gray-400 gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} matices. Todos los derechos reservados.</p>
            <div className="flex space-x-6">
              <button
                onClick={() => onOpenLegal && onOpenLegal('IMPRESSUM')}
                className="hover:text-[#0F0F12] transition-colors cursor-pointer"
              >
                Aviso Legal / Impressum
              </button>
              <button
                onClick={() => onOpenLegal && onOpenLegal('PRIVACY')}
                className="hover:text-[#0F0F12] transition-colors cursor-pointer"
              >
                Privacidad (nLPD)
              </button>
              <button
                onClick={() => onOpenLegal && onOpenLegal('COOKIES')}
                className="hover:text-[#0F0F12] transition-colors cursor-pointer"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
