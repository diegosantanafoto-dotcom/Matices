import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { LightboxModal } from './LightboxModal';
import { Maximize2, ArrowUpRight } from 'lucide-react';

interface PortfolioGridProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onOpenBooking: (type?: string) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenBooking
}) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const categories = [
    { id: 'todos', label: 'TODOS LOS PROYECTOS' },
    { id: 'bodas', label: 'BODAS' },
    { id: 'lifestyle', label: 'LIFESTYLE' },
    { id: 'retratos', label: 'RETRATOS' },
    { id: 'moda', label: 'MODA' },
    { id: 'marcas', label: 'MARCAS' },
  ];

  const filteredItems = selectedCategory === 'todos'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

  const activeItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  const handlePrev = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex(activeItemIndex === 0 ? filteredItems.length - 1 : activeItemIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex(activeItemIndex === filteredItems.length - 1 ? 0 : activeItemIndex + 1);
    }
  };

  return (
    <section id="portfolio" className="pt-56 pb-20 bg-white w-full relative">
      
      {/* AMBIENT LENS FLARE BACKGROUND SPOT IN SOFT LAVENDER */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(165,148,249,0.12),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-[100vw] px-4 sm:px-8 md:px-12 lg:px-16 relative z-10">
        
        {/* CLEAN TEXT-ONLY CATEGORY FILTERS (TITLE REMOVED AS REQUESTED) */}
        <div className="flex items-center space-x-8 overflow-x-auto pb-3 mb-8 border-b border-gray-100 font-sans text-xs font-semibold tracking-widest text-[#666670]">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`py-1 transition-all duration-200 uppercase whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-[#A594F9] font-bold border-b-2 border-[#A594F9] pb-1'
                    : 'hover:text-[#0F0F12]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* CSS MULTI-COLUMN MASONRY (MATCHING ESTUDIOLUMINA.COM DYNAMIC DIAGRAMMING) */}
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-2 space-y-2 sm:gap-3.5 sm:space-y-3.5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItemIndex(index)}
              className="break-inside-avoid group relative bg-gray-100 rounded-none overflow-hidden cursor-default photo-card-hover border-0 shadow-sm"
            >
              {/* IMAGE CONTAINER WITH NATURAL ASPECT RATIO MASK */}
              <div className={`w-full relative overflow-hidden ${item.aspectRatioClass}`}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700"
                />
                
                {/* DYNAMIC OVERLAY ON HOVER */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-widest bg-black/60 px-2.5 py-1 text-white">
                      {item.categoryLabel}
                    </span>
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-gray-300 block">
                      {item.client}
                    </span>
                    <h3 className="text-sm font-bold text-white flex items-center justify-between font-outfit">
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#A594F9]" />
                    </h3>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* NO RESULTS FALLBACK */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 border-0 rounded-none bg-gray-50">
            <p className="text-gray-500 font-sans text-xs">No se encontraron proyectos en esta categoría.</p>
          </div>
        )}

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL WITH EXIF */}
      <LightboxModal
        item={activeItem}
        onClose={() => setActiveItemIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
};
