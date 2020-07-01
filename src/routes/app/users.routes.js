import { Router } from 'express';

const router = Router();

import UsersController from '../../app/controllers/UsersController';

router.get('/volunteering/private/users', UsersController.index);
router.post('/volunteering/private/users', UsersController.store);
router.put('/volunteering/private/users/:userId', UsersController.update);
router.delete('/volunteering/private/users/:userId', UsersController.delete);

export default router;
