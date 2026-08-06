import React, { useState } from 'react';
import { X } from 'lucide-react';

export interface ProjectItem {
  id: string;
  title: string;
  locationCategory: string;
  date: string;
  imageUrl: string;
  galleryImages: string[];
  client: string;
  year: string;
  description: string;
  scope: string[];
}

const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'p-1',
    title: 'Apple Store Fifth Avenue',
    locationCategory: 'Nueva York, Arquitectura',
    date: '16/7/25',
    imageUrl: '/images/marcas/SAN07748.jpg',
    galleryImages: [
      '/images/marcas/SAN07748.jpg',
      '/images/marcas/SAN08167.jpg'
    ],
    client: 'Apple Inc.',
    year: '2025',
    description: 'Documentación arquitectónica y reportaje de flujo de personas en el emblemático cubo de cristal de la Quinta Avenida.',
    scope: ['Fotografía de Arquitectura', 'Dirección de Arte', 'Color Grading']
  },
  {
    id: 'p-2',
    title: 'Qué divertido es hacer fotos',
    locationCategory: 'Nueva York, Viajes',
    date: '12/7/25',
    imageUrl: '/images/lifestyle/01-19.jpg',
    galleryImages: [
      '/images/lifestyle/01-19.jpg',
      '/images/lifestyle/1-42.jpg'
    ],
    client: 'matices.ch • Street Life',
    year: '2025',
    description: 'Serie de calle espontánea explorando el movimiento urbano y las interacciones cotidianas en Manhattan.',
    scope: ['Fotografía Callejera', 'Edición Documental', 'Reportaje']
  },
  {
    id: 'p-3',
    title: 'La tienda de Peak Design',
    locationCategory: 'Nueva York, Comercial',
    date: '12/7/25',
    imageUrl: '/images/marcas/PIPO-12.jpg',
    galleryImages: [
      '/images/marcas/PIPO-12.jpg',
      '/images/marcas/1-12.jpg'
    ],
    client: 'Peak Design SoHo',
    year: '2025',
    description: 'Cobertura del flag ship store en el SoHo. Fotografía de diseño de producto y experiencia de compra.',
    scope: ['Retail Commercial', 'Interiorismo', 'Branding']
  },
  {
    id: 'p-4',
    title: 'Cae la noche en Nueva York',
    locationCategory: 'Nueva York, Nocturna',
    date: '11/7/25',
    imageUrl: '/images/lifestyle/SAN01065.jpg',
    galleryImages: [
      '/images/lifestyle/SAN01065.jpg',
      '/images/marcas/SAN08167.jpg'
    ],
    client: 'Empire State Observatory',
    year: '2025',
    description: 'Vistas panorámicas desde las alturas iluminando el horizonte de Manhattan con tonos púrpuras y azul noche.',
    scope: ['Paisaje Urbano', 'Larga Exposición', 'Edición Cinemática']
  },
  {
    id: 'p-5',
    title: 'La Cabra SoHo',
    locationCategory: 'Nueva York, Gastronomía',
    date: '16/6/25',
    imageUrl: '/images/marcas/1-5.jpg',
    galleryImages: [
      '/images/marcas/1-5.jpg',
      '/images/marcas/1-15.jpg'
    ],
    client: 'La Cabra Coffee',
    year: '2025',
    description: 'Fotografía de cafetería de especialidad y panadería artesanal de origen danés en la Gran Manzana.',
    scope: ['Gastronomía', 'Lifestyle', 'Fotografía de Producto']
  },
  {
    id: 'p-6',
    title: 'Starbucks Reserve de New York',
    locationCategory: 'Nueva York, Espacios',
    date: '12/6/25',
    imageUrl: '/images/marcas/SAN08125.jpg',
    galleryImages: [
      '/images/marcas/SAN08125.jpg',
      '/images/marcas/SAN07748.jpg'
    ],
    client: 'Starbucks Reserve Roastery',
    year: '2025',
    description: 'Arquitectura interior de gran escala en Meatpacking District con cobre y madera artesanal.',
    scope: ['Espacios de Lujo', 'Arquitectura Comercial', 'Color']
  },
  {
    id: 'p-7',
    title: 'Nomad Coffee',
    locationCategory: 'Barcelona, Gastronomía',
    date: '9/5/25',
    imageUrl: '/images/lifestyle/1-25.jpg',
    galleryImages: [
      '/images/lifestyle/1-25.jpg',
      '/images/lifestyle/01-19.jpg'
    ],
    client: 'Nomad Coffee Lab',
    year: '2025',
    description: 'Estética minimalista en el Borne. Extracción precisa y tostado propio retratado en clave natural.',
    scope: ['Lifestyle', 'Documental', 'Fotografía de Autor']
  },
  {
    id: 'p-8',
    title: 'La Laguna Gran Hotel',
    locationCategory: 'Tenerife, Hoteles',
    date: '25/3/25',
    imageUrl: '/images/weddings/01-14.jpg',
    galleryImages: [
      '/images/weddings/01-14.jpg',
      '/images/weddings/SAN04519.jpg'
    ],
    client: 'La Laguna Gran Hotel 4* Superior',
    year: '2025',
    description: 'Reportaje editorial de suites de lujo, patio canario histórico y gastronomía Michelin.',
    scope: ['Hospitalidad de Lujo', 'Interiorismo', 'Gastronomía']
  }
];

