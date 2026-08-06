import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Cookie, Lock } from 'lucide-react';

export type LegalTab = 'IMPRESSUM' | 'PRIVACY' | 'COOKIES';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTab;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, initialTab = 'IMPRESSUM' }) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

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
              <span>Conformidad Legal Suiza (nLPD / FADP & RGPD)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-outfit text-[#0F0F12]">
              Información Legal & Privacidad
            </h2>
            <p className="text-xs text-gray-500 font-sans">
              matices.ch • Zúrich, Suiza & Tenerife, España
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 bg-gray-100 hover:bg-[#A594F9] text-[#0F0F12] hover:text-white transition-colors cursor-pointer rounded-none"
            aria-label="Cerrar ventana legal"
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
            <span>Aviso Legal / Impressum</span>
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
            <span>Política de Privacidad (nLPD)</span>
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
            <span>Política de Cookies</span>
          </button>
        </div>

        {/* TAB CONTENT BODY */}
        <div className="p-6 sm:p-10 space-y-6 overflow-y-auto font-sans text-xs sm:text-sm text-[#444449] leading-relaxed font-light">
          
          {/* TAB 1: IMPRESSUM / AVISO LEGAL */}
          {activeTab === 'IMPRESSUM' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                  1. Datos Identificativos (Impressum - Suiza)
                </h3>
                <p>
                  En cumplimiento del deber de información establecido en la legislación suiza (Código de Obligaciones de Suiza - CO / OR) y las directivas internacionales de comercio electrónico, se facilitan los siguientes datos identificativos del titular de la web:
                </p>
                <div className="mt-3 p-4 bg-gray-50 border border-gray-100 space-y-1 font-mono text-xs text-[#0F0F12]">
                  <p><strong>Titular del dominio y marca:</strong> matices.ch (Diego Santana Visual Studio)</p>
                  <p><strong>Sede Comercial:</strong> Zúrich, Suiza / Tenerife, Islas Canarias (España)</p>
                  <p><strong>Correo electrónico de contacto:</strong> info@matices.ch</p>
                  <p><strong>Teléfonos de contacto:</strong> +41 44 200 11 00 (Suiza) / +34 922 845 921 (España)</p>
                  <p><strong>Actividad:</strong> Fotografía comercial, producción audiovisual, dirección artística y personalización de mercancía corporativa.</p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                  2. Derechos de Propiedad Intelectual e Industrial
                </h3>
                <p>
                  Todos los contenidos expuestos en <strong>matices.ch</strong> —incluyendo fotografías, vídeos, piezas audiovisuales, diseños gráficos, maquetas, textos, logotipos y código fuente— son propiedad exclusiva del titular o cuentan con la correspondiente licencia de uso. Queda estrictamente prohibida la reproducción, distribución, comunicación pública o transformación de cualquier material sin la autorización previa por escrito del autor.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                  3. Exención de Responsabilidad de Enlaces
                </h3>
                <p>
                  Este sitio web puede contener enlaces a sitios web de terceros. <strong>matices</strong> no ejerce ningún control sobre dichos sitios y declina toda responsabilidad por los contenidos, políticas de privacidad o prácticas de servicios externos.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: POLITICA DE PRIVACIDAD SUIZA (nLPD / FADP & RGPD) */}
          {activeTab === 'PRIVACY' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cumplimiento estricto de la nueva Ley Federal de Protección de Datos de Suiza (nLPD / FADP, sep 2023) y RGPD/GDPR de la UE.</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                  1. Responsable del Tratamiento de Datos
                </h3>
                <p>
                  El responsable del tratamiento de los datos personales recogidos en este sitio web es <strong>matices</strong> (contacto principal: <a href="mailto:info@matices.ch" className="text-[#A594F9] font-semibold underline">info@matices.ch</a>). Tratamos sus datos con confidencialidad y respetando íntegramente las exigencias del Derecho suizo de protección de datos (nLPD) y el Reglamento General de Protección de Datos de la UE (RGPD 2016/679).
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                  2. Datos Personales Recopilados y Finalidades
                </h3>
                <p className="mb-2">Recopilamos únicamente los datos necesarios para prestar nuestros servicios profesionales:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Formularios de Briefing & Cotización de Personalización:</strong> Recopilamos nombre, empresa, dirección de email, teléfono, ciudad e información sobre el proyecto para elaborar presupuestos y maquetas digitales 3D.</li>
                  <li><strong>Suscripción a Boletín Editorial:</strong> Si decide suscribirse a nuestro boletín, utilizaremos su dirección de correo exclusivamente para enviarle novedades visuales y editoriales. Puede darse de baja en cualquier momento.</li>
                  <li><strong>Datos de Navegación Técnica:</strong> Al visitar la web, nuestros servidores registran automáticamente datos anónimos de servidor (IP anonimizada, tipo de navegador, sistema operativo y sello de fecha/hora) para garantizar el funcionamiento seguro e ininterrumpido.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                  3. Conservación y Seguridad de Datos
                </h3>
                <p>
                  Los datos personales se conservan durante el tiempo estrictamente necesario para la tramitación de su solicitud o el cumplimiento de obligaciones legales de conservación en Suiza (hasta 10 años conforme a la normativa mercantil suiza CO 957a). Empleamos cifrado SSL/TLS de 256 bits y servidores protegidos con cortafuegos de alta seguridad.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                  4. Derechos de los Interesados (Art. 25-29 nLPD / Art. 15-22 RGPD)
                </h3>
                <p>
                  Usted tiene derecho en todo momento a solicitar información gratuita sobre sus datos personales almacenados, su origen, destinatarios y la finalidad del tratamiento, así como el derecho de rectificación, bloqueo o supresión de dichos datos. Para ejercitar estos derechos, simplemente envíe un correo electrónico a <a href="mailto:info@matices.ch" className="text-[#A594F9] font-semibold underline">info@matices.ch</a>.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: POLITICA DE COOKIES */}
          {activeTab === 'COOKIES' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                  1. ¿Qué son las Cookies?
                </h3>
                <p>
                  Una cookie es un pequeño archivo de texto almacenado en su ordenador o dispositivo móvil por su navegador web cuando visita <strong>matices.ch</strong>. Sirven para recordar sus preferencias de sesión y asegurar el rendimiento fluido de la experiencia visual.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                  2. Tipos de Cookies Utilizadas
                </h3>
                <div className="space-y-3">
                  <div className="p-3.5 bg-gray-50 border border-gray-100 space-y-1">
                    <span className="font-bold text-[#0F0F12] block">Cookies Necesarias / Técnicas (Siempre Activas):</span>
                    <p className="text-xs">Imprescindibles para permitir la navegación por las secciones, la reproducción de vídeo y el envío seguro de formularios de briefing. No requieren consentimiento según la legislación suiza (nLPD).</p>
                  </div>

                  <div className="p-3.5 bg-gray-50 border border-gray-100 space-y-1">
                    <span className="font-bold text-[#0F0F12] block">Cookies de Preferencias / Rendimiento:</span>
                    <p className="text-xs">Permiten recordar ajustes seleccionados (como filtros de portfolio) para optimizar la velocidad de respuesta.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0F0F12] font-outfit uppercase tracking-wider mb-2">
                  3. Cómo Desactivar o Gestionar las Cookies
                </h3>
                <p>
                  Usted puede configurar su navegador web para bloquear o recibir alertas sobre la presencia de cookies. Si decide desactivar las cookies esenciales, es posible que algunas funcionalidades interactivas no respondan correctamente. Puede consultar las instrucciones en las páginas de ayuda oficiales de Safari, Google Chrome, Mozilla Firefox o Microsoft Edge.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* FOOTER ACTION */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between shrink-0">
          <span className="text-xs text-gray-500 font-sans">
            Última actualización legal: Zúrich, Suiza (2025 / Ley Federal nLPD)
          </span>

          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#0F0F12] hover:bg-[#A594F9] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer rounded-none font-outfit shadow-md"
          >
            Entendido & Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
