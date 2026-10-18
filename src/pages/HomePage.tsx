import { Link } from 'react-router-dom';
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
  ArrowRight,
  Phone,
  MapPin,
  Star,
  Clock,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import Seo from '@/components/Seo';
import { CallButton } from '@/components/CallCTA';
import { BUSINESS } from '@/data/business';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/serviceAreas';
import { localBusinessSchema } from '@/data/schema';

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

const heroImage =
  'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400';
const aboutImage =
  'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=700&w=1000';

export default function HomePage() {
  const jsonLd = localBusinessSchema();

  return (
    <>
      <Seo
        title={`${BUSINESS.name} | Electrician in ${BUSINESS.serviceRegion}`}
        description={`Call ${BUSINESS.phone}. ${BUSINESS.name} provides residential and commercial electrical services in ${BUSINESS.serviceRegion}, including repairs, panel upgrades, lighting, and wiring.`}
        path="/"
        image={heroImage}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-900">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Electrician installing a circuit breaker panel"
            className="h-full w-full object-cover opacity-30"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/85 to-navy-900/40" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-yellow-400/15 px-3.5 py-1.5 text-sm font-semibold text-yellow-300 ring-1 ring-yellow-400/30">
              <Zap className="h-4 w-4" strokeWidth={2.5} />
              Electrician serving greater St. Louis, MO
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Electrical Services You Can Call On
            </h1>
            <p className="mt-6 text-lg text-white/85 leading-relaxed sm:text-xl">
              Looking for electrical service in the St. Louis area? Call {BUSINESS.name} to discuss your electrical project or repair needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <CallButton label={`Call Now — ${BUSINESS.phone}`} size="lg" />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Electrical Services <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-yellow-300" /> Residential &amp; commercial
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-yellow-300" /> Greater St. Louis, MO
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-1.5">
              <Phone className="h-6 w-6 text-yellow-500" strokeWidth={2} />
              <p className="text-sm font-semibold text-navy-900">Call-Only Service</p>
              <p className="text-xs text-gray-500">Talk to an electrician directly</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <MapPin className="h-6 w-6 text-yellow-500" strokeWidth={2} />
              <p className="text-sm font-semibold text-navy-900">St. Louis Area</p>
              <p className="text-xs text-gray-500">Locally based in Kirkwood, MO</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Wrench className="h-6 w-6 text-yellow-500" strokeWidth={2} />
              <p className="text-sm font-semibold text-navy-900">Repairs &amp; Installations</p>
              <p className="text-xs text-gray-500">Residential and commercial</p>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Star className="h-6 w-6 text-yellow-500" strokeWidth={2} />
              <p className="text-sm font-semibold text-navy-900">Reviews on Google</p>
              <p className="text-xs text-gray-500">
                <a href={BUSINESS.googleMaps} target="_blank" rel="noopener noreferrer" className="text-navy-700 underline hover:text-yellow-600">
                  See Google reviews
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">Electrical Services</p>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">What we can help you with</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From a single faulty outlet to a full panel upgrade, these are the electrical services we provide across the greater St. Louis area. Call us to discuss your specific needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = ICONS[s.icon] ?? Wrench;
              return (
                <article
                  key={s.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-yellow-300"
                >
                  <Link to={`/services/${s.slug}`} className="block overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.alt}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-yellow-400">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <h3 className="text-lg font-bold text-navy-900">{s.name}</h3>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-1">{s.description}</p>
                    <div className="mt-5 flex items-center justify-between gap-2">
                      <Link
                        to={`/services/${s.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-yellow-600"
                      >
                        {s.name} details <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <a
                      href={BUSINESS.phoneHref}
                      className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-yellow-300"
                    >
                      <Phone className="h-4 w-4" strokeWidth={2.5} />
                      Call About This Service
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">Why Call Us</p>
              <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">A straightforward way to get electrical help</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We keep the process simple: you call, we talk through what you are seeing or planning, and we help you figure out the right next step. No forms, no waiting on an email reply.
              </p>
              <ul className="mt-8 space-y-5">
                {[
                  {
                    icon: Phone,
                    title: 'Talk to an electrician by phone',
                    body: 'Describe your electrical problem or project directly. We can often tell you whether it is urgent and what options make sense.',
                  },
                  {
                    icon: Clock,
                    title: 'Plan service around your needs',
                    body: 'When you call, we discuss timing and scope so you know what to expect before any work begins.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Code-compliant work',
                    body: 'Repairs and installations are completed using code-compliant materials and methods.',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600 ring-1 ring-yellow-200">
                      <item.icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CallButton label={`Call ${BUSINESS.phone}`} size="lg" />
              </div>
            </div>
            <div className="order-1 lg:order-2 overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200">
              <img
                src={aboutImage}
                alt="Electrician working on a circuit breaker panel with colored wiring"
                className="h-72 w-full object-cover lg:h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="py-16 lg:py-24 bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-yellow-300">Reviews</p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Read what customers say on Google</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80 leading-relaxed">
            Customer reviews for {BUSINESS.name} are available on our Google listing. We do not curate or republish reviews here, because the most accurate and up-to-date ratings and review text live directly on Google.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={BUSINESS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-base font-bold text-navy-900 transition-colors hover:bg-yellow-300"
            >
              <Star className="h-5 w-5" strokeWidth={2.5} />
              See Reviews on Google
            </a>
            <Link
              to="/reviews"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              About Our Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Service areas preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">Service Areas</p>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">Where we provide electrical service</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We serve the greater St. Louis, Missouri area. Select your city to see local information and related services.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_AREAS.map((a) => (
              <Link
                key={a.slug}
                to={`/service-areas/${a.slug}`}
                className="group flex items-center justify-between rounded-xl bg-white p-5 ring-1 ring-gray-200 transition-all hover:ring-yellow-300 hover:shadow-md"
              >
                <span>
                  <span className="flex items-center gap-2 font-semibold text-navy-900">
                    <MapPin className="h-4 w-4 text-yellow-500" />
                    {a.city}, {a.state}
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">Electrical service area</span>
                </span>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-yellow-500" />
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-yellow-600"
            >
              View all service areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-navy-900">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Need Electrical Service? Give Us a Call.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85 leading-relaxed">
            Call {BUSINESS.name} to discuss your electrical needs.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <CallButton label={`Call ${BUSINESS.phone}`} size="lg" className="text-xl" />
            <p className="text-sm text-white/60">Click to call from your device</p>
          </div>
        </div>
      </section>
    </>
  );
}
