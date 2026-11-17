import React from 'react';
import { Camera, Film, Heart, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutGearProps {
  onOpenBooking?: (type?: string) => void;
}

export const AboutGear: React.FC<AboutGearProps> = ({ onOpenBooking }) => {
  const { lang, t } = useLanguage();

  const isDe = lang === 'DE';

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
                  {t('about.role')}
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
                <span className="text-[9px] uppercase font-bold text-gray-400 block tracking-widest">
                  {t('about.operationsBase')}
                </span>
                <span className="text-xs font-bold text-[#0F0F12]">
                  {t('contact.location')}
                </span>
              </div>
            </div>
          </div>

          {/* EDITORIAL STORYTELLING & BIO OF DIEGO & JESSI */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#A594F9] font-bold">
                <span>{t('about.tag')}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F0F12] font-outfit leading-tight tracking-tight">
                {t('about.headlinePart1')} <br />
                <span className="font-editorial-italic font-normal text-3xl sm:text-5xl text-[#A594F9]">
                  {t('about.headlinePart2')}
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-base font-sans text-[#666670] leading-relaxed font-light">
              {isDe ? (
                <>
                  Wir sind <strong>Diego & Jessi</strong>, Lebenspartner und das kreative Team hinter <strong>matices</strong>. Wir haben dieses Studio mit der festen Überzeugung gegründet, dass Fotografie und Film nicht nur technisch einwandfreie Bilder sein dürfen, sondern zeitlose Erinnerungen mit Seele, Tiefe und unverwechselbarem Charakter schaffen müssen.
                </>
              ) : (
                <>
                  We are <strong>Diego & Jessi</strong>, partners in life and the creative duo behind <strong>matices</strong>. We founded this studio on the belief that photography and film should not merely capture scenes, but craft timeless memories infused with soul, depth, and unmistakable visual character.
                </>
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 bg-white border border-gray-100 space-y-2 rounded-none shadow-sm">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#0F0F12]">
                  <Camera className="w-4 h-4 text-[#A594F9]" />
                  <span>
                    {isDe ? 'Diego — Technische Regie & Kamera' : 'Diego — Technical Direction & Cinema'}
                  </span>
                </div>
                <p className="text-xs font-sans text-gray-500 font-light leading-relaxed">
                  {isDe
                    ? 'Leidenschaft für natürliches Licht, optische Physik und filmische Bildsprache. Führt Kamera, Beleuchtungskonzept und Color Grading.'
                    : 'Passionate about natural light, optical physics, and cinematic storytelling. Leads camera direction, lighting design, and color grading.'}
                </p>
              </div>

              <div className="p-5 bg-white border border-gray-100 space-y-2 rounded-none shadow-sm">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#0F0F12]">
                  <Film className="w-4 h-4 text-[#A594F9]" />
                  <span>
                    {isDe ? 'Jessi — Art Direction & Emotion' : 'Jessi — Art Direction & Emotion'}
                  </span>
                </div>
                <p className="text-xs font-sans text-gray-500 font-light leading-relaxed">
                  {isDe
                    ? 'Art Direktorin mit feinem Gespür für Styling, visuelle Komposition und authentische emotionale Momente bei Hochzeiten und Markenkampagnen.'
                    : 'Art director with an eye for styling, aesthetic composition, and genuine human connection across weddings and commercial campaigns.'}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-sans text-[#666670] leading-relaxed font-light">
              {isDe
                ? 'Von unserem Studio in St. Gallen, Schweiz aus arbeiten wir weltweit für anspruchsvolle Paare und internationale Marken, die eine markante visuelle Handschrift suchen.'
                : 'Based in St. Gallen, Switzerland, we produce work worldwide for couples and international brands seeking an authentic, signature visual identity.'}
            </p>

            {onOpenBooking && (
              <div className="pt-4">
                <button
                  onClick={() => onOpenBooking(isDe ? 'Beratungsgespräch mit Diego & Jessi' : 'Consultation with Diego & Jessi')}
                  className="px-8 py-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer flex items-center space-x-3 rounded-none shadow-xl"
                >
                  <span>{isDe ? 'Mit Diego & Jessi sprechen' : 'Connect with Diego & Jessi'}</span>
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
