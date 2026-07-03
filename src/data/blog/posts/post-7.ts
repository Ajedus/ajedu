import type { BlogPost } from '../types';
import { blogAuthors } from '../authors';

export const post7: BlogPost = {
  id: '7',
  slug: 'temporada-xxii-nuevos-proyectos-ajedu',
  title: 'Temporada XXII: nuevos proyectos ajEdu',
  excerpt:
    'La nueva temporada abre un espacio para seguir compartiendo propuestas, publicaciones y experiencias de ajedrez educativo.',
  category: 'noticias',
  author: blogAuthors[3]!,
  publishedAt: '2025-12-15',
  readingTime: 4,
  featured: false,
  coverImage: '/images/ajedu-hero.jpg',
  tags: ['noticias', 'temporada-xxii', 'proyectos', 'comunidad'],
  relatedPosts: ['4', '6', '1'],
  content: `
    <p>La Temporada XXII de ajEdu es una invitación a seguir sumando proyectos, recursos y voces alrededor del ajedrez educativo.</p>

    <h2>Una comunidad en movimiento</h2>

    <p>Cada temporada permite revisar lo realizado, ordenar nuevas propuestas y abrir espacios para que más personas participen en la red.</p>

    <p>El objetivo sigue siendo claro: aportar al ajedrez educativo desde la colaboración y la experiencia compartida.</p>
  `,
};
