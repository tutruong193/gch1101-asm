const express = require('express');
const LecturerModel = require('../models/LecturerModel');
const router = express.Router();

router.get('/', async(req, res) => {
    var lecturer = await LecturerModel.find();
    res.render('lecturer/list', {lecturers: lecturer});
})
router.get('/add', async(req, res) => {
    res.render('lecturer/add');
})

module.exports = router;