import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IReview } from './review.interface';
import { ReviewService } from './review.service';

// get Review
const getReview = catchAsync(async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const result = await ReviewService.getReview(productId);

  sendResponse<IReview[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review fatched successfully !',
    data: result,
  });
});

// make review
const makeReview = catchAsync(async (req: Request, res: Response) => {
  const { ...review } = req.body;
  const userId = req.user?.userId;
  const reviewAllData = {
    ...review,
    user: userId,
  };

  const result = await ReviewService.makeReview(reviewAllData);

  sendResponse<IReview>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review added successfully !',
    data: result,
  });
});

export const ReviewController = {
  makeReview,
  getReview,
};
