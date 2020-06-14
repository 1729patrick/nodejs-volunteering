import { Router } from 'express';

const router = Router();

import ProjectMembersController from '../../app/controllers/ProjectMembersController';

router.get('/projectmembers', ProjectMembersController.index);
router.get(
  '/projectmembers/:projectmembersId',
  ProjectMembersController.findOne
);
router.post('/projectmembers', ProjectMembersController.store);
router.put(
  '/projectmembers/:projectmembersId',
  ProjectMembersController.update
);
router.delete('/projectmembers/:project_id', ProjectMembersController.delete);

export default router;
