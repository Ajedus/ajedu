import type { BlogPost } from '../types';
import { blogAuthors } from '../authors';

export const post2: BlogPost = {
  id: '2',
  slug: 'recursos-para-empezar-ajedrez-en-clase',
  title: 'Recursos para empezar el ajedrez en clase',
  excerpt:
    'Ideas sencillas para iniciar una actividad de ajedrez educativo con tableros, retos breves, dinámicas cooperativas y materiales adaptables.',
  category: 'recursos',
  author: blogAuthors[1]!,
  publishedAt: '2026-01-25',
  readingTime: 6,
  featured: false,
  coverImage: '/images/tech-01.jpg',
  tags: ['recursos', 'actividades', 'docentes', 'iniciacion'],
  relatedPosts: ['1', '8', '3'],
  content: `
    <p>Para empezar no hace falta una gran infraestructura. Unos tableros, algunas posiciones bien elegidas y una secuencia clara de actividades pueden ser suficientes para crear una experiencia significativa.</p>

    <h2>Actividades cortas y útiles</h2>

    <p>Las propuestas breves funcionan muy bien en el aula: retos de una posición, preguntas de planificación, búsqueda de caminos, problemas cooperativos o debates sobre decisiones.</p>

    <ul>
      <li>Retos de mate o captura adaptados al nivel.</li>
      <li>Historias con piezas para trabajar vocabulario y normas.</li>
      <li>Partidas por equipos donde se explique cada jugada.</li>
      <li>Diarios de pensamiento para justificar decisiones.</li>
    </ul>

    <h2>Materiales adaptables</h2>

    <p>Un buen recurso es aquel que se puede ajustar a distintas edades, tiempos y grupos. Por eso ajEdu recopila materiales abiertos a la adaptación docente.</p>
  `,
};
