const express = require('express');
const app = express();
const logger = require('morgan');
const $fetch = require('node-fetch')

app.use(logger('dev'))
app.use(express.static('public'))

let baseURL = 'https://www.boredapi.com/api/activity'


app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/random', (req, res) => {
    let endpoint = `${baseURL}/`
    $fetch(endpoint)
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data)
        res.render('results.ejs', { data })
    })
    .catch()

})

app.get('/selected', (req, res) => {
    // console.log(req.query.type)
    let route = `?type=`
    let endpoint = `${baseURL}${route}${req.query.type}`
    // console.log(endpoint)
    $fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        res.render('results.ejs', { data })
    })
    .catch()
    
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {console.log(`App is listening on port ${PORT}`)})