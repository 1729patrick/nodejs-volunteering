import { Router } from 'express';

const router = Router();

import ImagesController from '../../app/controllers/ImagesController';

router.get('/images', ImagesController.index);
router.get('/images/:imagesId', ImagesController.findOne);
router.post('/images', ImagesController.store);
router.put('/images/:imagesId', ImagesController.update);
router.delete('/images/:imagesId', ImagesController.delete);

export default router;
