/**
 * Blog data main entry point
 */

export * from './types';
export * from './categories';
export * from './authors';

import { post9 } from './posts/post-9';
import { post10 } from './posts/post-10';

import type { BlogPost } from './types';

/** Blog posts */
export const blogPosts: BlogPost[] = [post10, post9];

/** Featured blog post (hero section) */
export const featuredBlogPost = blogPosts[0]!;

/** Blog page metadata */
export const blogMetadata = {
  title: 'Blog de ajEdu',
  description: 'Recursos, experiencias y publicaciones para llevar el ajedrez educativo al aula.',
  keywords: ['ajEdu', 'ajedrez educativo', 'recursos', 'docentes', 'educacion'],
} as const;

/** Newsletter CTA for blog */
export const blogNewsletter = {
  title: 'Recibe novedades de ajEdu',
  description: 'Publicaciones, recursos y experiencias de ajedrez educativo directamente en tu correo.',
  placeholder: 'Tu correo electrónico',
  buttonText: 'Suscribirme',
  successMessage: 'Gracias por suscribirte. Revisa tu correo para confirmar la suscripción.',
} as const;

/** Popular tags for blog filtering */
export const popularTags = [
  'ajedrez educativo',
  'recursos',
  'experiencias',
] as const;
