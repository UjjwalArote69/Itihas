import type { Event } from "@/types/history";

export const events: Event[] = [
  // Ancient India
  {
    slug: "indus-valley-civilization",
    title: "Indus Valley Civilization (Harappa & Mohenjo-daro)",
    year: -2500,
    era: "ancient-india",
    summary:
      "One of the world's earliest urban civilizations, noted for planned cities, drainage systems, and long-distance trade.",
    location: {
      name: "Mohenjo-daro (Sindh)",
      lat: 27.3294,
      lng: 68.1386,
    },
  },
  {
    slug: "vedic-period",
    title: "The Vedic Period (early Vedic culture)",
    year: -1500,
    era: "ancient-india",
    summary:
      "Period associated with the composition of the earliest Vedas and the formation of early Vedic social and ritual structures in the northwestern and northern Indian subcontinent.",
    location: {
      name: "Punjab / Haryana (approx.)",
      lat: 30.7333,
      lng: 76.7794,
    },
  },
  {
    slug: "maurya-empire-foundation",
    title: "Foundation of the Maurya Empire",
    year: -322,
    era: "ancient-india",
    summary:
      "Chandragupta Maurya establishes one of the first large empires unifying much of the subcontinent; significant administrative and political developments follow.",
    location: {
      name: "Pataliputra (Patna)",
      lat: 25.5941,
      lng: 85.1376,
    },
  },
  {
    slug: "kalinga-war-ashoka",
    title: "Kalinga War and Ashoka's conversion",
    year: -261,
    era: "ancient-india",
    summary:
      "The brutal Kalinga War leads Emperor Ashoka to adopt Buddhism and promote dhamma (ethical governance) across his realm.",
    location: {
      name: "Kalinga (Odisha coast, approximate)",
      lat: 20.9517,
      lng: 85.0985,
    },
  },
  {
    slug: "gupta-golden-age",
    title: "Gupta Golden Age (approx.)",
    year: 320,
    era: "ancient-india",
    summary:
      "Period of remarkable achievements in literature, science, mathematics (concepts of zero), and art under Gupta political influence.",
    location: {
      name: "Magadha / Pataliputra region",
      lat: 25.5941,
      lng: 85.1376,
    },
  },

  // Medieval India
  {
    slug: "chola-peak",
    title: "Chola Maritime Power (peak period)",
    year: 1000,
    era: "medieval-india",
    summary:
      "The Chola dynasty reaches maritime and cultural heights, projecting naval power across the Bay of Bengal and sponsoring temple architecture and literature.",
    location: {
      name: "Thanjavur (Chola heartland)",
      lat: 10.7867,
      lng: 79.1378,
    },
  },
  {
    slug: "delhi-sultanate-foundation",
    title: "Foundation of the Delhi Sultanate",
    year: 1206,
    era: "medieval-india",
    summary:
      "After the death of Muhammad of Ghor's generals, the Mamluk (Slave) dynasty establishes a Sultanate centered on Delhi, beginning centuries of sultanate rule.",
    location: {
      name: "Delhi",
      lat: 28.7041,
      lng: 77.1025,
    },
  },
  {
    slug: "babur-mughal-foundation",
    title: "Babur's victory & founding of the Mughal Empire",
    year: 1526,
    era: "medieval-india",
    summary:
      "Babur defeats Ibrahim Lodi at the First Battle of Panipat and lays the foundations for the Mughal dynasty in northern India.",
    location: {
      name: "Panipat",
      lat: 29.3956,
      lng: 76.9635,
    },
  },
  {
    slug: "akbar-coronation",
    title: "Akbar consolidates Mughal rule",
    year: 1556,
    era: "medieval-india",
    summary:
      "Akbar becomes emperor and later implements administrative, religious, and cultural policies that shape early modern South Asia.",
    location: {
      name: "Agra/Delhi region",
      lat: 27.1767,
      lng: 78.0081,
    },
  },

  // Colonial India
  {
    slug: "battle-of-plassey",
    title: "Battle of Plassey",
    year: 1757,
    era: "colonial-india",
    summary:
      "A decisive victory by the British East India Company that marked a turning point toward British political dominance in Bengal and beyond.",
    location: {
      name: "Plassey (Palashi), Bengal",
      lat: 23.784,
      lng: 88.258,
    },
  },
  {
    slug: "battle-of-buxar",
    title: "Battle of Buxar",
    year: 1764,
    era: "colonial-india",
    summary:
      "Victory for the British East India Company against a coalition of Indian rulers; helped secure Company control over revenue collection in Bengal.",
    location: {
      name: "Buxar (Bihar)",
      lat: 25.5646,
      lng: 84.1926,
    },
  },
  {
    slug: "first-war-of-independence-1857",
    title: "The Revolt of 1857 (First War of Independence)",
    year: 1857,
    era: "colonial-india",
    summary:
      "A widespread uprising against Company rule that led to major political changes, including the end of Company governance and the start of direct British Crown rule.",
    location: {
      name: "Meerut / Delhi region (major centers)",
      lat: 28.9845,
      lng: 77.7064,
    },
  },
  {
    slug: "jallianwala-bagh-massacre",
    title: "Jallianwala Bagh Massacre",
    year: 1919,
    era: "colonial-india",
    summary:
      "British troops fired on a peaceful gathering in Amritsar, causing international outcry and intensifying the Indian independence movement.",
    location: {
      name: "Amritsar (Jallianwala Bagh)",
      lat: 31.6340,
      lng: 74.8723,
    },
  },
  {
    slug: "salt-march-dandi",
    title: "Salt March (Dandi Satyagraha)",
    year: 1930,
    era: "colonial-india",
    summary:
      "Mahatma Gandhi leads a nonviolent campaign against the British salt tax, mobilizing mass civil disobedience across India.",
    location: {
      name: "Dandi (Gujarat)",
      lat: 20.9911,
      lng: 72.9040,
    },
  },
  {
    slug: "indian-independence-and-partition",
    title: "Indian Independence and Partition",
    year: 1947,
    era: "colonial-india",
    summary:
      "British India gains independence; the subcontinent is partitioned into India and Pakistan, a traumatic event accompanied by mass migration and communal violence.",
    location: {
      name: "New Delhi (political center at independence)",
      lat: 28.6139,
      lng: 77.2090,
    },
  },

  // Modern India (and subcontinent)
  {
    slug: "constitution-adopted",
    title: "Adoption of the Constitution of India",
    year: 1950,
    era: "modern-india",
    summary:
      "India's Constituent Assembly adopts the Constitution; India becomes a republic with a codified legal framework and fundamental rights.",
    location: {
      name: "New Delhi",
      lat: 28.6142,
      lng: 77.1990,
    },
  },
  {
    slug: "green-revolution",
    title: "Green Revolution in India (agricultural transformation)",
    year: 1965,
    era: "modern-india",
    summary:
      "Adoption of high-yielding varieties, irrigation, and modern farming techniques in parts of India (notably Punjab) leads to major increases in food production.",
    location: {
      name: "Punjab (research & implementation regions)",
      lat: 30.9010,
      lng: 75.8573,
    },
  },
  {
    slug: "bangladesh-war-and-independence",
    title: "Bangladesh Liberation War and Independence",
    year: 1971,
    era: "modern-india",
    summary:
      "East Pakistan becomes the independent state of Bangladesh following a war in which India played a significant military and humanitarian role.",
    location: {
      name: "Dhaka (Bangladesh)",
      lat: 23.8103,
      lng: 90.4125,
    },
  },
  {
    slug: "pokhran-1",
    title: "India's First Nuclear Test (Pokhran-I)",
    year: 1974,
    era: "modern-india",
    summary:
      "India conducts its first nuclear test in the Rajasthan desert, a watershed moment for regional strategy and scientific capability.",
    location: {
      name: "Pokhran (Rajasthan)",
      lat: 27.0249,
      lng: 71.0190,
    },
  },
  {
    slug: "economic-liberalization",
    title: "Economic Liberalization",
    year: 1991,
    era: "modern-india",
    summary:
      "New economic policies open the Indian economy to global markets, privatization, and foreign investment, transforming growth patterns.",
    location: {
      name: "New Delhi / Mumbai (policy & markets)",
      lat: 19.0760,
      lng: 72.8777,
    },
  },
  {
    slug: "pokhran-2-1998",
    title: "Pokhran-II Nuclear Tests (1998)",
    year: 1998,
    era: "modern-india",
    summary:
      "A series of nuclear tests reaffirm India's status as a nuclear-capable state and provoke international diplomatic reactions.",
    location: {
      name: "Pokhran (Rajasthan)",
      lat: 27.0249,
      lng: 71.0190,
    },
  },
];
