import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import './CreateTodoButton.css'

const CreateTodoButton = () => {
  const handleClick = () => {
    console.log('Open Modal')
  }

  return (
    <button className='CreateTodoButton' onClick={handleClick}>
      NEW
      <AiOutlinePlus />
    </button>
  )
}

export { CreateTodoButton }
