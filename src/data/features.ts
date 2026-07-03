/**
 * Feature data types and ajEdu content
 * Used for Features page and Features Overview section
 */

/** Icon names from Lucide icon library */
export type IconName =
  | 'Zap'
  | 'Shield'
  | 'BarChart'
  | 'Globe'
  | 'Layers'
  | 'Lock'
  | 'Sparkles'
  | 'Workflow'
  | 'Code'
  | 'Database'
  | 'Cloud'
  | 'Smartphone'
  | 'Users'
  | 'Plug'
  | 'Clock'
  | 'LineChart'
  | 'Settings'
  | 'Rocket';

import { ROUTES } from '../config/paths';

/** Single feature item */
export interface Feature {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  href?: string;
}

/** Detailed feature for Features page with image */
export interface FeatureDetail extends Feature {
  image?: string;
  imageAlt?: string;
  subFeatures?: string[];
}

/** Use case persona */
export interface UseCase {
  id: string;
  persona: string;
  title: string;
  description: string;
  benefits: string[];
}

/** Comparison feature for comparison tables */
export interface ComparisonFeature {
  category: string;
  features: {
    name: string;
    description?: string;
    productValue: boolean | string;
    competitorValue: boolean | string;
  }[];
}

// ============================================
// ajEdu Data
// ============================================

/** Homepage features overview */
export const featuresOverview: Feature[] = [
  {
    id: '1',
    icon: 'Users',
    title: 'Ajedrez en el aula',
    description:
      'Recursos y experiencias para llevar el ajedrez educativo a centros escolares.',
    href: `${ROUTES.FEATURES}#performance`,
  },
  {
    id: '2',
    icon: 'Globe',
    title: 'Red internacional',
    description:
      'Docentes, clubes y proyectos conectados alrededor del ajedrez y la educación.',
    href: `${ROUTES.FEATURES}#security`,
  },
  {
    id: '3',
    icon: 'Layers',
    title: 'Materiales didácticos',
    description:
      'Actividades, retos, talleres, publicaciones y propuestas para trabajar valores.',
    href: `${ROUTES.FEATURES}#analytics`,
  },
  {
    id: '4',
    icon: 'Clock',
    title: 'Eventos y encuentros',
    description:
      'Congresos, jornadas, comunicaciones y espacios de intercambio entre ajEdus.',
    href: `${ROUTES.FEATURES}#infrastructure`,
  },
  {
    id: '5',
    icon: 'Sparkles',
    title: 'Innovación educativa',
    description:
      'Ajedrez como herramienta para pensamiento crítico, estrategia y convivencia.',
    href: `${ROUTES.FEATURES}#integrations`,
  },
  {
    id: '6',
    icon: 'Plug',
    title: 'Colaboraciones',
    description: 'Alianzas con webs, blogs, asociaciones y proyectos amigos.',
    href: `${ROUTES.FEATURES}#ai`,
  },
];

