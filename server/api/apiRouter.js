import Express from 'express';
import getItem from './getItem';
import getList from './getList';
import user from './user';
import addPost from './addPost';
import getReject from './getReject';
import editReject from './editReject';

import log from './log';
import reg from './reg';
import comment from './comment';
import vote from './vote';
import auth from '../middleware/auth';
import sortUsers from './sortUsers';
import getUserInfo from './getUserInfo';
import addReject from './addReject';

const router = Express.Router();

router.get('/post',getList);

router.post('/post',auth);

router.post('/post',addPost);

router.post('/reject',addReject);

router.get('/detail',getItem);

router.post('/log',log);

router.post('/reg',reg);

router.post('/user',user);
router.get('/getReject',getReject);
router.put('/editReject',editReject);

router.post('/comment',auth);
router.post('/comment',comment)

router.post('/vote',auth);
router.post('/vote',vote);

router.get('/sortUsers',sortUsers);

router.post('/getUserInfo',getUserInfo)
export default router;
