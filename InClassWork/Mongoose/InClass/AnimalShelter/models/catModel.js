const mongoose = require("mongoose")

const catSchema = new mongoose.Schema({
    name: {
        required: [true, "Cat needs a name!"],
        type: String
    },
    tail: Boolean,
    spayed_neutered: Boolean,
    allergies: Array
})

const Cat = mongoose.model("Cat", catSchema)

module.exports = Cat