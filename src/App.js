import React, { useContext } from 'react'
import { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton, Message, TodoContext, Modal } from './components'

function App() {
  const { error, loading, searchedTodos, handleCompleted, handleDelete, openModal, setOpenModal } = useContext(TodoContext)

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
      {!!openModal && <Modal></Modal>}
      <CreateTodoButton />
    </>
  )
}

export default App
