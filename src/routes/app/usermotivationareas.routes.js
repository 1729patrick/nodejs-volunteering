import { Router } from 'express';

const router = Router();

import UserMotivationAreasController from '../../app/controllers/UserMotivationAreasController';

router.get(
  '/volunteering/usermotivationareas',
  UserMotivationAreasController.index
);
router.get(
  '/usermotivationareas/:usermotivationareasId',
  UserMotivationAreasController.findOne
);
router.post(
  '/volunteering/usermotivationareas',
  UserMotivationAreasController.store
);
router.put(
  '/usermotivationareas/:usermotivationareasId',
  UserMotivationAreasController.update
);
router.delete(
  '/usermotivationareas/:usermotivationareasId',
  UserMotivationAreasController.delete
);

export default router;
