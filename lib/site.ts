/* Single source of truth for every piece of copy and contact detail
   on the site. To reuse this as a template for a different tailoring
   business, this is the only file that needs editing — no component
   files should need to change. Everything marked PLACEHOLDER gets
   replaced once the real details are available. */

export const site = {
  name: 'SEWW',
  role: 'Custom Clothing Studio',
  area: 'Kochi, Kerala',
  hours: 'Mon–Sat · 9:30am – 6pm',
  walkIns: 'Appointments & Walk-ins Welcome',

  whatsappNumber: '919605076089',
  phoneDisplay: '+91 96050 76089',
  whatsappMessage:
    'Hi SEWW! I would like to stitch a custom outfit.',

  url: 'https://seww.in',

  experienceYears: 15,
}

export const nav = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Gallery' },
]

export const hero = {
  badge: '✨ Custom Tailored • Curated Fabrics • Perfect Fit',

  headlineLine1: 'Custom Clothing',

  headlineAccent: 'Made',

  headlineEnd: 'Just for You.',

  subline:
    'Choose from our curated fabric collection or bring your own. From elegant blouses and churidars to frocks and nightwear, every outfit is tailored to your measurements with exceptional craftsmanship.',

  imageAlt:
    'Elegant custom tailored women’s clothing',

  primaryCta: 'Book Your Consultation →',

  primaryCtaMessage:
    'Hi SEWW! I would like to book a consultation for custom stitching.',

  secondaryCta: 'Explore Our Collection',
}

export const stats = [
  { value: '15+', label: 'Years of Craftsmanship' },
  { value: '2K+', label: 'Happy Clients' },
  { value: '5K+', label: 'Custom Pieces Created' },
  { value: '98%', label: 'Returning Customers' },
]

export const servicesSection = {
  label: 'Crafted for Every Occasion',
  heading: 'Custom Clothing Services',
  cta: 'Explore Services →',
}

export const services = [
  {
    name: 'Designer Blouses',
    desc: 'Bridal, party wear, casual and custom-designed blouses.',
    icon: 'sparkle',
  },
  {
    name: 'Churidars & Kurtis',
    desc: 'Tailored with curated fabrics and a flawless fit.',
    icon: 'shirt',
  },
  {
    name: 'Frocks',
    desc: 'Elegant custom frocks for every occasion.',
    icon: 'star',
  },
  {
    name: 'Nightwear',
    desc: 'Comfortable, breathable nighties and loungewear.',
    icon: 'moon',
  },
  {
    name: 'Alterations',
    desc: 'Precision alterations for the perfect fit.',
    icon: 'ruler',
  }
]

export const gallerySection = {
  label: 'Crafted With Care',
  heading: 'Our Signature Creations',
  viewAllCta: 'View Full Gallery →',
}

export const portfolioPieces = [
  { n: '01', name: 'Saree Blouse', desc: 'Bridal Embroidery', image: 'work-1.png' },
  { n: '02', name: 'Churidar', desc: 'Anarkali Set', image: 'work-2.png' },
  { n: '03', name: 'Nighty / Frock', desc: 'Soft Cotton Comfort', image: 'work-3.png' },
  { n: '04', name: 'Alteration', desc: 'Hand Finishing', image: 'work-4.png' },
] as const

export const about = {
  label: 'Our Story',

  heading: 'Crafting Confidence, One Stitch at a Time',

  copy:
    'At SEWW, we believe every woman deserves clothing that feels as beautiful as it looks. We combine carefully curated fabrics with expert tailoring to create garments that reflect your personality, fit perfectly, and are made to last.',

  points: [
    'Made-to-measure tailoring',
    'Curated premium fabrics',
    'Attention to every detail',
    'Beautiful finishing',
  ],

  cta: 'Discover SEWW →',
}

export const reviewsSection = {
  label: 'Loved by Women Across Kochi',
  heading: 'Real Stories. Beautiful Fits.',
}

/* PLACEHOLDER reviews — swap for real customer words once available.
   Keep reviewCount above in sync with reality. */
export const testimonials = [
  {
    quote:
      'She has been stitching my family’s clothes for as long as I can remember. I trust no one else.',
    name: 'A customer of twenty years',
  },
  {
    quote: 'The bridal blouse fit perfectly on the first try. Worth every day of the wait.',
    name: 'Wedding season customer',
  },
  {
    quote: 'Alterations done the same week, and it still looks tailor-made. Highly recommend.',
    name: 'Repeat customer',
  },
]

export const contactSection = {
  eyebrow: 'Ready for your perfect fit?',
  heading: "Let's Create Something Beautiful Together",
  whatsappCta: 'Book on WhatsApp',
  visitCta: 'Visit SEWW',
  floatCta: 'Book Now',
}

export const trustPoints = [
  {
    icon: 'fit',
    label: 'Made to Measure',
    sub: 'Tailored for you',
  },
  {
    icon: 'quality',
    label: 'Curated Fabrics',
    sub: 'Premium quality',
  },
  {
    icon: 'heart',
    label: 'Handcrafted',
    sub: 'Every stitch matters',
  },
  {
    icon: 'time',
    label: 'On-Time Delivery',
    sub: 'Always dependable',
  },
]

export const footerPoints = [
  { label: 'Easy Communication', sub: 'On WhatsApp' },
  { label: 'Secure & Private', sub: 'Your data is safe' },
  { label: 'Best Price Promise', sub: 'Quality at fair price' },
  { label: 'Satisfaction Guaranteed', sub: 'We care for you' },
]

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`