interface ProjectsShowcaseProps {
  onOpenBooking: (type?: string) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenBooking }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="proyectos" className="pt-36 pb-24 bg-white w-full border-0 cursor-default">
      
      {/* BACKGROUND LENS FLARE */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(165,148,249,0.12),transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-[100vw] px-4 sm:px-8 md:px-12 lg:px-16 space-y-12 relative z-10">
        
        {/* 2-COLUMN EDITORIAL PROJECT GRID (PROPOSAL WITH 2 PROJECTS PER ROW) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {PROJECTS_LIST.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-default space-y-4"
            >
              
              {/* HORIZONTAL THUMBNAIL (LARGE IMPACT ASPECT 16/10, SHARP 0PX CORNERS ROUNDED-NONE) */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100 relative rounded-none shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-none cursor-default"
                />
              </div>

              {/* METADATA LINE: LOCATION, CATEGORY & DATE */}
              <div className="text-xs font-sans text-gray-500 font-medium tracking-wide">
                <span>{project.locationCategory}</span>
                <span className="mx-2">•</span>
                <span>{project.date}</span>
              </div>

              {/* BOLD TITLE USING MATICES OUTFIT TYPOGRAPHY */}
              <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-[#111111] group-hover:text-[#A594F9] transition-colors leading-tight tracking-tight cursor-default">
                {project.title}
              </h3>

            </div>
          ))}
        </div>

      </div>

      {/* FULLSCREEN PROJECT DETAIL MODAL (MATCHING LIGHTBOX: BG-WHITE/86 UNBLURRED, CURSOR-DEFAULT, CLICK OUTSIDE CLOSES) */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 bg-white/86 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300 overflow-y-auto cursor-default"
        >
          
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-white border border-gray-200 text-[#0F0F12] rounded-none shadow-2xl overflow-hidden my-auto cursor-default"
          >
            
            {/* MODAL HEADER */}
            <div className="p-6 sm:p-8 border-b border-gray-100 flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-xs font-sans text-[#A594F9] font-bold uppercase tracking-widest block">
                  {selectedProject.locationCategory} • {selectedProject.date}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-outfit text-[#0F0F12]">
                  {selectedProject.title}
                </h2>
                <p className="text-xs font-sans text-gray-500">
                  Cliente: <strong className="text-[#0F0F12]">{selectedProject.client}</strong> ({selectedProject.year})
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2.5 rounded-none bg-gray-100 hover:bg-[#A594F9] text-[#0F0F12] hover:text-white transition-colors cursor-default"
                aria-label="Cerrar proyecto"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* MODAL BODY */}
            <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
              
              <p className="text-sm font-sans text-[#666670] leading-relaxed font-light">
                {selectedProject.description}
              </p>

              {/* SCOPE TAGS */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.scope.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-[#0F0F12] text-xs font-sans font-semibold rounded-none uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GALLERY IMAGES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {selectedProject.galleryImages.map((img, idx) => (
                  <div key={idx} className="aspect-[16/10] overflow-hidden bg-gray-100 rounded-none">
                    <img
                      src={img}
                      alt={`${selectedProject.title} ${idx + 1}`}
                      className="w-full h-full object-cover rounded-none"
                    />
                  </div>
                ))}
              </div>

            </div>

            {/* MODAL FOOTER */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-sans text-gray-500 font-medium">
                ¿Te gusta esta estética para tu marca?
              </span>

              <button
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  onOpenBooking(`Proyecto Similar: ${title}`);
                }}
                className="px-6 py-3 rounded-none bg-[#0F0F12] hover:bg-[#A594F9] text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-default flex items-center space-x-2 shadow-lg"
              >
                <span>Solicitar Proyecto Similar</span>
              </button>
            </div>

          </div>

        </div>
      )}

    </section>
  );
};
