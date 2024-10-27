import { z } from "zod";
import { StaticImageData } from "next/image";

export const carSchema = z.object({
  id: z.number(),
  brand: z.string(),
  rating: z.number(),
  carName: z.string(),
  imgUrl: z.any(),
  model: z.string(),
  price: z.number(),
  speed: z.string(),
  gps: z.string(),
  seatType: z.string(),
  automatic: z.string(),
  description: z.string(),
});

export const carArraySchema = z.array(carSchema);
