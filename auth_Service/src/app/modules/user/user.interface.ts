/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type IName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  _id?: string;
  role: 'customer' | 'admin' | 'super_admin';
  password: string;
  phoneNumber: string;
  email: string;
  passwordChangedAt?: Date;
  isPasswordChanged: boolean;
  isEmailVerified: boolean;
};

export type UserModel = {
  isUserExist(email: string): Promise<IUser>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>;
} & Model<IUser>;
