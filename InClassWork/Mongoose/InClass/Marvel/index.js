const express = require('express')
const app = express()

const mongoose = require('mongoose')
const keys = require('./config/keys')

mongoose
.connect(keys.mongoURI)
.then(() => console.log("You are connected!"))
.catch(error => console.log("Issues connectiong", error))

let characterSchema = mongoose.Schema({
    alias: {
        type: String,
        required: [true, "You must have an alias"]
    },
    fname: String,
    lname: String,
    nemesis: String,
    hero: {
        type: Boolean,
        default: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    alive: {
        type: Boolean,
        default: true
    }
})

let CharacterModel = mongoose.model("chracter", characterSchema)

// let Character = new CharacterModel({
//     alias: 'Spiderman',
//     fname: 'Peter',
//     lname: 'Parker',
//     nemesis: 'Green Goblin'
// })

// let Character = new CharacterModel({
//     alias: 'Green Goblin',
//     fname: 'Norman',
//     lname: 'Osborn',
//     nemesis: 'Spider-man',
//     hero: false,
//     alive: false
// })

let Character = new CharacterModel({
    fname: 'Mary',
    lname: 'MacPherran',
    nemesis: 'She-Hulk',
    hero: false
})

Character.save((error, character)=>{
    if(error)console.log("Error saving document to database: ", error)
    else console.log("Saved document: ", character)
})

CharacterModel.find({}, (error, characters)=>{
    if(error)console.log("Error saving document to database: ", error)
    else console.log("All documents created: ", character)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App is running'));