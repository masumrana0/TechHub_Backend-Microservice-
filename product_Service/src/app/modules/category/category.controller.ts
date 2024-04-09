import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ICategory } from './category.interface';
import httpStatus from 'http-status';
import { CategoryService } from './category.service';

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body;

  const result = await CategoryService.createCategory(data);
  sendResponse<ICategory>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully !',
    data: result,
  });
});

const getAllCategory = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body;

  const result = await CategoryService.getAllCategory();
  sendResponse<ICategory[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories fatched successfully !',
    data: result,
  });
});

export const CategoryController = {
  createCategory,
  getAllCategory,
};
