import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const outDir = path.join(root, 'public', 'images', 'og');
await fs.mkdir(outDir, { recursive: true });

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const wrapText = (text, maxChars) => {
  const words = text.split(/\s+/);
  const lines = [];
  let current = '';

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines.slice(0, 4);
};

const textBlock = (lines, { x, y, size, weight = 800, color = '#f8fafc', lineHeight = 1.12 }) =>
  lines
    .map(
      (line, index) =>
        `<text x="${x}" y="${y + index * size * lineHeight}" font-family="Inter, Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}">${escapeXml(line)}</text>`,
    )
    .join('');

const defaultOgSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#020617"/>
      <stop offset="0.55" stop-color="#0f172a"/>
      <stop offset="1" stop-color="#1d4ed8"/>
    </linearGradient>
    <radialGradient id="glow" cx="70%" cy="35%" r="65%">
      <stop offset="0" stop-color="#60a5fa" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#60a5fa" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <circle cx="1010" cy="110" r="170" fill="#38bdf8" opacity="0.08"/>
  <circle cx="250" cy="520" r="220" fill="#8b5cf6" opacity="0.10"/>
  <g transform="translate(825 100)">
    <rect x="0" y="0" width="245" height="245" rx="58" fill="#f8fafc" opacity="0.10"/>
    <text x="122" y="173" text-anchor="middle" font-size="156" font-family="Georgia, serif" fill="#f8fafc">♟</text>
  </g>
  <text x="82" y="120" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" letter-spacing="7" fill="#93c5fd">RED INTERNACIONAL</text>
  <text x="82" y="235" font-family="Inter, Arial, sans-serif" font-size="86" font-weight="900" fill="#ffffff">ajEdu</text>
  <text x="82" y="318" font-family="Inter, Arial, sans-serif" font-size="48" font-weight="800" fill="#bfdbfe">Ajedrez y Educación</text>
  <text x="82" y="400" font-family="Inter, Arial, sans-serif" font-size="31" font-weight="500" fill="#dbeafe">Recursos, experiencias y proyectos para llevar</text>
  <text x="82" y="443" font-family="Inter, Arial, sans-serif" font-size="31" font-weight="500" fill="#dbeafe">el ajedrez educativo al aula desde 2005.</text>
  <rect x="82" y="510" width="410" height="50" rx="25" fill="#2563eb"/>
  <text x="287" y="544" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="800" fill="#ffffff">redajedu.com</text>
</svg>`;

await sharp(Buffer.from(defaultOgSvg)).png({ quality: 92 }).toFile(path.join(outDir, 'ajedu.png'));
await sharp(Buffer.from(defaultOgSvg))
  .png({ quality: 92 })
  .toFile(path.join(root, 'public', 'images', 'og-ajedu.png'));

const articleImages = [
  {
    file: 'ajedreces-artesanales-y-tematicos.png',
    source: 'public/images/blog/ajedreces-artesanales/ajedrez-japones-damas-siglo-xix-01.webp',
    title: 'Ajedreces artesanales y temáticos: cuando el tablero se convierte en arte',
    kicker: 'RECURSOS AJEDU',
  },
  {
    file: 'ajedrez-hombres-de-musgo-bejar.png',
    source: 'public/images/blog/hombres-musgo-bejar/hombres-musgo-bejar-1.webp',
    title: 'Un ajedrez con Hombres de Musgo: cuando Béjar convierte su historia en tablero vivo',
    kicker: 'EXPERIENCIAS AJEDU',
  },
];

for (const item of articleImages) {
  const base = await sharp(path.join(root, item.source)).resize(1200, 630, { fit: 'cover' }).png().toBuffer();
  const lines = wrapText(item.title, 32);
  const overlay = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#020617" stop-opacity="0.92"/>
        <stop offset="0.68" stop-color="#020617" stop-opacity="0.50"/>
        <stop offset="1" stop-color="#020617" stop-opacity="0.12"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#shade)"/>
    <rect x="70" y="82" width="260" height="42" rx="21" fill="#2563eb"/>
    <text x="200" y="110" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="900" letter-spacing="3" fill="#ffffff">${escapeXml(item.kicker)}</text>
    ${textBlock(lines, { x: 70, y: 245, size: 58, lineHeight: 1.08 })}
    <text x="70" y="540" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="700" fill="#bfdbfe">redajedu.com · ajEdu</text>
  </svg>`;

  await sharp(base)
    .composite([{ input: Buffer.from(overlay), top: 0, left: 0 }])
    .png({ quality: 92 })
    .toFile(path.join(outDir, item.file));
}

console.log('Generated Open Graph images');
