import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/', OrderController.createProduct);
router.get('/', OrderController.getSpecificUserOrderHistory);

export const orderRoutes = router;
