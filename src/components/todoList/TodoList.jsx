import React from 'react'
import './TodoList.css'

const TodoList = ({ error, onError, loading, onLoading, searchedTodos, onEmpty, render, children, onEmptySearch, total }) => {
  const renderType = children || render
  return (
    <section className='Container-list'>
      {error && onError()}
      {loading && onLoading()}
      {!total && !loading && onEmpty()}
      {searchedTodos?.map(renderType)} {/* //? Render function or render props, no matter what */}
      {!!total && !searchedTodos?.length && onEmptySearch()}
    </section>
  )
}

export { TodoList }
