import { Router } from 'express';

const router = Router();

import UsersController from '../../app/controllers/UsersController';

// router.get('/users', UsersController.index);
// router.get('/users/:usersId', UsersController.findOne);
router.post('/users', UsersController.store);

// router.delete('/users/:usersId', UsersController.delete);

export default router;
