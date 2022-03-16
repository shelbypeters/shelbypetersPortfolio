const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'))

const chalk = require('chalk');

// app.get('/:num1/:num2', function(req,res){
//     let {num1, num2} = req.params
//     // let answer = num1 * num2
//     // res.send(`${answer}`)
//     res.send(`${num1 * num2}`)
// })

// app.get('/:num1/:num2', function(req,res){
//     let {num1, num2} = req.params
//         if (num1 > num2) {
//             res.send(`${num1 * num2}`)
//         } else {
//             res.send(`${Number(num1) +   Number(num2)}`)
//         }
// })

app.get('/:num1/:num2', function(req,res){
    let {num1, num2} = req.params
        if (num1 > num2) res.send(`${num1 * num2}`) 
        else res.send(`${Number(num1) + Number(num2)}`)
})



// app.get ('/', function(req,res){
//     res.send('Hello')
// })

// const port = process.env.port || 3000;
// app.listen(port, ()=> console.log(`App running on ${port}`));

const port = process.env.port || 3000;
app.listen(port, ()=> console.log(chalk.green(`App running on ${port}`)));