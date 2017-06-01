const jwt = require("jwt-simple");
import Reject from '../Models/reject';
// const rejectEntity = new Reject();
    // let name = req.reject_story_id;

export default function(req,res,next){
 if(req.params.reject_story_id == undefined){
    Reject.find({
    },(err,result)=>{
        if(err){
            return res.status(500).end('服务器错误');
        }
        return res.status(200).json(result);
    })
 }
 else{
     Reject.findOne({"reject_story_id": req.params.reject_story_id}, function(err, result) {
       if (err){ return handleError(err);}

     return res.status(200).json(result);
   })
   }
}
