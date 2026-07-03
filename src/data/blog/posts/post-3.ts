import type { BlogPost } from '../types';
import { blogAuthors } from '../authors';

export const post3: BlogPost = {
  id: '3',
  slug: 'experiencias-de-centros-con-ajedrez-educativo',
  title: 'Experiencias de centros con ajedrez educativo',
  excerpt:
    'Proyectos reales muestran cómo el ajedrez puede integrarse en centros escolares, clubes y programas educativos de forma flexible.',
  category: 'experiencias',
  author: blogAuthors[2]!,
  publishedAt: '2026-01-18',
  readingTime: 7,
  featured: false,
  coverImage: '/images/office-01.jpg',
  tags: ['experiencias', 'centros', 'proyectos', 'comunidad'],
  relatedPosts: ['1', '4', '6'],
  content: `
    <p>Las experiencias compartidas por centros y docentes ayudan a que otros proyectos puedan empezar con más seguridad. No se trata de copiar modelos cerrados, sino de aprender de caminos ya recorridos.</p>

    <h2>Lo que aporta una experiencia real</h2>

    <p>Una experiencia educativa muestra tiempos, dificultades, materiales, cambios necesarios y resultados observados. Esa información tiene un valor enorme para cualquier equipo docente.</p>

    <blockquote>
      Cada proyecto aporta una pieza al tablero común de ajEdu: una idea, una actividad, una pregunta o una forma distinta de mirar el aprendizaje.
    </blockquote>

    <p>Por eso la red ajEdu quiere ser un espacio donde las prácticas reales puedan encontrarse, leerse y adaptarse.</p>
  `,
};
