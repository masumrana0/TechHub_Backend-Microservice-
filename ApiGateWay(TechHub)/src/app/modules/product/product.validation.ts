import { z } from 'zod';

const productSchema = z.object({
  body: z.object({
    category: z.string({ required_error: 'category id is required' }),
    productName: z.string({ required_error: 'productName is required' }),
    brand: z.string({ required_error: 'brand is required' }),
    model: z.string({ required_error: 'model is required' }),
    productPhoto: z
      .string({ required_error: 'productPhoto is required' })
      .url(),
    description: z.string({ required_error: 'Description is required' }),
    keyFeatures: z.array(z.string()),
  }),
});

export const ProductValidationSchema = {
  productSchema,
};
