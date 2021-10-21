import React, { useState } from 'react'
import './TodoForm.css'

const TodoForm = ({ handleAdd, setOpenModal }) => {
  const [text, setText] = useState('')

  const handleCancel = () => {
    setOpenModal((prev) => !prev)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleAdd(text)
    setOpenModal((prev) => !prev)
  }

  return (
    <form onSubmit={handleSubmit} className='Form'>
      <label className='Form__label'>Add a new TODO</label>
      <textarea cols='30' rows='5' placeholder='Type something...' value={text} onChange={(event) => setText(event.target.value)} className='Form__text-area' />
      <div className='Form__buttons-container'>
        <button type='button' onClick={handleCancel} className='Form__button Form__button--cancel'>
          Cancel
        </button>
        <button type='submit' className='Form__button Form__button--add'>
          Add
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
