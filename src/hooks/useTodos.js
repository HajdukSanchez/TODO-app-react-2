import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { TODO_VERSION } from '../types/localStorageTypes'

function useTodos() {
  const { item: todos, saveItem: saveTodos, loading, error, synchronize: synchronizeTodos } = useLocalStorage(TODO_VERSION, []) // * Custom Hook
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

  const handleAdd = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      id: totalTodos + 1,
      completed: false,
      text,
    })
    saveTodos(newTodos)
  }

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    handleCompleted,
    handleDelete,
    openModal,
    setOpenModal,
    handleAdd,
    synchronizeTodos,
  }
}

export { useTodos }
