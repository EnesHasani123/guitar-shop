export type Specs = {
  bodyWood?: string;
  neckWood?: string;
  fingerboardWood?: string;
  pickups?: string;
  tuners?: string;
  scaleLength?: string;
  bridge?: string;
};

export type Musician = {
  name: string;
  musicianImage: string;
  bands: string[];
};

export type ModelDetails = {
  id: string;
  brandId: string;
  name: string;
  type: "ELECTRIC" | "ACOUSTIC" | "BASS" | "CLASSICAL";
  image: string;
  price: number;
  description: string;
  specs: Specs;
  musicians: Musician[];
};

const DB: Record<string, ModelDetails> = {
  // key = `${brandId}:${modelId}`
  "1:m2": {
    id: "m2",
    brandId: "1",
    name: "Active Precision Bass PH V",
    type: "BASS",
    image:
      "https://images.unsplash.com/photo-1513116476489-7635e79feb27",
    price: 4199,
    description:
      "Modern take on the classic Precision Bass with dual active pickups and versatile tone.",
    specs: {
      bodyWood: "Alder",
      neckWood: "Maple",
      fingerboardWood: "Rosewood",
      pickups: "Dual Active P/J",
      tuners: "Vintage-Style",
      scaleLength: "34 inches",
      bridge: "High-Mass",
    },
    musicians: [
      {
        name: "Jimi Hendrix",
        musicianImage:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
        bands: ["The Jimi Hendrix Experience"],
      },
      {
        name: "David Gilmour",
        musicianImage:
          "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1",
        bands: ["Pink Floyd"],
      },
      {
        name: "John Doe",
        musicianImage:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        bands: ["Session"],
      },
      {
        name: "Jane Smith",
        musicianImage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        bands: ["Touring Artist"],
      },
    ],
  },

  "1:m1": {
    id: "m1",
    brandId: "1",
    name: "Professional II Stratocaster",
    type: "ELECTRIC",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    price: 3199,
    description:
      "A pro-grade Strat with modern playability and classic tone. Rolled edges, V-Mod II pickups.",
    specs: {
      bodyWood: "Alder",
      neckWood: "Maple",
      fingerboardWood: "Rosewood",
      pickups: "V-Mod II Single-Coils",
      tuners: "Fender Standard",
      scaleLength: "25.5 inches",
      bridge: "2-Point Tremolo",
    },
    musicians: [
      {
        name: "Mark Knopfler",
        musicianImage:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
        bands: ["Dire Straits"],
      },
      {
        name: "John Mayer",
        musicianImage:
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
        bands: ["Solo"],
      },
      {
        name: "Eric Johnson",
        musicianImage:
          "https://images.unsplash.com/photo-1515191107209-c28698631303",
        bands: ["Solo"],
      },
    ],
  },
};

export function getMockModelDetails(
  brandId: string,
  modelId: string
): ModelDetails | null {
  return DB[`${brandId}:${modelId}`] ?? null;
}
