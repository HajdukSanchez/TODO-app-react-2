import React, { useContext } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { TodoContext } from '..'
import './CreateTodoButton.css'

const CreateTodoButton = () => {
  const { openModal, setOpenModal } = useContext(TodoContext)

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
