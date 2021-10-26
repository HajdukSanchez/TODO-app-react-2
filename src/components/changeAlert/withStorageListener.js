import React, { useState } from 'react'

const WithStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener() {
    const [storageChange, setStorageChange] = useState(false)

    return <WrappedComponent show={storageChange} toggleShow={setStorageChange} />
  }
}

export { WithStorageListener }
