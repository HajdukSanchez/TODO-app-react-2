import React, { useState } from 'react'
import { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton } from './components'

// const defaultTodos = [
//   { id: 1, text: 'Create New Todo', completed: false },
//   { id: 2, text: 'Create New Todo 2', completed: false },
//   { id: 3, text: 'Create New Todo 3', completed: false },
//   { id: 4, text: 'Create New Todo 4', completed: false },
// ]

const TODO_VERSION = 'TODOS_V1'

function App() {
  const localStorageTodos = localStorage.getItem(TODO_VERSION)
  let parsedTodos
  if (!localStorageTodos) {
    localStorage.setItem(TODO_VERSION, JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = useState(parsedTodos)
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter((todo) => !!todo.completed).length // * Shortcut for conditional true
  const totalTodos = todos.length

  let searchedTodos = []
  if (searchValue < 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  }

  const saveTodos = (newTodos) => {
    localStorage.setItem(TODO_VERSION, JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const handleCompleted = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const handleDelete = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
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
