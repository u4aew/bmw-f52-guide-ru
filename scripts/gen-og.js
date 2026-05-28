import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const W = 1200;
const H = 630;

// SVG overlay: left gradient + text
const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="left" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#0d1a35" stop-opacity="0.97"/>
      <stop offset="55%"  stop-color="#0d1a35" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#0d1a35" stop-opacity="0.15"/>
    </linearGradient>
    <linearGradient id="bottom" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="60%"  stop-color="#0d1a35" stop-opacity="0"/>
      <stop offset="100%" stop-color="#0d1a35" stop-opacity="0.7"/>
    </linearGradient>
  </defs>

  <!-- overlays -->
  <rect width="${W}" height="${H}" fill="url(#left)"/>
  <rect width="${W}" height="${H}" fill="url(#bottom)"/>

  <!-- eyebrow -->
  <text x="64" y="196"
    font-family="Arial, Helvetica, sans-serif"
    font-size="18" font-weight="600"
    fill="#4585E0" letter-spacing="3"
    text-anchor="start">BMW · 1 SERIES · SEDAN</text>

  <!-- main title -->
  <text x="62" y="295"
    font-family="Arial Black, Arial, Helvetica, sans-serif"
    font-size="88" font-weight="900"
    fill="#ffffff" letter-spacing="-3">BMW F52</text>

  <!-- subtitle -->
  <text x="66" y="350"
    font-family="Arial, Helvetica, sans-serif"
    font-size="32" font-weight="300"
    fill="rgba(255,255,255,0.75)">База знаний для владельцев</text>

  <!-- divider -->
  <rect x="64" y="386" width="48" height="3" rx="2" fill="#1C69D4"/>

  <!-- tags -->
  <text x="64" y="434"
    font-family="Arial, Helvetica, sans-serif"
    font-size="20" fill="rgba(255,255,255,0.5)">Характеристики · Двигатели · Обслуживание · Вопросы</text>

  <!-- url -->
  <text x="64" y="${H - 36}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="18" fill="rgba(255,255,255,0.35)" letter-spacing="0.5">bmw-f52-guide.pro</text>
</svg>`;

const svgBuf = Buffer.from(svg);

await sharp('src/assets/intro.png')
  .resize(W, H, { fit: 'cover', position: 'right' })
  .composite([{ input: svgBuf, top: 0, left: 0 }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(join(root, 'public', 'og-image.jpg'));

console.log(`✓ og-image.jpg (${W}×${H})`);
