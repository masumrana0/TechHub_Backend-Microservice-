import { Types } from 'mongoose';
import { ICategory } from '../category/category.interface';

export type IProduct = {
  _id?: string;
  category: Types.ObjectId | ICategory | string;
  productName: string;
  brand: string;
  model: string;
  productPhoto: string;
  description: string;
  keyFeatures: string[];
  status?: 'In Stock' | 'Out of Stock';
};

export type IProductFilters = {
  searchTerm?: string;
  category?: string;
  productName?: string;
  model?: string;
};
