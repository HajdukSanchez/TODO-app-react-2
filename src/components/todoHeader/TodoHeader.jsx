import React, { cloneElement, Children } from 'react'
import './TodoHeader.css'

const TodoHeader = ({ children, loading }) => {
  return <header>{Children.toArray(children).map((child) => cloneElement(child, { loading }))}</header>
}

export { TodoHeader }
