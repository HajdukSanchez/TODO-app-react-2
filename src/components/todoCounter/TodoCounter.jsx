import React from 'react'
import './TodoCounter.css'

const TodoCounter = ({ completed, total, loading }) => {
  return (
    <h2 className={`Title ${loading && 'Title--loading'}`}>
      You completed {completed} of {total} TODO's
    </h2>
  )
}

export { TodoCounter }
