import { Request } from 'express';
import { OrderService as HttpService } from '../../../shared/axios';

const createOrder = async (req: Request) => {
  // connect to productService server for create Product
  const response = await HttpService.post('/order', req.body, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });

  return response;
};

const getSpecificUserOrder = async (req: Request) => {
  // connect to productService server for create Product
  const response = await HttpService.get('/order', {
    headers: {
      Authorization: req.headers.authorization,
    },
  });

  return response;
};

export const OrderService = {
  createOrder,
  getSpecificUserOrder,
};
