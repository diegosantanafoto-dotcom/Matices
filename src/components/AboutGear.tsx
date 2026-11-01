import React from 'react';
import { Camera, Film, Heart, ArrowRight } from 'lucide-react';

interface AboutGearProps {
  onOpenBooking?: (type?: string) => void;
}

export const AboutGear: React.FC<AboutGearProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="pt-56 pb-24 bg-[#FAFAFC] border-t border-gray-200/60 cursor-default">
      <div className="w-full max-w-[100vw] px-4 sm:px-8 md:px-12 lg:px-16 space-y-24">
        
        {/* HERO SECTION: DIEGO & JESSI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* EDITORIAL SINGLE PORTRAIT OF DIEGO & JESSI */}
          <div className="lg:col-span-5 relative group">
            
            <div className="aspect-[4/5] w-full overflow-hidden rounded-none shadow-xl bg-gray-200 relative border-0">
              <img
                src="/images/team/diego-y-jessi.jpg"
                alt="Diego & Jessi — matices"
                className="w-full h-full object-cover object-top rounded-none hover:scale-105 transition-all duration-700 select-none cursor-default"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#A594F9]">
                  Dirección & Fotografía
                </span>
                <h4 className="text-xl font-bold font-outfit text-white">
                  Diego & Jessi
                </h4>
              </div>
            </div>

            {/* DECORATIVE BADGE */}
            <div className="absolute -bottom-5 -right-5 bg-white p-3.5 shadow-xl border border-gray-100 hidden sm:flex items-center space-x-3 rounded-none z-10">
              <Heart className="w-4 h-4 text-[#A594F9] fill-current" />
              <div className="text-left font-sans">
                <span className="text-[9px] uppercase font-bold text-gray-400 block tracking-widest">Base de Operaciones</span>
                <span className="text-xs font-bold text-[#0F0F12]">Suiza & Internacional</span>
              </div>
            </div>
          </div>

          {/* EDITORIAL STORYTELLING & BIO OF DIEGO & JESSI */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#A594F9] font-bold">
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
                  Apasionado por la luz natural, la física óptica y la narrativa cinemática. Lidera la dirección de cámara, iluminación y edición de color.
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
              Trabajamos desde Suiza para todo el mundo, acompañando a parejas en su gran día o para dar forma a campañas de marcas internacionales con una firma visual reconocible y cuidada hasta el último detalle.
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

      </div>
    </section>
  );
};
