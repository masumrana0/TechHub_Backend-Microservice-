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
  const profileExist = await Admin_profile.findOne({ userId: userId });

  if (!profileExist) {
    if (!payload.userId) {
      payload.userId = userId;
    }
    const result = (await Admin_profile.create(payload)).populate('User');
    return result;
  }

  const result = await Admin_profile.findByIdAndUpdate(userId, payload, {
    new: true,
  });
  return result;
};

export const AdminProfileService = {
  getUserProfile,
  updateProfile,
};
