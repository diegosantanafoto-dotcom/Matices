export interface GearCategory {
  category: string;
  items: {
    name: string;
    specs: string;
    description: string;
  }[];
}

export const GEAR_DATA: GearCategory[] = [
  {
    category: 'Cámaras & Formato Medio',
    items: [
      {
        name: 'Hasselblad H6D-100c',
        specs: '100 Megapíxeles, Formato Medio 53.4 x 40.0mm',
        description: 'Cuerpo principal para producciones editoriales y campañan de publicidad donde el rango dinámico y detalle tonal son primordiales.'
      },
      {
        name: 'Leica SL2',
        specs: '47.3 Megapíxeles Full Frame, Sensor L-Mount',
        description: 'Cuerpo ágil para exteriores, arquitectura y fotografía gastronómica que requiere precisión óptica sin concessions.'
      },
      {
        name: 'Sony Alpha 1',
        specs: '50.1 MP Sensor Apilado, 30 fps, Sincro Flash 1/400s',
        description: 'Velocidad absoluta para alta velocidad de destello y congelado de líquidos en coctelería y acción.'
      }
    ]
  },
  {
    category: 'Objetivos & Ópticas Prime',
    items: [
      {
        name: 'Hasselblad HC Macro 120mm f/4 II',
        specs: 'Resolución óptica superior para macro y detalle gastronómico',
        description: 'Nitidez plana impecable de borde a borde sin aberración cromática.'
      },
      {
        name: 'Leica APO-Summicron-SL 75mm f/2 ASPH',
        specs: 'Rendimiento APO para bokeh cremoso y contraste micro-tonal',
        description: 'El estándar de oro para retratos editoriales con tridimensionalidad única.'
      },
      {
        name: 'Canon TS-E 17mm f/4L & 24mm f/3.5L II',
        specs: 'Descentrable (Tilt-Shift) para control de perspectiva',
        description: 'Corrección de líneas verticales paralelas en fotografía de arquitectura e interiores.'
      }
    ]
  },
  {
    category: 'Iluminación & Modificadores',
    items: [
      {
        name: 'Generadores Profoto Pro-11 2400 AirTTL',
        specs: '2400Ws con tiempo de recarga ultra-rápido (0.01s)',
        description: 'Consistencia absoluta de temperatura de color (+/- 20K) en disparos ráfaga.'
      },
      {
        name: 'Broncolor Scoro 3200 S WiFi / RFS 2',
        specs: '3200Ws, control independiente de 3 salidas',
        description: 'Control de sombras y claves bajas extremas en plató de estudio.'
      },
      {
        name: 'Modificadores Profoto Giant Reflector 240 & Softboxes RFi',
        specs: 'Octabox 5\', Beauty Dish 70cm, Fresnel Spot',
        description: 'Capacidad de esculpir cualquier tipo de luz, desde pinceladas duras hasta envolventes suaves.'
      }
    ]
  },
  {
    category: 'Estaciones Tethering & Software',
    items: [
      {
        name: 'Apple MacBook Pro 16" M3 Max + Eizo Coloredge CG319X',
        specs: 'Monitor 4K 10-bit Calibrado por Hardware',
        description: 'Gestión de color precisa durante el rodaje directo al cliente.'
      },
      {
        name: 'Capture One Pro 23 Studio License',
        specs: 'Flujo de trabajo tethered con perfiles ICC personalizados',
        description: 'Pre-visualización instantánea con corrección de color y grado editorial en tiempo real.'
      }
    ]
  }
];
