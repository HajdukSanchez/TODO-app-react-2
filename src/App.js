import React, { useContext } from 'react'
import { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton, TodoContext, Modal, TodoForm, TodoError, TodoLoading, TodoEmpty } from './components'

function App() {
  const { error, loading, searchedTodos, handleCompleted, handleDelete, openModal, setOpenModal } = useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodoError />}
        {loading && <TodoLoading />}
        {!loading && !searchedTodos.length && <TodoEmpty />}
        {searchedTodos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} handleComplete={() => handleCompleted(todo.id)} handleDelete={() => handleDelete(todo.id)} />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton />
    </>
  )
}

export default App
