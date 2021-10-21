import React, { useContext } from 'react'
import { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton, TodoContext, Modal, TodoForm, TodoError, TodoLoading, TodoEmpty, TodoHeader } from './components'

function App() {
  const {
    error,
    loading,
    searchedTodos,
    handleCompleted,
    handleDelete,
    openModal,
    setOpenModal,
    totalTodos: total,
    completedTodos: completed,
    searchValue,
    setSearchValue,
  } = useContext(TodoContext)

  return (
    <>
      <TodoHeader>
        <TodoCounter completed={completed} total={total} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
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
