import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { ProductService } from './product.service';
import { IProduct } from './product.interface';
import httpStatus from 'http-status';
import sendResponse, { IGenericResponse } from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { productFilterAbleFields } from './product.constant';
import { paginationFields } from '../../../constant/pagination';

// create product
const createProduct = catchAsync(async (req: Request, res: Response) => {
  const { ...productData } = req.body;
  console.log(productData);

  const result = await ProductService.createProduct(productData);

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product created successfully !',
    data: result,
  });
});

// get all product with implemented searching and filtering
const getAllProduct = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, productFilterAbleFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await ProductService.getAllProduct(filters, paginationOptions);

  sendResponse<IGenericResponse<IProduct[]>>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products fatched successfully !',
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.productId;
  const result = await ProductService.getSingleProduct(id);

  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product fatched successfully !',
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
};
