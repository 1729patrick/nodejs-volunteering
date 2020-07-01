import { Router } from 'express';

const router = Router();

import ImagesController from '../../app/controllers/ImagesController';

router.get('/volunteering/images', ImagesController.index);
router.get('/volunteering/images/:imagesId', ImagesController.findOne);
router.post('/volunteering/images', ImagesController.store);
router.put('/volunteering/images/:imagesId', ImagesController.update);
router.delete('/volunteering/images/:imagesId', ImagesController.delete);

export default router;
