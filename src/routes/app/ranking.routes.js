import { Router } from 'express';

const router = Router();

import RankingController from '../../app/controllers/RankingController';

router.get('/ranking', RankingController.index);

export default router;
