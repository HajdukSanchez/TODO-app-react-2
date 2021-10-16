import React, { useState } from 'react'
import { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton, Message } from './components'
import { useLocalStorage } from './lib/useLocalStorage'

// const defaultTodos = [
//   { id: 1, text: 'Create New Todo', completed: false },
//   { id: 2, text: 'Create New Todo 2', completed: false },
//   { id: 3, text: 'Create New Todo 3', completed: false },
//   { id: 4, text: 'Create New Todo 4', completed: false },
// ]

const TODO_VERSION = 'TODOS_V1'

function App() {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage(TODO_VERSION, []) // * Custom Hook
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
        {error && <Message text={'An error occurred'} />}
        {loading && <Message text={'Loading...'} />}
        {!loading && !searchedTodos.length && <Message text={'Create your first TODO !'} />}
        {searchedTodos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} handleComplete={() => handleCompleted(todo.id)} handleDelete={() => handleDelete(todo.id)} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
