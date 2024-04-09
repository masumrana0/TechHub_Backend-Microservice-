import { Types } from 'mongoose';

export type IOrder = {
  products: Types.ObjectId[];
};
