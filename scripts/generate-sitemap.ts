import { writeFileSync } from 'node:fs';
import { BUSINESS } from '../src/data/business';
import { SERVICES } from '../src/data/services';
import { SERVICE_AREAS } from '../src/data/serviceAreas';

const base = BUSINESS.website.replace(/\/$/, '');
const today = new Date().toISOString().split('T')[0];

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: string;
}

const urlMap = new Map<string, SitemapEntry>();

function addUrl(path: string, priority: string, changefreq: 'daily' | 'weekly' | 'monthly' = 'weekly') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const loc = `${base}${cleanPath}`;
  // Only set if not already set, or overwrite if new priority is higher
  if (!urlMap.has(loc) || parseFloat(priority) > parseFloat(urlMap.get(loc)!.priority)) {
    urlMap.set(loc, { loc, lastmod: today, changefreq, priority });
  }
}

// 1. Core static pages
addUrl('/', '1.0', 'daily');
addUrl('/services', '0.9', 'weekly');
addUrl('/service-areas', '0.9', 'weekly');
addUrl('/reviews', '0.8', 'weekly');
addUrl('/about', '0.8', 'monthly');
addUrl('/contact', '0.8', 'monthly');

// 2. City Electrician Hub Pages: /electrician-{location-slug}
SERVICE_AREAS.forEach((area) => {
  addUrl(`/electrician-${area.slug}`, '0.8', 'weekly');
});

// 3. Primary Market Service Pages (Main Location: St. Louis, MO)
SERVICES.forEach((service) => {
  addUrl(`/${service.slug}-${BUSINESS.mainLocationSlug}`, '0.9', 'weekly');
});

// 4. All Service x Location Combinations: /{service-slug}-{location-slug}
SERVICES.forEach((service) => {
  SERVICE_AREAS.forEach((area) => {
    addUrl(`/${service.slug}-${area.slug}`, '0.7', 'monthly');
  });
});

const entries = Array.from(urlMap.values());

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml, 'utf8');
console.log(`Successfully generated sitemap with ${entries.length} unique URLs.`);
