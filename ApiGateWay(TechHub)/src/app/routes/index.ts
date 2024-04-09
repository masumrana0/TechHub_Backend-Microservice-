import express from 'express';
import { authRoutes } from '../modules/auth/auth.route';
import { ProductRoutes } from '../modules/product/product.route';
import { ReviewRoutes } from '../modules/review/review.route';
import { RatingRoutes } from '../modules/rating/rating.route';
import { ProfileRoutes } from '../modules/profile/profile.route';
import { OrderRoutes } from '../modules/order/order.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/order',
    route: OrderRoutes,
  },
  {
    path: '/profile',
    route: ProfileRoutes,
  },
  {
    path: '/product',
    route: ProductRoutes,
  },
  {
    path: '/review',
    route: ReviewRoutes,
  },
  {
    path: '/rating',
    route: RatingRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
