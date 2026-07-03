import type { BlogPost } from '../types';
import { blogAuthors } from '../authors';

export const post8: BlogPost = {
  id: '8',
  slug: 'actividades-para-trabajar-valores-con-ajedrez',
  title: 'Actividades para trabajar valores con el tablero',
  excerpt:
    'El tablero permite trabajar paciencia, respeto, responsabilidad, empatía y toma de decisiones con actividades sencillas y significativas.',
  category: 'recursos',
  author: blogAuthors[1]!,
  publishedAt: '2025-12-08',
  readingTime: 6,
  featured: false,
  coverImage: '/images/abstract-02.jpg',
  tags: ['valores', 'convivencia', 'recursos', 'aula'],
  relatedPosts: ['1', '2', '5'],
  content: `
    <p>Los valores no se trabajan solo hablando de ellos. También se aprenden en situaciones concretas donde hay que esperar, decidir, aceptar un resultado y explicar una elección.</p>

    <h2>Ideas de actividad</h2>

    <ul>
      <li><strong>La jugada responsable:</strong> antes de mover, cada equipo explica qué ha pensado.</li>
      <li><strong>El error útil:</strong> se analiza una equivocación sin señalar culpables.</li>
      <li><strong>El turno de palabra:</strong> cada alumno aporta una idea antes de decidir.</li>
      <li><strong>La partida cooperativa:</strong> el objetivo es construir un plan común.</li>
    </ul>

    <p>Así, el ajedrez deja de ser solo una partida y se convierte en una experiencia educativa completa.</p>
  `,
};
