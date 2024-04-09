import { Schema, Types, model } from 'mongoose';
import { IProduct } from './product.interface';

const ProductSchema = new Schema<IProduct>(
  {
    category: {
      type: Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    productPhoto: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    keyFeatures: {
      type: [String],
      required: true,
    },
    status: {
      type: String,
      enum: ['In Stock', 'Out of Stock'],
      required: true,
    },
  },
  { timestamps: true },
);

export const Product = model<IProduct>('Product', ProductSchema);
