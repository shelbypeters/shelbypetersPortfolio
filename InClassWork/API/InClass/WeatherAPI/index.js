const express = require('express')
const app = express()

const $fetch = require('node-fetch')

const logger = require('morgan')
app.use(logger('dev'))

// use/get endpoint
// if no error - get data and parse it
//          if there is an error - handle it
//use the parsed data
//Request
//request(endpoint, cb(error, response, body)=>{
    // if no error
    //     parse the data
    //     send parsed data to client
      // handle the error
    // })

// Fetch can only be used on the front end

app.get('/', function(req, res) {
    res.redirect('/home')
})

app.get('/home', function(req, res) {
    res.render('home.ejs')
})

const baseUrl = 'https://www.metaweather.com/api/location'


app.get('/results', function(req, res) {
    let route = '2487956/'
    let endpoint = `${baseUrl}/${route}`;
    $fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data.consolidated_weather.slice[0,4])
        res.render('results.ejs', {data: data.consolidated_weather[0]})
    })
    .catch(error => console.log(error))
    // .catch(function(error){console.log(error)})
})

app.get('/london', function(req, res) {
    let route = '44418/'
    let endpoint = `${baseUrl}/${route}`;
    $fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        res.render('results.ejs', {data: data.consolidated_weather[0]})
    })
    .catch(error => console.log(error))
    // .catch(function(error){console.log(error)})
})

const port = process.env.PORT || 3000
app.listen(port, console.log('App is running!'))