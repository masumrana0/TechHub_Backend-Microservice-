import { z } from 'zod';
import { categoryTypes } from './category.interface';
const CategoryEnumType = z.enum(['', ...categoryTypes]);
export const CategoryZodSchema = z.object({
  body: z.object({
    categoryType: CategoryEnumType,
  }),
});
