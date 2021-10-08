import React from 'react'
import './TodoList.css'

const TodoList = ({ children }) => {
  return (
    <section className='Container-list'>
      <ul className='Container-list__menu'>{children}</ul>
    </section>
  )
}

export { TodoList }
