import { Router } from 'express';

const router = Router();

import UsersController from '../../app/controllers/UsersController';

router.post('/volunteering/users', UsersController.store);

export default router;
