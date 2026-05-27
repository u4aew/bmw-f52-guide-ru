import { readFileSync, writeFileSync, unlinkSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const dist = 'dist';

const files = readdirSync(dist).filter(f => /^sitemap-\d+\.xml$/.test(f));
const allUrls = [];

for (const file of files) {
  const content = readFileSync(join(dist, file), 'utf8');
  const urls = [...content.matchAll(/<url>[\s\S]*?<\/url>/g)].map(m => m[0]);
  allUrls.push(...urls);
  unlinkSync(join(dist, file));
  console.log(`  removed ${file} (${urls.length} URLs)`);
}

const indexPath = join(dist, 'sitemap-index.xml');
if (existsSync(indexPath)) {
  unlinkSync(indexPath);
  console.log('  removed sitemap-index.xml');
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.join('\n')}
</urlset>`;

writeFileSync(join(dist, 'sitemap.xml'), xml);
console.log(`✓ sitemap.xml — ${allUrls.length} URLs`);
