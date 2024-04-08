/**
 * Title: 'Admin Authentication service'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 01-01-2024
 *
 */

import { AdminProfileService } from '../../profile/admin/profile.service';
import { IUser } from '../../user/user.interface';
import { User } from '../../user/user.model';
import { ILoginUserResponse } from '../auth.interface';
import { AuthService } from '../auth.service';

// user registration
const adminRegistration = async (
  payload: IUser,
): Promise<ILoginUserResponse> => {
  const { name, ...data } = payload;
  const result = await User.create(data);

  if (result._id) {
    const profileData = {
      userId: result?._id,
      name: name,
    };
    await AdminProfileService.updateProfile(result._id, profileData);
  }

  const loginData = { email: result?.email, password: payload?.password };
  const token = await AuthService.userLogin(loginData);
  return token as ILoginUserResponse;
};

export const AdminService = {
  adminRegistration,
};
