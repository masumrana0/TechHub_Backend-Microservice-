import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post('/login', AuthController.loginUser);

router.post('/change-password', AuthController.loginUser);

router.post('/refresh-token', AuthController.refreshToken);

router.post('/admin/register', AuthController.adminRegistration);

router.post('/customer/register', AuthController.customerRegistration);

export const authRoutes = router;
