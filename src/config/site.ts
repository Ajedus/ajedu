/**
 * Site Configuration
 *
 * Centralized configuration for branding, navigation, social links,
 * contact information, footer content, and SEO defaults.
 * All values are customizable for ajEdu.
 */

import { ROUTES } from './paths';

/**
 * Company branding configuration
 */
export interface CompanyConfig {
  /** Company/product name */
  name: string;
  /** Tagline displayed in hero and meta descriptions */
  tagline: string;
  /** Short description for cards and previews */
  shortDescription: string;
  /** Full description for team pages */
  fullDescription: string;
  /** Year founded */
  foundedYear: number;
  /** Company mission statement */
  mission: string;
  /** Company vision statement */
  vision: string;
}

/**
 * Social media links configuration
 */
export interface SocialLinksConfig {
  /** Twitter/X handle (without @) */
  twitter: string;
  /** Twitter/X profile URL */
  twitterUrl: string;
  /** GitHub organization/username */
  github: string;
  /** GitHub profile URL */
  githubUrl: string;
  /** LinkedIn company URL */
  linkedinUrl: string;
  /** Discord invite URL */
  discordUrl: string;
  /** YouTube channel URL */
  youtubeUrl: string;
}

/**
 * Contact information configuration
 */
export interface ContactConfig {
  /** Primary support email */
  email: string;
  /** Sales inquiry email */
  salesEmail: string;
  /** Support email */
  supportEmail: string;
  /** Phone number (optional) */
  phone: string;
  /** Office address */
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  /** Business hours */
  businessHours: string;
  /** Live chat availability */
  liveChatHours: string;
}

/**
 * Footer content configuration
 */
export interface FooterConfig {
  /** Newsletter CTA headline */
  newsletterHeadline: string;
  /** Newsletter CTA description */
  newsletterDescription: string;
  /** Newsletter privacy text */
  newsletterPrivacy: string;
  /** Copyright notice template (use {year} placeholder) */
  copyright: string;
  /** Company registration number */
  registrationNumber: string;
  /** Status page URL */
  statusPageUrl: string;
  /** Attribution text */
  attributionText: string;
  /** Attribution URL */
  attributionUrl: string;
}

/**
 * SEO metadata configuration
 */
export interface SEOConfig {
  /** Default page title template (use {title} placeholder) */
  titleTemplate: string;
  /** Site title suffix */
  titleSuffix: string;
  /** Default meta description */
  defaultDescription: string;
  /** Default OG image path */
  defaultOgImage: string;
  /** Twitter card type */
  twitterCardType: 'summary' | 'summary_large_image';
  /** Twitter site handle (with @) */
  twitterSite: string;
  /** Theme color for browser */
  themeColor: string;
  /** Keywords for meta tags */
  defaultKeywords: string[];
  /** Author name for meta tags */
  author: string;
  /** Site locale */
  locale: string;
  /** Language code */
  language: string;
}

/**
 * Analytics and tracking configuration
 */
export interface AnalyticsConfig {
  /** Google Analytics measurement ID */
  googleAnalyticsId: string | undefined;
  /** Plausible analytics domain */
  plausibleDomain: string | undefined;
  /** PostHog project API key */
  posthogKey: string | undefined;
  /** Enable analytics in development */
  enableInDev: boolean;
}

/**
 * Feature flags for enabling/disabling site features
 */
export interface FeatureFlagsConfig {
  /** Enable newsletter signup */
  newsletter: boolean;
  /** Enable live chat widget */
  liveChat: boolean;
  /** Enable search functionality */
  search: boolean;
  /** Enable dark mode toggle */
  darkMode: boolean;
  /** Enable multi-language support */
  i18n: boolean;
  /** Enable demo mode (modals for placeholder features) */
  demoMode: boolean;
}

// =============================================================================
// CONFIGURATION VALUES
// =============================================================================

/**
 * Company branding
 * Main ajEdu branding values.
 */
