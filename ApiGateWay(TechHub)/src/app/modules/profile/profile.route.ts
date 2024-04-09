import express from 'express';
import { ProfileController } from './profile.Controller';

const router = express.Router();

router.patch('/', ProfileController.updateProfile);

router.get('/', ProfileController.getProfile);

export const ProfileRoutes = router;
