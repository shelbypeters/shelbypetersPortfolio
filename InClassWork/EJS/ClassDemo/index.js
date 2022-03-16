const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

const {testData} = require('./fakeData')

console.log(testData)

app.use(express.static('public'));

app.get('/', function(req,res){
    res.redirect('/home')
})

app.get('/home', function(req,res){
    res.render('home.ejs', {data: testData})
})

app.get('/about', function(req,res){
    res.render('about.ejs')
})

app.get('/contact', function(req,res){
    res.render('contact.ejs')
})

app.get('*', function(req,res){
    res.redirect('/home')
})

const port = process.env.PORT || 3000;
app.listen(port, console.log('App is running!'));