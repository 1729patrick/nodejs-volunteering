export default `import { Router } from 'express';

const router = Router();

import {{name}}Controller from '../../app/controllers/{{name}}Controller';

router.get('/volunteering/{{model}}s', {{name}}Controller.index);
router.get('/volunteering/{{model}}s/:{{model}}Id', {{name}}Controller.findOne);
router.post('/volunteering/{{model}}s', {{name}}Controller.store);
router.put('/volunteering/{{model}}s/:{{model}}Id', {{name}}Controller.update);
router.delete('/volunteering/{{model}}s/:{{model}}Id', {{name}}Controller.delete);

export default router;`;
