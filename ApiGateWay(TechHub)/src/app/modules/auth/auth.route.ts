import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/ValidateRequest';
import { authValidationSchema } from './auth.validation';

const router = express.Router();

router.post(
  '/login',
  validateRequest(authValidationSchema.userLoginZodSchema),
  AuthController.loginUser,
);

router.post(
  '/change-password',
  validateRequest(authValidationSchema.changePasswordZodSchema),
  AuthController.changePassword,
);

router.post(
  '/refresh-token',
  validateRequest(authValidationSchema.refreshTokenZodSchema),
  AuthController.refreshToken,
);

router.post(
  '/admin/register',
  validateRequest(authValidationSchema.adminRegisterZodSchema),
  AuthController.adminRegistration,
);

router.post(
  '/customer/register',
  validateRequest(authValidationSchema.customerRegisterZodSchema),
  AuthController.customerRegistration,
);

export const authRoutes = router;
