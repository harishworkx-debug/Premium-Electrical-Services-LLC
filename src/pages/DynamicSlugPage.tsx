import { useParams } from 'react-router-dom';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/serviceAreas';
import ServiceAreaPage from '@/pages/ServiceAreaPage';
import ServiceLocationPage from '@/pages/ServiceLocationPage';
import ServicePage from '@/pages/ServicePage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function DynamicSlugPage() {
  const params = useParams();
  const slug = (params.slug || '') as string;

  if (!slug) {
    return <NotFoundPage />;
  }

  // 1. Check if it's an electrician city hub page: /electrician-{location-slug}
  if (slug.startsWith('electrician-')) {
    const areaSlug = slug.replace(/^electrician-/, '');
    const isArea = SERVICE_AREAS.some((a) => a.slug === areaSlug);
    if (isArea) {
      return <ServiceAreaPage />;
    }
  }

  // 2. Check if it's a direct city slug: /{location-slug}
  if (SERVICE_AREAS.some((a) => a.slug === slug)) {
    return <ServiceAreaPage />;
  }

  // 3. Check if it's an exact service-location page: /{service-slug}-{location-slug}
  const sortedAreas = [...SERVICE_AREAS].sort((a, b) => b.slug.length - a.slug.length);
  const area = sortedAreas.find((a) => slug.endsWith(`-${a.slug}`));
  if (area) {
    const service = SERVICES.find((s) => slug === `${s.slug}-${area.slug}`);
    if (service) {
      return <ServiceLocationPage />;
    }
  }

  // 4. Check if it's a standalone service slug: /{service-slug}
  if (SERVICES.some((s) => s.slug === slug)) {
    return <ServicePage />;
  }

  // Otherwise, return 404
  return <NotFoundPage />;
}
