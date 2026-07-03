import type { BlogPost } from '../types';
import { blogAuthors } from '../authors';

export const post1: BlogPost = {
  id: '1',
  slug: 'ajedrez-educativo-aprender-pensando',
  title: 'Ajedrez educativo: aprender pensando',
  excerpt:
    'Una mirada clara a cómo el ajedrez puede ayudar a trabajar pensamiento, estrategia, atención, valores y convivencia dentro del aula.',
  category: 'aula',
  author: blogAuthors[0]!,
  publishedAt: '2026-02-01',
  readingTime: 5,
  featured: true,
  coverImage: '/images/ajedu-hero.jpg',
  tags: ['aula', 'pensamiento', 'estrategia', 'valores'],
  relatedPosts: ['2', '5', '8'],
  content: `
    <p>El ajedrez educativo no busca formar únicamente jugadores. Su valor principal está en convertir el tablero en un espacio para pensar, dialogar, decidir y aprender de los errores.</p>

    <p>En el aula, una posición sencilla puede abrir preguntas muy ricas: qué opciones existen, qué consecuencias tiene cada decisión, cómo se explica una idea y cómo se respeta el razonamiento de otra persona.</p>

    <h2>Más allá de la competición</h2>

    <p>Cuando el ajedrez se trabaja desde una mirada educativa, las piezas se convierten en herramientas para desarrollar atención, memoria de trabajo, planificación y convivencia. El objetivo no es ganar más partidas, sino aprender mejor.</p>

    <ul>
      <li><strong>Pensamiento crítico:</strong> analizar antes de actuar.</li>
      <li><strong>Estrategia:</strong> planificar con objetivos claros.</li>
      <li><strong>Valores:</strong> respetar turnos, normas y decisiones.</li>
      <li><strong>Convivencia:</strong> aprender con otros y desde otros.</li>
    </ul>

    <h2>Un lenguaje común</h2>

    <p>El tablero permite que estudiantes de distintas edades y contextos compartan una misma actividad. Esa sencillez es una de las grandes fortalezas del ajedrez educativo.</p>
  `,
};
