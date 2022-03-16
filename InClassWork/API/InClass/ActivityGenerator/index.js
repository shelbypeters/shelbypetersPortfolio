const { response } = require('express');
const express = require('express');
const app = express();
const logger = require('morgan');
const $fetch = require('node-fetch')

app.use(logger('dev'));
app.use(express.static('public'))

let baseUrl = 'http://www.boredapi.com/api/activity'

app.get('/', function(req,res) {
    res.render("home.ejs")
})

app.get('/random', function(req,res) {
    let endpoint = `${baseUrl}/`
    $fetch(endpoint)
    .then(response => {
        // console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data)
        res.render('results.ejs', { data : data })
    })
    .catch(error => {
        console.log("Something went wrong getting data", error)
    })

})

app.get('/selected', function(req,res) {
    // console.log(req.query.type)
    let route = `?type=`
    let endpoint = `${baseUrl}${route}${req.query.type}`
    // console.log(endpoint)
    $fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        res.render('results.ejs', { data })
    })
    .catch(error => {
        console.log("Something went wrong getting data", error)
    })
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log("App is running"))