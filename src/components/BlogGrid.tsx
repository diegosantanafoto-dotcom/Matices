import React, { useState } from 'react';
import { BookOpen, ArrowRight, Clock, X } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  excerpt: string;
  content: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Apuntes de Estudio — El Arte del Claroscuro en la Fotografía Gastronómica',
    category: 'Técnica & Iluminación',
    date: '14 Octubre 2024',
    readTime: '6 min lectura',
    imageUrl: '/images/marcas/SAN07748.jpg',
    excerpt: 'Cómo esculpir sombras profundas y volumen en emplatados mediante modificadores de luz dura con nido de abeja.',
    content: 'La fotografía gastronómica contemporánea ha evolucionado desde la luz suave y plana hacia composiciones dramáticas en clave baja. El uso de modificadores como el Striplight de 30x120cm combinado con panales de abeja permite direccionar el destello exclusivamente hacia la proteína principal...'
  },
  {
    id: 'post-2',
    title: 'Por qué Elegimos Formato Medio Hasselblad H6D-100c para Campañas de Lujo',
    category: 'Equipamiento & Gear',
    date: '02 Septiembre 2024',
    readTime: '8 min lectura',
    imageUrl: '/images/marcas/SAN08167.jpg',
    excerpt: 'Análisis del rango dinámico de 15 pasos y la profundidad de color de 16 bits en producciones editoriales impresas.',
    content: 'En la fotografía de alta gama, la resolución no se mide únicamente en megapíxeles sino en la suavidad de las transiciones tonales...'
  },
  {
    id: 'post-3',
    title: 'Flujo de Trabajo Tethered Directo al Cliente en Capture One Studio',
    category: 'Workflow & Color',
    date: '18 Agosto 2024',
    readTime: '5 min lectura',
    imageUrl: '/images/lifestyle/SAN01065.jpg',
    excerpt: 'Optimizando el tiempo de rodaje con pre-visualización en tiempo real y calibración de color Eizo en set.',
    content: 'Disparar conectado a un MacBook Pro M3 Max con monitor calibrado por hardware garantiza que el director de arte y el cliente aprueben cada encuadre...'
  }
];

export const BlogGrid: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="pt-56 pb-20 bg-white w-full relative">
      
      {/* LENS FLARE */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(165,148,249,0.12),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-[100vw] px-4 sm:px-8 md:px-12 lg:px-16 relative z-10">
        
        {/* TITLE WITH SOFT LAVENDER EDITORIAL ITALIC ULTRA-THIN TYPOGRAPHY MATCHING REFERENCE */}
        <div className="mb-10 pb-6 border-b border-gray-100 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#A594F9] font-medium">
              <BookOpen className="w-4 h-4 text-[#A594F9]" />
              <span>Diario Visual & Artículos Técnicos</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extralight text-[#0F0F12] tracking-tight">
              Blog Editorial & <span className="font-editorial-italic font-normal text-4xl sm:text-6xl text-[#A594F9]">Apuntes de Estudio</span>
            </h2>
          </div>
          <p className="text-xs font-sans text-[#666670] max-w-md font-light">
            Reflexiones sobre dirección de arte, técnica de iluminación en plató y tecnología de captura digital.
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
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-sans text-gray-500">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-[10px] text-[#0F0F12] font-semibold">{post.category}</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-xl font-light text-[#0F0F12] group-hover:text-[#A594F9] transition-colors font-outfit">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#666670] font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-sans text-[#0F0F12]">
                <span className="flex items-center space-x-1.5 text-gray-400 font-light">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </span>
                <span className="flex items-center space-x-1 text-[#A594F9] group-hover:translate-x-1 transition-transform font-medium">
                  <span>Leer Artículo</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ARTICLE READER MODAL WITH SEMI-TRANSPARENT LILA BACKDROP */}
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
              className="absolute top-6 right-6 p-2 rounded-full glass-apple text-gray-500 hover:text-black transition-colors"
              aria-label="Cerrar artículo"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              <div className="space-y-2 border-b border-gray-200/80 pb-4">
                <span className="text-xs font-sans text-[#A594F9] uppercase tracking-widest font-medium">
                  {selectedPost.category} • {selectedPost.date}
                </span>
                <h2 className="text-3xl font-extralight text-[#0F0F12] font-outfit">
                  {selectedPost.title}
                </h2>
              </div>

              <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100">
                <img src={selectedPost.imageUrl} alt={selectedPost.title} className="w-full h-full object-cover" />
              </div>

              <div className="prose text-xs sm:text-sm text-[#666670] leading-relaxed space-y-4 font-light">
                <p>{selectedPost.content}</p>
                <p>
                  Para consultar más sobre nuestros flujos de trabajo de iluminación o solicitar asesoría en producciones comerciales, no dudes en ponerte en contacto con el equipo de matices.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200 flex justify-end">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 rounded-full bg-[#0F0F12] text-white font-sans text-xs uppercase font-medium"
                >
                  Cerrar Artículo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
