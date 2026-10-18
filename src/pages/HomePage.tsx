import { useState } from 'react';
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
  AlertTriangle,
  ChevronDown,
  Home,
  Briefcase,
  ShieldAlert,
  HelpCircle,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';
import Seo from '@/components/Seo';
import { CallButton } from '@/components/CallCTA';
import { BUSINESS } from '@/data/business';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/serviceAreas';
import { localBusinessSchema } from '@/data/schema';
import { REVIEWS, REVIEWS_SUMMARY } from '@/data/reviews';

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

const WARNING_SIGNS = [
  {
    title: 'Frequent Breaker Trips',
    description: 'If a breaker trips repeatedly when running ordinary appliances, the circuit is overloaded, shorting, or the breaker itself has weakened.',
    urgency: 'Medium',
  },
  {
    title: 'Flickering or Dimming Lights',
    description: 'Sudden light dips or fluttering when major appliances turn on indicate voltage drops or loose neutral connections in your main panel.',
    urgency: 'Medium',
  },
  {
    title: 'Warm or Discolored Outlets',
    description: 'Faceplates that feel warm or show black scorch marks indicate hazardous internal arcing and present an immediate fire hazard.',
    urgency: 'High',
  },
  {
    title: 'Burning Smell or Fishy Odor',
    description: 'A pungent plastic burning or unexplained fish-like odor near switches or breaker boxes points to melting wire insulation.',
    urgency: 'Immediate',
  },
  {
    title: 'Two-Prong Un-grounded Outlets',
    description: 'Older homes with 2-prong plugs lack equipment ground protection, leaving computers, TVs, and appliances vulnerable to surges.',
    urgency: 'Recommended',
  },
  {
    title: 'Buzzing or Humming at the Panel',
    description: 'Breaker panels should operate quietly. Buzzing, crackling, or sizzle sounds usually point to loose busbar connections or failing breakers.',
    urgency: 'High',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Direct Phone Consultation',
    description: 'Call us directly at 913-456-4208. You speak straight with an electrician who understands electrical systems, not an automated answering machine or ticketing queue.',
  },
  {
    step: '02',
    title: 'Safety Assessment & Diagnostics',
    description: 'We evaluate the issue, inspect circuits with precision diagnostic tools, and pinpoint the root cause rather than guessing or applying temporary band-aids.',
  },
  {
    step: '03',
    title: 'Code-Compliant Craftsmanship',
    description: 'Repairs, wiring, and panel installations are executed to current National Electrical Code (NEC) standards using high-grade copper wire and certified components.',
  },
  {
    step: '04',
    title: 'Full Load Testing & Verification',
    description: 'Before closing up, we test all affected circuits under real load conditions and ensure your space is left clean, safe, and fully energized.',
  },
];

const RESIDENTIAL_SERVICES = [
  'Electrical Panel Upgrades (100A to 200A)',
  'Circuit Breaker Replacement & Subpanels',
  'Dedicated Appliance & 240V Heavy Circuits',
  'EV Charger Circuit & Outlet Installation',
  'Recessed Can Lighting & Smart Switch Upgrades',
  'Ceiling Fan & Light Fixture Wiring',
  'GFCI / AFCI Outlet Safety Upgrades',
  'Whole-Home Surge Protection Installation',
];

const COMMERCIAL_SERVICES = [
  'Commercial Power Distribution & Panels',
  'Retail, Office & Tenant Improvement Wiring',
  'Commercial LED Retrofits & High-Bay Lighting',
  'Dedicated Equipment & Machinery Circuits',
  'Emergency Egress & Exit Sign Lighting',
  'Troubleshooting 3-Phase Commercial Loads',
  'Commercial Code Violation Corrections',
  'Electrical Inspections & Maintenance',
];

