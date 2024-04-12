import z from 'zod';
// Define a Zod schema for the IRating type
const ratingSchema = z.object({
  body: z.object({
    productId: z.string({
      required_error: 'product reference id is required',
    }),
    rating: z
      .number({
        required_error: 'rating is required',
      })
      .max(5)
      .min(1),
  }),
});

export const RatingZodValidation = {
  ratingSchema,
};
