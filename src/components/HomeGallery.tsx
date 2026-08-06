import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS, type PortfolioItem } from '../data/portfolioData';
import { HOME_GALLERY_IDS } from '../data/homeGalleryData';
import { LightboxModal } from './LightboxModal';
import { Maximize2, ArrowUpRight } from 'lucide-react';

interface HomeGalleryProps {
  onOpenBooking: (type?: string) => void;
}

export const HomeGallery: React.FC<HomeGalleryProps> = ({ onOpenBooking }) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  // Map HOME_GALLERY_IDS to actual PortfolioItem objects
  const homeItems = useMemo(() => {
    const itemMap = new Map(PORTFOLIO_ITEMS.map(item => [item.id, item]));
    return HOME_GALLERY_IDS
      .map(id => itemMap.get(id))
      .filter((item): item is PortfolioItem => Boolean(item));
  }, []);

  const activeItem = activeItemIndex !== null ? homeItems[activeItemIndex] : null;

  const handlePrev = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex(activeItemIndex === 0 ? homeItems.length - 1 : activeItemIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeItemIndex !== null) {
      setActiveItemIndex(activeItemIndex === homeItems.length - 1 ? 0 : activeItemIndex + 1);
    }
  };

  return (
    <section id="home-gallery" className="pt-56 pb-20 bg-white w-full relative">

      <div className="w-full max-w-[100vw] px-2 sm:px-6 md:px-10 lg:px-12 relative z-10">

        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-5 gap-4 space-y-4 sm:gap-6 sm:space-y-6">
          {homeItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItemIndex(index)}
              className="break-inside-avoid group relative bg-gray-100 rounded-none overflow-hidden cursor-default photo-card-hover border-0 shadow-sm"
            >
              <div className={`w-full relative overflow-hidden rounded-none ${item.aspectRatioClass}`}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget.closest('.break-inside-avoid');
                    if (target) (target as HTMLElement).style.display = 'none';
                  }}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 rounded-none"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest bg-black/60 px-2.5 py-1 text-white">
                      {item.categoryLabel}
                    </span>
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-sans font-medium uppercase tracking-wider text-gray-300 block">
                      {item.client}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-white flex items-center justify-between font-outfit">
                      <span className="truncate pr-2">{item.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#A594F9] shrink-0" />
                    </h3>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

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
