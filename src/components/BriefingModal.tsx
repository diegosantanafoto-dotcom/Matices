import React, { useState } from 'react';
import { X, Send, Calendar, Mail, Phone, User, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

interface BriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export const BriefingModal: React.FC<BriefingModalProps> = ({ isOpen, onClose, initialType }) => {
  const { lang, t } = useLanguage();
  const isDe = lang === 'DE';

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: initialType || (isDe ? 'Gastronomie & Kulinarik' : 'Gastronomy & Culinary'),
    budget: '2.500 CHF - 5.000 CHF',
    date: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#111111', '#666666', '#E5E5E7']
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-white/86 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300 text-[#111111] cursor-default"
    >
      
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white border border-gray-200 shadow-2xl p-6 sm:p-8 my-8 rounded-none cursor-default"
      >
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-500 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label={t('modal.close')}
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            
            {/* MODAL HEADER */}
            <div className="space-y-2 border-b border-gray-200 pb-4">
              <div className="inline-flex items-center space-x-2 text-xs font-sans font-bold uppercase tracking-widest text-[#A594F9]">
                <span>matices • {t('booking.directBriefing')}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-outfit text-[#0F0F12] tracking-tight">
                {initialType ? `${isDe ? 'Anfrage:' : 'Booking:'} ${initialType}` : t('booking.title')}
              </h3>
              <p className="text-xs font-sans text-[#666670] font-light leading-relaxed">
                {t('booking.subtitle')}
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    {t('booking.name')}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('booking.namePlaceholder')}
                      className="w-full bg-gray-50 border border-gray-300 focus:border-[#A594F9] py-2.5 pl-10 pr-4 text-xs font-sans text-[#0F0F12] placeholder-gray-400 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    {t('booking.email')}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@company.ch"
                      className="w-full bg-gray-50 border border-gray-300 focus:border-[#A594F9] py-2.5 pl-10 pr-4 text-xs font-sans text-[#0F0F12] placeholder-gray-400 outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    {t('booking.phone')}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+41 76 000 00 00"
                      className="w-full bg-gray-50 border border-gray-300 focus:border-[#A594F9] py-2.5 pl-10 pr-4 text-xs font-sans text-[#0F0F12] placeholder-gray-400 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    {t('booking.date')}
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-300 focus:border-[#A594F9] py-2.5 pl-10 pr-4 text-xs font-sans text-[#0F0F12] outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* PROJECT CATEGORY SELECTOR */}
              <div>
                <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  {t('booking.category')}
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-300 focus:border-[#A594F9] py-2.5 px-4 text-xs font-sans text-[#0F0F12] outline-none transition-colors cursor-pointer"
                >
                  {isDe ? (
                    <>
                      <option value="Autorenhochzeit & Paar-Story">Autorenhochzeit & Paar-Story</option>
                      <option value="Gastronomie & Hotellerie">Gastronomie & Hotellerie</option>
                      <option value="Filmproduktion & Werbespots">Filmproduktion & Werbespots</option>
                      <option value="Digitales Projekt (KI, Branding & Web)">Digitales Projekt (KI, Branding & Web)</option>
                      <option value="Redaktionelles Porträt & Mode">Redaktionelles Porträt & Mode</option>
                      <option value="Markenkampagne & Produktfilm">Markenkampagne & Produktfilm</option>
                    </>
                  ) : (
                    <>
                      <option value="Bespoke Wedding & Couple Story">Bespoke Wedding & Couple Story</option>
                      <option value="Gastronomy & Hospitality">Gastronomy & Hospitality</option>
                      <option value="Film Production & Commercials">Film Production & Commercials</option>
                      <option value="Digital Project (AI, Branding & Web)">Digital Project (AI, Branding & Web)</option>
                      <option value="Editorial Portrait & Fashion">Editorial Portrait & Fashion</option>
                      <option value="Brand Campaign & Product Film">Brand Campaign & Product Film</option>
                    </>
                  )}
                </select>
              </div>

              {/* ESTIMATED BUDGET RANGE IN CHF */}
              <div>
                <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  {t('booking.budget')}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['1.500 CHF - 3.000 CHF', '3.000 CHF - 7.000 CHF', '+7.000 CHF Lux'].map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`py-2 px-3 text-xs font-sans border transition-all cursor-pointer ${
                        formData.budget === b 
                          ? 'bg-[#0F0F12] text-white border-[#0F0F12] font-bold' 
                          : 'bg-gray-50 text-[#666670] border-gray-300 hover:border-[#A594F9]'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* NOTES */}
              <div>
                <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  {t('booking.notes')}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={t('booking.notesPlaceholder')}
                  className="w-full bg-gray-50 border border-gray-300 focus:border-[#A594F9] p-3 text-xs font-sans text-[#0F0F12] placeholder-gray-400 outline-none resize-none transition-colors"
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-bold text-xs tracking-widest uppercase transition-colors flex items-center justify-center space-x-2 cursor-pointer font-outfit shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>{t('booking.submit')}</span>
              </button>

            </form>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-gray-100 border border-[#0F0F12] flex items-center justify-center mx-auto text-[#0F0F12]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-outfit font-extrabold text-[#0F0F12]">
                {t('booking.successTitle')}
              </h3>
              <p className="text-xs font-sans text-[#666670] max-w-md mx-auto leading-relaxed">
                {isDe ? (
                  <>
                    Vielen Dank, <strong className="text-[#0F0F12]">{formData.name}</strong>. Wir haben Ihre Angaben für <span className="text-[#0F0F12] font-bold">{formData.projectType}</span> erhalten. Wir melden uns unter <span className="text-[#0F0F12] font-bold">{formData.email}</span>.
                  </>
                ) : (
                  <>
                    Thank you, <strong className="text-[#0F0F12]">{formData.name}</strong>. We have received your inquiry for <span className="text-[#0F0F12] font-bold">{formData.projectType}</span>. We will contact you at <span className="text-[#0F0F12] font-bold">{formData.email}</span>.
                  </>
                )}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#0F0F12] text-white font-outfit font-bold text-xs uppercase tracking-widest hover:bg-[#A594F9] transition-colors cursor-pointer"
              >
                {t('booking.backBtn')}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
