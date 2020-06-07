import { Router } from 'express';

const router = Router();

import CompaniesController from '../../app/controllers/CompaniesController';

router.get('/companiess', CompaniesController.index);
router.get('/companiess/:companiesId', CompaniesController.findOne);
router.post('/companiess', CompaniesController.store);
router.put('/companiess/:companiesId', CompaniesController.update);
router.delete('/companiess/:companiesId', CompaniesController.delete);

export default router;