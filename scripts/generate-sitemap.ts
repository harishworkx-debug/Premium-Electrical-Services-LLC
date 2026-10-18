import { BUSINESS } from '../src/data/business';
import { SERVICES } from '../src/data/services';
import { SERVICE_AREAS } from '../src/data/serviceAreas';

const base = BUSINESS.website.replace(/\/$/, '');

const staticPaths = ['/', '/services', '/service-areas', '/about', '/reviews', '/contact'];

const today = new Date().toISOString().split('T')[0];

const urls: { loc: string; priority: string }[] = [];

staticPaths.forEach((p) =>
  urls.push({ loc: `${base}${p}`, priority: p === '/' ? '1.0' : '0.8' })
);

SERVICES.forEach((s) =>
  urls.push({ loc: `${base}/${s.slug}-${BUSINESS.mainLocationSlug}`, priority: '0.8' })
);

SERVICE_AREAS.forEach((a) =>
  urls.push({ loc: `${base}/electrician-${a.slug}`, priority: '0.7' })
);

SERVICES.forEach((s) => {
  SERVICE_AREAS.forEach((a) => {
    urls.push({ loc: `${base}/${s.slug}-${a.slug}`, priority: '0.6' });
  });
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>
`;

// Write to public/
import { writeFileSync } from 'node:fs';
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml, 'utf8');
console.log(`Wrote ${urls.length} URLs to public/sitemap.xml`);
