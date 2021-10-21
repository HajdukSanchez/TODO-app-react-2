import React from 'react'
import './TodoList.css'

const TodoList = ({ error, onError, loading, onLoading, searchedTodos, onEmpty, render }) => {
  return (
    <section className='Container-list'>
      {error && onError()}
      {loading && onLoading()}
      {!loading && !searchedTodos?.length && onEmpty()}
      {searchedTodos?.map(render)}
    </section>
  )
}

export { TodoList }
