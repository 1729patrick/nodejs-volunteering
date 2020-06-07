import { Router } from 'express';

const router = Router();

import ProjectActivitiesController from '../../app/controllers/ProjectActivitiesController';

router.get('/projectactivities', ProjectActivitiesController.index);
router.get(
  '/projectactivities/:projectactivitiesId',
  ProjectActivitiesController.findOne
);
router.post('/projectactivities', ProjectActivitiesController.store);
router.put(
  '/projectactivities/:projectactivitiesId',
  ProjectActivitiesController.update
);
router.delete(
  '/projectactivities/:projectactivitiesId',
  ProjectActivitiesController.delete
);

export default router;
