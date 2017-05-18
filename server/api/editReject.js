import Reject from '../Models/reject';
import qs from 'qs';
export default function(req,res,next){
  let update = req.body;
  let query_story_id ={ reject_story_id:qs.parse(req.query).reject_story_id};
  console.log(query_story_id);

  Reject.findOneAndUpdate(query_story_id, {$set:update}, {new: true}, function(err, doc){
      if(err){
          console.log("Something wrong when updating data!");
      }
      return res.status(200).json(doc)
  });
}
