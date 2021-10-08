import React from 'react'
// import './App.css';
import { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton } from './components'

const todos = [
  { id: 1, text: 'Create New Todo', completed: false },
  { id: 2, text: 'Create New Todo 2', completed: false },
  { id: 3, text: 'Create New Todo 3', completed: false },
  { id: 4, text: 'Create New Todo 4', completed: false },
  // { id: 5, text: 'Create New Todo 3', completed: false },
  // { id: 6, text: 'Create New Todo 3', completed: false },
  // { id: 7, text: 'Create New Todo 3', completed: false },
  // { id: 8, text: 'Create New Todo 3', completed: false },
  // { id: 9, text: 'Create New Todo 3', completed: false },
  // { id: 10, text: 'Create New Todo 3', completed: false },
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
