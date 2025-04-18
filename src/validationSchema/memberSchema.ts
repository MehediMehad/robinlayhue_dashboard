import { z } from "zod";

// Define validation schema using Zod
export const memberSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    location: z.string().min(1, { message: "Location is required" })
  });