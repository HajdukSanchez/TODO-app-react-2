import React from 'react'
import './ChangeAlert.css'
// import { WithStorageListener } from './withStorageListener'
import { useStorageListener } from '../../hooks/useStorageListener'
import { AiOutlineReload } from 'react-icons/ai'

const ChangeAlter = ({ synchronizeTodos }) => {
  const { storageChange: show, toggleShow } = useStorageListener(synchronizeTodos)
  if (show) {
    return (
      <div className='ChangeAlter' onClick={() => toggleShow(false)}>
        <p className='ChangeAlter__text'>You might have new TODO's</p>
        <div className='ChangeAlter__button'>
          <AiOutlineReload />
        </div>
      </div>
    )
  } else {
    return null
  }
}

// const ChangeAlterWithStorageListener = WithStorageListener(ChangeAlter)
// export { ChangeAlterWithStorageListener }
export { ChangeAlter }