export const company: CompanyConfig = {
  name: 'ajEdu',
  tagline: 'Red Internacional Ajedrez y Educación',
  shortDescription:
    'Aportando al ajedrez educativo desde 2005 con recursos, experiencias y proyectos compartidos.',
  fullDescription: `ajEdu es una red internacional dedicada a compartir recursos, experiencias, publicaciones y 
    proyectos vinculados al ajedrez educativo.
    
    Desde 2005 conecta a docentes, educadores, investigadores, clubes y proyectos que utilizan el ajedrez como 
    herramienta para trabajar pensamiento, estrategia, valores y convivencia.`,
  foundedYear: 2005,
  mission:
    'Impulsar el ajedrez educativo mediante recursos abiertos, experiencias compartidas y colaboración internacional.',
  vision:
    'Una comunidad educativa conectada que usa el ajedrez para aprender, convivir y pensar mejor.',
} as const;

/**
 * Social media links
 * Update with your actual social media profiles
 */
export const social: SocialLinksConfig = {
  twitter: '',
  twitterUrl: 'https://ajedu.blogspot.com/',
  github: '',
  githubUrl: 'https://ajedu.blogspot.com/',
  linkedinUrl: 'https://ajedu.blogspot.com/',
  discordUrl: 'https://ajedu.blogspot.com/',
  youtubeUrl: 'https://ajedu.blogspot.com/',
} as const;

/**
 * Contact information
 * Update with your actual contact details
 */
export const contact: ContactConfig = {
  email: 'redajedu@gmail.com',
  salesEmail: '',
  supportEmail: '',
  phone: '',
  address: {
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  },
  businessHours: '',
  liveChatHours: '',
} as const;

/**
 * Footer content configuration
 */
export const footer: FooterConfig = {
  newsletterHeadline: 'Recibe novedades de ajEdu',
  newsletterDescription:
    'Recursos, experiencias y publicaciones de ajedrez educativo en tu correo.',
  newsletterPrivacy: 'Sin spam. Puedes darte de baja cuando quieras.',
  copyright: '© {year} ajEdu. Todos los derechos reservados.',
  registrationNumber: 'Aportando al ajedrez educativo desde 2005',
  statusPageUrl: '',
  attributionText: '',
  attributionUrl: '',
} as const;

/**
 * SEO default metadata
 * These values are used when page-specific metadata is not provided
 */
export const seo: SEOConfig = {
  titleTemplate: '{title} | ajEdu',
  titleSuffix: ' | ajEdu',
  defaultDescription: `${company.name} - ${company.tagline}. ${company.shortDescription}`,
  defaultOgImage: '/images/og-default.jpg',
  twitterCardType: 'summary_large_image',
  twitterSite: '',
  themeColor: '#1d4ed8',
  defaultKeywords: [
    'ajEdu',
    'ajedrez educativo',
    'ajedrez en el aula',
    'educación',
    'docentes',
    'recursos educativos',
    'pensamiento crítico',
    'valores',
    'convivencia',
  ],
  author: company.name,
  locale: 'es_ES',
  language: 'es',
} as const;

/**
 * Analytics configuration
 * Add your tracking IDs to enable analytics
 */
export const analytics: AnalyticsConfig = {
  // Add your Google Analytics 4 measurement ID (G-XXXXXXXXXX)
  googleAnalyticsId: undefined,
  // Add your Plausible domain if analytics are enabled.
  plausibleDomain: undefined,
  // Add your PostHog project API key
  posthogKey: undefined,
  // Set to true to enable analytics in development
  enableInDev: false,
} as const;

/**
 * Feature flags
 * Enable or disable site features
 */
export const featureFlags: FeatureFlagsConfig = {
  // Enable newsletter signup form
  newsletter: false,
  // Enable live chat widget (placeholder in demo mode)
  liveChat: true,
  // Enable search functionality
  search: true,
  // Enable dark mode toggle
  darkMode: true,
  // Enable multi-language support (future feature)
  i18n: false,
  // Enable demo mode - shows modals for placeholder features
  demoMode: true,
} as const;

// =============================================================================
// DERIVED CONFIGURATION
// =============================================================================

/**
 * Navigation links that use site configuration
 * These combine the base routes with labels from site config
 */
