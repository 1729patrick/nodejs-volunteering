import { Router } from 'express';

const router = Router();

import ProjectDatesController from '../../app/controllers/ProjectDatesController';

router.get('/projectdates', ProjectDatesController.index);
router.get('/projectdates/:projectdatesId', ProjectDatesController.findOne);
router.post('/projectdates', ProjectDatesController.store);
router.put('/projectdates/:projectdatesId', ProjectDatesController.update);
router.delete('/projectdates/:projectdatesId', ProjectDatesController.delete);

export default router;
