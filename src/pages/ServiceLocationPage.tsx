import { Link, useParams, Navigate } from 'react-router-dom';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/serviceAreas';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallCTA';
import { BUSINESS } from '@/data/business';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/data/schema';
import { MapPin, ArrowRight } from 'lucide-react';

export default function ServiceLocationPage() {
  const params = useParams();
  const full = params.slug as string;

  const area = SERVICE_AREAS.find((a) => full.endsWith(`-${a.slug}`));
  const service = area ? SERVICES.find((s) => full === `${s.slug}-${area.slug}`) : undefined;

  if (!area || !service) {
    return <Navigate to="/404" replace />;
  }

  const path = `/${full}`;
  const title = `${service.name} in ${area.city}, ${area.state}`;
  const description = `${service.short} Call ${BUSINESS.name} at ${BUSINESS.phone} for ${service.name.toLowerCase()} in ${area.city}, ${area.state}.`;

  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Electrical Services', to: '/services' },
    { label: service.name, to: `/services/${service.slug}` },
    { label: `${area.city}, ${area.state}` },
  ];

  const jsonLd = [
    serviceSchema(service.slug, path),
    faqSchema(service.faqs),
    breadcrumbSchema([
      { label: 'Home', path: '/' },
      { label: 'Services', path: '/services' },
      { label: service.name, path: `/services/${service.slug}` },
      { label: `${area.city}, ${area.state}`, path },
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
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                {service.name} in {area.city}, {area.state}
              </h1>
              <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-2xl">
                Looking for {service.name.toLowerCase()} in {area.city}? {area.blurb} Call {BUSINESS.name} to discuss your project.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <CallButton label={`Call ${BUSINESS.phone}`} size="lg" />
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-base font-semibold text-white hover:bg-white/10"
                >
                  About {service.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <img
                src={service.image}
                alt={`${service.name} work in ${area.city}, ${area.state}`}
                className="h-64 w-full object-cover lg:h-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-navy-900">{service.name} in {area.city}</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">{service.intro}</p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6 lg:p-8 border border-gray-200">
            <h3 className="text-lg font-semibold text-navy-900">Local context for {area.city}</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">{area.localContext}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-navy-900">The problem we solve</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">{service.problem}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-navy-900">What we do</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">{service.work}</p>
          </div>

          <div className="rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-6">
            <h3 className="text-lg font-semibold text-navy-900">Things to consider</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">{service.considerations}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-navy-900">{service.name} in {area.city} — common questions</h3>
            <div className="mt-5 space-y-4">
              {service.faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-gray-200 bg-white p-5 open:shadow-md">
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-navy-900 list-none">
                    {f.q}
                    <span className="ml-4 text-yellow-500 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-navy-900 p-8 text-center">
            <h3 className="text-xl font-bold text-white">Need {service.name.toLowerCase()} in {area.city}?</h3>
            <p className="mt-2 text-white/80">Call us to discuss your project and schedule service.</p>
            <div className="mt-5">
              <CallButton label={`Call ${BUSINESS.phone}`} size="lg" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-navy-900">Related services in {area.city}</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.relatedSlugs.map((slug) => {
                const r = SERVICES.find((x) => x.slug === slug);
                if (!r) return null;
                return (
                  <li key={slug}>
                    <Link
                      to={`/${r.slug}-${area.slug}`}
                      className="group flex items-center justify-between rounded-lg border border-gray-200 p-4 hover:border-yellow-400 hover:shadow-md transition"
                    >
                      <span className="font-medium text-navy-900">{r.name} in {area.city}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-yellow-500" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-navy-900">{service.name} in nearby areas</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SERVICE_AREAS.filter((a) => a.slug !== area.slug).slice(0, 6).map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`/${service.slug}-${a.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3.5 py-1.5 text-sm text-navy-700 hover:border-yellow-400 hover:bg-yellow-50"
                  >
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
