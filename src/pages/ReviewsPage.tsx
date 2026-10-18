import { useState } from 'react';
import { Star, ExternalLink, ThumbsUp, CheckCircle, MessageSquare, Filter } from 'lucide-react';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallCTA';
import { BUSINESS } from '@/data/business';
import { localBusinessSchema } from '@/data/schema';
import { REVIEWS, REVIEWS_SUMMARY } from '@/data/reviews';

export default function ReviewsPage() {
  const [selectedTopic, setSelectedTopic] = useState('all');

  const filteredReviews =
    selectedTopic === 'all'
      ? REVIEWS
      : REVIEWS.filter((r) => r.tags?.includes(selectedTopic));

  return (
    <>
      <Seo
        title={`Customer Reviews (5.0 Stars) | ${BUSINESS.shortName}`}
        description={`Read real customer reviews for ${BUSINESS.name}. 5.0 star rating with 65 Google reviews across greater St. Louis, MO. Call ${BUSINESS.phone}.`}
        path="/reviews"
        jsonLd={localBusinessSchema()}
      />

      {/* Header */}
      <section className="bg-navy-900 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs crumbs={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]} />
          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-3.5 py-1 text-sm font-semibold text-yellow-300 ring-1 ring-yellow-400/30">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              5.0 Rating · 65 Google Reviews
            </div>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Real Customer Reviews
            </h1>
            <p className="mt-5 text-lg text-white/85 leading-relaxed">
              Read verified feedback from St. Louis homeowners and business clients who hired Aaron and {BUSINESS.name} for lighting installations, panel upgrades, EV chargers, and electrical repairs.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={BUSINESS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-base font-bold text-navy-900 transition-colors hover:bg-yellow-300 shadow-md"
              >
                <Star className="h-5 w-5 fill-navy-900" strokeWidth={2.5} />
                Write a Review on Google
                <ExternalLink className="h-4 w-4" />
              </a>
              <CallButton label={`Call ${BUSINESS.phone}`} size="lg" variant="outline" />
            </div>
          </div>
        </div>
      </section>

      {/* Rating Scorecard Bar */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-2xl bg-gray-50 border border-gray-200 p-6 lg:p-8">
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center justify-center rounded-xl bg-navy-900 px-6 py-4 text-white shadow-sm">
                <span className="text-4xl lg:text-5xl font-black text-yellow-400">5.0</span>
                <div className="mt-1 flex text-yellow-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400" />
                  ))}
                </div>
                <span className="mt-1 text-xs text-white/70">Google Reviews</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-navy-900">100% Five-Star Satisfaction</h2>
                <p className="mt-1 text-sm text-gray-600">
                  Based on <strong>65 verified customer reviews</strong> on Google.
                </p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                  <span>✓ Verified Workmanship</span>
                  <span>✓ Licensed &amp; Insured</span>
                  <span>✓ St. Louis Area Local</span>
                </div>
              </div>
            </div>

            <a
              href={BUSINESS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy-900 px-5 py-2.5 text-sm font-bold text-navy-900 hover:bg-navy-900 hover:text-white transition-colors shrink-0"
            >
              <ExternalLink className="h-4 w-4" />
              View Google Business Profile
            </a>
          </div>

          {/* Topic Filters */}
          <div className="mt-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
              <Filter className="h-4 w-4 text-yellow-600" />
              <span>Sort &amp; Filter by Topic:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {REVIEWS_SUMMARY.topics.map((t) => {
                const isActive = selectedTopic === t.slug;
                return (
                  <button
                    key={t.slug}
                    onClick={() => setSelectedTopic(t.slug)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-navy-900 text-yellow-400 ring-2 ring-navy-900 shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {t.label} ({t.count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy-900">
              Showing {filteredReviews.length} Verified Reviews
            </h2>
            <a
              href={BUSINESS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-navy-700 underline hover:text-yellow-600 flex items-center gap-1"
            >
              Write a review on Google <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 font-bold text-yellow-400">
                        {rev.author.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-900 text-base">{rev.author}</h3>
                        {rev.reviewerRole && (
                          <p className="text-xs text-gray-500">{rev.reviewerRole}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{rev.date}</span>
                  </div>

                  {/* Stars */}
                  <div className="mt-3 flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-1 text-xs font-bold text-gray-700">5.0</span>
                  </div>

                  {/* Review Text */}
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed italic">
                    "{rev.text}"
                  </p>

                  {/* Positive feedback tags */}
                  {rev.positiveAttributes && rev.positiveAttributes.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Positive Mentions:
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {rev.positiveAttributes.map((attr) => (
                          <span
                            key={attr}
                            className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800 ring-1 ring-emerald-200"
                          >
                            <CheckCircle className="h-3 w-3 text-emerald-600" /> {attr}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Services rendered */}
                  {rev.services && rev.services.length > 0 && (
                    <div className="mt-3">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Services:
                      </p>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {rev.services.map((srv) => (
                          <span
                            key={srv}
                            className="rounded-md bg-navy-50 px-2 py-0.5 text-xs text-navy-800"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Owner Response if present */}
                  {rev.ownerResponse && (
                    <div className="mt-4 rounded-xl bg-gray-50 p-3 text-xs border-l-2 border-yellow-500 text-gray-600">
                      <span className="font-bold text-navy-900 block">Response from Aaron (Owner):</span>
                      <p className="mt-0.5">{rev.ownerResponse}</p>
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1 text-gray-500">
                    <ThumbsUp className="h-3.5 w-3.5" /> Verified Google Review
                  </span>
                  <a
                    href={BUSINESS.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-700 hover:text-yellow-600 font-semibold"
                  >
                    View on Google
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 rounded-2xl bg-navy-900 p-8 lg:p-12 text-center text-white">
            <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400/20 px-3 py-1 text-xs font-bold text-yellow-300">
              <Star className="h-3.5 w-3.5 fill-yellow-400" /> Join Our 65+ Satisfied Customers
            </span>
            <h2 className="mt-4 text-2xl lg:text-3xl font-bold">
              Ready for 5-Star Electrical Work at a Fair Price?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80 leading-relaxed text-sm lg:text-base">
              Call Aaron directly to discuss your project, get honest guidance, and receive competitive pricing with no hidden charges.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <CallButton label={`Call Now — ${BUSINESS.phone}`} size="lg" />
              <a
                href={BUSINESS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10"
              >
                <MessageSquare className="h-4 w-4" />
                Leave a Google Review
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
