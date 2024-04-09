import { Types } from 'mongoose';
import { IUser } from '../user/user.interface';

export type IOrder = {
  user: Types.ObjectId | IUser;
  products: Types.ObjectId[] | string;
  paymentStatus: 'cashOnDelivery';
  isDeliveried?: boolean;
  totalPrice?: number;
};
