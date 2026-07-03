/**
 * Testimonial data types and ajEdu community data
 * Used for Testimonials section and social proof
 */

/** Star rating (1-5) */
export type StarRating = 1 | 2 | 3 | 4 | 5;

/** Individual testimonial */
export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar?: string;
  };
  rating: StarRating;
  companyLogo?: string;
  featured?: boolean;
}

/** Social proof statistics */
export interface SocialProofStats {
  companies: number;
  users: string;
  rating: number;
  reviews: number;
}

/** Trust badge item */
export interface TrustBadge {
  id: string;
  type: 'rating' | 'recognition' | 'security';
  name: string;
  value: string;
  icon?: string;
}

/** Customer logo for logo cloud */
export interface CustomerLogo {
  id: string;
  name: string;
  logo: string;
}

// ============================================
// ajEdu Data
// ============================================

/** Featured testimonials for homepage */
export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'ajEdu me ha ayudado a encontrar ideas claras y prácticas para trabajar el ajedrez en clase. Es una fuente muy útil para descubrir actividades, experiencias y recursos educativos.',
    author: {
      name: 'Docente de Primaria',
      role: 'Educación y ajedrez escolar',
      company: '',
      avatar: '/images/team/person-11.jpg',
    },
    rating: 5,
    featured: true,
  },
  {
    id: '2',
    quote:
      'Lo mejor de ajEdu es que conecta a personas de distintos países con una misma idea: usar el ajedrez como herramienta educativa, no solo como juego o competición.',
    author: {
      name: 'Coordinador educativo',
      role: 'Proyecto de ajedrez en el aula',
      company: '',
      avatar: '/images/team/person-12.jpg',
    },
    rating: 5,
    featured: true,
  },
  {
    id: '3',
    quote:
      'Gracias a las aportaciones de la comunidad he descubierto nuevas formas de enseñar pensamiento lógico, atención y toma de decisiones a través del ajedrez.',
    author: {
      name: 'Profesora de Secundaria',
      role: 'Innovación educativa',
      company: '',
      avatar: '/images/team/person-13.jpg',
    },
    rating: 5,
    featured: false,
  },
  {
    id: '4',
    quote:
      'ajEdu reúne experiencias reales de docentes, investigadores y divulgadores. Es un espacio muy valioso para aprender, compartir y mejorar la enseñanza del ajedrez.',
    author: {
      name: 'Investigador educativo',
      role: 'Ajedrez y pedagogía',
      company: '',
      avatar: '/images/team/person-14.jpg',
    },
    rating: 5,
    featured: false,
  },
  {
    id: '5',
    quote:
      'Los congresos y publicaciones de ajEdu permiten conocer proyectos que se están aplicando en distintos lugares. Es una red viva, práctica y muy inspiradora.',
    author: {
      name: 'Ponente ajEdu',
      role: 'Congresos y formación',
      company: '',
      avatar: '/images/team/person-15.jpg',
    },
    rating: 4,
    featured: false,
  },
  {
    id: '6',
    quote:
      'Para quienes queremos llevar el ajedrez al aula, ajEdu es una referencia. Siempre encuentro ideas, materiales y experiencias que puedo adaptar a mis alumnos.',
    author: {
      name: 'Monitor de ajedrez',
      role: 'Formación escolar',
      company: '',
      avatar: '/images/team/person-16.jpg',
    },
    rating: 5,
    featured: true,
  },
];

/** Social proof statistics */
export const socialProofStats: SocialProofStats = {
  companies: 14,
  users: '86+',
  rating: 5,
  reviews: 362,
} as const;

/** Trust badges for social proof section */
export const trustBadges: TrustBadge[] = [
  {
    id: '1',
    type: 'rating',
    name: 'Comunidad',
    value: '86 integrantes',
    icon: 'Star',
  },
  {
    id: '2',
    type: 'recognition',
    name: 'Recursos',
    value: '362 aportes',
    icon: 'Award',
  },
  {
    id: '3',
    type: 'security',
    name: 'Trayectoria',
    value: 'Desde 2005',
    icon: 'Shield',
  },
  {
    id: '4',
    type: 'recognition',
    name: 'Red',
    value: '14 paises',
    icon: 'Trophy',
  },
  {
    id: '5',
    type: 'security',
    name: 'Aula',
    value: 'Ajedrez educativo',
    icon: 'Lock',
  },
];

/** Customer logos for logo cloud */
export const customerLogos: CustomerLogo[] = [
  { id: '1', name: 'Ajedrez en el aula', logo: '/favicon.svg' },
  { id: '2', name: 'Recursos educativos', logo: '/favicon.svg' },
  { id: '3', name: 'Congresos ajEdu', logo: '/favicon.svg' },
  { id: '4', name: 'Comunidad docente', logo: '/favicon.svg' },
];

/** Testimonial categories for filtering */
export const testimonialCategories = [
  { id: 'all', label: 'Todas' },
  { id: 'docentes', label: 'Docentes' },
  { id: 'congresos', label: 'Congresos' },
  { id: 'recursos', label: 'Recursos' },
] as const;

/** Featured testimonial for hero section */
export const featuredTestimonial: Testimonial = {
  id: 'featured',
  quote:
    'ajEdu conecta experiencias reales de aula y ayuda a compartir recursos de ajedrez educativo con una comunidad internacional.',
  author: {
    name: 'Comunidad ajEdu',
    role: 'Red Internacional Ajedrez y Educacion',
    company: 'ajEdu',
    avatar: '/images/team/person-11.jpg',
  },
  rating: 5,
  featured: true,
} as const;

/** Video testimonial placeholder */
export const videoTestimonial = {
  id: 'video-1',
  thumbnail: '/images/office-01.jpg',
  title: 'Experiencias de ajedrez educativo en ajEdu',
  duration: '2:34',
  author: {
    name: 'Comunidad ajEdu',
    role: 'Ajedrez educativo',
    company: 'ajEdu',
  },
} as const;
