import React, { useContext } from 'react'
import { TodoContext } from '..'
import './TodoCounter.css'

const TodoCounter = () => {
  const { totalTodos: total, completedTodos: completed } = useContext(TodoContext)

  return (
    <h2 className='Title'>
      You completed {completed} of {total} TODO's
    </h2>
  )
}

export { TodoCounter }
