import { Types } from 'mongoose';
import { IName, IUser } from '../user/user.interface';

export type IProfile = {
  userId: Types.ObjectId | IUser;
  name?: IName;
  profilePicture?: string;
};
