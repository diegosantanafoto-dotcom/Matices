import React, { useState } from 'react';
import { BookOpen, ArrowRight, Clock, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BlogPost {
  id: string;
  title: Record<'DE' | 'EN', string>;
  category: Record<'DE' | 'EN', string>;
  date: Record<'DE' | 'EN', string>;
  readTime: Record<'DE' | 'EN', string>;
  imageUrl: string;
  excerpt: Record<'DE' | 'EN', string>;
  content: Record<'DE' | 'EN', string>;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: {
      DE: 'Studio-Notizen — Die Kunst des Chiaroscuro in der Food- & Produktfotografie',
      EN: 'Studio Notes — The Art of Chiaroscuro in Culinary & Product Photography'
    },
    category: {
      DE: 'Licht & Technik',
      EN: 'Lighting & Technique'
    },
    date: {
      DE: '14. Oktober 2024',
      EN: 'October 14, 2024'
    },
    readTime: {
      DE: '6 Min. Lesezeit',
      EN: '6 min read'
    },
    imageUrl: '/images/marcas/SAN07748.jpg',
    excerpt: {
      DE: 'Wie man tiefe Schatten und plastische Tiefe durch gezielte Lichtführung mit Wabenrastern skulpturiert.',
      EN: 'How to sculpt deep shadows and dimensional volume using targeted hard-light modifiers with honeycomb grids.'
    },
    content: {
      DE: 'Die moderne Food- und Produktfotografie hat sich von flachem, gleichmäßigem Licht zu dramatischen Low-Key-Kompositionen gewandelt. Durch den präzisen Einsatz von Striplights mit Wabenrastern lässt sich der Blitz exklusiv auf die Hauptkomponenten richten, während die Textur lebendig hervortritt.',
      EN: 'Contemporary commercial photography has evolved from flat, uniform diffusion toward dramatic low-key compositions. Using directional stripboxes with grids allows us to carve specular highlights while keeping the background in deep, velvety contrast.'
    }
  },
  {
    id: 'post-2',
    title: {
      DE: 'Warum wir das Mittelformat für High-End-Luxuskampagnen wählen',
      EN: 'Why We Choose Medium Format for High-End Luxury Campaigns'
    },
    category: {
      DE: 'Ausrüstung & Optik',
      EN: 'Equipment & Optics'
    },
    date: {
      DE: '02. September 2024',
      EN: 'September 2, 2024'
    },
    readTime: {
      DE: '8 Min. Lesezeit',
      EN: '8 min read'
    },
    imageUrl: '/images/marcas/SAN08167.jpg',
    excerpt: {
      DE: 'Analyse des 16-Bit-Farbumfangs und des außergewöhnlichen Dynamikumfangs bei gedruckten Kampagnen.',
      EN: 'Analyzing the 16-bit color depth and 15-stop dynamic range in print editorial productions.'
    },
    content: {
      DE: 'In der High-End-Fotografie misst sich Qualität nicht bloß in Megapixeln, sondern im subtilen Übergang der Tonwerte. Die sanfte Abstufung in den Lichtern und die Farbtreue feinster Texturen machen den entscheidenden Unterschied bei Premium-Marken.',
      EN: 'In luxury advertising, resolution is not measured merely by pixel count, but by tonal smoothness. The transition from specular highlights to shadow roll-off creates an unmistakably tactile dimension.'
    }
  },
  {
    id: 'post-3',
    title: {
      DE: 'Direkter Tethered-Workflow zum Kunden im Capture One Studio',
      EN: 'Direct Client Tethered Workflow in Capture One Studio'
    },
    category: {
      DE: 'Workflow & Farbe',
      EN: 'Workflow & Color'
    },
    date: {
      DE: '18. August 2024',
      EN: 'August 18, 2024'
    },
    readTime: {
      DE: '5 Min. Lesezeit',
      EN: '5 min read'
    },
    imageUrl: '/images/lifestyle/SAN01065.jpg',
    excerpt: {
      DE: 'Optimierung von Drehzeiten durch Echtzeit-Farbkalibrierung und Live-Vorschau am kalibrierten Set-Monitor.',
      EN: 'Optimizing shoot efficiency through real-time color calibration and live review on hardware-calibrated set monitors.'
    },
    content: {
      DE: 'Das Arbeiten im kabelgebundenen Tethered-Setup an kalibrierten Eizo-Monitoren garantiert, dass Art Directors und Kunden jedes Framing und jeden Farbton noch am Set abnehmen können. Das spart Nachbearbeitungszeit und sichert den visuellen Standard.',
      EN: 'Shooting tethered directly into calibrated hardware monitors ensures art directors and clients can approve each frame and color grading in real time, streamlining delivery and guaranteeing consistent brand standards.'
    }
  }
];

