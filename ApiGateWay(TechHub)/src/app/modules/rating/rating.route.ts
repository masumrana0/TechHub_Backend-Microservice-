import express from 'express';
import { RatingConroller } from './rating.controller';

const router = express.Router();

router.post('/', RatingConroller.createProductRating);

router.get('/:productId', RatingConroller.getSpecificProductRating);

export const RatingRoutes = router;
