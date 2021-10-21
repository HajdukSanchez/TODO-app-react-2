import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import './CreateTodoButton.css'

const CreateTodoButton = ({ openModal, setOpenModal }) => {
  const handleClick = () => {
    // * All the states has this variables for make process with our previous state without using the variable name
    setOpenModal((prevState) => !prevState)
  }

  return (
    <button className={`CreateTodoButton ${!!openModal && 'Close'}`} onClick={handleClick}>
      <AiOutlinePlus />
    </button>
  )
}

export { CreateTodoButton }
