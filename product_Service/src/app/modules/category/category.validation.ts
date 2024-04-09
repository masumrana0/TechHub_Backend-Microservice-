import { z } from 'zod';
const CategoryEnumName = z.enum([
  'Mobile Phones',
  'PC Components',
  'Laptops',
  'Tablets',
]);
export const CategoryZodSchema = z.object({
  body: z.object({
    categoryName: CategoryEnumName,
  }),
});
