import React from 'react'
import { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton, Modal, TodoForm, TodoError, TodoLoading, TodoEmpty, TodoHeader } from './components'
import { useTodos } from './hooks/useTodos'

const App = () => {
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
    handleAdd,
  } = useTodos()

  return (
    <>
      <TodoHeader>
        <TodoCounter completed={completed} total={total} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmpty={() => <TodoEmpty />}
        render={(todo) => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} handleComplete={() => handleCompleted(todo.id)} handleDelete={() => handleDelete(todo.id)} />
        )}
      />
      {!!openModal && (
        <Modal>
          <TodoForm handleAdd={handleAdd} />
        </Modal>
      )}
      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
    </>
  )
}

export { App }
