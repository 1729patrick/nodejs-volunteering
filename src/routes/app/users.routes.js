import { Router } from 'express';

const router = Router();

import UsersController from '../../app/controllers/UsersController';

router.get('/private/users', UsersController.index);
router.post('/private/users', UsersController.store);
router.put('/private/users/:userId', UsersController.update);
router.delete('/private/users/:userId', UsersController.delete);

export default router;
