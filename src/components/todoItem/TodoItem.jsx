import React, { useState } from 'react'
import './TodoItem.css'
import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5'

const TodoItem = ({ text }) => {
  const [isCompleted, setIsCompleted] = useState(false)

  const handleComplete = () => {
    setIsCompleted(!isCompleted)
  }

  const handleDelete = () => {
    console.log('Deleted TODO')
  }

  return (
    <li className={`Item ${isCompleted && 'completed'}`}>
      <div className='Item__button Item__button--check' onClick={handleComplete}>
        <IoCheckmarkSharp />
      </div>
      <p className='Item__description'>{text}</p>
      <div className='Item__button Item__button--close' onClick={handleDelete}>
        <IoCloseSharp />
      </div>
    </li>
  )
}

export { TodoItem }
