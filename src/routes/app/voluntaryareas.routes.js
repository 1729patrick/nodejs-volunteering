import { Router } from 'express';

const router = Router();

import VoluntaryAreasController from '../../app/controllers/VoluntaryAreasController';

router.get('/volunteering/voluntaryareas', VoluntaryAreasController.index);
router.get(
  '/voluntaryareas/:voluntaryareasId',
  VoluntaryAreasController.findOne
);
router.post('/volunteering/voluntaryareas', VoluntaryAreasController.store);
router.put(
  '/voluntaryareas/:voluntaryareasId',
  VoluntaryAreasController.update
);
router.delete(
  '/voluntaryareas/:voluntaryareasId',
  VoluntaryAreasController.delete
);

export default router;