export const BlogGrid: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const isDe = lang === 'DE';

  return (
    <section id="blog" className="pt-56 pb-20 bg-white w-full relative">
      
      {/* LENS FLARE */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(165,148,249,0.12),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-[100vw] px-4 sm:px-8 md:px-12 lg:px-16 relative z-10">
        
        {/* TITLE */}
        <div className="mb-10 pb-6 border-b border-gray-100 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#A594F9] font-medium">
              <BookOpen className="w-4 h-4 text-[#A594F9]" />
              <span>{isDe ? 'Visuelles Journal & Technische Notizen' : 'Visual Journal & Technical Notes'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extralight text-[#0F0F12] tracking-tight">
              {isDe ? 'Editorial Journal &' : 'Editorial Journal &'} <span className="font-editorial-italic font-normal text-4xl sm:text-6xl text-[#A594F9]">{isDe ? 'Studio-Notizen' : 'Studio Notes'}</span>
            </h2>
          </div>
          <p className="text-xs font-sans text-[#666670] max-w-md font-light">
            {isDe
              ? 'Einblicke in Art Direction, Lichtgestaltung am Set und digitale Bildtechnologien.'
              : 'Insights on art direction, on-set lighting design, and digital capture technologies.'}
          </p>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group apple-card rounded-none overflow-hidden cursor-pointer flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 bg-white border border-gray-100"
            >
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100 rounded-none">
                  <img
                    src={post.imageUrl}
                    alt={post.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-sans text-gray-500">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-[10px] text-[#0F0F12] font-semibold">
                      {post.category[lang]}
                    </span>
                    <span>{post.date[lang]}</span>
                  </div>

                  <h3 className="text-xl font-light text-[#0F0F12] group-hover:text-[#A594F9] transition-colors font-outfit">
                    {post.title[lang]}
                  </h3>

                  <p className="text-xs text-[#666670] font-light leading-relaxed">
                    {post.excerpt[lang]}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-sans text-[#0F0F12]">
                <span className="flex items-center space-x-1.5 text-gray-400 font-light">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime[lang]}</span>
                </span>
                <span className="flex items-center space-x-1 text-[#A594F9] group-hover:translate-x-1 transition-transform font-medium">
                  <span>{isDe ? 'Artikel lesen' : 'Read Article'}</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ARTICLE READER MODAL */}
      {selectedPost && (
        <div
          onClick={() => setSelectedPost(null)}
          className="fixed inset-0 z-50 bg-white/86 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300 overflow-y-auto cursor-default text-[#0F0F12]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-white border border-gray-200 shadow-2xl p-6 sm:p-10 my-8 rounded-none cursor-default"
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2 rounded-full glass-apple text-gray-500 hover:text-black transition-colors cursor-pointer"
              aria-label={t('modal.close')}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              <div className="space-y-2 border-b border-gray-200/80 pb-4">
                <span className="text-xs font-sans text-[#A594F9] uppercase tracking-widest font-medium">
                  {selectedPost.category[lang]} • {selectedPost.date[lang]}
                </span>
                <h2 className="text-3xl font-extralight text-[#0F0F12] font-outfit">
                  {selectedPost.title[lang]}
                </h2>
              </div>

              <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100">
                <img src={selectedPost.imageUrl} alt={selectedPost.title[lang]} className="w-full h-full object-cover" />
              </div>

              <div className="prose text-xs sm:text-sm text-[#666670] leading-relaxed space-y-4 font-light">
                <p>{selectedPost.content[lang]}</p>
                <p>
                  {isDe
                    ? 'Für weitere Informationen zu unseren Licht-Setups oder für Beratung bei kommerziellen Produktionen steht Ihnen das Team von matices gerne zur Verfügung.'
                    : 'For inquiries regarding our lighting workflows or production consultations, feel free to contact the matices studio team.'}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 rounded-full bg-[#0F0F12] text-white font-sans text-xs uppercase font-medium hover:bg-[#A594F9] transition-colors cursor-pointer"
                >
                  {isDe ? 'Artikel schließen' : 'Close Article'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
