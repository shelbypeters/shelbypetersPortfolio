import { useEffect, useState } from 'react'
import './App.css';

// generates the li element and all its attributes
const TodoItem = ({todoObj, toggleComplete, handleDelete}) => (
  <div>
    <li 
      onClick={toggleComplete} 
      className={todoObj.isComplete ? "completed" : "not"}
    >
      {todoObj.description}
    </li>
    <span onClick={() => {handleDelete(todoObj.id)}}>X</span>
  </div>
)

// Holder of the render (look for return statement) and the state (todos, newTodo)
function App() {
  // url for the API
  const url = 'https://acctodos.herokuapp.com/user/1/todos'
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   description: "Hike Patagonia",
    //   isComplete: true
    // }, 
    // {
    //   id: 2,
    //   description: "View Earth from Space",
    //   isComplete: false
    // }
  ])
  const [newTodo, setNewTodo] = useState('')

  // provides 2 way binding between the input element and the state:newTodo
  const handleChange = event => {
    setNewTodo(event.target.value)
  }

  // transfers the newTodo to the todos Array (system of record within the React app)
  const handleSubmit = event => {
    event.preventDefault()
    const newTodos = [...todos, { id: Date.now(), description: newTodo, isComplete: false}]
    setTodos(newTodos)
    setNewTodo('')
  }
  
  // it changes the state by flipping the isComplete property of the clicked todo
  const handleClick = id => {
    // inform the backend
    fetch(url+'/'+id, {method: 'PUT'})
    .then(responseObject => responseObject.json())
    .then(() => {
    // now tell the frontend that the status has flipped
    // update the state with the appropriate todo item's completion property flipped
    // update the state
      setTodos(todosArray => {
        let copyOfTodos = [...todosArray];
        // find the relevant todo object using the id
        let clickedTodoIndex = copyOfTodos.findIndex(t => t.id === id);
        // change it's isComplete
        copyOfTodos[clickedTodoIndex].isComplete = !copyOfTodos[clickedTodoIndex].isComplete;
        return copyOfTodos;
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  // it is run as an effect (impure action)
  useEffect(() => {
    // here we shall make the API GET call
    console.log('I am in the useEffect function')
    fetch('https://acctodos.herokuapp.com/user/1/todos')
    .then(responseObject => responseObject.json())
    .then(todosArray => {
      setTodos([...todosArray])
    })
  }, [])

  // it changes the state by removing the specific todo with the matching id
  const handleDelete = id => {
    setTodos(todosArray => {
      return todosArray.filter(t => {
        return t.id !== id
      })
    })
  }

  // generates a list of TodoItem's
  const todoList = todos.map(todoObj => (
    <TodoItem 
      key={todoObj.id} 
      todoObj={todoObj}
      handleDelete={handleDelete}
      toggleComplete={() => {
        handleClick(todoObj.id)
      }} 
    />
  ));

  console.log('I am running App()')

  // sends the JSX generated for rendering
  return (
    <div className="App">
      <h1>My Bucket List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          className="todo-input"
          autoComplete="off"
          type="text"
          name="newTodo"
          placeholder="My next bucket list item"
          onChange={handleChange}
          value={newTodo}
        />
        <button type="submit" className="save-button">SAVE</button>
      </form>
      <div className="todo-content">
        <ol>
          { todoList }
        </ol>
      </div>
    </div>
  );
}

export default App;
