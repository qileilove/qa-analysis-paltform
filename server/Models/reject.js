import mongoose from 'mongoose'
import db from './db'
mongoose.Promise = global.Promise

const RejectSchema = new mongoose.Schema({
    reject_story_id:String,
    iteration_number: String,
    story_name: String,
    reject_cost_time: String,
    fix_cost_time: String,
    reject_reason: String
});

export default db.model('reject',RejectSchema);
