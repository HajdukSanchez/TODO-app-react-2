import React from 'react'
import { TodoProvider, Context, TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton, Message } from './components'

function App() {
  return (
    <TodoProvider>
      <TodoCounter />
      <TodoSearch />
      <Context.Consumer>
        {({ error, loading, searchedTodos, handleCompleted, handleDelete }) => (
          <TodoList>
            {error && <Message text={'An error occurred'} />}
            {loading && <Message text={'Loading...'} />}
            {!loading && !searchedTodos.length && <Message text={'Create your first TODO !'} />}
            {searchedTodos.map((todo) => (
              <TodoItem key={todo.id} text={todo.text} completed={todo.completed} handleComplete={() => handleCompleted(todo.id)} handleDelete={() => handleDelete(todo.id)} />
            ))}
          </TodoList>
        )}
      </Context.Consumer>
      <CreateTodoButton />
    </TodoProvider>
  )
}

export default App
