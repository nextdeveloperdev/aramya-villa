import { images, type Img } from "@/lib/images";

/* ─────────────  SUITES  ───────────── */

export type Suite = {
  slug: string;
  name: string;
  tagline: string;
  sleeps: number;
  size: string;
  bed: string;
  outlook: string;
  rate: number;
  intro: string;
  detail: string;
  features: string[];
  image: Img;
};

export const suites: Suite[] = [
  {
    slug: "ocean-suite",
    name: "Ocean Suite",
    tagline: "First light on the water",
    sleeps: 2,
    size: "42 m²",
    bed: "King",
    outlook: "Direct sea view",
    rate: 210,
    intro:
      "Our most requested room, and the only one where you can watch the sunrise without leaving the bed.",
    detail:
      "Full-width doors fold back onto a private terrace fourteen metres from the water. The bed sits square to the opening, so the horizon is the first thing you see. Mornings here are loud with surf and mynah birds; by ten the breeze has usually settled.",
    features: [
      "Folding doors to private terrace",
      "Outdoor rain shower",
      "Teak writing desk",
      "Sea-facing daybed",
    ],
    image: images.suites.ocean,
  },
  {
    slug: "garden-suite",
    name: "Garden Suite",
    tagline: "Shaded and quiet",
    sleeps: 2,
    size: "38 m²",
    bed: "King or twin",
    outlook: "Garden",
    rate: 165,
    intro:
      "Ground floor, set back from the terrace. The coolest room in the villa and the one light sleepers ask for.",
    detail:
      "A rattan headboard, polished cement floors, and a door that opens straight onto the frangipani garden. Because it sits behind the main building, it stays several degrees cooler through the afternoon and catches almost none of the pool noise.",
    features: [
      "Private garden entrance",
      "Convertible king or twin beds",
      "Deep soaking tub",
      "Writing nook",
    ],
    image: images.suites.garden,
  },
  {
    slug: "loft-suite",
    name: "Loft Suite",
    tagline: "Under the teak beams",
    sleeps: 2,
    size: "36 m²",
    bed: "Queen",
    outlook: "Canopy and rooftops",
    rate: 155,
    intro:
      "Tucked under the original roof structure, with a skylight positioned over the bed.",
    detail:
      "The lowest ceiling in the house at its edges and the highest at its centre. A low platform bed sits beneath the skylight. Guests who stay here tend to rebook it. Note the stair is steep and there is no lift.",
    features: [
      "Skylight above the bed",
      "Exposed teak roof beams",
      "Reading chair and lamp",
      "Walk-in shower",
    ],
    image: images.suites.loft,
  },
  {
    slug: "pool-suite",
    name: "Pool Suite",
    tagline: "Your own plunge pool",
    sleeps: 2,
    size: "45 m²",
    bed: "King",
    outlook: "Private pool and garden",
    rate: 245,
    intro:
      "A four-metre plunge pool sits just outside the sliding doors, screened on three sides.",
    detail:
      "Built for people who would rather not share water. The pool is shaded from midday and warm by late afternoon. Sliding glass runs the full width of the room, so the water is visible from the bed.",
    features: [
      "Private 4 m plunge pool",
      "Full-width sliding glass",
      "Two sun loungers",
      "Outdoor shower",
    ],
    image: images.suites.pool,
  },
  {
    slug: "tree-suite",
    name: "Tree Suite",
    tagline: "Green on every side",
    sleeps: 2,
    size: "34 m²",
    bed: "Queen",
    outlook: "Tree canopy",
    rate: 145,
    intro:
      "Our smallest room and our best value, wrapped on three sides by a mature breadfruit canopy.",
    detail:
      "The picture window fills entirely with leaves. Light arrives filtered and green, which makes it dim at midday and lovely at four in the afternoon. Compact, but the bathroom is full size.",
    features: [
      "Full-height picture window",
      "Natural timber interior",
      "Ceiling fan and air conditioning",
      "Full-size bathroom",
    ],
    image: images.suites.tree,
  },
  {
    slug: "master-suite",
    name: "Master Suite",
    tagline: "The whole west end",
    sleeps: 3,
    size: "58 m²",
    bed: "King plus daybed",
    outlook: "Ocean and garden",
    rate: 290,
    intro:
      "The largest room, occupying the west end of the upper floor with windows on two sides.",
    detail:
      "A freestanding stone bath sits by the sea-facing window. There is a separate sitting area with a daybed that sleeps a third guest comfortably. Sunset light comes through around six and fills the whole room.",
    features: [
      "Freestanding stone bath",
      "Separate sitting area",
      "Daybed for a third guest",
      "Dual aspect windows",
    ],
    image: images.suites.master,
  },
];

/* ─────────────  EXPERIENCES  ───────────── */

