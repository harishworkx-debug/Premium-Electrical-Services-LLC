import { BUSINESS } from '@/data/business';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/serviceAreas';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    url: BUSINESS.website,
    image: `${BUSINESS.website.replace(/\/$/, '')}/og-default.png`,
    areaServed: {
      '@type': 'GreaterGeoArea',
      name: BUSINESS.serviceRegion,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical Services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.description,
        },
      })),
    },
    sameAs: [BUSINESS.googleMaps],
  };
}

export function serviceSchema(serviceSlug: string, path: string) {
  const s = SERVICES.find((x) => x.slug === serviceSlug);
  if (!s) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: s.name,
    description: s.description,
    url: `${BUSINESS.website.replace(/\/$/, '')}${path}`,
    provider: {
      '@type': 'Electrician',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
    },
    areaServed: {
      '@type': 'GreaterGeoArea',
      name: BUSINESS.serviceRegion,
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(crumbs: { label: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: `${BUSINESS.website.replace(/\/$/, '')}${c.path}`,
    })),
  };
}

export function serviceLocationCombinationCount() {
  return SERVICES.length * SERVICE_AREAS.length;
}
