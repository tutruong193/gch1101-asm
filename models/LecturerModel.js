const mongoose = require('mongoose');
const LecturerSchema = mongoose.Schema(
    {
        lecturer_name: String,
        lecturer_subject: String,
        lecturer_age: Number,
        lecturer_img: String,
        lecturer_gender: String,
    }
)
const LecturerModel = mongoose.model('LECTURER', LecturerSchema, 'lecturer')
module.exports = LecturerModel