export type Experience = {
  title: string;
  duration: string;
  from: string;
  blurb: string;
  image: Img;
};

export const experiences: Experience[] = [
  {
    title: "Morning surf at Kabalana",
    duration: "3 hours",
    from: "Included",
    blurb:
      "A ten-minute drive to a reliable beach break that works for beginners on the inside and holds a proper wall further out. We keep six boards and can arrange an instructor with a day's notice.",
    image: images.experiences.surf,
  },
  {
    title: "Galle Fort before the crowds",
    duration: "4 hours",
    from: "$40 for two",
    blurb:
      "Leave at seven and you will have the ramparts largely to yourself. We drop you at the lighthouse end, suggest a route through the back lanes, and collect you after lunch at a spot worth eating at.",
    image: images.experiences.fort,
  },
  {
    title: "Koggala lagoon by outrigger",
    duration: "2.5 hours",
    from: "$35 for two",
    blurb:
      "Sunil has fished this lagoon for thirty years and takes guests out at first light through the mangrove channels. Kingfishers, monitor lizards, and a cinnamon island where they still peel bark by hand.",
    image: images.experiences.lagoon,
  },
  {
    title: "Highland tea, overnight",
    duration: "2 days",
    from: "$180 for two",
    blurb:
      "For guests staying a week or more. A drive up to the Uva highlands, a night at a working estate bungalow, and a proper tasting with the factory manager. Cold enough at night to need a blanket.",
    image: images.experiences.tea,
  },
];

/* ─────────────  WHY US  ───────────── */

export const benefits = [
  {
    title: "Six rooms, never more",
    body: "We cap the villa at twelve guests. It means the pool is never crowded and breakfast is cooked to order rather than laid out on a buffet.",
  },
  {
    title: "Fourteen metres from the sea",
    body: "Not a sea glimpse or a partial view. The terrace ends where the rocks begin, and four of the six rooms open toward the water.",
  },
  {
    title: "A kitchen that cooks locally",
    body: "Fish comes from the Talpe market each morning, vegetables from a grower in Ahangama. Our cook, Nilanthi, has run this kitchen since the villa opened.",
  },
  {
    title: "Transfers handled properly",
    body: "Colombo airport is two and a half hours away. We use the same three drivers, they track your flight, and the price does not change if you land late.",
  },
];

/* ─────────────  TESTIMONIALS  ───────────── */

export type Testimonial = {
  quote: string;
  name: string;
  origin: string;
  stay: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We booked three nights and stayed nine. The Ocean Suite ruined every other hotel on the trip — we kept comparing rooms to it and nothing came close.",
    name: "Marta H.",
    origin: "Copenhagen, Denmark",
    stay: "Ocean Suite · February",
  },
  {
    quote:
      "Nilanthi asked what we liked on the first morning and then simply cooked it, better, every day after. The crab curry on our last night was the best meal of a three-week trip.",
    name: "James & Priya R.",
    origin: "Melbourne, Australia",
    stay: "Master Suite · January",
  },
  {
    quote:
      "Our flight landed at two in the morning and the driver was waiting with our names spelled correctly, which sounds small until you have had the alternative.",
    name: "Thomas B.",
    origin: "Munich, Germany",
    stay: "Garden Suite · March",
  },
  {
    quote:
      "I work remotely and needed the wifi to actually hold a video call. It did, every day, from the terrace. The loft became my office for two weeks.",
    name: "Aoife M.",
    origin: "Dublin, Ireland",
    stay: "Loft Suite · November",
  },
  {
    quote:
      "The lagoon trip with Sunil was the thing our children still talk about six months later. He spotted a kingfisher before any of us and cut the engine so we could watch it.",
    name: "The Fernandes family",
    origin: "Lisbon, Portugal",
    stay: "Pool Suite · August",
  },
];

/* ─────────────  FAQ (JSON-LD + contact section)  ───────────── */

export const faqs = [
  {
    q: "What time is check-in and check-out?",
    a: "Check-in from 2pm, check-out by 11am. If your flight lands early we will usually hold your bags and open the pool to you before the room is ready.",
  },
  {
    q: "How far is the airport?",
    a: "Bandaranaike International is about two and a half hours by expressway. We arrange transfers at $65 each way for up to three passengers.",
  },
  {
    q: "Is the villa suitable for children?",
    a: "Children over eight are welcome. The pool is unfenced and several rooms have steep stairs, so we do not take younger guests.",
  },
  {
    q: "Do you serve dinner?",
    a: "Yes, by request before 4pm on the day. Set menu of three courses at $28 per person, built around whatever came in from the market that morning.",
  },
  {
    q: "When is the best time to visit?",
    a: "December through April is the dry season on the south coast, with the calmest sea. May to September brings rain but also fewer visitors and lower rates.",
  },
];