import type { BlogPost } from '../types';
import { blogAuthors } from '../authors';

export const post6: BlogPost = {
  id: '6',
  slug: 'webs-y-blogs-amigos-de-ajedu',
  title: 'Webs y blogs amigos de ajEdu',
  excerpt:
    'La red crece gracias a colaboraciones con webs, blogs, asociaciones y proyectos que también impulsan el ajedrez educativo.',
  category: 'colaboraciones',
  author: blogAuthors[2]!,
  publishedAt: '2025-12-28',
  readingTime: 4,
  featured: false,
  coverImage: '/images/abstract-01.jpg',
  tags: ['colaboraciones', 'webs-amigas', 'blogs', 'red'],
  relatedPosts: ['3', '7', '4'],
  content: `
    <p>ajEdu no es una isla. La red se alimenta de proyectos amigos que comparten recursos, miradas y experiencias sobre ajedrez y educación.</p>

    <h2>Una red de enlaces con sentido</h2>

    <p>Las webs y blogs colaboradores permiten descubrir materiales, actividades y reflexiones que amplían el trabajo de docentes y monitores.</p>

    <p>Conectar esas iniciativas ayuda a que el conocimiento circule mejor y llegue a más personas.</p>
  `,
};
