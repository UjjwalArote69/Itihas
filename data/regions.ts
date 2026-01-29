export type HistoricalEvent = {
  slug: string;
  title: string;
  year: number;
  era: string;
  summary: string;

  // Geography
  location: {
    name: string;
    lat: number;
    lng: number;
  };
};

export const events: HistoricalEvent[] = [
  {
    slug: "indus-valley-civilization",
    title: "Indus Valley Civilization",
    year: -2500,
    era: "ancient-india",
    summary:
      "One of the world’s earliest urban civilizations, known for planned cities like Harappa and Mohenjo-daro.",
    location: {
      name: "Mohenjo-daro",
      lat: 27.3294,
      lng: 68.1386,
    },
  },
  {
    slug: "battle-of-plassey",
    title: "Battle of Plassey",
    year: 1757,
    era: "colonial-india",
    summary:
      "A decisive victory of the British East India Company that marked the beginning of British dominance in India.",
    location: {
      name: "Plassey, Bengal",
      lat: 23.784,
      lng: 88.258,
    },
  },
];
