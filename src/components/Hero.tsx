import React from 'react';
import { Award, ArrowDown, ChevronRight, Play, Sparkles } from 'lucide-react';

interface HeroProps {
  onSelectCategoryFilter: (category: string) => void;
  onOpenBooking: (type?: string) => void;
  lang: 'ES' | 'EN';
}

export const Hero: React.FC<HeroProps> = ({ onSelectCategoryFilter, onOpenBooking, lang }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0B0B0C]">
      
      {/* BACKGROUND AMBIENT GLOWS & GRID LINES */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(228,192,128,0.08),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,20,22,0.8),transparent_60%)] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#141416]/40 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* AVAILABILITY BADGE */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141416] border border-[#26262B] text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[#F4F4F5]">
                {lang === 'ES' 
                  ? 'Disponible para proyectos en Canarias & Internacional' 
                  : 'Available for projects in Canary Islands & Worldwide'}
              </span>
              <span className="text-[#E4C080] font-bold">2024/2025</span>
            </div>

            {/* EDITORIAL TITLE */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-title font-bold tracking-tight text-[#F4F4F5] leading-[1.1]">
                Fotografía Comercial, <br />
                <span className="gold-gradient-text italic font-normal">Gastronómica</span> <br />
                & Dirección Visual.
              </h1>

              <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl font-light leading-relaxed">
                Estudio creativo especializado en narrativa visual de alto impacto para firmas de lujo, 
                hoteles singulares, alta cocina y proyectos editoriales en toda Europa.
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#portfolio"
                className="px-6 py-3.5 rounded-full bg-[#F4F4F5] text-black hover:bg-[#E4C080] transition-colors font-medium text-xs tracking-widest uppercase flex items-center space-x-2 group cursor-pointer"
              >
                <span>Explorar Portfolio</span>
                <ArrowDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" />
              </a>

              <button
                onClick={() => onOpenBooking('Briefing Comercial')}
                className="px-6 py-3.5 rounded-full bg-[#141416] hover:bg-[#1a1a1e] border border-[#26262B] hover:border-[#E4C080]/60 text-[#F4F4F5] font-medium text-xs tracking-widest uppercase transition-all flex items-center space-x-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#E4C080]" />
                <span>Solicitar Briefing</span>
              </button>
            </div>

            {/* HIGHLIGHTED QUICK ACCESS PILLS */}
            <div className="pt-6 border-t border-[#26262B]/60 space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-[#A1A1AA] font-mono block">
                Colecciones Destacadas:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: 'Hoteles & Arquitectura', cat: 'arquitectura' },
                  { name: 'Gastronomía Alta Cocina', cat: 'gastronomia' },
                  { name: 'Retrato Editorial & Beauty', cat: 'retrato' },
                  { name: 'Campaña Comercial', cat: 'comercial' }
                ].map((pill) => (
                  <button
                    key={pill.cat}
                    onClick={() => {
                      onSelectCategoryFilter(pill.cat);
                      const el = document.getElementById('portfolio');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-[#141416]/80 hover:bg-[#26262B] border border-[#26262B] hover:border-[#E4C080]/50 text-xs text-[#F4F4F5] hover:text-[#E4C080] transition-all flex items-center space-x-1.5 cursor-pointer"
                  >
                    <span>{pill.name}</span>
                    <ChevronRight className="w-3 h-3 text-[#A1A1AA]" />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT VISUAL REEL / FEATURED EDITORIAL CARD */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#26262B] bg-[#141416] group shadow-2xl shadow-black/80">
              
              {/* REEL IMAGE WITH DYNAMIC OVERLAY */}
              <div className="aspect-[4/5] w-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
                  alt="Estudio Lúmina Editorial Reel"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                />
                
                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-80"></div>
                
                {/* SILENT REEL BADGE */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full flex items-center space-x-2 text-[11px] font-mono text-[#F4F4F5]">
                  <Play className="w-3 h-3 text-[#E4C080] fill-[#E4C080]" />
                  <span>REEL 2024 / SHOWCASE</span>
                </div>

                {/* BOTTOM CAPTION */}
                <div className="absolute bottom-6 left-6 right-6 space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E4C080]">
                    La Laguna Gran Hotel ****
                  </span>
                  <h3 className="text-xl font-serif-title text-[#F4F4F5] font-semibold">
                    Texturas de Alta Cocina & Claroscuro
                  </h3>
                  <div className="flex items-center space-x-4 text-xs text-[#A1A1AA] pt-1">
                    <span>Hasselblad H6D-100c</span>
                    <span>•</span>
                    <span>HC Macro 120mm</span>
                  </div>
                </div>
              </div>

            </div>

            {/* METRICS FLOATING BADGE */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center space-x-4 glass-panel p-4 rounded-xl border border-[#26262B] shadow-2xl">
              <div className="p-3 rounded-lg bg-[#E4C080]/10 border border-[#E4C080]/30 text-[#E4C080]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-bold font-serif-title text-[#F4F4F5]">12+ Años</div>
                <div className="text-[11px] uppercase tracking-wider text-[#A1A1AA] font-mono">
                  Trayectoria & 450+ Producciones
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
