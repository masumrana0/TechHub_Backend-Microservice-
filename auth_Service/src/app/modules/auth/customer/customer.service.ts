/**
 * Title: 'authentication service'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 29-12-2023
 *
 */

import { IUser } from '../../user/user.interface';
import { User } from '../../user/user.model';
import { IDataValidationResponse, ILoginUserResponse } from '../auth.interface';
import { AuthService } from '../auth.service';

import { CustomerProfileService } from '../../profile/customer/profile.service';

// customer registration
const customerRegistration = async (
  payload: IUser,
): Promise<ILoginUserResponse | IDataValidationResponse> => {
  if (!payload.role) {
    payload.role = 'customer';
  }
  const { name, ...data } = payload;

  // create User
  const result = await User.create(data);
  // update profile
  if (result._id) {
    const profileData = {
      user: result?._id,
      name: name,
    };
    await CustomerProfileService.updateProfile(result._id, profileData);
  }

  // sendEmailVerificationMail
  await AuthService.sendEmailVerificationMail(result.email);

  const loginData = { email: result?.email, password: payload?.password };
  const token = await AuthService.userLogin(loginData);

  return token;
};

export const CustomerService = {
  customerRegistration,
};
