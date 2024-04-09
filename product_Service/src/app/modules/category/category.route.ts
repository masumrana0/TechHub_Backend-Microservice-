import express from 'express';
import validateRequest from '../../middlewares/ValidateRequest';
import { CategoryZodSchema } from './category.validation';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(CategoryZodSchema),
  CategoryController.createCategory,
);

router.get('/', CategoryController.getAllCategory);

export const CategoryRoute = router;
