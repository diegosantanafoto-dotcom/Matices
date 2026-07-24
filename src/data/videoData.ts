export interface VideoItem {
  id: string;
  title: string;
  category: string;
  client: string;
  duration: string;
  videoUrl: string;
  thumbnailUrl: string;
  description: string;
  specs: {
    camera: string;
    resolution: string;
    fps: string;
    colorGrade: string;
  };
}

export interface VideoSection {
  id: string;
  sectionTitle: string;
  sectionSubtitle: string;
  categoryTag: string;
  description: string;
  videos: VideoItem[];
}

export const VIDEO_SECTIONS: VideoSection[] = [
  {
    id: 'sec-1',
    sectionTitle: 'Cine Comercial & Producción de Marcas',
    sectionSubtitle: 'Spots de Automoción, Resort de Lujo & Relojería',
    categoryTag: 'Comercial & Luxury Brands',
    description: 'Producción cinematográfica RED 8K y Sony Cinema Line para firmas internacionales.',
    videos: [
      {
        id: 'v1-1',
        title: 'Porsche Travel Experience — Cumbres de Canarias',
        category: 'Automoción',
        client: 'Diego Santana Films • Porsche',
        duration: '01:45 min',
        videoUrl: 'https://www.youtube.com/embed/if4Tt5wGylQ',
        thumbnailUrl: '/images/weddings/boda_6.jpg',
        description: 'Spot comercial car-to-car en carreteras de montaña al atardecer.',
        specs: {
          camera: 'RED V-Raptor 8K VV',
          resolution: '8K DCI (8192 x 4320)',
          fps: '120 fps High Speed',
          colorGrade: 'ACEScc / DaVinci Kodak 2383 LUT'
        }
      },
      {
        id: 'v1-2',
        title: 'Abama Luxury Resort — Arquitectura & Life',
        category: 'Hospitalidad de Lujo',
        client: 'Diego Santana Films • Abama',
        duration: '02:10 min',
        videoUrl: 'https://www.youtube.com/embed/if4Tt5wGylQ',
        thumbnailUrl: '/images/weddings/boda_8.jpg',
        description: 'Recorrido cinemático por espacios de arquitectura terracota y villas.',
        specs: {
          camera: 'Sony FX6 Cinema Line',
          resolution: '4K DCI (4096 x 2160)',
          fps: '60 fps',
          colorGrade: 'S-Cinetone / Custom Log'
        }
      },
      {
        id: 'v1-3',
        title: 'Haute Horlogerie Geneve — Calibre Mecánico',
        category: 'Relojería & Macro',
        client: 'Diego Santana Films • Geneve',
        duration: '01:15 min',
        videoUrl: 'https://www.youtube.com/embed/if4Tt5wGylQ',
        thumbnailUrl: '/images/retratos/diego_leather.jpg',
        description: 'Macro movimiento cinemático de engranajes y rubíes de zafiro.',
        specs: {
          camera: 'RED Komodo 6K',
          resolution: '6K REDCODE RAW',
          fps: '48 fps Cinematic',
          colorGrade: 'Rec.709 Gold Master'
        }
      }
    ]
  },
  {
    id: 'sec-2',
    sectionTitle: 'Bodas Cinemáticas & Gastronomía 4K',
    sectionSubtitle: 'Películas Nupciales de Historia & Alta Cocina',
    categoryTag: 'Wedding Cinema & Gastronomy',
    description: 'Cine documental de boda en formato cinematográfico y procesos de alta cocina.',
    videos: [
      {
        id: 'v2-1',
        title: 'Elena & Carlos — Votos al Atardecer en Finca',
        category: 'Película Nupcial',
        client: 'Diego Santana Films • Wedding Cinema',
        duration: '04:30 min',
        videoUrl: 'https://www.youtube.com/embed/if4Tt5wGylQ',
        thumbnailUrl: '/images/weddings/boda_9.jpg',
        description: 'Documental de boda con óptica fija 50mm f/1.2 y sonido ambiental.',
        specs: {
          camera: 'Sony FX3 Cinema Line',
          resolution: '4K DCI Uncompressed',
          fps: '24 fps Cinema',
          colorGrade: 'Filmic Warm Tone'
        }
      },
      {
        id: 'v2-2',
        title: 'Restaurante Mugaritz — Cocina de Autor',
        category: 'Gastronomía',
        client: 'Diego Santana Films • Mugaritz',
        duration: '02:00 min',
        videoUrl: 'https://www.youtube.com/embed/if4Tt5wGylQ',
        thumbnailUrl: '/images/lifestyle/mother_toddler_sunset.jpg',
        description: 'Proceso de elaboración del menú de temporada en brasa viva.',
        specs: {
          camera: 'Sony FX6 Cinema Line',
          resolution: '4K DCI',
          fps: '120 fps Macro',
          colorGrade: 'High Contrast Black'
        }
      },
      {
        id: 'v2-3',
        title: 'Botanical Craft Club — Coctelería de Nitrógeno',
        category: 'Coctelería',
        client: 'Diego Santana Films • Botanical',
        duration: '01:30 min',
        videoUrl: 'https://www.youtube.com/embed/if4Tt5wGylQ',
        thumbnailUrl: '/images/lifestyle/couple_embrace_beach.jpg',
        description: 'Congelado en cámara lenta de vapores de nitrógeno y botánicos.',
        specs: {
          camera: 'RED V-Raptor 8K',
          resolution: '8K High Frame Rate',
          fps: '240 fps Super Slow Motion',
          colorGrade: 'Vibrant Neon Grade'
        }
      }
    ]
  }
];

// BACKWARD COMPATIBILITY FLAT ARRAY
export const VIDEO_ITEMS: VideoItem[] = VIDEO_SECTIONS.flatMap(sec => sec.videos);
