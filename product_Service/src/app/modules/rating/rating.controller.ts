import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IGetRatingData, IRating } from './rating.interface';
import { RatingService } from './rating.service';

// get Review
const getRating = catchAsync(async (req: Request, res: Response) => {
  const serviceId = req.params.serviceId;

  const result = await RatingService.getRating(serviceId);

  sendResponse<IGetRatingData>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rating fatched successfully !',
    data: result,
  });
});

// make review
const makeRating = catchAsync(async (req: Request, res: Response) => {
  const { ...rating } = req.body;
  const userId = req.user?.userId;
  const ratingData = {
    ...rating,
    user: userId,
  };

  const result = await RatingService.makeRating(ratingData);

  sendResponse<IRating>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rating added successfully !',
    data: result,
  });
});

export const RatingController = {
  makeRating,
  getRating,
};
