const express = require('express');
const app = express();

const request = require('request')

const logger = require('morgan');
app.use(logger('dev'));

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('index.ejs')
})

const key = require('./config/keys')

const baseUrl = "https://api.themoviedb.org/3"

app.get('/home', function(req, res) {
    let route = `movie/now_playing?api_key=${key.tmdb_key}&query=${req.query.movies}&page=1&include_adult=false`
    let endpoint = `${baseUrl}/${route}`
    request(endpoint, (error, response, body) =>{
        let parsedData = JSON.parse(body)
        // console.log(parsedData)
        res.render('home.ejs', {data: parsedData.results})
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App is running!'))