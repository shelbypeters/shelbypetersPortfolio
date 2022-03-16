const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

// this is our built-in body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { todoArray } = require("./fakeData");

app.use(express.static("../client"));

const mongoose = require('mongoose')
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI)
.then(()=> console.log('Connected to the mongo database'))
.catch(err => console.log('Error connecting to database', err))

let todoSchema = mongoose.Schema({
  description: String,
  isComplete: {
    type: Boolean,
    default: false
  }
})

let TodoModel = mongoose.model("todos", todoSchema)

app.get("/", (req, res) => {
  res.send("Root route");
});

// Read - GET
app.get("/todos", (req, res) => {
  TodoModel.find({}, (err, results)=> {
    if(err) {
      console.log("There is an error reading from db")
      res.status(400).json("There is an error reading from db")
    } else {
      // display todos
      if (results.length > 0) {
        res.status(200).json(results);
      } else {
        res.status(200).json({ message: "You ain't got no todos!!" });
      }
    }
  })
});

// Create - POST
// let newId = 4; DELETE: not needed
app.post("/todos", (req, res) => {
  let newTodo = new TodoModel({
    description: req.body.description,
  })

  newTodo.save((err, result)=>{
    if(err){
      console.log("Error adding to db", err)
      res.status(400).json("There is an error posting to db")
    } else {
      console.log("Success: ", result)
      res.status(200).json(result);
    }
  })
});

// Delete - DELETE
app.delete("/todos/:id", (req, res) => {
  let requestedId = req.params.id;
  TodoModel.findByIdAndDelete(requestedId, (err, result) => {
    if (err) {
      console.log("Error deleting data from db", err);
      res.status(400).json("Error deleting data from db");
    } else {
      console.log("Result: ", result);
      res.status(200).json(result);
    }
  });
});

// Update - PUT
app.put("/todos/:id", (req, res) => {
  let requestedId = req.params.id;
  TodoModel.findById(requestedId, (error, result) => {
    if (error) {
      console.log("Error finding and updating to db", error);
      res.status(400).json("Error updating to db");
    } else {
      result.isComplete = !result.isComplete;
      result.save((err, updatedTodo) => {
        if (err) {
          console.log("Error updating document", err);
          res.status(400).json("Error updating document");
        } else {
          res.status(200).json(updatedTodo);
        }
      });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
