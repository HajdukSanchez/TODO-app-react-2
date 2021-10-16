import React, { useState } from 'react'
import { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton } from './components'

const defaultTodos = [
  { id: 1, text: 'Create New Todo', completed: false },
  { id: 2, text: 'Create New Todo 2', completed: false },
  { id: 3, text: 'Create New Todo 3', completed: false },
  { id: 4, text: 'Create New Todo 4', completed: false },
]

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('')
  const completedTodos = todos.filter((todo) => !!todo.completed).length // * Shortcut for conditional true
  const totalTodos = todos.length
  let searchedTodos = []
  if (searchValue < 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  }

  const handleCompleted = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
  }

  const handleDelete = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} handleComplete={() => handleCompleted(todo.id)} handleDelete={() => handleDelete(todo.id)} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
