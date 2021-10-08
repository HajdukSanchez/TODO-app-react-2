import React from 'react'
import './TodoItem.css'

const TodoItem = ({ text }) => {
  return (
    <li className='Item'>
      <span className='Item__button Item__button--check'>c</span>
      <p>{text}</p>
      <span className='Item__button Item__button--close'>x</span>
    </li>
  )
}

export { TodoItem }
