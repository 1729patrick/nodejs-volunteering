import { Router } from 'express';

const router = Router();

import UsersController from '../../app/controllers/UsersController';

router.post('/users', UsersController.store);

export default router;
