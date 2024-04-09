import { Schema, model } from 'mongoose';
import { CategoryName, ICategoryName } from './category.interface';

// Define the Mongoose schema
const CategorySchema = new Schema<ICategoryName>({
  categoryName: {
    type: String,
    enum: CategoryName,
    required: true,
  },
});

export const CategoryModel = model('Category', CategorySchema);
