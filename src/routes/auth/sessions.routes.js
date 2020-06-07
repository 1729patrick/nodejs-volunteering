import { Router } from 'express';

const router = Router();

import SessionController from '../../app/controllers/SessionController';

router.post('/sessions', SessionController.store);

export default router;
