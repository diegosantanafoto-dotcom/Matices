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
    sectionTitle: 'Cine Comercial & Producción Visual',
    sectionSubtitle: 'Moda, Podcasts & Videoclips Musicals',
    categoryTag: 'Fashion, Podcast & Music Videos',
    description: 'Producciones audiovisuales en formato cine 8K/4K para firmas, podcasts y artistas.',
    videos: [
      {
        id: 'v1-1',
        title: 'Feria del ¡sí quiero!',
        category: 'MODA',
        client: 'Moving Films',
        duration: '01:30 min',
        videoUrl: 'https://player.vimeo.com/video/647066144',
        thumbnailUrl: 'https://i.vimeocdn.com/video/1342591596-252e61e071e4745ab0d98f7e2224e0827da35190d8fcb75017a4f5c892a70772-d_640x360',
        description: 'Spot oficial y cobertura cinematográfica editorial de moda nupcial.',
        specs: {
          camera: 'RED Komodo 6K',
          resolution: '6K REDCODE RAW',
          fps: '48 fps Cinematic',
          colorGrade: 'Rec.709 Gold Master'
        }
      },
      {
        id: 'v1-2',
        title: 'PODCAST: Real Talk IT mit Wortmann AG',
        category: 'PODCAST',
        client: 'Stadler IT AG',
        duration: '04:30 min',
        videoUrl: 'https://www.youtube.com/embed/HRl13VpE1tM',
        thumbnailUrl: 'https://img.youtube.com/vi/HRl13VpE1tM/hqdefault.jpg',
        description: 'Entrevista y producción audiovisual sobre seguridad, servidores y colaboración IT.',
        specs: {
          camera: 'Sony FX3 Cinema Line',
          resolution: '4K DCI Uncompressed',
          fps: '24 fps Cinema',
          colorGrade: 'Clean Broadcast Grade'
        }
      },
      {
        id: 'v1-3',
        title: 'Mi Meta Es El Cielo — Elite Music',
        category: 'MUSICAL',
        client: 'Elite Music',
        duration: '03:20 min',
        videoUrl: 'https://www.youtube.com/embed/if4Tt5wGylQ',
        thumbnailUrl: 'https://img.youtube.com/vi/if4Tt5wGylQ/hqdefault.jpg',
        description: 'Videoclip oficial con iluminación de estudio y estética cinemática urbana.',
        specs: {
          camera: 'Sony FX6 Cinema Line',
          resolution: '4K DCI',
          fps: '120 fps Macro',
          colorGrade: 'High Contrast Urban'
        }
      }
    ]
  },
  {
    id: 'sec-2',
    sectionTitle: 'Corporativo, Publicidad & Eventos',
    sectionSubtitle: 'Lanzamientos de Marca, Publicidad & Grandes Coberturas',
    categoryTag: 'Brand, Advertising & Events',
    description: 'Formatos comerciales, lanzamientos oficiales de marca y spots publicitarios.',
    videos: [
      {
        id: 'v2-1',
        title: "VIDEO PRESENTACIÓN UEGO'S 2025 BY STADLER",
        category: 'MARCA',
        client: 'Stadler IT AG • Moving Films',
        duration: '01:50 min',
        videoUrl: 'https://player.vimeo.com/video/1126177678',
        thumbnailUrl: 'https://i.vimeocdn.com/video/2068537239-f636742352e41d8283a5c781eae2b285562cec1b469c49ac9155f8e6c4f828b6-d_640x360',
        description: "Vídeo de presentación corporativa y lanzamiento oficial UEGO'S 2025.",
        specs: {
          camera: 'RED V-Raptor 8K',
          resolution: '8K High Frame Rate',
          fps: '240 fps Super Slow Motion',
          colorGrade: 'Vibrant Corporate Grade'
        }
      },
      {
        id: 'v2-2',
        title: 'PSOE Alcázar de San Juan 2023',
        category: 'PUBLICIDAD',
        client: 'Moving Films',
        duration: '01:45 min',
        videoUrl: 'https://player.vimeo.com/video/823539920',
        thumbnailUrl: 'https://i.vimeocdn.com/video/1802057483-249cdef60f4288fca017e446de7e897c949099a5e86f6e5876557480a9b3a65d-d_640x360',
        description: 'Producción audiovisual y spot documental publicitario para campaña.',
        specs: {
          camera: 'RED V-Raptor 8K VV',
          resolution: '8K DCI (8192 x 4320)',
          fps: '50 fps High Speed',
          colorGrade: 'ACEScc / DaVinci Kodak 2383 LUT'
        }
      },
      {
        id: 'v2-3',
        title: 'NEW OPENING MADRID',
        category: 'EVENTO',
        client: 'Moving Films',
        duration: '02:10 min',
        videoUrl: 'https://player.vimeo.com/video/478007185',
        thumbnailUrl: 'https://i.vimeocdn.com/video/992703208-271da54e1a24dba5a9666be3c3607dc2c232e4af14bae18d87cc84cb2e3c58d7-d_640x360',
        description: 'Cobertura cinemática de gran apertura comercial y gala en Madrid.',
        specs: {
          camera: 'Sony FX6 Cinema Line',
          resolution: '4K DCI (4096 x 2160)',
          fps: '60 fps',
          colorGrade: 'S-Cinetone / Custom Log'
        }
      }
    ]
  }
];

// BACKWARD COMPATIBILITY FLAT ARRAY
export const VIDEO_ITEMS: VideoItem[] = VIDEO_SECTIONS.flatMap(sec => sec.videos);
