import express from 'express';
import { ReviewConroller } from './review.controller';
import validateRequest from '../../middlewares/ValidateRequest';
import { ReviewZodValidation } from './review.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ReviewZodValidation.reviewSchema),
  ReviewConroller.createProductReview,
);

router.get('/:productId', ReviewConroller.getSpecificProductReview);

export const ReviewRoutes = router;
