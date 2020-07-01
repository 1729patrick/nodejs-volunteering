import { Router } from 'express';

const router = Router();

import MotivationAreasController from '../../app/controllers/MotivationAreasController';

router.get('/volunteering/motivationareas', MotivationAreasController.index);
router.get(
  '/motivationareas/:motivationareasId',
  MotivationAreasController.findOne
);
router.post('/volunteering/motivationareas', MotivationAreasController.store);
router.put(
  '/motivationareas/:motivationareasId',
  MotivationAreasController.update
);
router.delete(
  '/motivationareas/:motivationareasId',
  MotivationAreasController.delete
);

export default router;
