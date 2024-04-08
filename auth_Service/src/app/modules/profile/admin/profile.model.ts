import { Schema, Types, model } from 'mongoose';
import { IProfile } from '../profile.interface';

const AdminProfileSchema = new Schema<IProfile>(
  {
    userId: {
      type: Types.ObjectId,
      ref: 'Admin_profile',
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

export const Admin_profile = model<IProfile>(
  'Admin_profile',
  AdminProfileSchema,
);
