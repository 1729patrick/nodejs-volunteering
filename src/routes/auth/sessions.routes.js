import { Router } from 'express';

const router = Router();

import SessionController from '../../app/controllers/SessionController';

router.post('/volunteering/sessions', SessionController.store);

export default router;
