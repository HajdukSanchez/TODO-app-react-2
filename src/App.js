import React, { useContext } from 'react'
import { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton, Message, TodoContext } from './components'

function App() {
  const { error, loading, searchedTodos, handleCompleted, handleDelete } = useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />
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
