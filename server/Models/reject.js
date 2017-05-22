import mongoose from 'mongoose'
import db from './db'
mongoose.Promise = global.Promise

const RejectSchema = new mongoose.Schema({
    reject_story_id:String,
    iteration_number: String,
    story_name: String,
    lt_reject_cost_times: String,
    qa_reject_cost_times:String,
    fix_cost_time: String,
    one_pass:String,
    reject_reason: String
});

export default db.model('reject',RejectSchema);
