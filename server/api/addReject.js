const jwt = require("jwt-simple");
import Reject from '../Models/reject';
import qs from 'qs';

export default function(req,res,next){
    const reject_cost_time = qs.parse(req.body).reject_cost_time;
    const iteration_number = qs.parse(req.body).iteration_number;
    const reject_story_id = qs.parse(req.body).reject_story_id;
    const story_name = qs.parse(req.body).story_name;
    const fix_cost_time = qs.parse(req.body).fix_cost_time;
    const reject_reason = qs.parse(req.body).reject_reason;

    const post = {
        reject_story_id: reject_story_id,
        iteration_number: iteration_number,
        story_name: story_name,
        reject_cost_time:reject_cost_time,
        fix_cost_time:fix_cost_time,
        reject_reason:reject_reason

    }
    let rejectEntity = new Reject(post);
    console.log("asdsadsadasddsaasddas");
    rejectEntity.save((err,doc)=>{
      if(err){
            return res.status(500).end('create failed')
      }
          return res.status(200).json(doc)
  });
}
