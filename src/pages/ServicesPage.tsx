import { Link } from 'react-router-dom';
import {
  Wrench, Search, LayoutGrid, Zap, Cable, Lightbulb, Plug, Fan, ShieldCheck, Hammer, Building2, ArrowRight, Phone, type LucideIcon,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallCTA';
import { BUSINESS } from '@/data/business';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/serviceAreas';
import { localBusinessSchema } from '@/data/schema';

const ICONS: Record<string, LucideIcon> = {
  Wrench, Search, LayoutGrid, Zap, Cable, Lightbulb, Plug, Fan, ShieldCheck, Hammer, Building2,
};

export default function ServicesPage() {
  return (
    <>
      <Seo
        title={`Electrical Services in ${BUSINESS.serviceRegion}`}
        description={`Residential and commercial electrical services from ${BUSINESS.name}: repairs, panel upgrades, wiring, lighting, outlets, ceiling fans, safety improvements, and more. Call ${BUSINESS.phone}.`}
        path="/services"
        image="https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        jsonLd={localBusinessSchema()}
      />

      <section className="bg-navy-900 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={[{ label: 'Home', to: '/' }, { label: 'Electrical Services' }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Electrical Services</h1>
            <p className="mt-5 text-lg text-white/85 leading-relaxed">
              {BUSINESS.name} provides residential and commercial electrical service throughout the greater St. Louis area. Browse the services below, then call to discuss your project.
            </p>
            <div className="mt-7">
              <CallButton label={`Call ${BUSINESS.phone}`} size="lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = ICONS[s.icon] ?? Wrench;
              return (
                <article key={s.slug} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-yellow-300">
                  <Link to={`/services/${s.slug}`} className="block overflow-hidden">
                    <img src={s.image} alt={s.alt} className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-yellow-400">
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <h2 className="text-lg font-bold text-navy-900">{s.name}</h2>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-1">{s.description}</p>
                    <Link to={`/services/${s.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-yellow-600">
                      {s.name} <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a href={BUSINESS.phoneHref} className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-yellow-300">
                      <Phone className="h-4 w-4" strokeWidth={2.5} /> Call About This Service
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-14 rounded-2xl bg-navy-900 p-8 lg:p-10 text-center">
            <h2 className="text-2xl font-bold text-white">Not sure which service you need?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">Call us and describe what you are experiencing. We can help you figure out the right service for your situation.</p>
            <div className="mt-6"><CallButton label={`Call ${BUSINESS.phone}`} size="lg" /></div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-navy-900">Electrical services by area</h2>
            <p className="mt-2 text-gray-600">See the services we offer in your city:</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {SERVICE_AREAS.map((a) => (
                <li key={a.slug}>
                  <Link to={`/service-areas/${a.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-sm text-navy-700 hover:border-yellow-400 hover:bg-yellow-50">
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
