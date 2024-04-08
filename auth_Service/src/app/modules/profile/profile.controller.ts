import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IProfile } from './profile.interface';
import { ProfileService } from './profile.service';
import { Customer_profile } from './customer/profile.model';
import { AdminProfileService } from './admin/profile.service';
import { CustomerService } from '../auth/customer/customer.service';
import { CustomerProfileService } from './customer/profile.service';

const getProfile = catchAsync(async (req: Request, res: Response) => {
  const tokenData = req.user;
  if (tokenData !== null && tokenData !== undefined) {
    const payload = {
      userId: tokenData.userId as string,
      role: tokenData.role as 'admin' | 'customer' | 'super_admin',
    };

    const result = await ProfileService.getProfile(payload);

    sendResponse<IProfile>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Profile fetched successfully!',
      data: result,
    });
  }
});

const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const { ...updatedData } = req.body;
  const tokenData = req.user;

  if (tokenData && 'userId' in tokenData) {
    let result;
    if (tokenData.role === 'customer') {
      result = await CustomerProfileService.updateProfile(
        tokenData.userId,
        updatedData,
      );
    } else if (tokenData.role === 'admin' || tokenData.role === 'super_admin') {
      result = await AdminProfileService.updateProfile(
        tokenData.userId,
        updatedData,
      );
    }

    sendResponse<IProfile>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user profile is updated  successfully !',
      data: result,
    });
  }
});

export const ProfileController = {
  getProfile,
  updateProfile,
};