const FAQS = [
  {
    question: 'How quickly can an electrician respond to my call?',
    answer:
      'Because we operate as a direct-call service, you can reach an electrician immediately when you dial. We discuss your situation, assess urgency, and schedule an appointment right away. For urgent hazards like burning odors or total power loss, we prioritize your call.',
  },
  {
    question: 'Why do you take phone calls rather than online contact forms?',
    answer:
      'Electrical problems frequently involve safety hazards that cannot wait for someone to check an email inbox. A direct call lets us ask targeted diagnostic questions immediately (e.g., whether breakers are tripping, if there is a smell, or what devices were running) so we can provide immediate safety guidance.',
  },
  {
    question: 'How do I know if my electrical panel needs an upgrade or replacement?',
    answer:
      'Common signs include panels older than 25-30 years, obsolete fuse boxes, brands with known recall histories (such as Federal Pacific or Zinsco), breakers that fail to reset, or running out of physical slots when adding heat pumps, hot tubs, or EV charging stations.',
  },
  {
    question: 'Do you provide electrical services for commercial businesses in St. Louis?',
    answer:
      'Yes. In addition to residential homes, we provide electrical repair, lighting retrofits, tenant remodel wiring, and commercial circuit installations for offices, retail stores, restaurants, and light commercial properties across the St. Louis metropolitan area.',
  },
  {
    question: 'What parts of the Greater St. Louis area do you serve?',
    answer:
      'We are centrally based in Kirkwood, MO, and cover Kirkwood, Webster Groves, Chesterfield, Ballwin, Des Peres, Sunset Hills, Brentwood, Clayton, Ladue, Creve Coeur, Maryland Heights, and surrounding St. Louis County communities.',
  },
  {
    question: 'Are all repairs and panel installations completed to building code?',
    answer:
      'Absolutely. Every installation and repair complies with the current National Electrical Code (NEC) and local municipal requirements. We use heavy-duty, code-approved materials and ensure proper grounding, wire gauges, and breaker protection on every project.',
  },
];

