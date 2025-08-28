export type Brand = {
  id: string;
  name?: string | null;
  origin?: string | null;
  image?: string | null;
  categories?: string[] | null;
};

export type Model = {
  id: string;
  name: string;
  type?: string | null;
  image?: string | null;
  price?: number | null;
};
