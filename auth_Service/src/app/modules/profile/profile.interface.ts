import { Types } from 'mongoose';
import { IName, IUser } from '../user/user.interface';

export type IProfile = {
  userId: Types.ObjectId | IUser | string;
  name: IName;
  profilePicture: string;
};
