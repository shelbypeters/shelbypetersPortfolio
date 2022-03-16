const Cat = require("../models/catModel")

const getCats = (req,res) => {
    Cat.find({})
    .then(cats => {
        console.log(cats)
        res.status(200).json({message: "You got some cats!", cats: cats})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "There was a problem with the server"})
    })
}

const getCat = (req,res) => {
    let id = req.params.id

    Cat.findById(id)
    .then(cat => {
        console.log(cat)
        res.status(200).json({message: `You got a cat with the id of ${id}`, cat: cat})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "There was a problem with the server"})
    })
}

const createCat = (req,res) => {
    // console.log(req.body)
    const newCat = new Cat(req.body)

    newCat
    .save()
    .then(cat => {
        res.status(201).json({message: "Cat has been created!", cat: cat})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "There was a problem with the server"})
    })
}

const deleteCat = (req,res) => {
    let id = req.params.id
    Cat.findByIdAndDelete(id)
    .then(cat => {
        res.status(200).json({message: `You deleted a cat with the id ${id}`, cat: cat})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "There was a problem with the server"})
    })
    
}

module.exports = {
    getCats: getCats,
    getCat: getCat,
    createCat: createCat,
    deleteCat: deleteCat
}