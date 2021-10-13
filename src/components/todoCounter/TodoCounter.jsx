import React from 'react'
import './TodoCounter.css'

const TodoCounter = ({ total, completed }) => {
  return (
    <h2 className='Title'>
      You completed {completed} of {total} TODO's
    </h2>
  )
}

export { TodoCounter }
