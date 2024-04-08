import { Schema, Types, model } from 'mongoose';
import { IProfile } from '../profile.interface';

const AdminProfileSchema = new Schema<IProfile>(
  {
    user: {
      type: Types.ObjectId,
      ref: 'User',
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
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

export const Admin_profile = model<IProfile>(
  'Admin_profile',
  AdminProfileSchema,
);
