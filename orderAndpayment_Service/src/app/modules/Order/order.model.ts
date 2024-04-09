import { Schema, model } from 'mongoose';
import { IOrder } from './order.interface';

const OrderSchema = new Schema<IOrder>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
  ],
  paymentStatus: {
    type: String,
    default: 'cashOnDelivery',
    required: true,
  },
  isDeliveried: {
    type: String,
    default: false,
  },
  totalPrice: { type: Number },
});

// Create and export Mongoose model
export const Order = model<IOrder>('Order', OrderSchema);
