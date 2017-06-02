const jwt = require("jwt-simple");
import Reject from '../Models/reject';
import qs from 'qs';

// const rejectEntity = new Reject();
    // let name = req.reject_story_id;

export default function(req,res,next){
//get all data
 if(qs.parse(req.query).reject_story_id == undefined){

    Reject.find({
    },(err,result)=>{
        if(err){
            return res.status(500).end('服务器错误');
        }

        return res.status(200).json(result);
    })
 }
 // get data by reject_story_id
 else{
   let query_story_id ={ reject_story_id:qs.parse(req.query).reject_story_id};

     Reject.findOne(query_story_id, function(err, result) {
       if (err){ return handleError(err);}

     return res.status(200).json(result);
   })
   }
}
