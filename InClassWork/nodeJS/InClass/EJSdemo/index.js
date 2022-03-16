const express = require("express");
const app = express();
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render("home.ejs")
    // res.send("On the route")
});

app.get('/about', (req,res) => {
    res.render('about.ejs')
})

app.get('/about/:hobby', (req,res) => {
    let {hobby} = req.params
    res.render('hobby.ejs', { hobby})
})

let pets = ['alligator', 'bat', 'spider']

app.get('/animals', (req,res)=> {
    res.render('animals.ejs', {doggyHorse: pets})
})

app.get('/fullpage', (req,res)=> {
    res.render('fullpage.ejs')
})

// res.send()
// res.end()
// res.render()

const port = process.env.port || 3000;
app.listen(port, ()=> console.log(`App on ${port}`));

//Any time you are using a templating engine, you MUST have a folder called views