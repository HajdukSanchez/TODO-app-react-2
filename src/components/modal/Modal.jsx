import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({ children }) => {
  return ReactDOM.createPortal(<div className='Modal'>{children}</div>, document.getElementById('modal'))
}

export { Modal }
