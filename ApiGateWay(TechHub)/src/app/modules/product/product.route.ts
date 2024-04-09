import express from 'express';
import { ProductController } from './product.Controller';
import validateRequest from '../../middlewares/ValidateRequest';
import { ProductValidationSchema } from './product.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ProductValidationSchema.productSchema),
  ProductController.createProduct,
);
router.get('/:productId', ProductController.getOneProduct);
router.get('/', ProductController.getAllProduct);

export const ProductRoutes = router;
