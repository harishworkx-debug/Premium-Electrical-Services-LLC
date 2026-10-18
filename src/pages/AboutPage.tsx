import { Link } from 'react-router-dom';
import { Phone, MapPin, Zap, ShieldCheck, Wrench, Building2, ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallCTA';
import { BUSINESS } from '@/data/business';
import { localBusinessSchema } from '@/data/schema';

export default function AboutPage() {
  const jsonLd = localBusinessSchema();
  return (
    <>
      <Seo
        title={`About ${BUSINESS.shortName}`}
        description={`${BUSINESS.name} is an electrician serving the greater St. Louis, Missouri area with residential and commercial electrical service. Call ${BUSINESS.phone}.`}
        path="/about"
        image="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        jsonLd={jsonLd}
      />

      <section className="bg-navy-900 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">About {BUSINESS.name}</h1>
            <p className="mt-5 text-lg text-white/85 leading-relaxed">
              {BUSINESS.name} is an electrician serving the greater St. Louis, Missouri area. We handle residential and commercial electrical work, from small repairs to larger installation and upgrade projects.
            </p>
            <div className="mt-7"><CallButton label={`Call ${BUSINESS.phone}`} size="lg" /></div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200">
              <img
                src="https://images.pexels.com/photos/27928759/pexels-photo-27928759.jpeg?auto=compress&cs=tinysrgb&h=600&w=900"
                alt="Electrician working on an electrical panel"
                className="h-64 w-full object-cover lg:h-80"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy-900">How we work</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We keep things straightforward. You call us, we talk through what you are seeing or planning, and we help you understand the options. From there we can plan a visit, a repair, or a larger project.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We do not use contact forms or online scheduling. The fastest way to reach us is by phone.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-900">What we focus on</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {[
                { icon: Wrench, title: 'Repairs and troubleshooting', body: 'Diagnosing the real cause of electrical problems instead of just treating the symptom.' },
                { icon: ShieldCheck, title: 'Safety first', body: 'Code-compliant materials and methods on every repair and installation.' },
                { icon: Building2, title: 'Residential and commercial', body: 'Service for homes, offices, retail, restaurants, and light commercial properties.' },
                { icon: Zap, title: 'Modern upgrades', body: 'Panel upgrades, grounded wiring, surge protection, and circuits for modern loads.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-200 p-6 bg-white">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-yellow-400">
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6 lg:p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-navy-900">Where we are</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We are based in the Kirkwood, Missouri area and provide electrical service throughout greater St. Louis. If you are unsure whether we cover your location, call us with your address.
            </p>
            <div className="mt-4 flex items-center gap-2 text-navy-900">
              <MapPin className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">{BUSINESS.serviceRegion}</span>
            </div>
          </div>

          <div className="rounded-2xl bg-navy-900 p-8 text-center">
            <h2 className="text-xl font-bold text-white">Want to talk about your project?</h2>
            <p className="mt-2 text-white/80">Call us. We will help you figure out the next step.</p>
            <div className="mt-5"><CallButton label={`Call ${BUSINESS.phone}`} size="lg" /></div>
          </div>
        </div>
      </section>
    </>
  );
}
