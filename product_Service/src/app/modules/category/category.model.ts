import { Schema, model } from 'mongoose';
import { ICategoryType, categoryTypes } from './category.interface';

// Define the Mongoose schema
const CategorySchema = new Schema<ICategoryType>({
  categoryType: {
    type: String,
    enum: categoryTypes,
    required: true,
  },
});

export const CategoryModel = model('Category', CategorySchema);
