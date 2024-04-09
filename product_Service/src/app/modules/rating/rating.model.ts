import { Schema, Types, model } from 'mongoose';
import { IRating } from './rating.interface';

const RatingSchema = new Schema<IRating>({
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productId: {
    type: Types.ObjectId,
    ref: 'Service',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

export const Rating = model<IRating>('Ratings', RatingSchema);
