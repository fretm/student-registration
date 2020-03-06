const express = require('express');
const app = express();
const studentrouter = require('./route/r')
const utilll =require('./util/u')
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(studentrouter)

utilll.moongconnect(()=>{
 app.listen(3000,()=>{
console.log('server running running...... ')
})})

