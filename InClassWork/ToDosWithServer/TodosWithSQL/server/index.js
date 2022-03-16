const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

// this is our built-in body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const { todoArray } = require("./fakeData");

app.use(express.static("../client"));

const { Client } = require('pg')
const keys = require('./config/keys')
const conn = new Client(keys)

conn.connect()
.then(() => console.log(`Connected to ${keys.database} database`))
.catch(err => console.log('Error connecting to database', err));

// mongoose.connect(keys.mongoURI)
// .then(()=> console.log('Connected to the mongo database'))
// .catch(err => console.log('Error connecting to database', err))

app.get("/", (req, res) => {
  res.send("Root route");
});

// Write Queries

const userId = 33;

// Read - GET
app.get("/todos", (req, res) => {
  let bunny = `SELECT 
                id AS _id,
                description,
                iscomplete AS "isComplete"
                FROM todos
                WHERE user_id = ${userId};`
  conn.query(bunny)
  .then(todos => res.status(200).json(todos.rows))
  .catch(err => {
    console.log(err)
    res.status(400).json("There is an error reading from db", err)})


  // TodoModel.find({}, (err, results)=> {
  //   if(err) {
  //     console.log("There is an error reading from db")
  //     res.status(400).json("There is an error reading from db")
  //   } else {
  //     // display todos
  //     if (results.length > 0) {
  //       res.status(200).json(results);
  //     } else {
  //       res.status(200).json({ message: "You ain't got no todos!!" });
  //     }
  //   }
  // })
});

// Create - POST
// let newId = 4; DELETE: not needed
app.post("/todos", (req, res) => {
  let kittycat = `INSERT INTO hr.todos
                  (description, iscomplete, user_id)
                  VALUES('${req.body.description}', false, ${userId})
                  RETURNING *;`;
  conn.query(kittycat)
  .then(todo => {
    console.log(todo.rows)
    res.status(200).json(todo.rows[0])
  })
  .catch(err => {
    console.log(`Error posting data to database`, err)
    res.status(400).json("There is an error posting to db", err)
  })



  // let newTodo = new TodoModel({
  //   description: req.body.description,
  // })

  // newTodo.save((err, result)=>{
  //   if(err){
  //     console.log("Error adding to db", err)
  //     res.status(400).json("There is an error posting to db")
  //   } else {
  //     console.log("Success: ", result)
  //     res.status(200).json(result);
  //   }
  // })
});

// Delete - DELETE
app.delete("/todos/:id", (req, res) => {
  let doggy = `DELETE FROM hr.todos
                WHERE id = ${req.params.id}
                RETURNING *;`
  conn.query(doggy)
  .then(todo => {
    console.log(todo.rows)
    res.status(200).json(todo.rows[0])
  })
  .catch(err => {
    console.log(`Error deleting data from database`, err)
    res.status(400).json("There is an error deleting from db", err)
  })

  // let requestedId = req.params.id;
  // TodoModel.findByIdAndDelete(requestedId, (err, result) => {
  //   if (err) {
  //     console.log("Error deleting data from db", err);
  //     res.status(400).json("Error deleting data from db");
  //   } else {
  //     console.log("Result: ", result);
  //     res.status(200).json(result);
  //   }
  // });
});

// Update - PUT
app.put("/todos/:id", (req, res) => {
  let birdy = `UPDATE hr.todos
                  SET iscomplete = NOT iscomplete
                WHERE id = ${req.params.id}
                  AND user_id = ${userId}
                RETURNING *;`;
  conn.query(birdy)
  .then(todo => {
    console.log(todo.rows)
    res.status(200).json(todo.rows[0])
  })
  .catch(err => {
    console.log(`Error updating data from database`, err)
    res.status(400).json("There is an error updating from db", err)
  })

  // let requestedId = req.params.id;
  // TodoModel.findById(requestedId, (error, result) => {
  //   if (error) {
  //     console.log("Error finding and updating to db", error);
  //     res.status(400).json("Error updating to db");
  //   } else {
  //     result.isComplete = !result.isComplete;
  //     result.save((err, updatedTodo) => {
  //       if (err) {
  //         console.log("Error updating document", err);
  //         res.status(400).json("Error updating document");
  //       } else {
  //         res.status(200).json(updatedTodo);
  //       }
  //     });
  //   }
  // });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
