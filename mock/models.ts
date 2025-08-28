export type Model = {
  id: string;
  name: string;
  type: "ELECTRIC" | "ACOUSTIC" | "BASS" | "CLASSICAL";
  image: string;
  price: number;
};

export const mockModels: Model[] = [
  {
    id: "m1",
    name: "Professional II Stratocaster",
    type: "ELECTRIC",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    price: 3199,
  },
  {
    id: "m2",
    name: "Active Precision Bass PH V",
    type: "BASS",
    image:
      "https://images.unsplash.com/photo-1513116476489-7635e79feb27",
    price: 4199,
  },
  {
    id: "m3",
    name: "Redondo Special",
    type: "ACOUSTIC",
    image:
      "https://images.unsplash.com/photo-1460039230329-eb070fc6c77b",
    price: 2800,
  },
  {
    id: "m4",
    name: "J-45 Standard",
    type: "ACOUSTIC",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    price: 1699,
  },
  {
    id: "m5",
    name: "Les Paul Standard",
    type: "ELECTRIC",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
    price: 2999,
  },
  {
    id: "m6",
    name: "Classical C40",
    type: "CLASSICAL",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    price: 499,
  },
];
