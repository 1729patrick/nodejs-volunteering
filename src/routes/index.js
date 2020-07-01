import { Router } from 'express';

const router = Router();

import AuthRoutes from './auth';
import AppRoutes from './app';
import authMiddleware from '../app/middleware/auth';

const appRoutes = AppRoutes.length ? AppRoutes : (_, __, next) => next();

router.use(AuthRoutes);

router.use(authMiddleware);
router.use(appRoutes);

export default router;
