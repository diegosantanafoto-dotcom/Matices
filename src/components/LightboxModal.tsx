import React, { useEffect, useRef } from 'react';
import type { PortfolioItem } from '../data/portfolioData';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;

    // Trigger swipe if horizontal movement is > 40px and dominant over vertical movement
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        onNext(); // Deslizar a la izquierda -> foto siguiente
      } else {
        onPrev(); // Deslizar a la derecha -> foto anterior
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-50 flex items-center justify-center cursor-default select-none touch-pan-y"
          style={{ backgroundColor: '#ffffff' }}
        >

          {/* BOTÓN CERRAR */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-6 right-6 z-50 p-2 text-[#111111] hover:text-[#A594F9] transition-colors cursor-pointer focus:outline-none"
            aria-label="Cerrar modal"
          >
            <X className="w-7 h-7 stroke-[1.5]" />
          </button>

          {/* FOTO CON DESLIZAMIENTO / SWIPE */}
          <div
            className="relative z-10 flex items-center justify-center w-full h-full p-4"
            onClick={(e) => {
              // Tap o clic en pantalla: mitad derecha pasa siguiente, mitad izquierda anterior
              e.stopPropagation();
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              if (clickX > rect.width / 2) {
                onNext();
              } else {
                onPrev();
              }
            }}
          >
            <motion.img
              key={item.id}
              src={item.imageUrl}
              alt={item.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_e, { offset }) => {
                const swipeThreshold = 40;
                if (offset.x < -swipeThreshold) {
                  onNext();
                } else if (offset.x > swipeThreshold) {
                  onPrev();
                }
              }}
              className="select-none cursor-grab active:cursor-grabbing object-contain"
              style={
                isLandscape
                  ? { width: '85vw', maxHeight: '88vh' }
                  : { maxHeight: '88vh', maxWidth: '80vw' }
              }
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

