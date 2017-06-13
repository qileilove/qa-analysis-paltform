import Express from 'express';

import getReject from './getReject';

import editReject from './editReject';

import addReject from './addReject';
var logger  from 'morgan';

const router = Express.Router();
router.use(logger());

router.post('/reject',addReject);
router.get('/getReject/:reject_story_id',getReject);
router.get('/getReject',getReject);
router.put('/editReject',editReject);

export default router;
