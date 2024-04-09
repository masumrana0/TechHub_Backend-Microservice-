import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { RatingService } from './rating.service';

// rating part
const createProductRating = catchAsync(async (req: Request, res: Response) => {
  const result = await RatingService.createRating(req);

  res.send(result);
});

const getSpecificProductRating = catchAsync(
  async (req: Request, res: Response) => {
    const result = await RatingService.getSpecificProductReting(req);
    res.send(result);
  },
);

export const RatingConroller = {
  createProductRating,
  getSpecificProductRating,
};
