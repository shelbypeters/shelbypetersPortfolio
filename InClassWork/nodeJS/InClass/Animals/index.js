const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger("dev"));

app.set("view engine", "ejs");

app.get('/', function(req,res) {
    res.send('Root Route');
});

// app.get('/:animals', function(req,res) {
//     console.log(data)
//     res.render('animals.ejs', {animals: req.params.animals});
// });

app.get('/demo', function(req,res) {
    let animals = ['dog', 'cat', 'hippo']
    res.render('demo.ejs', {data: animals});
});

app.get('/demo2', function(req,res) {
    let animals = [
        {
          breed: 'dog', 
          name: 'Spike'
        },
        {
          breed: 'cat', 
          name: 'Mr Tabby'
        },
        {
          breed: 'bird', 
          name: 'Tweety'
        }
      ]
    res.render('demo2.ejs', {data: animals});
});

app.get('/:demo/:cat', function(req,res) {
    // let dog = req.params.dog
    // let cat = req.params.cat
    let {dog, cat} = req.params
    res.render('demo3.ejs', {dog: dog, cat: cat});
});

app.get('*', function(req,res) {
    res.send('Page not found');
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('App is running!'));