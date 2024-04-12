import z from 'zod';
// Define a Zod schema for the IReview type
const reviewSchema = z.object({
  body: z.object({
    productId: z.string({
      required_error: 'product reference id is required',
    }),
    review: z.string({
      required_error: 'review is required',
    }),
  }),
});

export const ReviewZodValidation = {
  reviewSchema,
};
