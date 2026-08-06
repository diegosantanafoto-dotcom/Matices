import { useState } from 'react';
import { Header } from './components/Header';
import { HomeGallery } from './components/HomeGallery';
import { PortfolioGrid } from './components/PortfolioGrid';
import { VideoGrid } from './components/VideoGrid';
import { MerchShowcase } from './components/MerchShowcase';
import { DigitalShowcase } from './components/DigitalShowcase';
import { BlogGrid } from './components/BlogGrid';
import { AboutGear } from './components/AboutGear';
import { ContactDock } from './components/ContactDock';
import { BriefingModal } from './components/BriefingModal';
import { LegalModal } from './components/LegalModal';
import type { LegalTab } from './components/LegalModal';

export function App() {
  const [activeTab, setActiveTab] = useState<'HOME' | 'PORTFOLIO' | 'PROYECTOS' | 'VÍDEOS' | 'MERCH' | 'DIGITAL' | '+INFO'>('HOME');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingInitialType, setBookingInitialType] = useState<string | undefined>(undefined);
  
  // LEGAL MODAL STATE (SWISS nLPD & COMPLIANCE)
  const [legalModalOpen, setLegalModalOpen] = useState<boolean>(false);
  const [legalInitialTab, setLegalInitialTab] = useState<LegalTab>('IMPRESSUM');

  const handleOpenBooking = (type?: string) => {
    setBookingInitialType(type);
    setBookingModalOpen(true);
  };

  const handleOpenLegal = (tab: LegalTab = 'IMPRESSUM') => {
    setLegalInitialTab(tab);
    setLegalModalOpen(true);
  };

  const handleSelectTab = (tab: 'HOME' | 'PORTFOLIO' | 'PROYECTOS' | 'VÍDEOS' | 'MERCH' | 'DIGITAL' | '+INFO') => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#0F0F12] font-sans selection:bg-[#0F0F12] selection:text-white relative">
      
      {/* STICKY HEADER */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onSelectCategory={setSelectedCategory}
        onOpenBooking={handleOpenBooking}
      />

      {/* MAIN VIEWPORT SWITCHER */}
      <main className="w-full">
        {activeTab === 'HOME' && (
          <HomeGallery
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activeTab === 'PORTFOLIO' && (
          <PortfolioGrid
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activeTab === 'PROYECTOS' && (
          <BlogGrid />
        )}

        {activeTab === 'VÍDEOS' && (
          <VideoGrid
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activeTab === 'MERCH' && (
          <MerchShowcase
            onOpenBooking={handleOpenBooking}
            onOpenLegal={handleOpenLegal}
          />
        )}

        {activeTab === 'DIGITAL' && (
          <DigitalShowcase
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activeTab === '+INFO' && (
          <AboutGear />
        )}
      </main>

      {/* FOOTER & FLOATING DOCK (OCULTO EN PESTAÑA MERCH PARA TERMINAR CON EL FORMULARIO DE PERSONALIZACIÓN) */}
      {activeTab !== 'MERCH' && (
        <ContactDock
          onOpenBooking={handleOpenBooking}
          onOpenLegal={handleOpenLegal}
        />
      )}

      {/* INTERACTIVE BRIEFING & BOOKING MODAL */}
      <BriefingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialType={bookingInitialType}
      />

      {/* SWISS COMPLIANCE LEGAL MODAL (nLPD / FADP, IMPRESSUM & COOKIES) */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        initialTab={legalInitialTab}
      />

    </div>
  );
}

export default App;
