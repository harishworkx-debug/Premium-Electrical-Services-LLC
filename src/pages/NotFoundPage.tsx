import { Link } from 'react-router-dom';
import { Phone, Home, ArrowLeft } from 'lucide-react';
import Seo from '@/components/Seo';
import { CallButton } from '@/components/CallCTA';
import { BUSINESS } from '@/data/business';

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you were looking for could not be found. Call Premium Electrical Services LLC or return to the home page."
        path="/404"
      />
      <section className="bg-navy-900 min-h-screen flex items-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-32 text-center">
          <p className="text-6xl font-bold text-yellow-400">404</p>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Page Not Found</h1>
          <p className="mt-4 text-white/80 leading-relaxed">
            The page you were looking for may have moved or no longer exists. You can return to the home page or call us directly to discuss your electrical needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-5 py-3 text-base font-semibold text-white hover:bg-white/10"
            >
              <Home className="h-4 w-4" /> Back to Home
            </Link>
            <CallButton label={`Call ${BUSINESS.phone}`} size="lg" />
          </div>
        </div>
      </section>
    </>
  );
}
