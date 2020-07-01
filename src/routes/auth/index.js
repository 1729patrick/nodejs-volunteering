import { Router } from 'express';

import SessionsRoutes from './sessions.routes';
import UsersRoutes from './users.routes';
import ProjectsRoutes from './projects.routes';

const router = Router();

router.use(SessionsRoutes);
router.use(UsersRoutes);
router.use(ProjectsRoutes);

export default router;
