import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Wrench,
  Search,
  LayoutGrid,
  Zap,
  Cable,
  Lightbulb,
  Plug,
  Fan,
  ShieldCheck,
  Hammer,
  Building2,
  MapPin,
  ArrowRight,
  Phone,
  Star,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  Clock,
  ShieldAlert,
  HelpCircle,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/serviceAreas';
import { BUSINESS } from '@/data/business';
import { REVIEWS_SUMMARY } from '@/data/reviews';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallCTA';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/data/schema';

const ICONS: Record<string, LucideIcon> = {
  Wrench,
  Search,
  LayoutGrid,
  Zap,
  Cable,
  Lightbulb,
  Plug,
  Fan,
  ShieldCheck,
  Hammer,
  Building2,
};

export default function ServiceLocationPage() {
  const params = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Parse exact /{service-slug}-{location-slug} format
  // Also supports fallback /:serviceSlug/:areaSlug if routed that way
  const serviceParam = params.serviceSlug as string | undefined;
  const areaParam = params.areaSlug as string | undefined;

  let service = serviceParam ? SERVICES.find((s) => s.slug === serviceParam) : undefined;
  let area = areaParam ? SERVICE_AREAS.find((a) => a.slug === areaParam) : undefined;

  if (!service || !area) {
    const full = (params.slug || '') as string;
    area = SERVICE_AREAS.find((a) => full.endsWith(`-${a.slug}`));
    service = area ? SERVICES.find((s) => full === `${s.slug}-${area.slug}`) : undefined;
  }

  if (!area || !service) {
    return <Navigate to="/404" replace />;
  }

  const Icon = ICONS[service.icon] ?? Wrench;

  // Exact format: /{service-slug}-{location-slug}
  const path = `/${service.slug}-${area.slug}`;
  const title = `${service.name} in ${area.city}, ${area.state} | ${BUSINESS.name}`;
  const description = `Need ${service.name.toLowerCase()} in ${area.city}, ${area.state}? Call ${BUSINESS.phone}. Licensed electrician providing code-compliant ${service.name.toLowerCase()}, repairs, and upgrades in ${area.city}.`;

  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Electrical Services', to: '/services' },
    { label: service.name, to: `/${service.slug}-${BUSINESS.mainLocationSlug}` },
    { label: `${area.city}, ${area.state}` },
  ];

  const allFaqs = [
    ...service.faqs,
    ...(area.faqs || []).map((f) => ({ q: f.q, a: f.a })),
  ];

  const jsonLd = [
    serviceSchema(service.slug, path),
    faqSchema(allFaqs),
    breadcrumbSchema([
      { label: 'Home', path: '/' },
      { label: 'Services', path: '/services' },
      { label: service.name, path: `/${service.slug}-${BUSINESS.mainLocationSlug}` },
      { label: `${area.city}, ${area.state}`, path },
    ]),
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <Seo title={title} description={description} path={path} image={service.image} jsonLd={jsonLd} />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-navy-900">
        <div className="absolute inset-0 -z-10">
          <img
            src={service.image}
            alt={service.alt}
            className="h-full w-full object-cover opacity-25"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/90 to-navy-900/60" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
          <Breadcrumbs crumbs={crumbs} />

          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-3.5 py-1.5 text-xs font-semibold text-yellow-300 ring-1 ring-yellow-400/30">
                <MapPin className="h-3.5 w-3.5 text-yellow-400" />
                Serving {area.city}, {area.state} &amp; Surrounding Areas
              </div>

              <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                {service.name} in {area.city}, {area.state}
              </h1>

              <p className="mt-5 text-lg text-white/85 leading-relaxed max-w-2xl">
                Looking for reliable {service.name.toLowerCase()} in {area.city}? {area.blurb} Call {BUSINESS.name} at {BUSINESS.phone} to discuss your electrical project directly with an experienced electrician.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <CallButton label={`Call Now — ${BUSINESS.phone}`} size="lg" />
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {service.name} <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/70">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-yellow-300" /> Code-Compliant Work
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-yellow-300" /> Fast Phone Consultation
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> 5.0 Google Rating ({REVIEWS_SUMMARY.reviewCount} Reviews)
                </span>
              </div>
            </div>

            {/* Quick Dispatch Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6 lg:p-8 backdrop-blur-md shadow-2xl">
                <div className="flex items-center gap-3 border-b border-white/15 pb-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-navy-900 shadow-sm">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-yellow-300">Local Electrician Dispatch</p>
                    <h2 className="text-lg font-bold text-white">{area.city}, MO Service</h2>
                  </div>
                </div>

                <p className="mt-4 text-sm text-white/80 leading-relaxed">
                  We don't use frustrating call centers or automated forms. Talk directly with an electrician about your {service.name.toLowerCase()} in {area.city}.
                </p>

                <div className="mt-5 rounded-xl bg-navy-950/80 p-4 border border-white/10">
                  <p className="text-xs text-white/60 uppercase tracking-wide">Call Directly For Prompt Service</p>
                  <p className="mt-1 text-2xl font-black text-yellow-400">{BUSINESS.phone}</p>
                  <p className="mt-1 text-xs text-white/70">Residential &amp; Commercial Electrical Help</p>
                </div>

                <a
                  href={BUSINESS.phoneHref}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 py-3 text-sm font-bold text-navy-900 transition-colors hover:bg-yellow-300 shadow-md"
                >
                  <Phone className="h-4 w-4" strokeWidth={2.5} />
                  Call {BUSINESS.phone} Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-1.5">
              <Phone className="h-5 w-5 text-yellow-500" />
              <p className="text-sm font-bold text-navy-900">Direct Phone Call</p>
              <p className="text-xs text-gray-500">Speak to an electrician right away</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <MapPin className="h-5 w-5 text-yellow-500" />
              <p className="text-sm font-bold text-navy-900">{area.city} Area</p>
              <p className="text-xs text-gray-500">Serving {area.city} &amp; St. Louis County</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <ShieldCheck className="h-5 w-5 text-yellow-500" />
              <p className="text-sm font-bold text-navy-900">NEC Code Compliant</p>
              <p className="text-xs text-gray-500">Highest electrical safety standards</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <p className="text-sm font-bold text-navy-900">5.0 Star Rating</p>
              <p className="text-xs text-gray-500">{REVIEWS_SUMMARY.reviewCount} Verified Google Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section id="overview" className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Overview & Local Context */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7 bg-white p-6 lg:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-yellow-600">Overview</p>
              <h2 className="mt-1 text-2xl font-bold text-navy-900">
                Professional {service.name} in {area.city}
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">{service.intro}</p>
              <div className="mt-6 border-t border-gray-100 pt-6">
                <h3 className="text-lg font-bold text-navy-900">The Problem We Solve</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{service.problem}</p>
              </div>
            </div>

            {/* Local Neighborhood Insights */}
            <div className="lg:col-span-5 rounded-2xl bg-navy-900 p-6 lg:p-8 text-white shadow-sm">
              <div className="flex items-center gap-2 text-yellow-400">
                <MapPin className="h-5 w-5" />
                <h3 className="text-base font-bold uppercase tracking-wider text-yellow-300">
                  {area.city} Property Insights
                </h3>
              </div>
              <p className="mt-4 text-sm text-white/80 leading-relaxed">{area.localContext}</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <Link
                  to={`/electrician-${area.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400 hover:text-yellow-300"
                >
                  View all services in {area.city} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Symptoms Checklist if available */}
          {service.symptoms && service.symptoms.length > 0 && (
            <div className="rounded-2xl bg-white p-6 lg:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <AlertTriangle className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy-900">Common Signs You Need {service.name}</h3>
                  <p className="text-xs text-gray-500">Notice any of these symptoms in your {area.city} property?</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.symptoms.map((symptom) => (
                  <div key={symptom} className="flex items-start gap-2.5 rounded-xl bg-gray-50 p-3.5 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-yellow-600 shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What We Do */}
          <div className="rounded-2xl bg-white p-6 lg:p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-navy-900">Our Approach to {service.name}</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">{service.work}</p>

            {/* Process Steps */}
            {service.process && service.process.length > 0 && (
              <div className="mt-8 border-t border-gray-100 pt-6">
                <h4 className="text-base font-bold text-navy-900">Step-by-Step Service Process</h4>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {service.process.map((p, idx) => (
                    <div key={p.title} className="rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                      <span className="inline-block rounded bg-navy-900 px-2 py-0.5 text-xs font-bold text-yellow-400">
                        Step 0{idx + 1}
                      </span>
                      <h5 className="mt-2 font-bold text-navy-900 text-sm">{p.title}</h5>
                      <p className="mt-1 text-xs text-gray-600 leading-relaxed">{p.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Benefits Grid */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="rounded-2xl bg-white p-6 lg:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-navy-900">Why Choose Professional {service.name}</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-gray-700 font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Safety & Code Considerations */}
          {service.considerations && (
            <div className="rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-6 lg:p-8">
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="h-5 w-5 text-yellow-700" />
                <h3 className="text-lg font-bold text-navy-900">Important Safety &amp; Code Considerations</h3>
              </div>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">{service.considerations}</p>
            </div>
          )}

          {/* FAQs Accordion */}
          <div className="rounded-2xl bg-white p-6 lg:p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2.5">
              <HelpCircle className="h-5 w-5 text-yellow-500" />
              <h3 className="text-xl font-bold text-navy-900">
                Frequently Asked Questions about {service.name} in {area.city}
              </h3>
            </div>
            <p className="mt-1 text-xs text-gray-500">Got questions? Here is what {area.city} clients frequently ask:</p>

            <div className="mt-6 space-y-3">
              {allFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={faq.q} className="rounded-xl border border-gray-200 overflow-hidden bg-white">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between p-4 text-left font-bold text-navy-900 hover:bg-gray-50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-gray-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-yellow-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mid-page Call Box */}
          <div className="rounded-2xl bg-navy-900 p-8 text-center text-white">
            <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400/20 px-3 py-1 text-xs font-bold text-yellow-300">
              <Star className="h-3.5 w-3.5 fill-yellow-400" /> 5.0 Rated St. Louis Electrician
            </span>
            <h3 className="mt-3 text-2xl font-bold">
              Need {service.name} in {area.city}, MO?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-white/80">
              Call {BUSINESS.name} at {BUSINESS.phone}. Describe your electrical situation and we will help you figure out the safest, most cost-effective next step.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <CallButton label={`Call ${BUSINESS.phone}`} size="lg" />
              <Link
                to={`/electrician-${area.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                All {area.city} Electrical Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Scalable Internal Linking Web: Other Services in This City */}
          <div className="rounded-2xl bg-white p-6 lg:p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-navy-900">
              Other Electrical Services Available in {area.city}, MO
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              We provide full-scope residential and commercial electrical work across {area.city}:
            </p>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => {
                const SvgIcon = ICONS[s.icon] ?? Wrench;
                return (
                  <li key={s.slug}>
                    {/* Exact format: /{service-slug}-{location-slug} */}
                    <Link
                      to={`/${s.slug}-${area.slug}`}
                      className="group flex items-center justify-between rounded-xl border border-gray-200 p-4 hover:border-yellow-400 hover:shadow-md transition bg-white"
                    >
                      <span className="flex items-center gap-2.5 font-medium text-navy-900 text-sm">
                        <SvgIcon className="h-4 w-4 text-yellow-500" />
                        {s.name} in {area.city}
                      </span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-yellow-500 transition-colors" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Scalable Internal Linking Web: This Service in Nearby Cities */}
          <div className="rounded-2xl bg-white p-6 lg:p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-navy-900">
              {service.name} in Other St. Louis Area Locations
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              Select your municipality to see local electrical information:
            </p>

            <ul className="mt-5 flex flex-wrap gap-2.5">
              {SERVICE_AREAS.filter((a) => a.slug !== area.slug).map((a) => (
                <li key={a.slug}>
                  {/* Exact format: /{service-slug}-{location-slug} */}
                  <Link
                    to={`/${service.slug}-${a.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy-800 hover:border-yellow-400 hover:bg-yellow-50 transition"
                  >
                    <MapPin className="h-3.5 w-3.5 text-yellow-500" />
                    {a.city}, {a.state}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-gray-100 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
              <Link to="/services" className="font-bold text-navy-900 hover:text-yellow-600 flex items-center gap-1">
                View All Electrical Services <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link to="/service-areas" className="font-bold text-navy-900 hover:text-yellow-600 flex items-center gap-1">
                View All Service Areas <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Emergency Banner */}
      <section className="bg-navy-900 py-12 text-white border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl lg:text-2xl font-bold">
            Experiencing an Urgent Electrical Issue in {area.city}?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/80">
            Burning smells, sparking switches, or sudden power loss? Turn off the breaker and call us immediately at {BUSINESS.phone}.
          </p>
          <div className="mt-6">
            <CallButton label={`Call ${BUSINESS.phone} Now`} size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
