import { Types } from 'mongoose';
import { IName, IUser } from '../user/user.interface';

export type IProfile = {
  user: Types.ObjectId | IUser | string;
  name: IName;
  profilePicture: string;
};
