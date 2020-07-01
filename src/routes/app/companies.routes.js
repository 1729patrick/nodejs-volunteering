import { Router } from 'express';

const router = Router();

import CompaniesController from '../../app/controllers/CompaniesController';

router.get('/volunteering/companiess', CompaniesController.index);
router.get(
  '/volunteering/companiess/:companiesId',
  CompaniesController.findOne
);
router.post('/volunteering/companiess', CompaniesController.store);
router.put('/volunteering/companiess/:companiesId', CompaniesController.update);
router.delete(
  '/volunteering/companiess/:companiesId',
  CompaniesController.delete
);

export default router;
