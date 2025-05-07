import { z } from "zod";

// Define validation schema using Zod
export const serviceSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z
    .string()
    .min(1, { message: "Price is required" })
    .regex(/^\d+(\.\d{1,2})?$/, { message: "Price must be a valid number" })
    .transform((val) => parseFloat(val)),
  duration: z.string().min(1, { message: "Duration is required" }),
});

export const serviceSchemaUpdate = z.object({
  name: z.string().min(1, { message: "Name is required" }).optional(),
  description: z.string().min(1, { message: "Description is required" }).optional(),
  price: z
    .number()
    .min(1, { message: "Price is required" }).optional(),
  duration: z.string().min(1, { message: "Duration is required" }).optional(),
  image: z.string().min(1, { message: "image is required" }).optional(),
});