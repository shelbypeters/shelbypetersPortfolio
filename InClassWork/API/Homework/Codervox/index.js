const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

const request = require('request');

app.use(express.static('public'))

app.get('/', function(req,res) {
    res.render('index.ejs');
});

app.get('/quote', function(req,res) {
    request.get('https://type.fit/api/quotes', function(error, response, body) {
        if(!error && response.statusCode == 200){
            let obj = JSON.parse(body);
            let randomNum = Math.floor(Math.random() * obj.length)

            let text = obj[randomNum].text;
            let author = obj[randomNum].author;
            res.render('quote.ejs', {text: text, author: author})
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, console.log('App is running!'));