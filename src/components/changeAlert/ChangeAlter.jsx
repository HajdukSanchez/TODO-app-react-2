import React from 'react'
import { WithStorageListener } from '..'

const ChangeAlter = ({ show, toggleShow }) => {
  return <>{show ? <div>Changes ??</div> : null}</>
}

const ChangeAlterWithStorageListener = WithStorageListener(ChangeAlter)

export { ChangeAlterWithStorageListener }
