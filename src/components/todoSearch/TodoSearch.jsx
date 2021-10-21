import React from 'react'
import './TodoSearch.css'

const TodoSearch = ({ searchValue, setSearchValue }) => {
  const handleValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  return <input className='Search' type='text' placeholder='Search your TODO' value={searchValue} onChange={handleValueChange} />
}

export { TodoSearch }
