import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../../lib/useLocalStorage'

const TODO_VERSION = 'TODOS_V1'
const TodoContext = createContext() // * For create a context

function TodoProvider({ children }) {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage(TODO_VERSION, []) // * Custom Hook
  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)

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
    saveTodos(newTodos)
  }

  const handleDelete = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  // * The values are the states that we want to share in our application
  return (
    <TodoContext.Provider
      value={{ loading, error, totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, handleCompleted, handleDelete, openModal, setOpenModal }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoProvider, TodoContext }
