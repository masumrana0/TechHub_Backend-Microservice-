import express from 'express';
import { OrderController } from './order.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/role';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.getSpecificUserOrderHistory,
);

router.post('/', auth(ENUM_USER_ROLE.CUSTOMER), OrderController.createProduct);

export const orderRoutes = router;
