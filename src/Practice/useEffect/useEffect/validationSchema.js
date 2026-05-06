import * as z from "zod";
// z - it is the main object from the zod library
export const formSchema = z.object({
  name: z.string().min(3, "Name must have 3 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  city: z.string().min(1, "City is required"),
  image: z.any().refine((file) => file?.length === 1, "Image is requred"),
});
