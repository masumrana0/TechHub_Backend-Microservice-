import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { ReviewService } from './review.service';

// review part
const createProductReview = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewService.createReview(req);
  res.send(result);
});

const getSpecificProductReview = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ReviewService.getSpecificProductReview(req);
    res.send(result);
  },
);

export const ReviewConroller = {
  createProductReview,
  getSpecificProductReview,
};