export const siteNavigation = {
  /** Main navigation items */
  main: [
    { label: 'Recursos', href: ROUTES.FEATURES },
    { label: 'Equipo', href: ROUTES.EQUIPO },
    { label: 'Blog', href: ROUTES.BLOG },
    { label: 'Contacto', href: ROUTES.CONTACT },
    { label: 'Integrante', href: ROUTES.JOIN },
  ],

  /** Footer navigation sections */
  footer: {
    product: {
      title: 'ajEdu',
      links: [
        { label: 'Recursos', href: ROUTES.FEATURES },
        { label: 'Blog', href: ROUTES.BLOG },
      ],
    },
    company: {
      title: 'Red',
      links: [
        { label: 'Equipo', href: ROUTES.EQUIPO },
        { label: 'Quiero ser integrante', href: ROUTES.JOIN },
        { label: 'Contacto', href: ROUTES.CONTACT },
      ],
    },
    resources: {
      title: 'Recursos',
      links: [
        { label: 'Ajedrez en el aula', href: ROUTES.FEATURES },
        { label: 'Publicaciones', href: ROUTES.BLOG },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacidad', href: ROUTES.PRIVACY },
        { label: 'Términos', href: ROUTES.TERMS },
      ],
    },
  },

  /** Social media links for footer */
  social: [],

  /** Contact methods for footer */
  contact: [],
} as const;

/**
 * Page-specific SEO metadata
 * Override defaults for specific pages
 */
export const pageSEO = {
  home: {
    title: 'Red Internacional Ajedrez y Educación',
    description: `${company.tagline}. ${company.shortDescription}`,
  },
  features: {
    title: 'Recursos',
    description:
      'Recursos, experiencias y propuestas para llevar el ajedrez educativo al aula.',
  },
  equipo: {
    title: 'Equipo',
    description: `Conoce al equipo y la comunidad que impulsa ${company.name}.`,
  },
  contact: {
    title: 'Contacto',
    description: `Contacta con ${company.name} para compartir recursos, experiencias o proyectos.`,
  },
  join: {
    title: 'Quiero ser integrante',
    description: `Formulario para solicitar la incorporacion a la comunidad ${company.name}.`,
  },
  support: {
    title: 'Ayuda',
    description: `Recursos y respuestas para conocer mejor ${company.name}.`,
  },
  blog: {
    title: 'Blog',
    description: `Recursos, experiencias y publicaciones de ${company.name}.`,
  },
  changelog: {
    title: 'Novedades',
    description: `Últimas novedades de ${company.name}.`,
  },
  roadmap: {
    title: 'Hoja de ruta',
    description: `Próximos proyectos y líneas de trabajo de ${company.name}.`,
  },
  privacy: {
    title: 'Privacidad',
    description: `Información sobre privacidad en ${company.name}.`,
  },
  terms: {
    title: 'Términos',
    description: `Condiciones de uso de ${company.name}.`,
  },
  login: {
    title: 'Log In',
    description: `Sign in to your ${company.name} account.`,
    robots: 'noindex, nofollow',
  },
  notFound: {
    title: 'Página no encontrada',
    description: `No hemos encontrado la página que buscas.`,
    robots: 'noindex, nofollow',
  },
  docs: {
    title: 'Documentación',
    description: `Guías y recursos de ${company.name}.`,
  },
  docsApi: {
    title: 'Recursos',
    description: `Materiales y referencias de ${company.name}.`,
  },
  status: {
    title: 'Estado',
    description: `Estado y novedades de ${company.name}.`,
  },
} as const;

/**
 * Utility to generate full page title
 * @param pageTitle - The page-specific title
 * @returns Full title with suffix
 */
export const getPageTitle = (pageTitle?: string): string => {
  if (!pageTitle) {
    return `${company.name} - ${company.tagline}`;
  }
  return seo.titleTemplate.replace('{title}', pageTitle);
};

/**
 * Utility to generate copyright text with current year
 * @returns Copyright string with current year
 */
export const getCopyright = (): string => {
  const year = new Date().getFullYear();
  return footer.copyright.replace('{year}', String(year));
};

/**
 * Site configuration object (combined exports)
 */
export const site = {
  company,
  social,
  contact,
  footer,
  seo,
  analytics,
  featureFlags,
  navigation: siteNavigation,
  pageSEO,
  getPageTitle,
  getCopyright,
} as const;

// Default export for convenience
export default site;
