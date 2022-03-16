// I was able to build this without looking on my 3rd attempt!

const express = require('express')
const app = express()

app.get ('/', function(req, res) {
    res.send('Hello')
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is running in ${port}`))




















// const express = require('express');
// const app = express();

// app.get('/', function(req,res) {
//     res.send('Hello');
// });

// const port = process.env.PORT || 3000;
// app.listen(port, ()=> console.log(`App is running on ${port}`));



















// const express = require('express');
// const app = express();

// app.get('/', function(req,res) {
//     res.send('Hello');
// });

// const port = process.env.PORT || 3000;
// app.listen(port, ()=> console.log(`App is running on ${port}`))

