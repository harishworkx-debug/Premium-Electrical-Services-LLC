import { useEffect } from 'react';
import { BUSINESS } from '@/data/business';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: object | object[];
}

function ensureLink(rel: string, attr: string, key: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"][${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  return el;
}

function ensureMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
  return el;
}

export default function Seo({ title, description, path, image, type = 'website', jsonLd }: SeoProps) {
  useEffect(() => {
    const url = `${BUSINESS.website.replace(/\/$/, '')}${path}`;
    const fullTitle = title.includes(BUSINESS.shortName) ? title : `${title} | ${BUSINESS.shortName}`;
    document.title = fullTitle;

    ensureMeta('description', description);
    ensureMeta('canonical-placeholder', '', 'name');
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    ensureMeta('og:title', fullTitle, 'property');
    ensureMeta('og:description', description, 'property');
    ensureMeta('og:url', url, 'property');
    ensureMeta('og:type', type, 'property');
    ensureMeta('og:site_name', BUSINESS.name, 'property');
    if (image) {
      ensureMeta('og:image', image, 'property');
    }
    ensureMeta('twitter:card', 'summary_large_image', 'name');
    if (image) ensureMeta('twitter:image', image, 'name');

    // structured data
    const id = 'page-jsonld';
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, path, image, type, jsonLd]);

  return null;
}
