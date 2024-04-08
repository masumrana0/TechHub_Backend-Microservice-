import { Request, Response } from 'express';

import { ProfileService } from './admin/profile.service';

import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IProfile } from './profile.interface';

const getProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const result = await ProfileService.getUserProfile(user?.email);

  sendResponse<IProfile>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile fatched successfully !',
    data: result,
  });
});

const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const id = req?.user?.userId;
  const updatedData = req.body;
  const result = await ProfileService.updateProfile(id, updatedData);
  // console.log(updatedData, id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user profile is updated  successfully !',
    data: result,
  });
});

export const ProfileController = {
  getProfile,
  updateProfile,
};
