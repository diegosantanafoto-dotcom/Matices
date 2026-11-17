import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Cookie, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export type LegalTab = 'IMPRESSUM' | 'PRIVACY' | 'COOKIES';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTab;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, initialTab = 'IMPRESSUM' }) => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  const isDe = lang === 'DE';

  // Sync initial tab when modal opens
  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200 overflow-y-auto cursor-default"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white border border-gray-200 text-[#0F0F12] shadow-2xl overflow-hidden my-auto rounded-none flex flex-col max-h-[85vh]"
      >
        {/* HEADER */}
        <div className="p-6 sm:p-8 border-b border-gray-100 flex items-start justify-between bg-gray-50/50 shrink-0">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-sans text-[#A594F9] font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-[#A594F9]" />
              <span>{t('legal.badge')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-outfit text-[#0F0F12]">
              {t('legal.title')}
            </h2>
            <p className="text-xs text-gray-500 font-sans">
              {t('legal.subtitle')}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 bg-gray-100 hover:bg-[#A594F9] text-[#0F0F12] hover:text-white transition-colors cursor-pointer rounded-none"
            aria-label={t('modal.close')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* TAB NAVIGATION */}
        <div className="flex border-b border-gray-200 bg-white px-6 sm:px-8 space-x-6 text-xs font-sans font-bold uppercase tracking-wider overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('IMPRESSUM')}
            className={`py-4 border-b-2 transition-colors flex items-center space-x-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'IMPRESSUM'
                ? 'border-[#0F0F12] text-[#0F0F12]'
                : 'border-transparent text-gray-400 hover:text-[#0F0F12]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{t('legal.impressum')}</span>
          </button>

          <button
            onClick={() => setActiveTab('PRIVACY')}
            className={`py-4 border-b-2 transition-colors flex items-center space-x-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'PRIVACY'
                ? 'border-[#0F0F12] text-[#0F0F12]'
                : 'border-transparent text-gray-400 hover:text-[#0F0F12]'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>{t('legal.privacy')}</span>
          </button>

          <button
            onClick={() => setActiveTab('COOKIES')}
            className={`py-4 border-b-2 transition-colors flex items-center space-x-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'COOKIES'
                ? 'border-[#0F0F12] text-[#0F0F12]'
                : 'border-transparent text-gray-400 hover:text-[#0F0F12]'
            }`}
          >
            <Cookie className="w-4 h-4" />
            <span>{t('legal.cookies')}</span>
          </button>
        </div>

        {/* TAB CONTENT BODY */}
        <div className="p-6 sm:p-10 space-y-6 overflow-y-auto font-sans text-xs sm:text-sm text-[#444449] leading-relaxed font-light">
          
          {/* TAB 1: IMPRESSUM */}
          {activeTab === 'IMPRESSUM' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {isDe ? (
                <>
                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      1. Angaben gemäß Schweizer Recht (Impressum)
                    </h3>
                    <p>
                      Gemäß den Bestimmungen des Schweizerischen Obligationenrechts (OR) und den geltenden Vorschriften für den elektronischen Geschäftsverkehr werden folgende Angaben zum Betreiber dieser Website gemacht:
                    </p>
                    <div className="mt-3 p-4 bg-gray-50 border border-gray-100 space-y-1 font-mono text-xs text-[#0F0F12]">
                      <p><strong>Inhaber der Domain & Marke:</strong> matices.ch (Diego Santana Visual Studio)</p>
                      <p><strong>Standort / Sitz:</strong> St. Gallen, Schweiz / Weltweite Einsätze</p>
                      <p><strong>Kontakt-E-Mail:</strong> hallomatices@gmail.com</p>
                      <p><strong>Telefon / WhatsApp:</strong> +41 76 215 52 03</p>
                      <p><strong>Tätigkeitsfeld:</strong> Kommerzielle Fotografie, audiovisuelle Filmproduktion, Art Direction und digitale Lösungen.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      2. Urheberrechte & Geistiges Eigentum
                    </h3>
                    <p>
                      Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos, Videos, Grafiken oder anderen Dateien auf der Website <strong>matices.ch</strong> gehören ausschließlich dem Betreiber oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      3. Haftungsausschluss für Links
                    </h3>
                    <p>
                      Verweise und Links auf Webseiten Dritter liegen außerhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      1. Legal Entity & Identification (Impressum - Switzerland)
                    </h3>
                    <p>
                      In compliance with the Swiss Code of Obligations (OR) and international e-commerce guidelines, the following identifying details of the website owner are provided:
                    </p>
                    <div className="mt-3 p-4 bg-gray-50 border border-gray-100 space-y-1 font-mono text-xs text-[#0F0F12]">
                      <p><strong>Domain & Brand Holder:</strong> matices.ch (Diego Santana Visual Studio)</p>
                      <p><strong>Registered Base:</strong> St. Gallen, Switzerland / Worldwide Coverage</p>
                      <p><strong>Contact Email:</strong> hallomatices@gmail.com</p>
                      <p><strong>Phone / WhatsApp:</strong> +41 76 215 52 03</p>
                      <p><strong>Activity:</strong> Commercial photography, cinema audiovisual production, art direction, and digital solutions.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      2. Intellectual Property Rights
                    </h3>
                    <p>
                      All content published on <strong>matices.ch</strong> — including photographs, video productions, graphic designs, texts, logos, and source code — is the exclusive property of the owner or licensed third parties. Any unauthorized reproduction, distribution, or transformation is strictly prohibited without prior written consent.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      3. Disclaimer for External Links
                    </h3>
                    <p>
                      This website may contain links to third-party websites. <strong>matices</strong> exercises no control over these websites and assumes no liability for their content, privacy policies, or operational standards.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

          {/* TAB 2: PRIVACY POLICY */}
          {activeTab === 'PRIVACY' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {isDe
                    ? 'Konformität mit dem Schweizer Datenschutzgesetz (DSG) und der EU-DSGVO.'
                    : 'Compliance with the Swiss Federal Act on Data Protection (FADP / nLPD) and EU GDPR.'}
                </span>
              </div>

              {isDe ? (
                <>
                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      1. Datenschutzübersicht
                    </h3>
                    <p>
                      Gestützt auf Artikel 13 der Schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen strikt ein.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      2. Erhebung & Verarbeitung personenbezogener Daten
                    </h3>
                    <p>
                      Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weitergegeben. Beim Ausfüllen von Formularen (Buchung, Kontakt, Newsletter) erheben wir nur diejenigen Daten, die für die Bearbeitung Ihrer Anfrage oder Projektrealisierung erforderlich sind (z.B. Name, E-Mail-Adresse, Telefonnummer).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      3. Ihre Rechte (Auskunft, Berichtigung & Löschung)
                    </h3>
                    <p>
                      Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Kontaktieren Sie uns hierzu unter <strong>hallomatices@gmail.com</strong>.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      1. Privacy Overview
                    </h3>
                    <p>
                      Based on Article 13 of the Swiss Federal Constitution and the provisions of Swiss federal data protection legislation (Data Protection Act, FADP/DSG), every person has the right to privacy and protection against misuse of personal data. We strictly adhere to these principles.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      2. Collection & Processing of Personal Data
                    </h3>
                    <p>
                      Personal data is treated strictly confidentially and will never be sold or transferred to third parties. When completing inquiry forms (briefing, contact, newsletter), we collect only the information necessary to fulfill your request or produce your visual project (name, email address, phone number).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      3. Your Rights (Access, Correction & Deletion)
                    </h3>
                    <p>
                      You have the right to request free information at any time about your stored personal data, its origin, recipient, and the purpose of data processing, as well as the right to correction or deletion of such data. Contact us at <strong>hallomatices@gmail.com</strong>.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

          {/* TAB 3: COOKIES */}
          {activeTab === 'COOKIES' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {isDe ? (
                <>
                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      1. Was sind Cookies?
                    </h3>
                    <p>
                      Cookies sind kleine Textdateien, die beim Besuch von <strong>matices.ch</strong> auf Ihrem Endgerät abgelegt werden. Sie dienen dazu, die Benutzererfahrung reibungslos, flüssig und sicher zu gestalten sowie Ihre bevorzugte Spracheinstellung zu speichern.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      2. Verwendete Cookies
                    </h3>
                    <div className="space-y-2 pl-4 border-l-2 border-gray-200">
                      <p><strong>Notwendige funktionale Cookies:</strong> Ermöglichen die grundlegende Navigation, Sprachauswahl (DE/EN) und Darstellung visueller Inhalte.</p>
                      <p><strong>Performance & Medien:</strong> Stellen das flüssige Laden und Abspielen eingebetteter Videoformate (z.B. Vimeo/YouTube) sicher.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      3. Verwaltung von Cookies
                    </h3>
                    <p>
                      Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben oder generell ausschließen.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      1. What are Cookies?
                    </h3>
                    <p>
                      Cookies are small text files stored on your device when you visit <strong>matices.ch</strong>. They serve to ensure a smooth, fluid, and secure user experience, as well as preserving your preferred language settings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      2. Types of Cookies Used
                    </h3>
                    <div className="space-y-2 pl-4 border-l-2 border-gray-200">
                      <p><strong>Essential Functional Cookies:</strong> Enable core navigation, language selection (DE/EN), and high-resolution visual display.</p>
                      <p><strong>Performance & Media:</strong> Ensure smooth streaming and playback of embedded cinema showreel players (e.g. Vimeo/YouTube).</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                      3. Managing Cookies
                    </h3>
                    <p>
                      You can configure your browser to inform you about the setting of cookies and choose to accept or decline cookies on an individual or universal basis.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
