// Require express and initialize it
const express = require('express')
const app = express()

// Declare a port variable
const port = process.env.PORT || 3001

// Require socket.io and pass the server object to it

const io = require ('socket.io')
    (app.listen(port, function() {
        console.log('App is listening on ', port)
}))

// Breakdwon of Lines 10-13
// const io = require('socket.io')
// const server = app.listen(port)
// io(server)

app.use(express.static('client'))
// console.log(__dirname, __filename)

io.on('connection', socket => {
    console.log('A new user connection')
})

// Tell our app to use our client folder as static code

// Set up a home route and send the client folder

// Create a socket io connection and handle emissions
// that are received or to be sent out