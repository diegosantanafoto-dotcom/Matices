import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeTab: 'HOME' | 'PORTFOLIO' | 'PROYECTOS' | 'VÍDEOS' | 'MERCH' | 'DIGITAL' | '+INFO';
  onSelectTab: (tab: 'HOME' | 'PORTFOLIO' | 'PROYECTOS' | 'VÍDEOS' | 'MERCH' | 'DIGITAL' | '+INFO') => void;
  onSelectCategory?: (category: string) => void;
  onOpenBooking: (type?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onSelectCategory,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: Array<'PORTFOLIO' | 'PROYECTOS' | 'VÍDEOS' | 'MERCH' | 'DIGITAL' | '+INFO'> = [
    'PORTFOLIO',
    'PROYECTOS',
    'VÍDEOS',
    'MERCH',
    'DIGITAL',
    '+INFO'
  ];

  const portfolioSubmenu = [
    { id: 'bodas', label: 'BODAS' },
    { id: 'lifestyle', label: 'LIFESTYLE' },
    { id: 'retratos', label: 'RETRATOS' },
    { id: 'moda', label: 'MODA' },
    { id: 'marcas', label: 'MARCAS' },
  ];

  const handleSubmenuClick = (categoryId: string) => {
    onSelectTab('PORTFOLIO');
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
    setIsPortfolioHovered(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'glass-header-clean py-5 shadow-sm' : 'bg-white py-8 border-b border-gray-100'
    }`}>
      <div className="w-full max-w-[100vw] px-6 sm:px-10 md:px-16 flex items-center justify-between">
        
        {/* LEFT: BRAND LOGO IN LOWERCASE (matices - ACTS AS HOME BUTTON) */}
        <button
          onClick={() => onSelectTab('HOME')}
          className="group flex items-center space-x-2 focus:outline-none text-left cursor-pointer"
          title="matices — Volver al inicio"
        >
          <span className="font-outfit text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] lowercase group-hover:opacity-75 transition-opacity">
            matices
          </span>
        </button>

        {/* CENTER-RIGHT NAVIGATION: PORTFOLIO, BLOG, PROYECTOS, VÍDEOS, +INFO (HOME REMOVED AS REQUESTED) */}
        <nav className="hidden lg:flex items-center space-x-10 text-xs font-sans font-semibold tracking-[0.2em]">
          {navItems.map((item) => {
            const isActive = activeTab === item;

            if (item === 'PORTFOLIO') {
              return (
                <div
                  key={item}
                  className="relative group py-1"
                  onMouseEnter={() => setIsPortfolioHovered(true)}
                  onMouseLeave={() => setIsPortfolioHovered(false)}
                >
                  <button
                    onClick={() => {
                      onSelectTab('PORTFOLIO');
                      if (onSelectCategory) onSelectCategory('todos');
                    }}
                    className={`flex items-center space-x-1 transition-colors duration-200 cursor-pointer uppercase ${
                      isActive 
                        ? 'font-extrabold text-[#A594F9]' 
                        : 'text-[#666670] hover:text-[#111111]'
                    }`}
                  >
                    <span>{item}</span>
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 text-gray-400" />
                  </button>

                  {/* SUBMENU DROPDOWN BOX */}
                  {isPortfolioHovered && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 shadow-2xl py-3 z-50 rounded-none animate-in fade-in duration-200">
                      {portfolioSubmenu.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleSubmenuClick(sub.id)}
                          className="block w-full text-left px-5 py-2.5 text-[11px] font-sans font-semibold uppercase tracking-widest text-[#666670] hover:text-[#A594F9] hover:bg-gray-50 transition-colors"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item}
                onClick={() => onSelectTab(item)}
                className={`py-1 transition-colors duration-200 cursor-pointer uppercase ${
                  isActive 
                    ? 'font-extrabold text-[#A594F9]' 
                    : 'text-[#666670] hover:text-[#111111]'
                }`}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* RIGHT SIDE: INSTAGRAM -> YOUTUBE -> WHATSAPP -> SHOPPING CART */}
        <div className="hidden xl:flex items-center space-x-9 text-[#111111]">
          
          {/* FACEBOOK ICON */}
          <a
            href="https://www.facebook.com/diegosantanaphoto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] hover:text-[#A594F9] transition-colors p-1"
            title="Facebook Diego Santana Photo"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* INSTAGRAM ICON */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] hover:text-[#A594F9] transition-colors p-1"
            title="Instagram @matices"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* YOUTUBE ICON */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] hover:text-[#A594F9] transition-colors p-1"
            title="YouTube matices"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          {/* WHATSAPP ICON (POSITIONED RIGHT BEFORE SHOPPING CART) */}
          <a
            href="https://wa.me/41762155203"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] hover:text-[#A594F9] transition-colors p-1 cursor-pointer"
            title="WhatsApp @matices"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>

          {/* SHOPPING CART ICON */}
          <button
            onClick={() => onOpenBooking('Presets / Licencias')}
            className="text-[#111111] hover:text-[#A594F9] transition-colors p-1 relative cursor-pointer"
            title="Carrito de Compras / Presets"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#111111] text-white text-[8px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>

        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#111111] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE SLIDE-OVER DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-white z-50 p-6 flex flex-col justify-between border-t border-gray-100">
          <nav className="space-y-4 pt-4 font-sans text-sm tracking-widest">
            {navItems.map((item) => (
              <div key={item}>
                <button
                  onClick={() => {
                    onSelectTab(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 border-b border-gray-100 ${
                    activeTab === item 
                      ? 'font-bold text-[#A594F9]' 
                      : 'text-[#666670]'
                  }`}
                >
                  {item}
                </button>
                {item === 'PORTFOLIO' && (
                  <div className="pl-4 py-2 space-y-2 border-b border-gray-100 bg-gray-50">
                    {portfolioSubmenu.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleSubmenuClick(sub.id)}
                        className="block w-full text-left py-1 text-xs text-gray-600 hover:text-[#A594F9]"
                      >
                        • {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="pt-6 border-t border-gray-100 space-y-4 font-sans">
            <a
              href="https://wa.me/41762155203"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#A594F9] text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2"
            >
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      )}

    </header>
  );
};
