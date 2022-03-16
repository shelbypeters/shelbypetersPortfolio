const express = require('express')
const app = express()

const logger = require('morgan')
app.use(logger('dev'))

const request = require('request')
app.use(express.static('public'))

let image = `https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg`;

// https://dog.ceo/api/breeds/image/random

app.get('/', (req, res)=>{
  res.render('index.ejs', {image})
})

// HTTP requests
// 1) know/use and endpoint - DONE
// 2) if there i no error, get data - DONE
//      2.a) if there IS an error - handle the error
// 3) parse the data - DONE
// 4) use the the parsed data - DONE

const baseUrl = "https://dog.ceo/api"
const route = "breeds/image/random"

app.get('/getImage', (req, res)=>{
  let endpoint = `${baseUrl}/${route}`
  request(endpoint, (error, response, body)=>{
    if(!error && response.statusCode == 200){
      let parsedData = JSON.parse(body)
      res.render('index.ejs', {image: parsedData.message})
    } else {
      res.render('error.ejs', {error: "Something doggone funny happened"})
    }
  })
})


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`App on port ${PORT}`))
