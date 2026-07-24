import React, { useEffect } from 'react';
import type { PortfolioItem } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onOpenBooking: (type?: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  // Detect landscape (horizontal) photos by their aspect ratio class
  const isLandscape =
    item.aspectRatioClass.includes('16/10') ||
    item.aspectRatioClass.includes('16/9') ||
    item.aspectRatioClass.includes('3/2') ||
    item.aspectRatioClass.includes('4/3');

  return (
    // Fondo 100% opaco blanco — elimina el efecto de transparencia y líneas laterales
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center cursor-default"
      style={{ backgroundColor: '#ffffff' }}
    >

      {/* CLOSE */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-6 right-6 z-50 p-2 text-[#111111] hover:text-[#A594F9] transition-colors cursor-default focus:outline-none"
        aria-label="Cerrar modal"
      >
        <X className="w-7 h-7 stroke-[1.5]" />
      </button>

      {/* ARROW LEFT */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-50 text-[#111111] hover:text-[#A594F9] transition-all transform hover:scale-125 focus:outline-none cursor-default p-2"
        aria-label="Foto anterior"
      >
        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.2]" />
      </button>

      {/* ARROW RIGHT */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 text-[#111111] hover:text-[#A594F9] transition-all transform hover:scale-125 focus:outline-none cursor-default p-2"
        aria-label="Foto siguiente"
      >
        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.2]" />
      </button>

      {/* PHOTO — landscape al 80vw, portrait al 78vh máx */}
      <div
        className="relative z-10 flex items-center justify-center"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        <img
          src={item.imageUrl}
          alt={item.title}
          className="select-none cursor-default object-contain"
          style={isLandscape
            ? { width: '80vw', maxHeight: '88vh' }
            : { maxHeight: '88vh', maxWidth: '72vw' }
          }
        />
      </div>

    </div>
  );
};
