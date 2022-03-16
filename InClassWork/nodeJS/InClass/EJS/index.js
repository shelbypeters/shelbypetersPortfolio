const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger("dev"));

app.use(express.static('public'))

app.get('/', function(req,res) {
    // res.send('Root route');
    res.redirect('/home')
});

app.get('/home', function(req,res) {
    res.render('home.ejs');
});

app.get('/contact', function(req,res) {
    res.render('contact.ejs');
});

app.get('/about', function(req,res) {
    res.render('about.ejs');
});

app.get('*', function(req,res) {
    res.render('error.ejs');
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`App running on ${port}`))