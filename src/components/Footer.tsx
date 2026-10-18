import { Link } from 'react-router-dom';
import { Phone, Zap, MapPin } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/data/business';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/serviceAreas';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400 text-navy-900">
                <Zap className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-base font-bold">Premium Electrical</span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-yellow-300">
                  Services LLC
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Electrical service for homes and businesses in the greater St. Louis, Missouri area.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-yellow-300"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Call {BUSINESS.phone}
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/90">Pages</h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/70 hover:text-yellow-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/90">Electrical Services</h2>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}-${BUSINESS.mainLocationSlug}`} className="text-sm text-white/70 hover:text-yellow-300 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-sm font-medium text-yellow-300 hover:text-yellow-200">
                  View all services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/90">Service Areas</h2>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_AREAS.slice(0, 7).map((a) => (
                <li key={a.slug}>
                  <Link to={`/electrician-${a.slug}`} className="text-sm text-white/70 hover:text-yellow-300 transition-colors">
                    {a.city}, {a.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/service-areas" className="text-sm font-medium text-yellow-300 hover:text-yellow-200">
                  View all areas
                </Link>
              </li>
            </ul>
            <p className="mt-5 flex items-start gap-2 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-yellow-300" />
              Serving the greater St. Louis, Missouri area
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Electrician serving {BUSINESS.serviceRegion}
          </p>
        </div>
      </div>
    </footer>
  );
}
