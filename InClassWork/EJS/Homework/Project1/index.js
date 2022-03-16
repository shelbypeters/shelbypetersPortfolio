const express = require('express');
const app = express();

const logger = require('morgan')
app.use(logger('dev'));

let pizza = "I like pizza with extra pineapple"
let cappuccino = "I like my cappuccino to be sweet."
let fries = "I like my fries crispy with extra salt."

app.get('/', function(req,res){
    res.render('home.ejs', {data1: pizza})
})

app.get('/about', function(req,res){
    res.render('about.ejs', {data2: cappuccino})
})

app.get('/contact', function(req,res){
    res.render('contact.ejs', {data3: fries})
})

app.get('*', function(req,res){
    res.send('Page not found')
})

const port = process.env.PORT || 3000;
app.listen(port, console.log('App is running!'));