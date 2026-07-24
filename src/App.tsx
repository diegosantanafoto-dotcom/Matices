import { useState } from 'react';
import { Header } from './components/Header';
import { HomeGallery } from './components/HomeGallery';
import { PortfolioGrid } from './components/PortfolioGrid';
import { VideoGrid } from './components/VideoGrid';
import { MerchShowcase } from './components/MerchShowcase';
import { BlogGrid } from './components/BlogGrid';
import { AboutGear } from './components/AboutGear';
import { ContactDock } from './components/ContactDock';
import { BriefingModal } from './components/BriefingModal';

export function App() {
  const [activeTab, setActiveTab] = useState<'HOME' | 'PORTFOLIO' | 'PROYECTOS' | 'VÍDEOS' | 'MERCH' | '+INFO'>('HOME');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingInitialType, setBookingInitialType] = useState<string | undefined>(undefined);

  const handleOpenBooking = (type?: string) => {
    setBookingInitialType(type);
    setBookingModalOpen(true);
  };

  const handleSelectTab = (tab: 'HOME' | 'PORTFOLIO' | 'PROYECTOS' | 'VÍDEOS' | 'MERCH' | '+INFO') => {
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
          />
        )}

        {activeTab === '+INFO' && (
          <AboutGear />
        )}
      </main>

      {/* FOOTER & FLOATING DOCK */}
      <ContactDock
        onOpenBooking={handleOpenBooking}
      />

      {/* INTERACTIVE BRIEFING & BOOKING MODAL */}
      <BriefingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialType={bookingInitialType}
      />

    </div>
  );
}

export default App;
