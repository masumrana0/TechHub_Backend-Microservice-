import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IOrder } from './order.interface';
import { OrderService } from './order.service';
import httpStatus from 'http-status';

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const { ...productData } = req.body;
console.log(req.user);

  if (req.user && 'userId' in req.user) {
    productData.user = req.user.userId;
  }

  const result = await OrderService.createOrder(productData);

  sendResponse<IOrder>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product created successfully !',
    data: result,
  });
});

const getSpecificUserOrderHistory = catchAsync(
  async (req: Request, res: Response) => {
    if (req.user && 'userId' in req.user) {
      const result = await OrderService.getSpecificOrderHistory(
        req.user.userid,
      );

      sendResponse<IOrder[]>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product fatched successfully !',
        data: result,
      });
    }
  },
);

export const OrderController = {
  createProduct,
  getSpecificUserOrderHistory,
};
