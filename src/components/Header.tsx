import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Phone, Menu, X, Zap, ChevronDown, MapPin } from 'lucide-react';
import { BUSINESS, NAV_LINKS } from '@/data/business';
import { SERVICES } from '@/data/services';
import { SERVICE_AREAS } from '@/data/serviceAreas';

interface HeaderProps {
  variant?: 'home' | 'solid';
}

// Links that should render as a dropdown
const DROPDOWN_KEYS = ['/services', '/service-areas'] as const;
type DropdownKey = (typeof DROPDOWN_KEYS)[number];

function isDropdownKey(to: string): to is DropdownKey {
  return (DROPDOWN_KEYS as readonly string[]).includes(to);
}

export default function Header({ variant = 'home' }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = variant === 'home';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  const solid = !isHome || scrolled || mobileOpen;

  const isPathActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname === to || location.pathname.startsWith(to + '/');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? 'bg-navy-900/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Premium Electrical Services LLC home">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400 text-navy-900 shadow-md transition-transform group-hover:scale-105">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-base font-bold tracking-tight text-white lg:text-lg">Premium Electrical</span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-yellow-300">Services LLC</span>
            </span>
          </Link>

          {/* Desktop nav with dropdowns */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const active = isPathActive(link.to);
              if (isDropdownKey(link.to)) {
                const items =
                  link.to === '/services'
                    ? SERVICES.map((s) => ({ label: s.name, to: `/services/${s.slug}` }))
                    : SERVICE_AREAS.map((a) => ({ label: `${a.city}, ${a.state}`, to: `/service-areas/${a.slug}` }));
                return (
                  <div key={link.to} className="group/dropdown relative">
                    <Link
                      to={link.to}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        active ? 'text-yellow-300' : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover/dropdown:rotate-180" />
                    </Link>
                    {/* Dropdown panel */}
                    <div
                      className="invisible absolute left-0 top-full z-50 mt-1 w-64 origin-top-left translate-y-1 opacity-0 transition-all duration-150 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 group-hover/dropdown:opacity-100"
                      role="menu"
                    >
                      <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-800 shadow-2xl ring-1 ring-black/5">
                        <ul className="max-h-[70vh] overflow-y-auto py-2">
                          {items.map((item) => (
                            <li key={item.to}>
                              <Link
                                to={item.to}
                                className="block px-4 py-2 text-sm text-white/80 transition-colors hover:bg-yellow-400/10 hover:text-yellow-300"
                                role="menuitem"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                          <li className="border-t border-white/10 mt-1 pt-1">
                            <Link
                              to={link.to}
                              className="block px-4 py-2 text-sm font-semibold text-yellow-300 transition-colors hover:bg-yellow-400/10"
                              role="menuitem"
                            >
                              View all {link.to === '/services' ? 'services' : 'service areas'}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    active ? 'text-yellow-300' : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2.5 text-sm font-bold text-navy-900 shadow-md transition-all hover:bg-yellow-300 hover:shadow-lg active:scale-95"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              {BUSINESS.phone}
            </a>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu with accordions */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-navy-900 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="mx-auto max-w-7xl px-4 py-3 space-y-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => {
              const active = isPathActive(link.to);
              if (isDropdownKey(link.to)) {
                const expanded = mobileExpanded === link.to;
                const items =
                  link.to === '/services'
                    ? SERVICES.map((s) => ({ label: s.name, to: `/services/${s.slug}` }))
                    : SERVICE_AREAS.map((a) => ({ label: `${a.city}, ${a.state}`, to: `/service-areas/${a.slug}` }));
                return (
                  <div key={link.to} className="rounded-md overflow-hidden">
                    <div className="flex items-stretch">
                      <Link
                        to={link.to}
                        className={`flex-1 px-3 py-2.5 text-base font-medium ${
                          active ? 'text-yellow-300' : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        className="px-3 text-white/70 hover:text-white"
                        aria-label={expanded ? `Collapse ${link.label}` : `Expand ${link.label}`}
                        aria-expanded={expanded}
                        onClick={() => setMobileExpanded((v) => (v === link.to ? null : link.to))}
                      >
                        <ChevronDown className={`h-5 w-5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    {expanded && (
                      <ul className="pb-1 pl-3 space-y-0.5">
                        {items.map((item) => (
                          <li key={item.to}>
                            <Link
                              to={item.to}
                              className="block rounded-md px-3 py-2 text-sm text-white/70 hover:text-yellow-300 hover:bg-white/5"
                            >
                              {link.to === '/service-areas' && (
                                <MapPin className="inline h-3.5 w-3.5 mr-1.5 text-yellow-400/70" />
                              )}
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block rounded-md px-3 py-2.5 text-base font-medium ${
                    active ? 'text-yellow-300 bg-white/5' : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={BUSINESS.phoneHref}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-4 py-3 text-base font-bold text-navy-900 shadow"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              Call {BUSINESS.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
