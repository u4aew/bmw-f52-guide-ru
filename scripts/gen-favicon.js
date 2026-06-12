import sharp from 'sharp';
import toIco from 'to-ico';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const svgBuffer = readFileSync(join(root, 'public', 'favicon.svg'));

const sizes = [
  { name: 'favicon-16x16.png',   size: 16  },
  { name: 'favicon-32x32.png',   size: 32  },
  { name: 'favicon-48x48.png',   size: 48  },
  { name: 'favicon-96x96.png',   size: 96  },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192x192.png',    size: 192 },
  { name: 'icon-512x512.png',    size: 512 },
];

for (const { name, size } of sizes) {
  const out = join(root, 'public', name);
  await sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(out);
  console.log(`✓ ${name} (${size}×${size})`);
}

// Generate favicon.ico using to-ico (proper ICO format)
const ico16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
const ico32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
const icoBuffer = await toIco([ico16, ico32]);
writeFileSync(join(root, 'public', 'favicon.ico'), icoBuffer);
console.log('✓ favicon.ico (16+32)');

console.log('🎨 Favicons ready!');
