const express = require('express');
const app = express();

const logger = require('morgan')
app.use(logger('dev'));

let messages = [
    {name: "Jim", message: "Hi, how are you?"},
    {name: "Jane", message: "How about pasta for dinner?"},
    {name: "Gary", message: "I like my pasta with butter."}
]

app.get('/', function(req,res){
    res.send('root route')
})

app.get('/messages', function(req,res){
    res.render('messages.ejs', {data: messages})
})

app.get('*', function(req,res){
    res.send('Page not found')
})

const port = process.env.PORT || 3000;
app.listen(port, console.log('App is running!'));