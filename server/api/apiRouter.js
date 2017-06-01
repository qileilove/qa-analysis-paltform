import Express from 'express';

import getReject from './getReject';

import editReject from './editReject';

import addReject from './addReject';

const router = Express.Router();

router.post('/reject',addReject);
router.get('/reject/:reject_story_id',addReject);
router.get('/getReject',getReject);
router.put('/editReject',editReject);

export default router;
