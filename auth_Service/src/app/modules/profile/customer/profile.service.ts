import { IProfile } from '../profile.interface';
import { Customer_profile } from './profile.model';

// get profile
const getUserProfile = async (email: string): Promise<IProfile | null> => {
  const result = await Customer_profile.findOne({ email: email });
  return result;
};

// update profile
const updateProfile = async (
  userId: string,
  payload: Partial<IProfile>,
): Promise<IProfile | null> => {
  const profileExist = await Customer_profile.findOne({ userId: userId });

  if (!profileExist) {
    const result = await await Customer_profile.create(payload);
    return result;
  }

  const result = await Customer_profile.findByIdAndUpdate(userId, payload, {
    new: true,
  }).populate('user');
  return result;
};

export const CustomerProfileService = {
  getUserProfile,
  updateProfile,
};
