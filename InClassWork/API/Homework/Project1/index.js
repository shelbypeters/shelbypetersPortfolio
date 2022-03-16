const express = require('express');
const app = express();

const request = require('request')

const logger = require('morgan')
app.use(logger('dev'));

app.get('/', function(req,res) {
    res.render('index.ejs', {price: ""})
});

const baseUrl = "https://api.coindesk.com"
const route = "/v1/bpi/currentprice.json"


app.get('/getCoin', (req,res) => {
    let endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json"
    // let endpoint = `${baseUrl}/${route}`
    request(endpoint, (error, response, body) => {
        let parsedData = JSON.parse(body);
        // .parse converts JSON data to an object
        // console.log(parsedData.bpi)
        // console.log(parsedData.bpi["EUR"])
        // console.log(parsedData.bpi["USD"])
        // console.log(parsedData.bpi["GBP"])
        // .bpi is a key in the API object
        console.log(parsedData.bpi[req.query.country])
        res.render('index.ejs', {price: parsedData.bpi[req.query.country]})
    })
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App is running!'))
