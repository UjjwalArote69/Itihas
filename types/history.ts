export type Era = {
  slug: string;
  name: string;
  startYear: number;
  endYear: number;
  description: string;
};

export type Event = {
  slug: string;
  title: string;
  year: number;
  era: string;
  summary: string;

  location: {
    name: string;
    lat: number;
    lng: number;
  };
};
