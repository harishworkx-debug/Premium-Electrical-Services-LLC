export const BUSINESS = {
  name: 'Premium Electrical Services LLC',
  shortName: 'Premium Electrical',
  phone: '(913) 585-8044',
  phoneHref: 'tel:+19135858044',
  category: 'Electrician',
  website: 'https://www.premiumelectricalstl.com/',
  googleMaps: 'https://maps.app.goo.gl/FK2HL6eo3ZDSNVUZ9',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199412.43816734443!2d-90.47558102847034!3d38.65303399811293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8cda02380d9bd%3A0x58f055709672adcd!2sPremium%20Electrical%20Services%20LLC!5e0!3m2!1sen!2sin!4v1792301932097!5m2!1sen!2sin',
  serviceRegion: 'Greater St. Louis, Missouri',
  baseCity: 'St. Louis, MO',
  mainLocationSlug: 'st-louis-mo',
  emailNote:
    'For service, the fastest way to reach us is by phone. We do not provide email-based support.',
} as const;

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Electrical Services', to: '/services' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'About Us', to: '/about' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
] as const;

export const PHONE_CTA_VARIANTS = {
  callNow: 'Call Now',
  callService: 'Call for Electrical Service',
  callRepairs: 'Call About Electrical Repairs',
  callProject: 'Call to Discuss Your Electrical Project',
} as const;
