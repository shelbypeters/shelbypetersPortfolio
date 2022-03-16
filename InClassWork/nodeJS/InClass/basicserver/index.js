//FOUNDATION

const express = require("express");
const app = express();

//ROUTE HANDLERS
// this is the root route
app.get('/', function(req, res) {
    res.send("I made it")
})

app.get('/cat', function(req, res) {
    res.send("I like cats!")
})

app.get('/dog', (reg, res)=>{
    res.send("I like dogs")
})

app.get('*', (req,res)=>{
    res.send("WASSSSUPPP")
})

//LISTENERS
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`App is running on ${port}`)); 
