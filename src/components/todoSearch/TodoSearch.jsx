import React, { useContext } from 'react'
import { TodoContext } from '..'
import './TodoSearch.css'

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext)

  const handleValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  return <input className='Search' type='text' placeholder='Search your TODO' value={searchValue} onChange={handleValueChange} />
}

export { TodoSearch }
