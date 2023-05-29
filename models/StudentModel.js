const mongoose = require('mongoose')
const StudentSchema = mongoose.Schema({
    name: String,
    dob: Date,
    gender: String,
    gpa: String,
    ava: String,
})
const StudentModel = mongoose.model('student', StudentSchema,'student') //student 2 la ten cuar collection
module.exports = StudentModel;