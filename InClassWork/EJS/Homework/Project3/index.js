const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger("dev"));

app.get('/', function(req,res){
    res.send('root route')
})

app.get('/home', function(req,res) {
    res.render('home.ejs');
});

app.get('/contact', function(req,res) {
    res.render('contact.ejs');
});

app.get('/about', function(req,res) {
    res.render('about.ejs');
});

app.get('*', function(req,res){
    res.send('Page not found')
})

const port = process.env.PORT || 3000;
app.listen(port, console.log('App is running!'));