import mongoose from 'mongoose'

const {Schema} = mongoose;
const attendanceSchema = new Schema({
    userId: String,
    month: String,
    present: Number,
    cl: Number,
    sl: Number
})

export default  mongoose.model('Attendancde', attendanceSchema)