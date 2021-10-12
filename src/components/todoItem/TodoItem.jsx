import React from 'react'
import './TodoItem.css'
import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5'

const TodoItem = ({ text }) => {
  const handleComplete = () => {
    console.log('Completed')
  }

  const handleDelete = () => {
    console.log('Deleted TODO')
  }

  return (
    <li className='Item'>
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