export default function HomePage() {
  const jsonLd = localBusinessSchema();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/90 to-navy-900/60" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full bg-yellow-400/15 px-3.5 py-1.5 text-sm font-semibold text-yellow-300 ring-1 ring-yellow-400/30">
                <Zap className="h-4 w-4" strokeWidth={2.5} />
                Licensed &amp; Insured Electrician serving greater St. Louis, MO
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Reliable Electrical Services You Can Count On
              </h1>
              <p className="mt-6 text-lg text-white/85 leading-relaxed sm:text-xl">
                Need an experienced electrician in the St. Louis area? From troubleshooting urgent circuit failures to 200-amp panel upgrades and wiring, {BUSINESS.name} delivers safe, code-compliant craftsmanship.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <CallButton label={`Call Now — ${BUSINESS.phone}`} size="lg" />
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Explore All Services <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-yellow-300" /> Residential &amp; Commercial
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-yellow-300" /> Greater St. Louis, MO
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-yellow-300" /> NEC Code Compliant
                </span>
              </div>
            </div>

            {/* Quick Hero Callout Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6 lg:p-8 backdrop-blur-md shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Zap className="h-5 w-5" />
                    <span className="text-sm font-bold uppercase tracking-wider text-white">Direct Phone Dispatch</span>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
                    Live Answering
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-bold text-white">Have an Electrical Question or Repair?</h2>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  Skip the contact forms and waiting days for email replies. Talk directly with an electrician to diagnose symptoms, get advice, and plan your work.
                </p>
                <div className="mt-6 rounded-xl bg-navy-950/80 p-4 border border-white/10">
                  <p className="text-xs text-white/60 uppercase tracking-wide">Call Directly for Immediate Service</p>
                  <p className="mt-1 text-2xl font-black text-yellow-400">{BUSINESS.phone}</p>
                  <p className="mt-1 text-xs text-white/70">Serving Kirkwood, Chesterfield &amp; St. Louis Metro</p>
                </div>
                <a
                  href={BUSINESS.phoneHref}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 py-3 text-base font-bold text-navy-900 transition-colors hover:bg-yellow-300 shadow-md"
                >
                  <Phone className="h-5 w-5" strokeWidth={2.5} />
                  Call {BUSINESS.phone} Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600 ring-1 ring-yellow-200">
                <Phone className="h-6 w-6" strokeWidth={2} />
              </div>
              <p className="text-base font-bold text-navy-900">Direct Electrician Call</p>
              <p className="text-xs text-gray-500">Talk directly to an experienced professional</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600 ring-1 ring-yellow-200">
                <MapPin className="h-6 w-6" strokeWidth={2} />
              </div>
              <p className="text-base font-bold text-navy-900">Greater St. Louis</p>
              <p className="text-xs text-gray-500">Locally based in Kirkwood, Missouri</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600 ring-1 ring-yellow-200">
                <ShieldCheck className="h-6 w-6" strokeWidth={2} />
              </div>
              <p className="text-base font-bold text-navy-900">Code-Compliant Work</p>
              <p className="text-xs text-gray-500">Adhering strictly to NEC safety codes</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600 ring-1 ring-yellow-200">
                <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" strokeWidth={2} />
              </div>
              <p className="text-base font-bold text-navy-900">Google Reviews</p>
              <p className="text-xs text-gray-500">
                <a href={BUSINESS.googleMaps} target="_blank" rel="noopener noreferrer" className="text-navy-700 underline font-medium hover:text-yellow-600">
                  Read customer feedback on Google
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">Comprehensive Electrical Solutions</p>
              <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">Electrical Services We Provide</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                From simple outlet repairs and lighting upgrades to full electrical service panel replacements, we handle residential and commercial electrical needs across greater St. Louis.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 whitespace-nowrap text-base font-bold text-navy-900 hover:text-yellow-600"
            >
              View all services <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = ICONS[s.icon] ?? Wrench;
              return (
                <article
                  key={s.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-yellow-300"
                >
                  <Link to={`/${s.slug}-${BUSINESS.mainLocationSlug}`} className="block overflow-hidden relative">
                    <img
                      src={s.image}
                      alt={s.alt}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors" />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-yellow-400 shadow-sm">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <h3 className="text-lg font-bold text-navy-900">{s.name}</h3>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-1">{s.description}</p>
                    <div className="mt-5 flex items-center justify-between gap-2 border-t border-gray-100 pt-4">
                      <Link
                        to={`/${s.slug}-${BUSINESS.mainLocationSlug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-yellow-600"
                      >
                        {s.name} <ArrowRight className="h-4 w-4" />
                      </Link>
                      <a
                        href={BUSINESS.phoneHref}
                        className="inline-flex items-center gap-1.5 rounded-md bg-yellow-50 px-3 py-1.5 text-xs font-bold text-navy-900 hover:bg-yellow-400 transition-colors"
                      >
                        <Phone className="h-3.5 w-3.5 text-yellow-600" /> Call for this
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Residential vs. Commercial Solutions */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">Tailored Solutions</p>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              Residential &amp; Commercial Capabilities
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you are upgrading an older St. Louis family home or maintaining power systems for a business, we have the specialized equipment and technical knowledge to get it done safely.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Residential Card */}
            <div className="rounded-2xl border-2 border-navy-100 bg-navy-50/40 p-8 transition-all hover:border-yellow-400 hover:shadow-lg">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-yellow-400">
                  <Home className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-navy-900">Residential Electrical</h3>
                  <p className="text-sm text-gray-600">Modern comfort, capacity, and home safety</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Modern households put higher demands on electrical systems than ever before. We help homeowners upgrade outdated wiring, install dedicated heavy-appliance circuits, and eliminate fire hazards.
              </p>
              <ul className="mt-6 space-y-3">
                {RESIDENTIAL_SERVICES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy-900 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-navy-200/60 pt-6">
                <CallButton label="Call for Residential Service" size="md" className="w-full sm:w-auto" />
              </div>
            </div>

            {/* Commercial Card */}
            <div className="rounded-2xl border-2 border-navy-100 bg-white p-8 transition-all hover:border-yellow-400 hover:shadow-lg">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-yellow-400">
                  <Briefcase className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-navy-900">Commercial Electrical</h3>
                  <p className="text-sm text-gray-600">Minimizing downtime, maximizing reliability</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Electrical interruptions mean lost business and productivity. We provide swift diagnostics, dedicated equipment hookups, safety compliance inspections, and commercial facility upgrades.
              </p>
              <ul className="mt-6 space-y-3">
                {COMMERCIAL_SERVICES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy-900 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-gray-200 pt-6">
                <CallButton label="Call for Commercial Service" size="md" className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work: 4-Step Process */}
      <section className="py-16 lg:py-24 bg-navy-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-400">Straightforward Experience</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              How We Work: Simple, Transparent &amp; Direct
            </h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              We eliminated bureaucratic scheduling delays. When you have an electrical issue, you want answers quickly and work done right the first time.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:border-yellow-400/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-yellow-400">{step.step}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-300">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CallButton label={`Call To Discuss Your Project: ${BUSINESS.phone}`} size="lg" />
          </div>
        </div>
      </section>

      {/* Electrical Warning Signs / Safety Checklist */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">Electrical Safety Checklist</p>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              Warning Signs: When to Call an Electrician
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Electrical hazards are often hidden behind walls and inside panels. If you notice any of these symptoms in your home or facility, do not ignore them:
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WARNING_SIGNS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                    <AlertTriangle className="h-5 w-5" />
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                      item.urgency === 'Immediate'
                        ? 'bg-red-100 text-red-800'
                        : item.urgency === 'High'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {item.urgency} Priority
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Emergency Safety Alert Callout */}
          <div className="mt-10 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500 text-navy-950 font-bold">
                <ShieldAlert className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy-900">Smelling Smoke, Burning Plastic, or Seeing Sparks?</h3>
                <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                  Turn off power to the affected breaker or the main panel shutoff immediately if safe to do so. Call us right away for urgent troubleshooting guidance.
                </p>
              </div>
            </div>
            <CallButton label={`Call Now — ${BUSINESS.phone}`} size="lg" className="whitespace-nowrap shrink-0" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">Why Call Us</p>
              <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
                A Practical, Honest Approach to Electrical Help
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We believe in doing things cleanly and transparently. We explain the real cause of electrical issues in plain language and recommend the safest, most cost-effective path forward.
              </p>
              <ul className="mt-8 space-y-5">
                {[
                  {
                    icon: Phone,
                    title: 'Speak with a knowledgeable electrician',
                    body: 'Describe your electrical symptoms or ideas directly. We can often tell you whether it is an emergency and what steps make sense.',
                  },
                  {
                    icon: Clock,
                    title: 'Clear timing and scope expectations',
                    body: 'We communicate transparently regarding scope, materials, and schedules so you know exactly what will be completed.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Strict NEC Code compliance',
                    body: 'All electrical repairs, breakers, subpanels, and fixtures meet or exceed local municipal and National Electrical Code safety standards.',
                  },
                  {
                    icon: Hammer,
                    title: 'Clean, respectful service',
                    body: 'We treat your home or commercial facility with utmost respect, protecting surfaces and cleaning work areas when finished.',
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
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200">
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

      {/* Real Reviews & Trust */}
      <section className="py-16 lg:py-24 bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-1.5 text-sm font-semibold text-yellow-300 ring-1 ring-yellow-400/30">
            <Star className="h-4 w-4 fill-yellow-400" />
            5.0 Stars · {REVIEWS_SUMMARY.reviewCount} Verified Google Reviews
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Real Reviews From Real St. Louis Clients
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80 leading-relaxed">
            Every electrical job completed by Aaron and {BUSINESS.name} is backed by authentic customer satisfaction. Here is what local homeowners and facility managers say about our pricing, timeliness, and craftsmanship:
          </p>

          {/* Review Highlights Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {REVIEWS.slice(0, 6).map((rev) => (
              <div
                key={rev.id}
                className="flex flex-col justify-between rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:border-yellow-400/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 font-bold text-navy-900 text-sm">
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm">{rev.author}</h3>
                        {rev.reviewerRole && (
                          <p className="text-xs text-white/60">{rev.reviewerRole}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-white/50">{rev.date}</span>
                  </div>

                  <div className="mt-3 flex text-yellow-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="mt-3 text-sm text-white/80 leading-relaxed italic line-clamp-5">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  {rev.positiveAttributes && rev.positiveAttributes.length > 0 ? (
                    <span className="text-xs font-semibold text-yellow-300">
                      ✓ {rev.positiveAttributes.slice(0, 2).join(' · ')}
                    </span>
                  ) : (
                    <span className="text-xs text-white/60">Verified Google Review</span>
                  )}
                  <span className="text-xs text-white/50">Google</span>
                </div>
              </div>
            ))}
          </div>

          {/* Review CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/reviews"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-3.5 text-base font-bold text-navy-900 transition-colors hover:bg-yellow-300 shadow-md"
            >
              <Star className="h-5 w-5 fill-navy-900" />
              View All {REVIEWS_SUMMARY.reviewCount} Reviews &amp; Filter By Topic
            </Link>
            <a
              href={BUSINESS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10"
            >
              Write a Review on Google Maps
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">Answers to Common Inquiries</p>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Have questions regarding electrical repairs, costs, or safety? Here are answers to questions we hear most often.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl border border-gray-200 overflow-hidden transition-all bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-5 text-left font-bold text-navy-900 hover:bg-gray-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3 pr-4">
                      <HelpCircle className="h-5 w-5 text-yellow-500 shrink-0" />
                      <span className="text-base sm:text-lg">{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-yellow-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed text-sm sm:text-base border-t border-gray-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl bg-gray-50 border border-gray-200 p-6 text-center">
            <h3 className="font-bold text-navy-900">Have a specific question not listed here?</h3>
            <p className="mt-1 text-sm text-gray-600">Give us a call and we will be happy to assist you directly.</p>
            <div className="mt-4">
              <CallButton label={`Call ${BUSINESS.phone}`} size="md" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">Local Coverage</p>
            <h2 className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">Areas We Serve Across St. Louis</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Centrally based in Kirkwood, MO, {BUSINESS.name} proudly serves residential and commercial clients throughout the greater St. Louis metropolitan area.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_AREAS.map((a) => (
              <Link
                key={a.slug}
                to={`/electrician-${a.slug}`}
                className="group flex items-center justify-between rounded-xl bg-white p-5 ring-1 ring-gray-200 transition-all hover:ring-yellow-300 hover:shadow-md"
              >
                <span>
                  <span className="flex items-center gap-2 font-semibold text-navy-900">
                    <MapPin className="h-4 w-4 text-yellow-500" />
                    {a.city}, {a.state}
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">View local services</span>
                </span>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-yellow-500 transition-colors" />
              </Link>
            ))}
          </div>

          {/* Interactive Map Embed Preview */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-navy-900 text-lg">Locally Based in Kirkwood, Missouri</h3>
                <p className="text-sm text-gray-600">Providing responsive electrical services across all surrounding municipalities.</p>
              </div>
              <a
                href={BUSINESS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-yellow-600"
              >
                Open in Google Maps <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="h-72 w-full bg-gray-100">
              <iframe
                title="Premium Electrical Services Location Map"
                src={BUSINESS.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-yellow-600"
            >
              View detailed service areas directory <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-navy-900">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400/15 px-3 py-1 text-xs font-semibold text-yellow-300 ring-1 ring-yellow-400/30">
            <Zap className="h-3.5 w-3.5" />
            Fast Direct-Call Service
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Need an Electrician? Give Us a Call Today.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85 leading-relaxed">
            Whether you are facing an urgent electrical repair, planning a panel upgrade, or need commercial maintenance, {BUSINESS.name} is ready to help.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <CallButton label={`Call ${BUSINESS.phone}`} size="lg" className="text-xl px-8 py-4 shadow-xl" />
            <p className="text-sm text-white/60">Tap to call directly from your phone or mobile device</p>
          </div>
        </div>
      </section>
    </>
  );
}
