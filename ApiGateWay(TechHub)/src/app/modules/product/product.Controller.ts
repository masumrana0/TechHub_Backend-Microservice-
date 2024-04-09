import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';

import { ProductService } from './product.service';

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.createProduct(req);
  console.log(result);

  //   sendResponse(res, result);
  res.send(result);
});

export const ProductController = {
  createProduct,
};
