import express from 'express';
import { ReviewConroller } from './review.controller';

const router = express.Router();

router.post('/', ReviewConroller.createProductReview);

router.get('/:productId', ReviewConroller.getSpecificProductReview);

export const ReviewRoutes = router;
