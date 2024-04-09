import { z } from 'zod';
export const ProductZodSchema = z.object({
  body: z.object({
    category: z.string(),
    productName: z.string(),
    model: z.string(),
    productPhoto: z.string().optional(),
    description: z.string(),
    keyFeatures: z.array(z.string()),
    status: z.enum(['In Stock', 'Out of Stock']).optional(),
  }),
});
