import express from 'express';
import validateRequest from '../../middlewares/ValidateRequest';
import { CategoryZodSchema } from './category.validation';
import { CategoryController } from './category.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/role';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(CategoryZodSchema),
  CategoryController.createCategory,
);

router.get('/', CategoryController.getAllCategory);

export const CategoryRoutes = router;
