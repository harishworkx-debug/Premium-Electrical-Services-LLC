import { Link, useParams, Navigate } from 'react-router-dom';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallCTA';
import { BUSINESS } from '@/data/business';
import { SERVICE_AREAS } from '@/data/serviceAreas';
import { SERVICES } from '@/data/services';
import { faqSchema, breadcrumbSchema } from '@/data/schema';

export default function ServiceAreaPage() {
  const { slug } = useParams();
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  if (!area) return <Navigate to="/404" replace />;

  const path = `/service-areas/${area.slug}`;
  const title = `Electrician in ${area.city}, ${area.state} | ${BUSINESS.shortName}`;
  const description = `Electrical service in ${area.city}, ${area.state}. ${area.blurb} Call ${BUSINESS.phone} to discuss service at your ${area.city} property.`;

  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Service Areas', to: '/service-areas' },
    { label: `${area.city}, ${area.state}` },
  ];

  const jsonLd = [
    faqSchema(area.faqs),
    breadcrumbSchema([
      { label: 'Home', path: '/' },
      { label: 'Service Areas', path: '/service-areas' },
      { label: `${area.city}, ${area.state}`, path },
    ]),
  ];

  return (
    <>
      <Seo title={title} description={description} path={path} jsonLd={jsonLd} />

      <section className="relative isolate overflow-hidden bg-navy-900">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.pexels.com/photos/34178478/pexels-photo-34178478.jpeg?auto=compress&cs=tinysrgb&h=800&w=1400"
            alt={`St. Louis area including ${area.city}, ${area.state}`}
            className="h-full w-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/85 to-navy-900/50" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
          <Breadcrumbs crumbs={crumbs} />
          <div className="mt-6 max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-yellow-400/15 px-3.5 py-1.5 text-sm font-semibold text-yellow-300 ring-1 ring-yellow-400/30">
              <MapPin className="h-4 w-4" strokeWidth={2.5} /> {area.city}, {area.state}
            </p>
            <h1 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
              Electrician in {area.city}, {area.state}
            </h1>
            <p className="mt-5 text-lg text-white/85 leading-relaxed">{area.blurb}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CallButton label={`Call ${BUSINESS.phone}`} size="lg" />
              <Link to="/services" className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-base font-semibold text-white hover:bg-white/10">
                Our Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="rounded-2xl bg-gray-50 p-6 lg:p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-navy-900">About {area.city} properties</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">{area.localContext}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900">Electrical services in {area.city}</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              The services below are available in {area.city}. Each link opens a page with details specific to that service in {area.city}.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}-${area.slug}`}
                    className="group flex items-center justify-between rounded-lg border border-gray-200 p-4 hover:border-yellow-400 hover:shadow-md transition"
                  >
                    <span className="font-medium text-navy-900">{s.name} in {area.city}</span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-yellow-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900">{area.city} — common questions</h2>
            <div className="mt-5 space-y-4">
              {area.faqs.map((f) => (
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
            <h2 className="text-xl font-bold text-white">Need an electrician in {area.city}?</h2>
            <p className="mt-2 text-white/80">Call us to discuss your {area.city} property and schedule service.</p>
            <div className="mt-5"><CallButton label={`Call ${BUSINESS.phone}`} size="lg" /></div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-navy-900">Other service areas</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SERVICE_AREAS.filter((a) => a.slug !== area.slug).map((a) => (
                <li key={a.slug}>
                  <Link to={`/service-areas/${a.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3.5 py-1.5 text-sm text-navy-700 hover:border-yellow-400 hover:bg-yellow-50">
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
