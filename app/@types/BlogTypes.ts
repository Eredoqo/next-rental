import { StaticImageData } from "next/image";

export interface Blog {
  id: number;
  title: string;
  imgUrl?: StaticImageData;
  description: string;
  quote: string;
  slug: string;
}
