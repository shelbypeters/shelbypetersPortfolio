const express = require('express');
const app = express();

const logger = require('morgan')
app.user(logger("dev"))

app.get('/', function(req,res) {
    res.send('Root Route');
});

// let req = {
//     params: {
//         something: "CAT"
//     }
// }

// req.params.something

// ALL DIFFERENT THINGS
// /:kittycat
// /:kittycat/oscar
// /kittycat/oscar

app.get('/:something', function(req,res) {
    console.log(req);
    res.send(`This is the ${req.params.something} page.`);
});

app.get('*', function(req,res) {
    res.send('No page to send');
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('App is running!'))