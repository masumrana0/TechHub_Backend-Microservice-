import { Types } from 'mongoose';
// import { IService } from '../service/service.interface';
import { IUser } from '../user/user.interface';
import { IProduct } from '../product/product.interface';

export type IReview = {
  productId: Types.ObjectId | IProduct;
  user?: Types.ObjectId | IUser;
  review: string;
};
