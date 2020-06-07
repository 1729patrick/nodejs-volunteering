import { Router } from 'express';

const router = Router();

import UserProjectVoluntaryAreasController from '../../app/controllers/UserProjectVoluntaryAreasController';

router.get(
  '/userprojectvoluntaryareas',
  UserProjectVoluntaryAreasController.index
);
router.get(
  '/userprojectvoluntaryareas/:userprojectvoluntaryareasId',
  UserProjectVoluntaryAreasController.findOne
);
router.post(
  '/userprojectvoluntaryareas',
  UserProjectVoluntaryAreasController.store
);
router.put(
  '/userprojectvoluntaryareas/:userprojectvoluntaryareasId',
  UserProjectVoluntaryAreasController.update
);
router.delete(
  '/userprojectvoluntaryareas/:userprojectvoluntaryareasId',
  UserProjectVoluntaryAreasController.delete
);

export default router;
