export interface ServiceArea {
  slug: string;
  city: string;
  state: 'MO';
  blurb: string;
  localContext: string;
  faqs: { q: string; a: string }[];
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: 'st-louis-mo',
    city: 'St. Louis',
    state: 'MO',
    blurb:
      'Premium Electrical Services LLC provides electrical service to homes and businesses across the city of St. Louis, from historic brick neighborhoods to newer infill construction.',
    localContext:
      'St. Louis city homes range from turn-of-the-century row houses with knob-and-tube remnants to modern downtown lofts. Older housing stock often needs panel upgrades, grounded wiring, and updated circuits to safely support modern loads.',
    faqs: [
      {
        q: 'Do you service homes inside the city of St. Louis?',
        a: 'Yes. We work with homeowners and businesses throughout the city of St. Louis. Call us to discuss your specific location and electrical needs.',
      },
      {
        q: 'Can you help with older wiring in St. Louis city homes?',
        a: 'Many St. Louis city homes have aging wiring that no longer meets current demands. We can assess your system and discuss repair or upgrade options over the phone.',
      },
    ],
  },
  {
    slug: 'chesterfield-mo',
    city: 'Chesterfield',
    state: 'MO',
    blurb:
      'We provide electrical service to Chesterfield, including both established subdivisions and newer construction in the Chesterfield Valley.',
    localContext:
      'Chesterfield homes tend to be larger and may include higher-capacity panels, whole-home surge protection, and dedicated circuits for appliances, home offices, and EV charging.',
    faqs: [
      {
        q: 'Can you add circuits for a home office or EV charger in Chesterfield?',
        a: 'Yes. Many Chesterfield homeowners add dedicated circuits as their power needs grow. Call us to discuss your project.',
      },
      {
        q: 'Do you work in the Chesterfield Valley commercial buildings?',
        a: 'We provide commercial electrical service in the Chesterfield area. Call us to discuss your building and scope.',
      },
    ],
  },
  {
    slug: 'creve-coeur-mo',
    city: 'Creve Coeur',
    state: 'MO',
    blurb:
      'We offer residential and commercial electrical service in Creve Coeur, including established neighborhoods near Olive Boulevard and I-270.',
    localContext:
      'Creve Coeur has a mix of mid-century homes and medical/office commercial space. Older residential properties often benefit from panel inspections and grounded outlet additions.',
    faqs: [
      {
        q: 'Do you serve Creve Coeur businesses as well as homes?',
        a: 'Yes. We provide both residential and commercial electrical service in Creve Coeur. Call us to discuss your property.',
      },
    ],
  },
  {
    slug: 'maryland-heights-mo',
    city: 'Maryland Heights',
    state: 'MO',
    blurb:
      'We provide electrical service in Maryland Heights, covering residential areas and the commercial corridors near Dorsett and Page Avenue.',
    localContext:
      'Maryland Heights includes both residential subdivisions and hospitality/retail commercial property, which often need lighting maintenance and panel upgrades.',
    faqs: [
      {
        q: 'Can you help with lighting at a Maryland Heights commercial property?',
        a: 'Yes. We handle commercial lighting and electrical work in Maryland Heights. Call us to discuss your facility.',
      },
    ],
  },
  {
    slug: 'clayton-mo',
    city: 'Clayton',
    state: 'MO',
    blurb:
      'We provide electrical service in Clayton, including luxury residences, multi-family buildings, and downtown commercial space.',
    localContext:
      'Clayton properties include high-end homes and dense commercial corridors. Projects often involve lighting design, panel modernization, and compliance with local code requirements.',
    faqs: [
      {
        q: 'Can you work on multi-family electrical systems in Clayton?',
        a: 'Yes. We serve multi-family and commercial properties in Clayton. Call us to discuss your building.',
      },
    ],
  },
  {
    slug: 'kirkwood-mo',
    city: 'Kirkwood',
    state: 'MO',
    blurb:
      'We provide electrical service in Kirkwood, a community where we are locally based and familiar with the housing stock.',
    localContext:
      'Kirkwood homes include many early- and mid-20th-century properties. Common needs include panel upgrades, grounded wiring, lighting updates, and code-compliant outlet additions.',
    faqs: [
      {
        q: 'Are you local to Kirkwood?',
        a: 'Yes, we are based in the Kirkwood area. Call us to discuss service at your Kirkwood property.',
      },
      {
        q: 'Can you update wiring in older Kirkwood homes?',
        a: 'Many Kirkwood homes have older wiring. We can assess your system and discuss options. Call us to learn more.',
      },
    ],
  },
  {
    slug: 'webster-groves-mo',
    city: 'Webster Groves',
    state: 'MO',
    blurb:
      'We provide electrical service in Webster Groves, including the historic neighborhoods around Old Webster and Old Orchard.',
    localContext:
      'Webster Groves homes are largely older and may require grounded outlets, panel upgrades, and updated circuits to support modern appliance loads.',
    faqs: [
      {
        q: 'Do you service older homes in Webster Groves?',
        a: 'Yes. We regularly work on older Webster Groves homes. Call us to discuss your electrical project.',
      },
    ],
  },
  {
    slug: 'ballwin-mo',
    city: 'Ballwin',
    state: 'MO',
    blurb:
      'We provide electrical service in Ballwin, covering residential subdivisions and small commercial properties.',
    localContext:
      'Ballwin is largely residential and many homeowners add dedicated circuits, upgrade panels, or install new lighting as they remodel.',
    faqs: [
      {
        q: 'Can you help with a kitchen or bathroom remodel in Ballwin?',
        a: 'Yes. We handle electrical work for home renovations in Ballwin. Call us to discuss your remodel.',
      },
    ],
  },
  {
    slug: 'florissant-mo',
    city: 'Florissant',
    state: 'MO',
    blurb:
      'We provide electrical service in Florissant, including the long-established residential neighborhoods of north St. Louis County.',
    localContext:
      'Florissant has many mid-century homes. Common projects include panel upgrades, service repairs, lighting replacement, and adding grounded outlets.',
    faqs: [
      {
        q: 'Do you service Florissant homes needing panel upgrades?',
        a: 'Yes. We perform panel upgrades and electrical repairs in Florissant. Call us to discuss your home.',
      },
    ],
  },
  {
    slug: 'st-charles-mo',
    city: 'St. Charles',
    state: 'MO',
    blurb:
      'We provide electrical service in St. Charles, including historic Main Street properties and newer residential developments.',
    localContext:
      'St. Charles mixes historic properties near Main Street with newer construction. Older buildings often need wiring updates and panel modernization.',
    faqs: [
      {
        q: 'Can you work on historic properties in St. Charles?',
        a: 'Yes. We provide electrical service for historic and older homes in St. Charles. Call us to discuss your property.',
      },
    ],
  },
];
