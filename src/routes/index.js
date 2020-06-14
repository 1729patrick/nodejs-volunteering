import { Router } from 'express';

const router = Router();

import AuthRoutes from './auth';
import AppRoutes from './app';
import authMiddleware from '../app/middleware/auth';
import UsersController from '../app/controllers/UsersController';

const appRoutes = AppRoutes.length ? AppRoutes : (_, __, next) => next();

router.use(AuthRoutes);

router.use(authMiddleware);
router.put('/users', UsersController.update);
router.use(appRoutes);

export default router;
