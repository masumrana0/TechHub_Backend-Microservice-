import express from 'express';
import { ReviewRoutes } from '../modules/review/review.route';
import { RatingRoutes } from '../modules/rating/raing.route';
import { FQARoutes } from '../modules/FQA/fqa.route';
import { ProductRoutes } from '../modules/product/product.route';
import { CategoryRoutes } from '../modules/category/category.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/category',
    route: CategoryRoutes,
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
  {
    path: '/fqa',
    route: FQARoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
