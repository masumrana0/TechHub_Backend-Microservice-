/* eslint-disable @typescript-eslint/no-explicit-any */
import { IName } from '../../user/user.interface';
import { User } from '../../user/user.model';
import { IProfile } from '../profile.interface';
import { Admin_profile } from './profile.model';

// get profile
const getUserProfile = async (email: string): Promise<IProfile | null> => {
  const result = await Admin_profile.findOne({ email: email });
  return result;
};

// update profile
const updateProfile = async (
  userId: string,
  payload: Partial<IProfile>,
): Promise<IProfile | null> => {
  const { name, ...userData } = payload;
  const profileExist = await Admin_profile.findOne({ user: userId });

  if (!profileExist) {
    const result = await Admin_profile.create(payload);
    return result;
  }

  const updatedUserData = { ...userData };

  if (name && Object.keys(name).length > 0) {
    Object.keys(name).forEach(key => {
      const nameKey = `name.${key}`;

      (updatedUserData as any)[nameKey] = name[key as keyof IName];
    });
  }

  if (updatedUserData?.phoneNumber) {
    await User.findByIdAndUpdate(userId, {
      phoneNumber: updatedUserData.phoneNumber,
    });
  }

  const result = await Admin_profile.findOneAndUpdate(
    { user: userId },
    updatedUserData,
    {
      new: true,
    },
  ).populate('user');

  return result;
};

export const AdminProfileService = {
  getUserProfile,
  updateProfile,
};
