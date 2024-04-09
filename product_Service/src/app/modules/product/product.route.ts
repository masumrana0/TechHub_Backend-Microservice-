import express from 'express';
import validateRequest from '../../middlewares/ValidateRequest';
import { ProductZodSchema } from './product.validation';
import { ProductController } from './product.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/role';

const router = express.Router();

// create product
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(ProductZodSchema),
  ProductController.createProduct,
);

// get all product implemented filtering and searching
router.get('/', ProductController.getAllProduct);

// get single product
router.get('/:productId', ProductController.getSingleProduct);

export const ProductRoutes = router;
