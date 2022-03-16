const express = require("express")
const { appendFile } = require("fs")
const { getPackedSettings } = require("http2")
const router = express.Router()
const {getCats, getCat, createCat, deleteCat} = require("../controllers/catControllers")

// *GET /cats
router.get('/', getCats)

// *GET /cats/:id
router.get('/:id', getCat)

// *POST /cats
router.post("/", createCat)

// *DELETE /cats/:id
router.delete("/:id", deleteCat)

module.exports = router