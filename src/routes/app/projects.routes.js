import { Router } from 'express';

const router = Router();

import ProjectsController from '../../app/controllers/ProjectsController';

router.get('/volunteering/projects/:type', ProjectsController.index);
router.post('/volunteering/projects', ProjectsController.store);
router.put('/volunteering/projects/:projectsId', ProjectsController.update);
router.delete('/volunteering/projects/:projectsId', ProjectsController.delete);

export default router;
