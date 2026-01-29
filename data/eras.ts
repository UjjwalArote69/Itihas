export type Era = {
  slug: string;
  name: string;
  startYear: number;
  endYear: number;
  description: string;
};

export const eras: Era[] = [
  {
    slug: "ancient-india",
    name: "Ancient India",
    startYear: -3000,
    endYear: 600,
    description:
      "From the Indus Valley cities and Vedic age, through the Maurya and Gupta polities — a period of urbanization, writing, jurisprudence, mathematics, and major religious developments (Hinduism, Buddhism, Jainism).",
  },
  {
    slug: "medieval-india",
    name: "Medieval India",
    startYear: 600,
    endYear: 1700,
    description:
      "Regional kingdoms, the rise and fall of large empires (Cholas, Rajputs, Delhi Sultanate, Mughals), important cultural synthesis, trade networks across the Indian Ocean, and architectural florescence.",
  },
  {
    slug: "colonial-india",
    name: "Colonial India",
    startYear: 1700,
    endYear: 1947,
    description:
      "European trading presence grows into political domination — East India Company rule, British Crown rule, economic restructuring, social reforms, and the organized movement for independence.",
  },
  {
    slug: "modern-india",
    name: "Modern India",
    startYear: 1947,
    endYear: 2025,
    description:
      "Independence and partition (1947), constitution and republic (1950), post-independence nation building, economic and technological development, and contemporary political and social transformations.",
  },
];
