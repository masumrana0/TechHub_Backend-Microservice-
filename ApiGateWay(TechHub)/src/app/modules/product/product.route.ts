import express from 'express';
import { ProductController } from './product.Controller';

const router = express.Router();

router.post('/', ProductController.createProduct);

export const ProductRoutes = router;
