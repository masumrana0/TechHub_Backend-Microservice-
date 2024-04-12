import express from 'express';
import { RatingConroller } from './rating.controller';
import validateRequest from '../../middlewares/ValidateRequest';
import { RatingZodValidation } from './rating.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(RatingZodValidation.ratingSchema),
  RatingConroller.createProductRating,
);

router.get('/:productId', RatingConroller.getSpecificProductRating);

export const RatingRoutes = router;