/** Detailed features for Features page */
export const featureDetails: FeatureDetail[] = [
  {
    id: 'performance',
    icon: 'Users',
    title: 'Ajedrez en el aula',
    description:
      'Propuestas para introducir el ajedrez educativo en centros escolares de forma natural, flexible y conectada con la vida del aula.',
    image: '/images/tech-01.jpg',
    imageAlt: 'Recursos de ajedrez educativo para el aula',
    subFeatures: [
      'Actividades para primaria, secundaria y talleres escolares',
      'Ideas para trabajar atención, estrategia y pensamiento lógico',
      'Dinámicas para aprender jugando con el tablero',
      'Experiencias reales compartidas por docentes y monitores',
    ],
  },
  {
    id: 'security',
    icon: 'Layers',
    title: 'Materiales didácticos',
    description:
      'Una selección de recursos, retos, publicaciones y propuestas didácticas para trabajar el ajedrez como herramienta educativa.',
    image: '/images/abstract-01.jpg',
    imageAlt: 'Materiales didácticos de ajedrez educativo',
    subFeatures: [
      'Fichas, retos y actividades adaptables al aula',
      'Materiales para trabajar valores y convivencia',
      'Propuestas para pensamiento crítico y toma de decisiones',
      'Recursos para docentes, clubes y proyectos educativos',
    ],
  },
  {
    id: 'analytics',
    icon: 'Globe',
    title: 'Red internacional ajEdu',
    description:
      'ajEdu conecta docentes, educadores, investigadores, clubes y proyectos de distintos países alrededor del ajedrez y la educación.',
    image: '/images/tech-02.jpg',
    imageAlt: 'Red internacional de ajedrez y educación',
    subFeatures: [
      'Integrantes de diferentes países y contextos educativos',
      'Intercambio de recursos, experiencias y metodologías',
      'Colaboración entre docentes, investigadores y divulgadores',
      'Puentes entre centros escolares, asociaciones y clubes',
    ],
  },
  {
    id: 'integrations',
    icon: 'Clock',
    title: 'Congresos y encuentros',
    description:
      'Espacios de intercambio donde se presentan comunicaciones, talleres, investigaciones y proyectos vinculados al ajedrez educativo.',
    image: '/images/devices-01.jpg',
    imageAlt: 'Congresos y encuentros de ajEdu',
    subFeatures: [
      'Congresos virtuales y jornadas de formación',
      'Comunicaciones de docentes, investigadores y monitores',
      'Presentación de experiencias aplicadas en el aula',
      'Espacios para conocer proyectos y crear colaboraciones',
    ],
  },
  {
    id: 'automation',
    icon: 'Sparkles',
    title: 'Innovación educativa',
    description:
      'El ajedrez se plantea como una herramienta para aprender a pensar, convivir, planificar y resolver problemas desde una mirada educativa.',
    image: '/images/tech-03.jpg',
    imageAlt: 'Innovación educativa con ajedrez',
    subFeatures: [
      'Pensamiento lógico, creatividad y estrategia',
      'Aprendizaje cooperativo y toma de decisiones',
      'Convivencia, respeto, paciencia y responsabilidad',
      'Ajedrez transversal para distintas áreas curriculares',
    ],
  },
  {
    id: 'collaboration',
    icon: 'Users',
    title: 'Experiencias de centros',
    description:
      'Experiencias compartidas por centros, docentes y proyectos que muestran cómo el ajedrez educativo puede aplicarse en contextos reales.',
    image: '/images/office-01.jpg',
    imageAlt: 'Experiencias de centros con ajedrez educativo',
    subFeatures: [
      'Proyectos escolares con continuidad y objetivos claros',
      'Talleres y actividades adaptadas a cada grupo',
      'Buenas prácticas para empezar y mejorar programas',
      'Relatos de aula que inspiran nuevas iniciativas',
    ],
  },
  {
    id: 'infrastructure',
    icon: 'LineChart',
    title: 'Investigación y publicaciones',
    description:
      'ajEdu reúne artículos, estudios, comunicaciones y publicaciones que ayudan a comprender mejor el valor educativo del ajedrez.',
    image: '/images/tech-04.jpg',
    imageAlt: 'Investigación y publicaciones sobre ajedrez educativo',
    subFeatures: [
      'Artículos sobre ajedrez, educación y pensamiento',
      'Comunicaciones presentadas en congresos ajEdu',
      'Materiales para fundamentar proyectos educativos',
      'Referencias para docentes, centros e investigadores',
    ],
  },
  {
    id: 'developer-tools',
    icon: 'Rocket',
    title: 'Libros de integrantes ajEdu',
    description:
      'Una biblioteca viva con obras publicadas por integrantes de ajEdu sobre ajedrez educativo, preajedrez, pensamiento, creatividad y cultura ajedrecística.',
    image: '/images/abstract-02.jpg',
    imageAlt: 'Libros de integrantes de ajEdu',
    subFeatures: [
      'Mates curriculares y Jaques curriculares, de Joaquín Fernández Amigo',
      'Preajedrez creativo y La gamificación en el ajedrez',
      'Juegos reunidos de ajedrez educativo, de Santiago del Río',
      'Cuentos, jaques y leyendas, Enrocando y otras obras de la red',
    ],
  },
];

