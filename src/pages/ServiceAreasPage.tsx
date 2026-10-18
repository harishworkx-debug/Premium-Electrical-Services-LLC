import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallCTA';
import { BUSINESS } from '@/data/business';
import { SERVICE_AREAS } from '@/data/serviceAreas';
import { SERVICES } from '@/data/services';
import { localBusinessSchema } from '@/data/schema';

export default function ServiceAreasPage() {
  return (
    <>
      <Seo
        title={`Electrical Service Areas in ${BUSINESS.serviceRegion}`}
        description={`Cities and communities served by ${BUSINESS.name} in the greater St. Louis, Missouri area. Call ${BUSINESS.phone} to confirm service at your location.`}
        path="/service-areas"
        image="https://images.pexels.com/photos/19155073/pexels-photo-19155073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        jsonLd={localBusinessSchema()}
      />

      <section className="bg-navy-900 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={[{ label: 'Home', to: '/' }, { label: 'Service Areas' }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Service Areas</h1>
            <p className="mt-5 text-lg text-white/85 leading-relaxed">
              {BUSINESS.name} provides electrical service across the greater St. Louis, Missouri area. Select your city below for local information and the services available there.
            </p>
            <div className="mt-7"><CallButton label={`Call ${BUSINESS.phone}`} size="lg" /></div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((a) => (
              <Link
                key={a.slug}
                to={`/electrician-${a.slug}`}
                className="group rounded-2xl bg-white p-6 ring-1 ring-gray-200 transition-all hover:ring-yellow-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-2 text-navy-900">
                  <MapPin className="h-5 w-5 text-yellow-500" />
                  <h2 className="text-lg font-bold">{a.city}, {a.state}</h2>
                </div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 group-hover:text-yellow-600">
                  Electrical service in {a.city} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-center">
            <h2 className="text-2xl font-bold text-white">Don&apos;t see your city listed?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">Call us with your address and we can confirm whether we service your area.</p>
            <div className="mt-6"><CallButton label={`Call ${BUSINESS.phone}`} size="lg" /></div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-navy-900">Browse services by area</h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden bg-white">
                <thead className="bg-gray-100 text-left text-navy-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Service \ Area</th>
                    {SERVICE_AREAS.slice(0, 5).map((a) => (
                      <th key={a.slug} className="px-4 py-3 font-semibold whitespace-nowrap">{a.city}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SERVICES.map((s) => (
                    <tr key={s.slug} className="border-t border-gray-100">
                      <td className="px-4 py-3 font-medium text-navy-900">{s.name}</td>
                      {SERVICE_AREAS.slice(0, 5).map((a) => (
                        <td key={a.slug} className="px-4 py-3">
                          <Link to={`/${s.slug}-${a.slug}`} className="text-navy-700 underline hover:text-yellow-600">
                            {a.city}
                          </Link>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-gray-500">Each link opens a service + area page with local details and a direct call CTA.</p>
          </div>
        </div>
      </section>
    </>
  );
}
