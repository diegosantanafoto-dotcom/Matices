export interface CourseItem {
  id: string;
  title: string;
  subtitle: string;
  format: string;
  duration: string;
  level: string;
  price: string;
  badge?: string;
  description: string;
  features: string[];
  nextDate: string;
  seatsLeft: number;
}

export const COURSES_DATA: CourseItem[] = [
  {
    id: 'course-1',
    title: 'Retrato de Estudio & Flashes Masterclass',
    subtitle: 'Esculpido de Luz & Dirección de Modelos en Clave Baja',
    format: 'Presencial / Estudio Lúmina',
    duration: '2 Días Intensivos (16 Horas)',
    level: 'Intermedio - Avanzado',
    price: '490 €',
    badge: 'Últimas 2 Plazas',
    description: 'Aprende a dominar modificadores de luz dura y blanda (Beauty dish, octabox, fresnels), esquemas de iluminación barroca y dirección de posado para fotografía editorial de moda y belleza.',
    features: [
      'Uso práctico de esquemas Profoto & Broncolor con modelos reales',
      'Flujo de trabajo disparando conectado (Tethering) en Capture One',
      'Revelado raw de alta gama y separación de frecuencias',
      'Certificado acreditativo y grupo alumni de seguimiento'
    ],
    nextDate: '18 - 19 Noviembre 2024',
    seatsLeft: 2
  },
  {
    id: 'course-2',
    title: 'One to One Mentorship Personalizada',
    subtitle: 'Programa 100% Medida para Fotógrafos & Creativos Visuales',
    format: 'Presencial / Online Live',
    duration: '4 Sesiones Personalizadas (8 Horas total)',
    level: 'Todos los Niveles',
    price: '850 €',
    badge: 'Personalizado',
    description: 'Revisión exhaustiva de portfolio, corrección de flujo de trabajo técnico, optimización de tarifas comerciales y simulación de shooting real guiado paso a paso por Edu.',
    features: [
      'Auditoría y curaduría de tu portfolio comercial',
      'Asesoría técnica en equipamiento y esquemas de luz propios',
      'Estrategia de captación de clientes y cotización de proyectos',
      'Soporte directo vía WhatsApp/Slack por 3 meses'
    ],
    nextDate: 'Fechas Flexibles a Coordinar',
    seatsLeft: 3
  },
  {
    id: 'course-3',
    title: 'Fotografía Gastronómica Profesional',
    subtitle: 'Estilismo Culinario, Texturas & Iluminación Comercial',
    format: 'Presencial / Estudio + Restaurante',
    duration: '1 Día Completo (9 Horas)',
    level: 'Profesional',
    price: '390 €',
    badge: 'Popular',
    description: 'Aprende a transformar platos en piezas de arte visual. Iluminación lateral para acentuar volúmenes, uso de reflector y técnicas de atrezzo gastronómico.',
    features: [
      'Montaje de set gastronómico real con chef invitado',
      'Técnicas de preservación de brillo e ingredientes frescos',
      'Composición según proporciones doradas y ángulos comerciales',
      'Entregables para cartas de restaurantes y marcas de consumo'
    ],
    nextDate: '02 Diciembre 2024',
    seatsLeft: 4
  }
];
