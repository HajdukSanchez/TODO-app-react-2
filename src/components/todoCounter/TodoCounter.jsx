import React from 'react'
import './TodoCounter.css'

const TodoCounter = ({ completed, total }) => {
  return (
    <h2 className='Title'>
      You completed {completed} of {total} TODO's
    </h2>
  )
}

export { TodoCounter }
