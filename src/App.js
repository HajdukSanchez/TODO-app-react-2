import React from 'react'
import {
  TodoCounter,
  TodoSearch,
  TodoList,
  TodoItem,
  CreateTodoButton,
  Modal,
  TodoForm,
  TodoError,
  TodoLoading,
  TodoEmpty,
  TodoHeader,
  ChangeAlterWithStorageListener,
} from './components'
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
    synchronizeTodos,
  } = useTodos()

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter completed={completed} total={total} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        total={total}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmpty={() => <TodoEmpty text={'Nothing to show'} />}
        onEmptySearch={() => <TodoEmpty text={'No matches with: '} search={searchValue} />}
        // render={}
      >
        {(todo) => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} handleComplete={() => handleCompleted(todo.id)} handleDelete={() => handleDelete(todo.id)} />
        )}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm handleAdd={handleAdd} setOpenModal={setOpenModal} />
        </Modal>
      )}
      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} loading={loading} />
      <ChangeAlterWithStorageListener synchronizeTodos={synchronizeTodos} />
    </>
  )
}

export { App }
