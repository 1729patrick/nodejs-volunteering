import { Router } from 'express';

const router = Router();

import ProjectDatesController from '../../app/controllers/ProjectDatesController';

router.get('/volunteering/projectdates', ProjectDatesController.index);
router.get(
  '/volunteering/projectdates/:projectdatesId',
  ProjectDatesController.findOne
);
router.post('/volunteering/projectdates', ProjectDatesController.store);
router.put(
  '/volunteering/projectdates/:projectdatesId',
  ProjectDatesController.update
);
router.delete(
  '/volunteering/projectdates/:projectdatesId',
  ProjectDatesController.delete
);

export default router;
