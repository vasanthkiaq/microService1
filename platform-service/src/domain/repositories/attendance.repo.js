import AttendanceModel from "../models/AttendanceModel.js";

export default class AttendanceRepository {
    async create(payload) {
        const attendance = new AttendanceModel(payload);
        await attendance.save();
        return attendance;
    } 
    async findByUserIdAndMonth(userId, month) {
        return AttendanceModel.findOne({ userId, month }).exec();   //Regular expression to find user by userId and month
    }
    async updateById(id, updateData) {
        return AttendanceModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    }
    async findByUserId(userId) {
        return AttendanceModel.find({ userId }).exec();
    }   
    async findAll() {
        return AttendanceModel.find().exec();
    }
}