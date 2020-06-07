import { Router } from 'express';

const router = Router();

import ImagesController from '../../app/controllers/ImagesController';

router.get('/imagess', ImagesController.index);
router.get('/imagess/:imagesId', ImagesController.findOne);
router.post('/imagess', ImagesController.store);
router.put('/imagess/:imagesId', ImagesController.update);
router.delete('/imagess/:imagesId', ImagesController.delete);

export default router;