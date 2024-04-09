import express from 'express';
import { ProductController } from './product.Controller';

const router = express.Router();

router.post('/', ProductController.createProduct);
router.get('/:productId', ProductController.getOneProduct);
router.get('/', ProductController.getAllProduct);

export const ProductRoutes = router;
