import { Router } from 'express';

const router = Router();

import RankingController from '../../app/controllers/RankingController';

router.get('/volunteering/ranking', RankingController.index);

export default router;
