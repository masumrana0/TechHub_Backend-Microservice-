import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { ProductService } from './product.service';

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.createProduct(req);

  res.send(result);
});

const getOneProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getOneProduct(req);
  res.send(result);
});

const getAllProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getAllProduct(req);
  res.send(result);
});

export const ProductController = {
  createProduct,
  getOneProduct,
  getAllProduct,
};
