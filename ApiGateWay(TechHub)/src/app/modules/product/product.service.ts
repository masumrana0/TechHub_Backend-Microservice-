import { Request } from 'express';
import { ProductService as HttpService } from '../../../shared/axios';

// product part
const createProduct = async (req: Request) => {
  // connect to productService server for create Product
  const response = await HttpService.post('/product', req.body, {
    headers: {
      Authorization: req.headers.authorization,
    },
  });
  // console.log('productservice', response);

  return response;
};

const getOneProduct = async (req: Request) => {
  // connect to productService server for create Product
  const { productId } = req.params;
  const response = await HttpService.get(`/product/${productId} `);

  return response;
};

const getAllProduct = async (req: Request) => {
  // connect to productService server for create Product
  const response = await HttpService.get(`/product`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization,
    },
  });

  return response;
};

export const ProductService = {
  createProduct,
  getOneProduct,
  getAllProduct,
};
