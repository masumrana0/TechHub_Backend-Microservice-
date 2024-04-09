import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { Product } from '../product/product.model';
import { IReview } from './review.interface';
import { Review } from './review.model';

// get Review
const getReview = async (id: string): Promise<IReview[] | null> => {
  const result = await Review.find({ productId: id }).populate('user');
  return result;
};

// making review
const makeReview = async (review: IReview): Promise<IReview | null> => {
  const service = await Product.findById(review.productId);
  if (!service) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Product not found');
  }
  const result = await Review.create(review);
  return result;
};

export const ReviewService = {
  makeReview,
  getReview,
};
