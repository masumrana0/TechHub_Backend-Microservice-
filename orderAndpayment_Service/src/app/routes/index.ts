import express from 'express';
import { orderRoutes } from '../modules/Order/order.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/order',
    route: orderRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
