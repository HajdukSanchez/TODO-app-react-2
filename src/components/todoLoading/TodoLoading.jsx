import React from 'react'
import './TodoLoading.css'

const TodoLoading = () => {
  return (
    <div className='TodoLoading__Container'>
      <span className='TodoLoading__Button'></span>
      <p className='TodoLoading__Text'>Loading...</p>
      <span className='TodoLoading__Button'></span>
    </div>
  )
}

export { TodoLoading }
