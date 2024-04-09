import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { OrderService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.createOrder(req);
  res.send(result);
});

const getSpecificUserOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getSpecificUserOrder(req);
  res.send(result);
});

export const OrderController = {
  createOrder,
  getSpecificUserOrder,
};
