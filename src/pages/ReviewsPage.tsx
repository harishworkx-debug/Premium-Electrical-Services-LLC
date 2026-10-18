import { Link } from 'react-router-dom';
import { Star, ExternalLink, Phone } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallCTA';
import { BUSINESS } from '@/data/business';
import { localBusinessSchema } from '@/data/schema';

export default function ReviewsPage() {
  return (
    <>
      <Seo
        title={`Reviews for ${BUSINESS.shortName}`}
        description={`Read customer reviews for ${BUSINESS.name} on Google. We do not republish reviews here, because the most accurate and current ratings live on our Google listing. Call ${BUSINESS.phone}.`}
        path="/reviews"
        jsonLd={localBusinessSchema()}
      />

      <section className="bg-navy-900 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Reviews</h1>
            <p className="mt-5 text-lg text-white/85 leading-relaxed">
              Customer reviews for {BUSINESS.name} are available on our Google listing. We point you there directly rather than republishing review text here, because Google is where the most accurate and up-to-date ratings and review content lives.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={BUSINESS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-base font-bold text-navy-900 transition-colors hover:bg-yellow-300"
              >
                <Star className="h-5 w-5" strokeWidth={2.5} />
                See Reviews on Google
              </a>
              <CallButton label={`Call ${BUSINESS.phone}`} size="lg" variant="outline" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="rounded-2xl border border-gray-200 p-6 lg:p-8 bg-white">
            <h2 className="text-xl font-bold text-navy-900">Why we point to Google for reviews</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Review ratings and counts change over time. Instead of displaying a number on this site that could go out of date, we link you straight to the source. On Google you can see the current rating, the total number of reviews, and read individual review text written by customers.
            </p>
            <a
              href={BUSINESS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-navy-900 hover:text-yellow-600"
            >
              Open our Google listing <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-2xl bg-gray-50 p-6 lg:p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-navy-900">Been a customer?</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              If we have done work for you, we appreciate honest reviews on Google. They help other St. Louis area homeowners and businesses decide whether to call us.
            </p>
            <a
              href={BUSINESS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
            >
              Leave a review on Google <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-2xl bg-navy-900 p-8 text-center">
            <h2 className="text-xl font-bold text-white">Ready to call?</h2>
            <p className="mt-2 text-white/80">We are happy to discuss your electrical project.</p>
            <div className="mt-5"><CallButton label={`Call ${BUSINESS.phone}`} size="lg" /></div>
          </div>
        </div>
      </section>
    </>
  );
}
