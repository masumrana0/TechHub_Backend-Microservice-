import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { ProfileService } from './profile.service';

const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await ProfileService.updateProfile(req);
  res.send(result);
});

const getProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await ProfileService.updateProfile(req);
  res.send(result);
});

export const ProfileController = {
  updateProfile,
  getProfile,
};
