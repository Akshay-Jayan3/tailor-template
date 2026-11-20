

export const site = {
  name: "Sreeja Ladies Tailoring",
  role: "Custom women’s tailoring",
  area: "Kochi, Kerala",
  hours: "Mon–Sat · 9:30am – 6pm",
  walkIns: "Appointments & Walk-ins Welcome",

  whatsappNumber: "919605076089",
  phoneDisplay: "+91 96050 76089",

  whatsappMessage:
    "Hi Sreeja Ladies Tailoring! I’d love to discuss a custom outfit and fitting.",

  url: "https://seww.in",

  googleMapsUrl: "https://maps.app.goo.gl/oBsc5J4mhQH97kLa9",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6793297007157!2d76.35428297125462!3d9.96061526472653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08738c273c73c9%3A0xa9c8cbc8a3b2e184!2sSreeja's%20Ladies%20Tailoring!5e0!3m2!1sen!2sin!4v1787833994035!5m2!1sen!2sin",

  experienceYears: 15,
};

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  badge: "Made to measure · Ladies tailoring · Kochi",

  headlineLine1: "Made to fit you",

  headlineAccent: "beautifully",

  headlineEnd: ".",

  subline:
    "From custom blouses and churidars to occasionwear, Sreeja works with you on the design and fit before stitching begins.",

  imageAlt:
    "Festive Indian outfits displayed on mannequins",

  primaryCta: "Talk to Sreeja on WhatsApp",

  primaryCtaMessage:
    "Hi Sreeja, I’m interested in getting an outfit stitched. Could we talk about the style and fitting?",

  secondaryCta: "See services",
};

export const servicesSection = {
  label: "Services",
  heading: "Custom stitching for women’s wear in Kochi",
  description:
    "Bring your fabric or a reference. Sreeja can help you plan the style, fit, and finishing.",
  cta: "Explore services",
};

export const services = [
  {
    name: "Blouses",
    desc: "Blouses for sarees, celebrations, and everyday wear.",
    icon: "sparkle",
  },
  {
    name: "Churidars & Kurtis",
    desc: "Churidars, kurtis, and coordinated outfits made to your measurements.",
    icon: "shirt",
  },
  {
    name: "Frocks",
    desc: "Custom frocks, made to size.",
    icon: "kids",
  },
  {
    name: "Nightwear",
    desc: "Nighties and comfortable everyday wear.",
    icon: "moon",
  },
  {
    name: "Alterations",
    desc: "Adjustments to help your existing clothes fit better.",
    icon: "ruler",
  },
];

export const gallerySection = {
  label: "Made Here",
  heading: "A Look at Our Work",
  description:
    "A selection of pieces made and finished at Sreeja Ladies Tailoring.",
  viewAllCta: "View the gallery",
};

export const about = {
  label: "A little about Sreeja",

  heading: "Fittings are personal. Your clothes should be, too.",

  copy:
    "Sreeja takes time to understand how you want your clothes to fit. You can talk through the design, take measurements, and make adjustments so the finished piece feels right to you.",

  points: [
    "Measurements taken in person",
    "Fitting checked with you",
    "Bring your own fabric",
    "Delivery date agreed in advance",
  ],

  cta: "Explore our services",
};

export const howItWorks = {
  label: "The Process",

  heading: "Here’s how it works",

  steps: [
    {
      number: "01",
      title: "Tell Us What You Need",
      description:
        "Share your idea, reference image or the kind of outfit you have in mind.",
    },
    {
      number: "02",
      title: "Choose Your Fabric",
      description:
        "Choose from available fabrics or bring your own fabric for us to work with.",
    },
    {
      number: "03",
      title: "Get Measured",
      description:
        "We take the measurements needed for a comfortable, personalised fit.",
    },
    {
      number: "04",
      title: "We Stitch & Finish",
      description:
        "Your garment is carefully stitched and finished before collection.",
    },
  ],
};

export const reviewsSection = {
  label: "Loved by Our Customers",
  heading: "Kind words from customers",
  source: "Google Reviews",
};

export const testimonials = [
  {
    quote:
      "Had a great experience getting my blouse stitched here! She did a wonderful job, delivered it within just 24 hours, and the fit was absolutely perfect. Really impressed with the stitching, finishing, and quick service. Highly recommended!",
    name: "Adithya Nair",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "Sreeja's tailoring is excellent and very perfect creation. My family and neighbours like her stitching very well. The finishing is very good, and she stitches all types of dresses perfectly with suitable body matching. She manages customers in a friendly way.",
    name: "Surya Nikhil",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "Nice stitching. I have got what I expected!!! Stitched my blouse just in 2 days!!",
    name: "Snehapriya MS",
    rating: 5,
    source: "Google",
  },
  {
    quote: "Super stitching and timely delivery",
    name: "Rugmini Devi G",
    rating: 5,
    source: "Google",
  },
  {
    quote: "Greatly satisfied with the work.",
    name: "Bindu George",
    rating: 5,
    source: "Google",
  },

];

export const contactSection = {
  eyebrow: "Have an outfit in mind?",
  heading: "Let’s talk about the fit.",

  description:
    "Message Sreeja about what you’d like stitched. You can send a reference photo or ask about a fitting.",

  whatsappCta: "Talk to Sreeja on WhatsApp",

  visitCta: "Visit the Studio",

  floatCta: "Chat with Sreeja",
};

export const footerPoints = [
  {
    label: "Sreeja Ladies Tailoring",
    sub: "Custom women’s tailoring",
  },
  {
    label: "Studio",
    sub: "Kochi, Kerala",
  },
  {
    label: "Opening hours",
    sub: "Monday to Saturday · 9:30am–6pm",
  },
  {
    label: "Appointments & walk-ins",
    sub: "Message ahead to discuss your fitting",
  },
];

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
