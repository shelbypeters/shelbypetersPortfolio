const express = require('express');
const app = express();

const request = require('request');

const logger = require('morgan')
app.use(logger('dev'))

const key = require('./config/keys')

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('home.ejs')
})

// Endpoint: baseUrl and Route

const baseUrl = "https://api.themoviedb.org/3"

app.get('/getMovies', function(req, res) {
    let route = `search/movie?api_key=${key.tmdb_key}&query=${req.query.doggyHorse}&page=1&include_adult=false`
    let endpoint = `${baseUrl}/${route}`

    // get/use our endpoint
    // if everything ok - get data that needs to be parsed
    //             not ok - handle errors
    // use the parsed data
    
    request(endpoint, (error, response, body) =>{
        let parsedData = JSON.parse(body)
        // console.log(parsedData)
        res.render('results.ejs', {data: parsedData.results})
    })
})

const port = process.env.PORT || 3000
app.listen(port, console.log('App is running'))