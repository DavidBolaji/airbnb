export interface Iimage {
  id: string;
  image: string;
}

export interface Iproduct {
  id: string;
  images: Iimage[];
  host: string;
  name: string;
  date: string;
  cost: number;
  like: boolean;
  rating: number;
  location: { long: number; lat: number };
  start: boolean;
  end: boolean;
  label:
    | "room"
    | "pool"
    | "trending"
    | "bed"
    | "tropical"
    | "amazing"
    | "mansions"
    | "cities"
    | "omg"
    | "design"
    | "dome"
    | "boat"
    | "islands"
    | "earth"
    | "desert";
}
