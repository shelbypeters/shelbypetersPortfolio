import './App.css';
import { useState } from 'react'

const TodoItem = ({text}) => (
  <li>{text}</li>
)

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const handleChange = event => {
    setNewTodo(event.target.value)
  }

  const handlesSubmit = event => {
    event.preventDefault()
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    setNewTodo('')
  }

  const todoList = todos.map((todo, index) => (
    <TodoItem key={index} text={todo} />
  ));

  return (
    <div className="App">
      <h1>Simpe Todo App</h1>
      <form onSubmit={handlesSubmit}>
        <input
          className="todo-input"
          autoComplete="off"
          type="text"
          name="newTodo"
          placeholder="What needs to be done?"
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
