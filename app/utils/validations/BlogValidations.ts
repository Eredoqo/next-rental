import { z } from "zod";
import { StaticImageData } from "next/image";

export const blogSchema = z.object({
  id: z.number(),
  title: z.string(),
  imgUrl: z.any(),
  description: z.string(),
  quote: z.string(),
  slug: z.string(),
});

export const blogArraySchema = z.array(blogSchema);
