//FOUNDATION
const express = require("express");
const app = express();

//ROUTE HANDLERS
// this is the root route
// app.get('/', function(req, res) {
//     res.send("I made it")
// })

// app.get('/fruit', function(req, res) {
//     res.send("I like fruits")
// })

// app.get('/animals', function(req, res) {
//     res.send("I like animals")
// })

let req = {
    params: {
        something: 'doggyhorse'
    }
}

app.get('/:something', function(req, res) {
    console.log(req.params.something)
    res.send()
})

app.get('/bank/:fname/money/:number', (req, res) => {
    let {fname, number, cat, dog} = req.params;
    let str = (`hello ${req.params.fname}. You have $${req.params.number}`);
    res.send(str);
})

// app.get('/camping', function(req, res) {
//     res.send("I like camping")
// })

//LISTENERS
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`App is running on ${port}`)); 