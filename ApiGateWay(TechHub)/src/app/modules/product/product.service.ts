import { Request } from 'express';
import { ProductService as HttpService } from '../../../shared/axios';

const createProduct = async (req: Request) => {
  // connect to productService server for create Product
  const response = await HttpService.post('/product', req.body, {
    headers: {
      Authorization: req.headers.Authorization,
    },
  });

  return response;
};

export const ProductService = {
  createProduct,
};
