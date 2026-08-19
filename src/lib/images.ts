export type Img = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const img = (name: string, alt: string, w: number, h: number): Img => ({
  src: `/images/${name}.webp`,
  alt,
  width: w,
  height: h,
});

export const images = {
  hero: img("hero", "Infinity pool terrace at Aramya overlooking the Indian Ocean at sunset", 2400, 1350),

  about: {
    courtyard: img("about-courtyard", "Open-air teak and cement courtyard at the centre of the villa", 1400, 1750),
    detail: img("about-detail", "Handmade Sri Lankan ceramic bowl and folded linen on a teak surface", 1400, 1400),
  },

  dining: {
    table: img("dining-table", "Long teak dining table set for dinner on the ocean-facing terrace", 1600, 1067),
    dish: img("dining-dish", "Sri Lankan rice and curry served in small ceramic bowls", 1600, 1600),
  },

  experiences: {
    surf: img("exp-surf", "Surfboard resting on wet sand at a southern Sri Lankan beach at sunrise", 1400, 1050),
    fort: img("exp-fort", "Coral-stone ramparts of Galle Fort with the lighthouse beyond", 1400, 1050),
    lagoon: img("exp-lagoon", "Wooden outrigger canoe on a still mangrove lagoon in morning mist", 1400, 1050),
    tea: img("exp-tea", "Terraced tea estate hillside in the Sri Lankan highlands", 1400, 1050),
  },

  gallery: [
    img("gallery-1", "The villa pool lit from below at night, lanterns along the deck", 1400, 1400),
    img("gallery-2", "Woven rattan pendant lamp against a whitewashed wall", 1400, 1750),
    img("gallery-3", "Warm stone path beside a garden pond with water lilies", 1400, 1400),
    img("gallery-4", "Aerial view of the villa rooftop among coconut palms", 1400, 1050),
  ],
} as const;