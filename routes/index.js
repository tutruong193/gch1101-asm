var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();


router.get('/', (req, res) => {
    res.render('index', {title: 'greenwich'});
})
// router.get('/',async(req, res) =>{
//   var students = await StudentModel.find();
//   res.render('student_list',{students : students});
// });

// router.get('/delete/:id',async(req, res) =>{
//     var id = req.params.id;
//     var student = StudentModel.findById(id);
//     await StudentModel.deleteOne(student)
//     .then(()=> console.log('Student deleted successfully'))
//     .catch((err) => console.log('Error deleting',err));
//     // await StudentModel.findByIdAndDelete(id);
//     res.redirect('/');
// })

// router.get('/detail/:id',async(req, res) =>{
//   var student = await StudentModel.findById(req.params.id)
//   res.render('student_detail',{student : student});
// })
  
// router.get('/add/')

// router.get('/edit/:id')

// router.get('/drop',async(req, res) =>{
//   await StudentModel.deleteMany()
//   .then(console.log('delete all successfully'))
//   res.redirect('/');
// })

module.exports = router;
