import { Types } from 'mongoose';
import { IUser } from '../user/user.interface';
import { IProduct } from '../product/product.interface';

export type IRating = {
  user?: Types.ObjectId | IUser;
  productId: Types.ObjectId | IProduct;
  rating: number;
};

export type IGetRatingData = {
  totalFiveRating: number;
  totalFourRating: number;
  totalThreeRating: number;
  totalTwoRating: number;
  totalOneRating: number;
  totalGiveCustomerRating: number;
  averageRating: number;
};
