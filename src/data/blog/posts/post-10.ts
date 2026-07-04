import type { BlogPost } from '../types';
import { blogAuthors } from '../authors';

const imageBase = '/images/blog/ajedreces-artesanales';

export const post10: BlogPost = {
  id: '10',
  slug: 'ajedreces-artesanales-y-tematicos',
  title: 'Ajedreces artesanales y temáticos: cuando el tablero se convierte en arte',
  excerpt:
    'Una selección de tableros y piezas artesanales que muestran el ajedrez como memoria, cultura, creatividad y recurso educativo.',
  category: 'recursos',
  author: blogAuthors.find((author) => author.id === 'comunidad-ajedu')!,
  publishedAt: '2026-07-04',
  readingTime: 9,
  featured: true,
  coverImage: `${imageBase}/ajedrez-japones-damas-siglo-xix-01.jpg`,
  tags: ['ajedrez educativo', 'recursos'],
  relatedPosts: [],
  content: `
    <p>El ajedrez también puede leerse como una pequeña exposición de arte. Cuando las piezas se modelan a mano, se reciclan materiales o se inspiran en tradiciones culturales, el tablero deja de ser solo un espacio de juego y se convierte en una herramienta para mirar, conversar y aprender.</p>

    <p>Esta recopilación reúne ajedreces artesanales y temáticos compartidos por la comunidad ajEdu. Cada propuesta permite trabajar creatividad, historia, patrimonio, diseño, valores y pensamiento estratégico desde una mirada cercana al aula.</p>

    <h2>Ajedrez japonés y juego de damas del siglo XIX</h2>
    <figure>
      <img src="${imageBase}/ajedrez-japones-damas-siglo-xix-01.jpg" alt="Ajedrez japonés y juego de damas del siglo XIX" loading="lazy" />
      <figcaption>Una pieza histórica fotografiada en el Museo de Vilanova i la Geltrú.</figcaption>
    </figure>
    <p>Este conjunto une ajedrez japonés y juego de damas en una pieza de museo. Su valor está en la conservación del objeto, en la belleza del trabajo artesanal y en la posibilidad de hablar en clase sobre juegos de estrategia en distintas culturas.</p>
    <p><strong>Aportados por:</strong> Charo Pallarés.</p>

    <h2>Un ajedrez de Harry Potter</h2>
    <figure>
      <img src="${imageBase}/ajedrez-harry-potter-01.jpg" alt="Ajedrez temático de Harry Potter" loading="lazy" />
      <figcaption>Un tablero temático que conecta literatura, imaginación y estrategia.</figcaption>
    </figure>
    <p>El universo de Harry Potter se convierte aquí en un ajedrez reconocible y cercano para muchos alumnos. Este tipo de tablero ayuda a vincular el juego con la lectura, la fantasía y la motivación inicial de quienes se acercan por primera vez al ajedrez.</p>
    <p><strong>Aportado por:</strong> Anabel Cedillo.</p>

    <h2>Ajedreces artesanales mexicanos de Halloween</h2>
    <figure>
      <img src="${imageBase}/ajedreces-mexicanos-halloween-01.jpg" alt="Ajedrez mexicano de Halloween con tablero temático" loading="lazy" />
      <figcaption>Tablero y piezas inspirados en una estética festiva y popular.</figcaption>
    </figure>
    <figure>
      <img src="${imageBase}/ajedreces-mexicanos-halloween-02.jpg" alt="Piezas de ajedrez mexicano de Halloween" loading="lazy" />
    </figure>
    <figure>
      <img src="${imageBase}/ajedreces-mexicanos-halloween-03.jpg" alt="Detalle de piezas de ajedrez de Halloween" loading="lazy" />
    </figure>
    <figure>
      <img src="${imageBase}/ajedreces-mexicanos-halloween-04.jpg" alt="Ajedrez de Halloween con personajes temáticos" loading="lazy" />
    </figure>
    <figure>
      <img src="${imageBase}/ajedreces-mexicanos-halloween-05.jpg" alt="Ajedrez artesanal de Halloween" loading="lazy" />
    </figure>
    <p>La temática de Halloween permite transformar las piezas en personajes y símbolos fácilmente identificables. Es una propuesta útil para trabajar diseño, expresión artística y narración visual a partir de las reglas del ajedrez.</p>
    <p><strong>Aportados por:</strong> Lupita Carpio Recinos.</p>

    <h2>Ajedrez de cerámica del Medievo</h2>
    <figure>
      <img src="${imageBase}/ajedrez-ceramica-medievo-01.jpg" alt="Ajedrez de cerámica inspirado en el Medievo" loading="lazy" />
      <figcaption>Piezas de cerámica con una estética histórica y ornamental.</figcaption>
    </figure>
    <p>Este ajedrez de cerámica invita a observar la relación entre material, forma y época histórica. En el aula puede servir para hablar de oficios artesanos, representaciones medievales y evolución cultural del juego.</p>
    <p><strong>Aportado por:</strong> Juan Ramón Jerez.</p>

    <h2>Piezas colombianas hechas con plastilina</h2>
    <figure>
      <img src="${imageBase}/piezas-colombianas-plastilina-01.jpg" alt="Piezas de ajedrez colombianas hechas con plastilina" loading="lazy" />
      <figcaption>Piezas modeladas manualmente bajo la idea de la magia del ajedrez.</figcaption>
    </figure>
    <figure>
      <img src="${imageBase}/piezas-colombianas-plastilina-02.jpg" alt="Detalle de piezas artesanales colombianas de plastilina" loading="lazy" />
    </figure>
    <figure>
      <img src="${imageBase}/piezas-colombianas-plastilina-03.jpg" alt="Rey y piezas artesanales de plastilina" loading="lazy" />
    </figure>
    <figure>
      <img src="${imageBase}/piezas-colombianas-plastilina-04.jpg" alt="Conjunto de piezas de ajedrez hechas con plastilina" loading="lazy" />
    </figure>
    <p>La plastilina convierte cada pieza en una creación única, cercana al trabajo manual y al juego simbólico. Esta propuesta permite unir ajedrez, artes plásticas y creatividad, mostrando que el tablero también puede nacer de materiales sencillos.</p>
    <p><strong>Aportadas por:</strong> Patty Liz.</p>

    <h2>Ajedreces reciclados en Zaragoza</h2>
    <figure>
      <img src="${imageBase}/ajedreces-reciclados-zaragoza-01.jpg" alt="Ajedrez reciclado realizado en Zaragoza" loading="lazy" />
      <figcaption>Materiales reutilizados para crear piezas y tableros escolares.</figcaption>
    </figure>
    <figure>
      <img src="${imageBase}/ajedreces-reciclados-zaragoza-02.jpg" alt="Segundo ajedrez reciclado realizado en Zaragoza" loading="lazy" />
    </figure>
    <figure>
      <img src="${imageBase}/ajedreces-reciclados-zaragoza-03.jpg" alt="Detalle de piezas recicladas de ajedrez" loading="lazy" />
    </figure>
    <figure>
      <img src="${imageBase}/ajedreces-reciclados-zaragoza-04.jpg" alt="Tablero escolar con piezas recicladas" loading="lazy" />
    </figure>
    <p>Estos trabajos muestran cómo el reciclaje puede entrar en el aula a través del ajedrez. La fabricación de piezas permite hablar de sostenibilidad, cooperación, diseño y resolución de problemas con un resultado visible y jugable.</p>
    <p><strong>Aportados por:</strong> Joaquín Fdez Amigo, sobre información suministrada por Rut Luengo, jefa de estudios de Infantil.</p>

    <h2>Ajedrez en la Fira d'Hivern de Parets del Vallès</h2>
    <figure>
      <img src="${imageBase}/ajedreces-parets-valles-01.jpg" alt="Ajedrez artesanal visto en Parets del Vallès" loading="lazy" />
      <figcaption>Un ajedrez expuesto en un contexto festivo y comunitario.</figcaption>
    </figure>
    <p>La presencia del ajedrez en una feria local ayuda a llevar el juego fuera del espacio habitual. Este tipo de piezas permite conectar patrimonio, comercio, encuentro vecinal y aprendizaje compartido.</p>
    <p><strong>Aportados por:</strong> María Rosario Pallarés.</p>

    <h2>Ajedreces búlgaros</h2>
    <figure>
      <img src="${imageBase}/ajedreces-bulgaros-01.jpg" alt="Ajedrez búlgaro artesanal" loading="lazy" />
      <figcaption>Un conjunto que invita a comparar formas, estilos y tradiciones.</figcaption>
    </figure>
    <p>Los ajedreces búlgaros aportan una mirada cultural diferente sobre las piezas y su representación. Son una buena excusa para investigar cómo cambia el diseño del ajedrez según el lugar, el material y la tradición.</p>
    <p><strong>Aportados por:</strong> María Rosario Pallarés.</p>

    <h2>Ajedreces toledanos</h2>
    <figure>
      <img src="${imageBase}/ajedreces-toledanos-01.jpg" alt="Ajedrez toledano artesanal" loading="lazy" />
      <figcaption>Diseño artesanal con una identidad estética muy marcada.</figcaption>
    </figure>
    <p>Este ajedrez toledano permite observar cómo una ciudad o una tradición artística puede influir en la forma de las piezas. En clase puede abrir conversaciones sobre artesanía, geografía cultural y memoria material.</p>
    <p><strong>Aportados por:</strong> María Rosario Pallarés.</p>

    <h2>Ajedrez de piedra de Durango</h2>
    <figure>
      <img src="${imageBase}/ajedrez-piedra-durango-01.jpg" alt="Ajedrez de piedra en Durango" loading="lazy" />
      <figcaption>Un tablero de piedra visto en una tienda de artesanías de Durango, México.</figcaption>
    </figure>
    <p>La piedra aporta peso, textura y permanencia a las piezas. Este ajedrez permite hablar de materiales naturales, artesanía local y del valor cultural de los objetos que conservan una huella manual.</p>
    <p><strong>Aportado por:</strong> Dalila Saucedo.</p>

    <h2>Ajedrez realizado con piedras de río</h2>
    <figure>
      <img src="${imageBase}/ajedrez-piedras-rio-01.jpg" alt="Ajedrez realizado con piedras de río" loading="lazy" />
      <figcaption>Piedras de río transformadas en piezas reconocibles y funcionales.</figcaption>
    </figure>
    <p>Este tablero demuestra que el ajedrez puede construirse con elementos encontrados en la naturaleza. La propuesta combina observación, selección de formas, creatividad y una mirada ecológica sobre el juego.</p>
    <p><strong>Aportado por:</strong> Miguel Ángel Vidal. Difundido en X por Luis Bolívar Armas Dávila.</p>

    <h2>Concurso de ajedreces artesanales de Chessland Academy</h2>
    <figure>
      <img src="${imageBase}/concurso-chessland-jalisco-01.png" alt="Primer trabajo del concurso de ajedreces artesanales de Chessland Academy" loading="lazy" />
      <figcaption>Trabajos presentados en una edición escolar dedicada a la creación de ajedreces.</figcaption>
    </figure>
    <figure>
      <img src="${imageBase}/concurso-chessland-jalisco-02.png" alt="Segundo trabajo del concurso de ajedreces artesanales de Chessland Academy" loading="lazy" />
    </figure>
    <figure>
      <img src="${imageBase}/concurso-chessland-jalisco-03.png" alt="Tercer trabajo del concurso de ajedreces artesanales de Chessland Academy" loading="lazy" />
    </figure>
    <p>Un concurso de ajedreces artesanales convierte la creación del tablero en una experiencia educativa completa. Además de jugar, el alumnado diseña, explica decisiones, valora materiales y comparte su trabajo con la comunidad.</p>
    <p><strong>Aportado por:</strong> Lupita Carpio Recinos.</p>

    <h2>Ajedreces artesanales de Juan Francisco López Fernández</h2>
    <figure>
      <img src="${imageBase}/ajedreces-artesanales-juan-francisco-01.jpg" alt="Ajedrez artesanal de Juan Francisco López Fernández" loading="lazy" />
      <figcaption>Conjuntos artesanales que muestran distintas soluciones de diseño.</figcaption>
    </figure>
    <figure>
      <img src="${imageBase}/ajedreces-artesanales-juan-francisco-02.jpg" alt="Segundo ajedrez artesanal de Juan Francisco López Fernández" loading="lazy" />
    </figure>
    <figure>
      <img src="${imageBase}/ajedreces-artesanales-juan-francisco-03.jpg" alt="Detalle de ajedrez artesanal de Juan Francisco López Fernández" loading="lazy" />
    </figure>
    <figure>
      <img src="${imageBase}/ajedreces-artesanales-juan-francisco-04.jpg" alt="Cuarto ajedrez artesanal de Juan Francisco López Fernández" loading="lazy" />
    </figure>
    <p>Estos ajedreces muestran variedad de formas, colores y acabados. La colección ayuda a ver que no hay una única manera de representar las piezas, siempre que se mantenga la lectura del juego.</p>
    <p><strong>Aportado por:</strong> Juan Francisco López Fernández.</p>

    <h2>Ajedreces con bambú, huevos y pasta de papel</h2>
    <figure>
      <img src="${imageBase}/ajedreces-bambu-huevos-pasta-papel-01.jpg" alt="Ajedrez artesanal realizado con bambú" loading="lazy" />
      <figcaption>Materiales cotidianos convertidos en recursos creativos para construir piezas.</figcaption>
    </figure>
    <figure>
      <img src="${imageBase}/ajedreces-bambu-huevos-pasta-papel-02.jpg" alt="Ajedrez artesanal realizado con huevos" loading="lazy" />
    </figure>
    <figure>
      <img src="${imageBase}/ajedreces-bambu-huevos-pasta-papel-03.jpg" alt="Segundo ajedrez artesanal realizado con huevos" loading="lazy" />
    </figure>
    <figure>
      <img src="${imageBase}/ajedreces-bambu-huevos-pasta-papel-04.jpg" alt="Ajedrez artesanal realizado con pasta de papel" loading="lazy" />
    </figure>
    <p>La combinación de bambú, huevos y pasta de papel abre un campo enorme para experimentar. Son ejemplos muy útiles para proyectos escolares donde importan tanto el proceso como el resultado final.</p>
    <p><strong>Aportados por:</strong> Miguel Ángel Vidal.</p>

    <h2>Ajedreces artesanales de María Eugenia Marioni</h2>
    <figure>
      <img src="${imageBase}/ajedreces-maria-eugenia-marioni-01.jpg" alt="Ajedrez artesanal de María Eugenia Marioni" loading="lazy" />
      <figcaption>Una muestra de ajedrez artesanal con fuerte presencia visual.</figcaption>
    </figure>
    <figure>
      <img src="${imageBase}/ajedreces-maria-eugenia-marioni-02.jpg" alt="Ajedrez medieval artesanal de María Eugenia Marioni" loading="lazy" />
    </figure>
    <figure>
      <img src="${imageBase}/ajedreces-maria-eugenia-marioni-03.jpg" alt="Ajedrez artesanal inspirado en charros y jarochos" loading="lazy" />
    </figure>
    <p>Estos conjuntos reúnen referencias históricas y populares en piezas de gran personalidad. Permiten trabajar identidad cultural, observación artística y lectura simbólica de las piezas de ajedrez.</p>
    <p><strong>Aportados por:</strong> María Eugenia Marioni.</p>
  `,
};
