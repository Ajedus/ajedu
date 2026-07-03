import type { BlogPost } from '../types';
import { blogAuthors } from '../authors';

export const post4: BlogPost = {
  id: '4',
  slug: 'congresos-ajedu-compartir-para-crecer',
  title: 'Congresos ajEdu: compartir para crecer',
  excerpt:
    'Los encuentros, jornadas y comunicaciones permiten conectar a docentes, investigadores y divulgadores del ajedrez educativo.',
  category: 'congresos',
  author: blogAuthors[3]!,
  publishedAt: '2026-01-12',
  readingTime: 5,
  featured: false,
  coverImage: '/images/office-02.jpg',
  tags: ['congresos', 'formacion', 'encuentros', 'comunicaciones'],
  relatedPosts: ['3', '5', '7'],
  content: `
    <p>Los congresos ajEdu son espacios de intercambio. En ellos se presentan experiencias, investigaciones, talleres y comunicaciones que ayudan a ampliar la mirada sobre el ajedrez educativo.</p>

    <h2>Aprender de otras voces</h2>

    <p>Cuando una persona comparte lo que ha probado en su aula o proyecto, otras pueden adaptar esa experiencia a su propio contexto. Esa circulación de ideas es la base de una red viva.</p>

    <ul>
      <li>Comunicaciones de docentes e investigadores.</li>
      <li>Talleres prácticos para el aula.</li>
      <li>Espacios de diálogo entre proyectos.</li>
      <li>Publicaciones y materiales posteriores.</li>
    </ul>
  `,
};
