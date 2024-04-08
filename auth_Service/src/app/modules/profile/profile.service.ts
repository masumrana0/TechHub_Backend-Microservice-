import { Admin_profile } from './admin/profile.model';
import { Customer_profile } from './customer/profile.model';
import { IProfile } from './profile.interface';

type IGetProfile = {
  role: 'customer' | 'admin' | 'super_admin';
  userId: string;
};

const getProfile = async (
  payload: IGetProfile,
): Promise<IProfile | null | undefined> => {
  const { role, userId } = payload;

  if (role === 'customer') {
    const result = await Customer_profile.findOne({ user: userId }).populate(
      'user',
    );
    return result;
  } else if (role === 'admin' || role === 'super_admin') {
    const result = await Admin_profile.findOne({ user: userId }).populate(
      'user',
    );

    return result;
  }
};

export const ProfileService = {
  getProfile,
};
