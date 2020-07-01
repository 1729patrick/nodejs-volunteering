import { Router } from 'express';

const router = Router();

import ProjectsController from '../../app/controllers/ProjectsController';

router.get('/volunteering/public/projects/:type', ProjectsController.index);

export default router;
