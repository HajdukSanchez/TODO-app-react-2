import React, { useContext } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { TodoContext } from '..'
import './CreateTodoButton.css'

const CreateTodoButton = () => {
  const { openModal, setOpenModal } = useContext(TodoContext)

  const handleClick = () => {
    setOpenModal(!openModal)
  }

  return (
    <button className={`CreateTodoButton ${!!openModal && 'Close'}`} onClick={handleClick}>
      <AiOutlinePlus />
    </button>
  )
}

export { CreateTodoButton }
