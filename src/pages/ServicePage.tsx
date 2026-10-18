import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Wrench, Search, LayoutGrid, Zap, Cable, Lightbulb, Plug, Fan, ShieldCheck, Hammer, Building2, ArrowRight, MapPin, type LucideIcon,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallCTA';
import { BUSINESS } from '@/data/business';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/serviceAreas';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/data/schema';

const ICONS: Record<string, LucideIcon> = {
  Wrench, Search, LayoutGrid, Zap, Cable, Lightbulb, Plug, Fan, ShieldCheck, Hammer, Building2,
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/404" replace />;

  const path = `/services/${service.slug}`;
  const Icon = ICONS[service.icon] ?? Wrench;
  const title = `${service.name} in ${BUSINESS.serviceRegion}`;
  const description = `${service.short} Call ${BUSINESS.phone} for ${service.name.toLowerCase()} in the St. Louis area.`;

  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Electrical Services', to: '/services' },
    { label: service.name },
  ];

  const jsonLd = [
    serviceSchema(service.slug, path),
    faqSchema(service.faqs),
    breadcrumbSchema([
      { label: 'Home', path: '/' },
      { label: 'Services', path: '/services' },
      { label: service.name, path },
    ]),
  ];

  return (
    <>
      <Seo title={title} description={description} path={path} image={service.image} jsonLd={jsonLd} />

      <section className="bg-navy-900 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-yellow-400 text-navy-900">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <p className="text-sm font-semibold uppercase tracking-wider text-yellow-300">{BUSINESS.serviceRegion}</p>
              </div>
              <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">{service.h1}</h1>
              <p className="mt-5 text-lg text-white/85 leading-relaxed max-w-2xl">{service.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <CallButton label={`Call ${BUSINESS.phone}`} size="lg" />
                <Link to="/services" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-base font-semibold text-white hover:bg-white/10">
                  All Services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <img src={service.image} alt={service.alt} className="h-64 w-full object-cover lg:h-80" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-navy-900">The electrical problem</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">{service.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy-900">What we do</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">{service.work}</p>
          </div>
          <div className="rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-6 lg:p-8">
            <h2 className="text-xl font-bold text-navy-900">Things to consider</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">{service.considerations}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900">{service.name} — common questions</h2>
            <div className="mt-5 space-y-4">
              {service.faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-gray-200 bg-white p-5 open:shadow-md">
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-navy-900 list-none">
                    {f.q}
                    <span className="ml-4 text-yellow-500 text-xl transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-navy-900 p-8 text-center">
            <h2 className="text-xl font-bold text-white">Call about {service.name.toLowerCase()}</h2>
            <p className="mt-2 text-white/80">Describe your situation and we will help you plan the next step.</p>
            <div className="mt-5"><CallButton label={`Call ${BUSINESS.phone}`} size="lg" /></div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">Related electrical services</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.relatedSlugs.map((rslug) => {
                const r = SERVICES.find((x) => x.slug === rslug);
                if (!r) return null;
                return (
                  <li key={rslug}>
                    <Link to={`/services/${r.slug}`} className="group flex items-center justify-between rounded-lg border border-gray-200 p-4 hover:border-yellow-400 hover:shadow-md transition">
                      <span className="font-medium text-navy-900">{r.name}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-yellow-500" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-900">{service.name} in your area</h2>
            <p className="mt-2 text-gray-600">Select your city for local information and service details:</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SERVICE_AREAS.map((a) => (
                <li key={a.slug}>
                  <Link to={`/${service.slug}-${a.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3.5 py-1.5 text-sm text-navy-700 hover:border-yellow-400 hover:bg-yellow-50">
                    <MapPin className="h-3.5 w-3.5 text-yellow-500" />
                    {a.city}, {a.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
