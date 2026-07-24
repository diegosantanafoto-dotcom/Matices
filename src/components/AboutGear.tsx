import React from 'react';
import { Camera, Film, Sparkles, Award, Heart, ArrowRight } from 'lucide-react';

interface AboutGearProps {
  onOpenBooking?: (type?: string) => void;
}

export const AboutGear: React.FC<AboutGearProps> = ({ onOpenBooking }) => {
  const gearItems = [
    { category: 'Cámaras Fotográficas', items: ['Leica SL2 (Full Frame)', 'Sony Alpha 1 (50MP 30fps)', 'Hasselblad H6D-100c (Medio Formato)'] },
    { category: 'Cine & Motion Picture', items: ['RED V-Raptor 8K VV Cinema Line', 'Sony FX6 & FX3 Cinema Line', 'Ópticas Anamórficas & Fijas Leica Summilux'] },
    { category: 'Iluminación de Estudio', items: ['Broncolor Scoro 3200 Wifi', 'Profoto Pro-11 2400 Air', 'Aputure 1200d Pro LED Cinema'] },
    { category: 'Postproducción & Color', items: ['DaVinci Resolve Studio Advanced Panel', 'Monitores EIZO Coloredge 4K Calibrados', 'Gestión de Color ACES / Kodak Film Print'] }
  ];

  const services = [
    { title: 'Fotografía de Bodas de Autor', desc: 'Narrativa documental y estética editorial para parejas en Canarias, Suiza y destinos internacionales.' },
    { title: 'Cine Comercial & Publicidad', desc: 'Producción audiovisual en 8K/4K para marcas de lujo, hospitalidad, motor y gastronomía.' },
    { title: 'Dirección de Arte & Estilismo', desc: 'Composición de escena, paleta cromática y dirección de modelos para campañas publicitarias.' },
    { title: 'Merchandising & Personalización', desc: 'Desarrollo de prendas de autor, estampado DTF HD, serigrafía y bordado de marca.' }
  ];

  return (
    <section id="about" className="pt-56 pb-24 bg-[#FAFAFC] border-t border-gray-200/60 cursor-default">
      <div className="w-full max-w-[100vw] px-4 sm:px-8 md:px-12 lg:px-16 space-y-24">
        
        {/* HERO SECTION: DIEGO & JESSI (AUTHENTIC CREATIVE DUO PORTRAITS & STORY) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* EDITORIAL PORTRAIT DUO OF DIEGO & JESSI */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 relative group">
            
            {/* DIEGO PORTRAIT */}
            <div className="aspect-[3/4] w-full overflow-hidden rounded-none shadow-xl bg-gray-200 relative border-0">
              <img
                src="/images/retratos/diego_leather.jpg"
                alt="Diego Santana — Fotógrafo & Director Técnico"
                className="w-full h-full object-cover rounded-none hover:scale-105 transition-all duration-700 select-none cursor-default"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#A594F9]">
                  Cámara & Cine
                </span>
                <h4 className="text-lg font-bold font-outfit text-white">
                  Diego
                </h4>
              </div>
            </div>

            {/* JESSI PORTRAIT */}
            <div className="aspect-[3/4] w-full overflow-hidden rounded-none shadow-xl bg-gray-200 relative border-0">
              <img
                src="/images/retratos/jessi_glasses.jpg"
                alt="Jessi — Directora de Arte & Estilismo"
                className="w-full h-full object-cover rounded-none hover:scale-105 transition-all duration-700 select-none cursor-default"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#A594F9]">
                  Arte & Estilo
                </span>
                <h4 className="text-lg font-bold font-outfit text-white">
                  Jessi
                </h4>
              </div>
            </div>

            {/* DECORATIVE BADGE */}
            <div className="absolute -bottom-5 -right-5 bg-white p-3.5 shadow-xl border border-gray-100 hidden sm:flex items-center space-x-3 rounded-none z-10">
              <Heart className="w-4 h-4 text-[#A594F9] fill-current" />
              <div className="text-left font-sans">
                <span className="text-[9px] uppercase font-bold text-gray-400 block tracking-widest">Base de Operaciones</span>
                <span className="text-xs font-bold text-[#0F0F12]">Tenerife & Zúrich</span>
              </div>
            </div>
          </div>

          {/* EDITORIAL STORYTELLING & BIO OF DIEGO & JESSI */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#A594F9] font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Sobre Nosotros</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F0F12] font-outfit leading-tight tracking-tight">
                Diego & Jessi <br />
                <span className="font-editorial-italic font-normal text-3xl sm:text-5xl text-[#A594F9]">
                  Dos miradas, una misma visión visual
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-base font-sans text-[#666670] leading-relaxed font-light">
              Somos <strong>Diego & Jessi</strong>, pareja en la vida y equipo creativo tras <strong>matices</strong>. Fundamos este estudio con la convicción de que la fotografía y el cine no consisten solo en capturar imágenes impecables, sino en construir recuerdos atemporales con alma, carácter y sensibilidad visual.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 bg-white border border-gray-100 space-y-2 rounded-none shadow-sm">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#0F0F12]">
                  <Camera className="w-4 h-4 text-[#A594F9]" />
                  <span>Diego — Dirección Técnica & Cine</span>
                </div>
                <p className="text-xs font-sans text-gray-500 font-light leading-relaxed">
                  Apasionado por la luz natural, la física óptica y la narrativa cinemática. Lidera la dirección de cámara en RED 8K, iluminación y edición de color.
                </p>
              </div>

              <div className="p-5 bg-white border border-gray-100 space-y-2 rounded-none shadow-sm">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#0F0F12]">
                  <Film className="w-4 h-4 text-[#A594F9]" />
                  <span>Jessi — Dirección de Arte & Emoción</span>
                </div>
                <p className="text-xs font-sans text-gray-500 font-light leading-relaxed">
                  Directora de arte con ojo clínico para el estilismo, la composición estética y la conexión humana espontánea en bodas y campañas de moda.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-sans text-[#666670] leading-relaxed font-light">
              Trabajamos entre Canarias y Suiza, viajando por todo el mundo para acompañar a parejas en su gran día o para dar forma a campañas de marcas internacionales con una firma visual reconocible y cuidada hasta el último detalle.
            </p>

            {onOpenBooking && (
              <div className="pt-4">
                <button
                  onClick={() => onOpenBooking('Consulta General con Diego & Jessi')}
                  className="px-8 py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-default flex items-center space-x-3 rounded-none shadow-xl"
                >
                  <span>Conectar con Diego & Jessi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

        </div>

        {/* SERVICES OFFERED */}
        <div className="space-y-8 pt-6 border-t border-gray-200/60">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-sans uppercase tracking-widest text-[#A594F9] font-bold block">
                Nuestras Áreas de Producción
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F0F12] font-outfit">
                Especialidades de Estudio
              </h2>
            </div>
            <p className="text-xs font-sans text-gray-500 max-w-md font-light">
              Desde la planificación de la sesión hasta la entrega del máster en alta resolución y la maquetación de álbumes de colección.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-100 space-y-3 rounded-none shadow-sm">
                <div className="w-8 h-8 rounded-none bg-[#A594F9]/10 text-[#A594F9] font-bold flex items-center justify-center text-xs font-sans">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#0F0F12] font-outfit">{srv.title}</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EQUIPMENT & GEAR SPECS */}
        <div className="space-y-8 pt-6 border-t border-gray-200/60">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#A594F9] font-bold">
              <Award className="w-4 h-4" />
              <span>Equipamiento de Grado Cine & Fotografía de Medio Formato</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F0F12] font-outfit">
              Tecnología & Herramientas de Producción
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gearItems.map((cat, idx) => (
              <div key={idx} className="p-6 bg-white border border-gray-100 space-y-4 rounded-none shadow-sm">
                <h3 className="text-xs font-bold font-sans uppercase tracking-wider text-[#A594F9] pb-2 border-b border-gray-100">
                  {cat.category}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-xs font-sans text-[#666670] font-light flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#A594F9] rounded-full shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
