const express = require('express')
const app = express()

const mongoose = require('mongoose')
const keys = require('./config/keys')

mongoose
.connect(keys.mongoURI)
.then(() => console.log("You are connected!"))
.catch(error => console.log("Issues connectiong", error))

let userSchema = mongoose.Schema({
    username: String,
    age: Number,
    favorite_pizza: String,
    created: {
        type: Date,
        default: Date.now()
    },
    member: {
        type: Boolean,
        required: [true, 'Not a member']
    }
})

let UserModel = mongoose.model("app_user", userSchema)

let User = new UserModel({
    username: 'Tommy',
    favorite_pizza: 'veggie'
})

User.save((error, user)=>{
    if(error)console.log("Error saving document to database: ", error)
    else console.log("Saved document: ", user)
})

// let characterSchema = mongoose.Schema({
//     alias: {
//         type: String,
//         required: [true, "You must have an alias"]
//     },
//     fname: String,
//     lname: String,
//     nemesis: String,
//     hero: {
//         type: Boolean,
//         default: true
//     },
//     created: {
//         type: Date,
//         default: Date.now()
//     },
//     alive: {
//         type: Boolean,
//         default: true
//     }
// })

// let CharacterModel = mongoose.model("character", characterSchema)

// let Character = new CharacterModel({
//     fname: 'Mary',
//     lname: 'MacPherran',
//     nemesis: 'She-Hulk',
//     hero: false
// })

// Character.save((error, character)=>{
//     if(error)console.log("Error saving document to database: ", error)
//     else console.log("Saved document: ", character)
// })

// CharacterModel.find({}, (error, characters)=>{
//     if(error)console.log("Error saving document to database: ", error)
//     else console.log("All documents created: ", character)
// })

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App is running'));