export const site = {
  name: "Aramya",
  legalName: "Aramya Villa",
  tagline: "Slow days by the Indian Ocean",
  description:
    "A six-suite boutique villa on the ocean's edge in Talpe, Galle. Private pool, sea-facing suites, and an unhurried southern Sri Lankan coastline.",
  url: "https://aramya-villa.vercel.app",
  address: {
    street: "148 Matara Road, Talpe",
    city: "Galle",
    postalCode: "80600",
    country: "Sri Lanka",
  },
  phone: "+94 91 228 4160",
  phoneHref: "+94912284160",
  whatsapp: "+94 77 693 4586",
  whatsappHref: "https://wa.me/94776934586",
  email: "stay@aramya.lk",
  coords: { lat: 6.0175, lng: 80.2711 },
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook",  href: "https://facebook.com" },
    { label: "TripAdvisor", href: "https://tripadvisor.com" },
  ],
} as const;

export const navLinks = [
  { label: "Suites",      href: "/#suites" },
  { label: "Dining",      href: "/#dining" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Gallery",     href: "/#gallery" },
  { label: "Journal",     href: "/#testimonials" },
] as const;