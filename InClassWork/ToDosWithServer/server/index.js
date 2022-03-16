const express = require('express');
const app = express();

const logger = require('morgan');
// app.use(logger('dev'));

// This is our built-in body-parser
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const {todoArray} = require('./fakeData');

app.use(express.static('../client'));

app.get('/', (req,res)=> {
    res.send('Root route')
});

// 2 routes: todos & todos/<id>

//READ
app.get('/todos', (req,res)=> {
    // display todos
    res.status(200).json(todoArray)
});

//CREATE
let newID = 4;
app.post('/todos', (req,res)=> {
    // add a new todo to our list
    let newTodo = {
        id: newID++,
        description: req.body.description,
        isComplete: false
    }
    todoArray.push(newTodo)
    res.status(200).json(newTodo)
});

//DELETE
app.delete('/todos/:id', (req, res)=>{
    let requestedId = parseInt(req.params.id);
    // code that deletes our today from array
    let requestedTodoIndex = todoArray.findIndex((todo)=>{
      return requestedId === todo.id
    })
    if (requestedTodoIndex !== -1) todoArray.splice(requestedTodoIndex, 1);
    res.status(200).json(todoArray)
  })

// UPDATE
app.put("/todos/:id", (req, res) => {
    let requestedId = parseInt(req.params.id);
    let requestedTodo = todoArray.find((todo) => {
      return todo.id === requestedId;
    });
    if (requestedTodo) {
      requestedTodo.isComplete = !requestedTodo.isComplete;
      res.status(200).json(requestedTodo);
    } else {
      res.status(404).json({ message: "Id does not exist in database" });
    }
  });

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log("App is running!"));

module.exports = app