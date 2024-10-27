import { StaticImageData } from "next/image";

export interface CarItem {
  id: number;
  brand: string;
  rating: number;
  carName: string;
  imgUrl: StaticImageData; // Use StaticImageData for imported images
  model: string;
  price: number;
  speed: string;
  gps: string;
  seatType: string;
  automatic: string;
  description: string;
}
