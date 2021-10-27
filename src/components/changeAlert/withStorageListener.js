import React, { useState } from 'react'
import { TODO_VERSION } from '../../types/localStorageTypes'

function WithStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener({ synchronizeTodos }) {
    const [storageChange, setStorageChange] = useState(false)
    window.addEventListener('storage', (change) => {
      change.key === TODO_VERSION ? setStorageChange(true) : console.log('no change')
    })
    const toggleShow = () => {
      synchronizeTodos()
      setStorageChange(false)
    }
    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />
  }
}

export { WithStorageListener }
