const express = require('express');
const {forAdd , forget , forfirstPage , forsecondPage} = require('../controllers/attendance')
const att_router = express.Router();

att_router.post('/add/attendace' , forAdd);

att_router.get('/get/attendace' , forget);

att_router.get('/getPage/attendace' , forfirstPage);

att_router.get('/home/attendace' , forsecondPage);

module.exports = att_router;