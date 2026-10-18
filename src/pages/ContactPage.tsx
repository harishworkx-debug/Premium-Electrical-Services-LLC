import { Phone, MapPin, ExternalLink, Clock } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallCTA';
import { BUSINESS } from '@/data/business';
import { localBusinessSchema } from '@/data/schema';

export default function ContactPage() {
  const jsonLd = localBusinessSchema();
  return (
    <>
      <Seo
        title={`Contact ${BUSINESS.shortName}`}
        description={`Contact ${BUSINESS.name} by phone at ${BUSINESS.phone}. We serve the greater St. Louis, Missouri area. View our service area map and call to discuss your project.`}
        path="/contact"
        jsonLd={jsonLd}
      />

      <section className="bg-navy-900 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Contact Information</h1>
            <p className="mt-5 text-lg text-white/85 leading-relaxed">
              The fastest way to reach {BUSINESS.name} is by phone. We do not use contact forms, email support, chat, or callback requests. Call us to discuss your electrical project or repair.
            </p>
            <div className="mt-7"><CallButton label={`Call ${BUSINESS.phone}`} size="lg" /></div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-navy-900">
                    <Phone className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-navy-900">Phone</h2>
                    <p className="mt-1 text-gray-600 text-sm">Call us directly. This is the only contact method we use.</p>
                    <a href={BUSINESS.phoneHref} className="mt-3 inline-flex items-center gap-2 text-xl font-bold text-navy-900 hover:text-yellow-600">
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900 text-yellow-400">
                    <MapPin className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-navy-900">Service Area</h2>
                    <p className="mt-1 text-gray-600 text-sm">We serve the greater St. Louis, Missouri area and are based in Kirkwood, MO.</p>
                    <a
                      href={BUSINESS.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 font-semibold text-navy-900 hover:text-yellow-600"
                    >
                      Open Google Maps listing <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-navy-900 text-yellow-400">
                    <Clock className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-navy-900">How to reach us</h2>
                    <p className="mt-1 text-gray-600 text-sm">
                      We do not provide email support, chat, or online forms. Calling is the fastest and only way to get in touch about service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-navy-900 p-6 text-center">
                <h2 className="text-lg font-bold text-white">Call now to discuss your project</h2>
                <div className="mt-4"><CallButton label={`Call ${BUSINESS.phone}`} size="lg" /></div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24 self-start">
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
                <div className="p-4 border-b border-gray-100">
                  <h2 className="font-bold text-navy-900">Our service area on the map</h2>
                  <p className="text-xs text-gray-500 mt-1">Greater St. Louis, Missouri area</p>
                </div>
                <div className="map-responsive">
                  <iframe
                    title={`${BUSINESS.name} service area map`}
                    src={BUSINESS.mapsEmbed}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-[400px]"
                  />
                </div>
                <div className="p-4 border-t border-gray-100">
                  <a
                    href={BUSINESS.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-yellow-600"
                  >
                    Open in Google Maps <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
