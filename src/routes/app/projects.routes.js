import { Router } from 'express';

const router = Router();

import ProjectsController from '../../app/controllers/ProjectsController';

router.get('/projects/:type', ProjectsController.index);
router.get('/projects/:projectsId', ProjectsController.findOne);
router.post('/projects', ProjectsController.store);
router.put('/projects/:projectsId', ProjectsController.update);
router.delete('/projects/:projectsId', ProjectsController.delete);

export default router;
