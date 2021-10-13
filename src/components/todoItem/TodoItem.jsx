import React from 'react'
import './TodoItem.css'
import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5'

const TodoItem = ({ text, completed }) => {
  const handleComplete = () => {}

  const handleDelete = () => {
    console.log('Deleted TODO')
  }

  return (
    <li className={`Item ${completed && 'completed'}`}>
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
