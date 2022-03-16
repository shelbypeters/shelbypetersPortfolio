const express = require('express')
const app = express()
const logger = require('morgan')
app.use(logger('dev'))

app.get('/', function(req,res) {
    res.send('Root route')
})

// 1) Make a connection
    // a) mongo URI
    // b) options

const mongoose = require('mongoose')
const keys = require("./config/keys")

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("You are connected!"))
.catch(error => console.log("Issues connectiong", error))

// 2) Build blueprints
//      a) Schema
//      b) Model


let characterSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String
})

let CharacterModel = mongoose.model("character", characterSchema)

// let Character = new CharacterModel({
//     name: "Jerry",
//     age: 45,
//     email: "jerryS@gmail.com"
// })

let Character = new CharacterModel({
    name: "Kramer",
    age: 34,
    email: "cosmo@gmail.com"
})

// 3) Write queries
    // a) Create
    // b) Read
    // c) Update - not in this demo
    // d) Delete - not in this demo

// Character.save((err, character) => {
//     if(err) {
//         console.log("error: ", error)
//     } else {
//         console.log(character)
//     }
// })

// CharacterModel.create({
//     name: "Elaine",
//     age: 56,
//     email: "elainebenes@gmail.com"
//     }, 
//     (err, character) => {
//     if(err) {
//         console.log("error: ", err)
//     } else {
//         console.log(character)
//     }
// })

CharacterModel.find({}, (err, characters)=> {
    if(err) {
        console.log("Error: ", err)
    } else {
        console.log(characters)
    }
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App is running'));