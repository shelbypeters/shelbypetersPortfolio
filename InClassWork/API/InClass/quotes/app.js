var needle = require('needle');
var express = require('express');
var app = express();

app.get("/", function(req,res) {
    res.render("index.ejs");
});

app.get("/quote", function(req,res) {
    needle.get('https://type.fit/api/quotes', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var obj = JSON.parse(body);
            var randomNum = Math.floor(Math.random() * obj.length)

            var text = obj[randomNum].text;
            var author = obj[randomNum].author;
            res.render("quote.ejs", {text: text, author: author});
        }
    });
});

app.listen(3000, function() {
    console.log('App is listening on PORT 3000')
})