/** Use cases for Features page */
export const useCases: UseCase[] = [
  {
    id: 'docentes',
    persona: 'Docentes',
    title: 'Ajedrez educativo en el aula',
    description:
      'Ideas y recursos para aplicar el ajedrez como herramienta de pensamiento, convivencia y aprendizaje.',
    benefits: [
      'Actividades adaptables a distintos niveles',
      'Propuestas para trabajar valores',
      'Experiencias reales de centros educativos',
      'Materiales para empezar sin complicaciones',
    ],
  },
  {
    id: 'centros',
    persona: 'Centros educativos',
    title: 'Proyectos con continuidad',
    description:
      'Referencias y ejemplos para impulsar programas de ajedrez educativo en colegios, institutos y espacios formativos.',
    benefits: [
      'Ideas para talleres y jornadas',
      'Recursos para coordinar equipos docentes',
      'Orientaciones para proyectos escolares',
      'Experiencias que se pueden adaptar',
    ],
  },
  {
    id: 'investigadores',
    persona: 'Investigadores',
    title: 'Ajedrez, pedagogia e investigacion',
    description:
      'Articulos, comunicaciones y publicaciones para estudiar el valor educativo del ajedrez.',
    benefits: [
      'Comunicaciones de congresos ajEdu',
      'Publicaciones de integrantes',
      'Experiencias documentadas',
      'Miradas desde distintos paises',
    ],
  },
  {
    id: 'clubes',
    persona: 'Clubes y monitores',
    title: 'Formacion escolar con ajedrez',
    description:
      'Materiales para conectar la formacion ajedrecistica con objetivos educativos y valores.',
    benefits: [
      'Retos y actividades para grupos',
      'Propuestas cooperativas',
      'Puentes entre clubes y escuelas',
      'Recursos para monitores y familias',
    ],
  },
];

/** Feature comparison data */
export const featureComparison: ComparisonFeature[] = [
  {
    category: 'Recursos',
    features: [
      { name: 'Actividades de aula', productValue: true, competitorValue: 'Variable' },
      { name: 'Experiencias compartidas', productValue: true, competitorValue: true },
      { name: 'Materiales didacticos', productValue: true, competitorValue: 'Limitado' },
      { name: 'Publicaciones ajEdu', productValue: true, competitorValue: 'Variable' },
      { name: 'Retos y talleres', productValue: true, competitorValue: true },
    ],
  },
  {
    category: 'Comunidad',
    features: [
      { name: 'Red internacional', productValue: true, competitorValue: true },
      { name: 'Docentes e investigadores', productValue: true, competitorValue: true },
      { name: 'Webs colaboradoras', productValue: true, competitorValue: 'Variable' },
      { name: 'Congresos y encuentros', productValue: true, competitorValue: 'Variable' },
      { name: 'Aportes de integrantes', productValue: true, competitorValue: true },
    ],
  },
  {
    category: 'Aplicacion educativa',
    features: [
      { name: 'Pensamiento logico', productValue: true, competitorValue: true },
      { name: 'Estrategia y creatividad', productValue: true, competitorValue: true },
      { name: 'Convivencia y valores', productValue: true, competitorValue: true },
      {
        name: 'Adaptacion al aula',
        productValue: 'Alta',
        competitorValue: 'Variable',
      },
      { name: 'Enfoque pedagogico', productValue: 'Central', competitorValue: 'Variable' },
    ],
  },
];

/** Feature statistics for stats section */
export const featureStats = [
  {
    value: 244,
    suffix: 'K',
    label: 'Visitas de página',
    prefix: '+',
    description:
      'Miles de personas han consultado los contenidos, recursos y experiencias compartidas en ajEdu.',
  },
  {
    value: 362,
    suffix: '',
    label: 'Aportes compartidos',
    prefix: '+',
    description:
      'Recursos, artículos, experiencias y propuestas educativas publicadas por la comunidad ajEdu.',
  },
  {
    value: 86,
    suffix: '',
    label: 'Integrantes',
    prefix: '+',
    description:
      'Docentes, educadores e investigadores unidos por el ajedrez como herramienta educativa.',
  },
  {
    value: 14,
    suffix: '',
    label: 'Países',
    prefix: '+',
    description:
      'Una red internacional que conecta ideas, metodologías y proyectos de distintos lugares del mundo.',
  },
] as const;
