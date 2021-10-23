import React from 'react'
import './TodoEmpty.css'

const TodoEmpty = ({ text, search }) => {
  return (
    <p className='TodoEmpty'>
      {text}
      {!!search && <span className='TodoEmpty-search'>{search}</span>}
    </p>
  )
}

export { TodoEmpty }
