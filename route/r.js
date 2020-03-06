

const express = require('express');
const route = express.Router();
const studentcontroler = require('../controller/c')

route.get('/stud',studentcontroler.stud)
route.post('/stud',studentcontroler.display)


module.exports = route