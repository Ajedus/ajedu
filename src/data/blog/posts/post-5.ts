import type { BlogPost } from '../types';
import { blogAuthors } from '../authors';

export const post5: BlogPost = {
  id: '5',
  slug: 'investigacion-ajedrez-pensamiento-y-convivencia',
  title: 'Investigación, pensamiento y convivencia',
  excerpt:
    'El ajedrez educativo abre líneas de trabajo sobre razonamiento lógico, toma de decisiones, atención, creatividad y convivencia.',
  category: 'investigacion',
  author: blogAuthors[0]!,
  publishedAt: '2026-01-05',
  readingTime: 8,
  featured: false,
  coverImage: '/images/tech-02.jpg',
  tags: ['investigacion', 'pedagogia', 'pensamiento', 'convivencia'],
  relatedPosts: ['1', '4', '8'],
  content: `
    <p>El ajedrez se puede estudiar como juego, deporte, lenguaje simbólico y herramienta educativa. En ajEdu nos interesa especialmente su potencial para mejorar procesos de pensamiento y convivencia.</p>

    <h2>Preguntas que importan</h2>

    <p>¿Cómo explica un alumno su decisión? ¿Qué estrategias usa para revisar un error? ¿Cómo negocia una jugada en una actividad cooperativa? Estas preguntas conectan el tablero con la pedagogía.</p>

    <p>La investigación ayuda a ordenar evidencias, detectar límites y diseñar mejores propuestas para el aula.</p>
  `,
};
