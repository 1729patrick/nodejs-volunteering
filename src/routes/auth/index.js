import { Router } from 'express';

import SessionsRoutes from './sessions.routes';
import UsersRoutes from './users.routes';

const router = Router();

router.use(SessionsRoutes);
router.use(UsersRoutes);

export default router;
