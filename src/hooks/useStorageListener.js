// THE SAME HOC TRANSFORMED AS A CUSTOM HOOK

import React, { useState } from 'react'
import { TODO_VERSION } from '../types/localStorageTypes'

function useStorageListener(synchronizeTodos) {
  const [storageChange, setStorageChange] = useState(false)
  window.addEventListener('storage', (change) => {
    change.key === TODO_VERSION ? setStorageChange(true) : console.log('no change')
  })
  const toggleShow = () => {
    synchronizeTodos()
    setStorageChange(false)
  }

  return { storageChange, toggleShow }
}

export { useStorageListener }
