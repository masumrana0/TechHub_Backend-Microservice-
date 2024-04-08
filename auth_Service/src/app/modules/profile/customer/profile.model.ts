import { Schema, Types, model } from 'mongoose';
import { IProfile } from '../profile.interface';

const CustomerProfileSchema = new Schema<IProfile>(
  {
    userId: {
      type: Types.ObjectId,
      ref: 'User',
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastNameName: {
        type: String,
      },
    },
    profilePicture: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Customer_profile = model<IProfile>(
  'Customer_profile',
  CustomerProfileSchema,
);
