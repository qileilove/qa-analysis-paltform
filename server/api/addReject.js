const jwt = require("jwt-simple");
import Reject from '../Models/reject';
import qs from 'qs';

export default function(req,res,next){
    const lt_reject_cost_times = qs.parse(req.body).lt_reject_cost_times;
    const iteration_number = qs.parse(req.body).iteration_number;
    const reject_story_id = qs.parse(req.body).reject_story_id;
    const story_name = qs.parse(req.body).story_name;
    const fix_cost_time = qs.parse(req.body).fix_cost_time;
    const reject_reason = qs.parse(req.body).reject_reason;
    const one_pass = qs.parse(req.body).one_pass;
    const qa_reject_cost_times = qs.parse(req.body).qa_reject_cost_times;

    const post = {
        reject_story_id: reject_story_id,
        iteration_number: iteration_number,
        story_name: story_name,
        lt_reject_cost_times:lt_reject_cost_times,
        fix_cost_time:fix_cost_time,
        one_pass:one_pass,
        qa_reject_cost_times:qa_reject_cost_times,
        reject_reason:reject_reason

    }
    let rejectEntity = new Reject(post);
    rejectEntity.save((err,doc)=>{
      if(err){
            return res.status(500).end('create failed')
      }
          return res.status(200).json(doc)
  });
}
