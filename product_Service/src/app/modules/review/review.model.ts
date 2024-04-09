import { Schema, Types, model } from 'mongoose';
import { IReview } from './review.interface';

const ReviewSchema = new Schema<IReview>({
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productId: {
    type: Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

export const Review = model<IReview>('Review', ReviewSchema);
