import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Film } from 'lucide-react';

interface ContactDockProps {
  onOpenBooking: (type?: string) => void;
  onOpenLegal?: (tab?: 'IMPRESSUM' | 'PRIVACY' | 'COOKIES') => void;
  lang?: 'ES' | 'EN';
}

export const ContactDock: React.FC<ContactDockProps> = ({ onOpenBooking, onOpenLegal }) => {
  const [quickEmail, setQuickEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleQuickSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickEmail) setSubscribed(true);
  };

  return (
    <footer id="contacto" className="bg-white border-t border-gray-100 pt-20 pb-28 relative text-[#0F0F12]">
      
      {/* AMBIENT LENS FLARE */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[radial-gradient(circle_at_center,rgba(240,240,245,0.7),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-[100vw] px-4 sm:px-8 md:px-12 lg:px-16 space-y-16 relative z-10">
        
        {/* MAIN CONTACT BLOCK */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <h2 className="text-3xl sm:text-6xl font-extrabold text-[#0F0F12] leading-tight tracking-tight">
            ¿Tienes un proyecto visual <span className="font-editorial-italic font-normal">en mente?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#666670] font-normal leading-relaxed max-w-2xl mx-auto">
            Estamos disponibles para dirección artística, producciones integrales en Suiza y desplazamientos internacionales.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 font-sans text-xs font-medium pt-4">
            <a
              href="mailto:hallomatices@gmail.com"
              className="flex items-center space-x-2 text-[#0F0F12] hover:text-gray-500 transition-colors font-bold text-sm"
            >
              <Mail className="w-4 h-4 text-gray-400" />
              <span>hallomatices@gmail.com</span>
            </a>

            <span className="hidden sm:inline text-gray-300">•</span>

            <a
              href="https://wa.me/41762155203"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#0F0F12] hover:text-gray-500 transition-colors font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-gray-400" />
              <span>+41 76 215 52 03</span>
            </a>

            <span className="hidden sm:inline text-gray-300">•</span>

            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>Suiza & Internacional</span>
            </div>
          </div>

          {/* QUICK NEWSLETTER INPUT */}
          <div className="pt-6 max-w-md mx-auto">
            {!subscribed ? (
              <form onSubmit={handleQuickSubscribe} className="flex border-b border-gray-300 focus-within:border-[#0F0F12] py-2">
                <input
                  type="email"
                  required
                  value={quickEmail}
                  onChange={(e) => setQuickEmail(e.target.value)}
                  placeholder="Suscríbete a nuestro boletín editorial..."
                  className="flex-1 bg-transparent text-xs font-sans font-medium text-[#0F0F12] placeholder-gray-400 outline-none"
                />
                <button
                  type="submit"
                  className="text-xs font-sans font-bold text-[#0F0F12] hover:text-gray-500 uppercase tracking-widest pl-2 cursor-pointer flex items-center space-x-1"
                >
                  <span>Enviar</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <p className="text-xs font-sans text-[#0F0F12] font-bold">
                ✓ ¡Suscrito con éxito al boletín de matices!
              </p>
            )}
          </div>

        </div>

        {/* CENTERED MINIMAL SOCIAL ICONS ONLY */}
        <div className="pt-12 border-t border-gray-100 flex flex-col items-center space-y-4 font-sans">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Sigue Nuestro Trabajo
          </span>

          <div className="flex items-center space-x-8 text-[#0F0F12]">
            
            <a
              href="https://www.facebook.com/matices.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-[#0F0F12] hover:text-gray-400 hover:scale-110 transition-all"
              title="Facebook @matices.ch"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-[#0F0F12] hover:text-gray-400 hover:scale-110 transition-all"
              title="Instagram @matices"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-[#0F0F12] hover:text-gray-400 hover:scale-110 transition-all"
              title="YouTube matices"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-[#0F0F12] hover:text-gray-400 hover:scale-110 transition-all"
              title="Vimeo Pro Films"
            >
              <Film className="w-5 h-5" />
            </a>

            <a
              href="mailto:hallomatices@gmail.com"
              className="p-3 text-[#0F0F12] hover:text-gray-400 hover:scale-110 transition-all"
              title="Email matices"
            >
              <Mail className="w-5 h-5" />
            </a>

          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} matices. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <button
              onClick={() => onOpenLegal && onOpenLegal('IMPRESSUM')}
              className="hover:text-[#0F0F12] transition-colors cursor-pointer"
            >
              Aviso Legal / Impressum
            </button>
            <button
              onClick={() => onOpenLegal && onOpenLegal('PRIVACY')}
              className="hover:text-[#0F0F12] transition-colors cursor-pointer"
            >
              Privacidad (nLPD)
            </button>
            <button
              onClick={() => onOpenLegal && onOpenLegal('COOKIES')}
              className="hover:text-[#0F0F12] transition-colors cursor-pointer"
            >
              Cookies
            </button>
          </div>
        </div>

      </div>

      {/* FLOATING BOTTOM MINIMALIST DOCK */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-white/95 backdrop-blur-md px-6 py-2.5 border border-gray-200 shadow-xl rounded-full flex items-center space-x-6 text-xs font-sans">
          
          <button
            onClick={() => onOpenBooking('Inquiry')}
            className="flex items-center space-x-2 font-bold text-[#0F0F12] hover:text-gray-500 transition-colors cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>reservar proyecto</span>
          </button>

          <span className="text-gray-300">|</span>

          <button
            onClick={() => onOpenBooking('Briefing Comercial')}
            className="font-bold text-[#0F0F12] hover:text-gray-500 uppercase transition-colors cursor-pointer flex items-center space-x-1.5"
          >
            <span>briefing exprés</span>
          </button>
        </div>
      </div>

    </footer>
  );
};
