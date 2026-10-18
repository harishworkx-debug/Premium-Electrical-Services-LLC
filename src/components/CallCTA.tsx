import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';

export function CallButton({
  label = `Call ${BUSINESS.phone}`,
  variant = 'primary',
  size = 'md',
  className = '',
}: {
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2';
  const sizes = {
    sm: 'px-3.5 py-2 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-3.5 text-lg',
  };
  const variants = {
    primary: 'bg-yellow-400 text-navy-900 shadow-md hover:bg-yellow-300 hover:shadow-lg',
    secondary: 'bg-white text-navy-900 shadow-md hover:bg-gray-100',
    outline: 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-navy-900',
  };
  return (
    <a
      href={BUSINESS.phoneHref}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
    >
      <Phone className={size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} strokeWidth={2.5} />
      {label}
    </a>
  );
}

export function MobileCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-900/95 backdrop-blur border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
      <div className="flex items-center justify-between px-4 py-3 safe-bottom">
        <div className="leading-tight">
          <p className="text-xs text-white/60">Call to discuss your project</p>
          <p className="text-sm font-bold text-yellow-300">{BUSINESS.phone}</p>
        </div>
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-2.5 text-base font-bold text-navy-900 shadow active:scale-95"
          aria-label={`Call ${BUSINESS.name}`}
        >
          <Phone className="h-4 w-4" strokeWidth={2.5} />
          Call Now
        </a>
      </div>
    </div>
  );
}
