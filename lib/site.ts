/* Single source of truth for every piece of copy and contact detail
   on the site. To reuse this as a template for a different tailoring
   business, this is the only file that needs editing — no component
   files should need to change. Everything marked PLACEHOLDER gets
   replaced once the real details are available. */

export const site = {
  name: 'Seww Fashions',
  tagline: 'By Amma',
  role: 'Tailor',
  area: 'Kochi, Kerala', // PLACEHOLDER — exact area pending
  hours: 'Mon–Sat · 9:30am – 6pm', // PLACEHOLDER
  walkIns: 'By appointment · Walk-ins welcome',

  /* wa.me requires country code + digits only, no spaces */
  whatsappNumber: '910000000000', // PLACEHOLDER
  phoneDisplay: '+91 00000 00000', // PLACEHOLDER
  whatsappMessage: 'Hello! I found your website and would like to ask about stitching.',

  /* PLACEHOLDER — set the real production domain once deployed.
     Everything that needs an absolute URL (metadataBase, sitemap,
     robots, JSON-LD) reads from this one place. */
  url: 'https://sewwfashions.com',

  experienceYears: 10,
  rating: 4.9,
  reviewCount: 128,
}

export const nav = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Gallery' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact Us' },
]

export const hero = {
  badge: 'Trusted by 2,000+ Happy Customers in Kochi ✦',
  headlineLine1: 'Tailoring That Fits',
  headlineAccent: 'You',
  headlineEnd: ', Perfectly.',
  subline:
    'From everyday blouses and churidars to bridal saree blouses and alterations — every piece is hand-finished to your exact measurements. Send your measurements on WhatsApp and hear back in minutes.',
  imageAlt: 'Bridal lehenga and blouse on a mannequin, measuring tape draped across',
  primaryCta: 'Get a Free Fitting Quote →',
  primaryCtaMessage: 'Hello! I would like to get a fitting quote for stitching.',
  secondaryCta: 'View Our Work',
}

export const stats = [
  { value: `${site.experienceYears}+`, label: 'Years Experience' },
  { value: '2K+', label: 'Happy Customers' },
  { value: '1.2K+', label: 'Outfits Delivered' },
  { value: '98%', label: 'Repeat Customers' },
]

export const servicesSection = {
  label: 'What we stitch',
  heading: 'Our Services',
  cta: 'View All Services →',
}

export const services = [
  {
    name: 'Blouse Stitching',
    desc: 'Designer, bridal, casual, padded & more.',
    icon: 'scissors',
  },
  {
    name: 'Churidar',
    desc: 'Salwar sets stitched to your fit, lining included.',
    icon: 'shirt',
  },
  {
    name: 'Saree Blouse',
    desc: 'Plain to bridal — lined, fitted, finished by hand.',
    icon: 'sparkle',
  },
  {
    name: 'Night Frock',
    desc: 'Soft, comfortable nightwear stitched to size.',
    icon: 'moon',
  },
  {
    name: 'Alteration',
    desc: 'Saree, blouse, dress, pant resizing & repairs.',
    icon: 'ruler',
  },
  {
    name: 'Kids Wear',
    desc: 'Frocks and outfits for kids, room to grow.',
    icon: 'star',
  },
]

export const gallerySection = {
  label: 'Our work speaks',
  heading: 'Recent Creations',
  viewAllCta: 'View Full Portfolio →',
}

export const portfolioPieces = [
  { n: '01', name: 'Saree Blouse', desc: 'Bridal Embroidery', image: 'work-1.png' },
  { n: '02', name: 'Churidar', desc: 'Anarkali Set', image: 'work-2.png' },
  { n: '03', name: 'Nighty / Frock', desc: 'Soft Cotton Comfort', image: 'work-3.png' },
  { n: '04', name: 'Alteration', desc: 'Hand Finishing', image: 'work-4.png' },
] as const

export const about = {
  label: 'About us',
  heading: 'Every Stitch Tells a Story',
  copy:
    "We believe tailoring is more than stitching — it's about understanding you, your style, and creating something that feels uniquely yours.",
  points: [
    'Personalized attention',
    'Finest quality fabrics',
    'Neat finishing & perfect fit',
    'Timely delivery',
  ],
  cta: 'Know More About Us →',
  workshopImageAlt: 'Inside the workshop',
  storefrontImageAlt: 'storefront',
}

export const reviewsSection = {
  label: 'What customers say',
  heading: 'Loved by Our Customers',
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
  eyebrow: 'Have a design in mind?',
  heading: "Let's bring it to life!",
  whatsappCta: 'Chat on WhatsApp',
  visitCta: 'Visit Our Studio',
  floatCta: 'Chat with us',
}

export const trustPoints = [
  { icon: 'fit', label: 'Perfect Fit', sub: 'Made for you' },
  { icon: 'quality', label: 'Premium Quality', sub: 'Finest fabrics' },
  { icon: 'time', label: 'On-time Delivery', sub: 'Always on time' },
  { icon: 'heart', label: 'Happy Customers', sub: 'Trusted by many' },
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
