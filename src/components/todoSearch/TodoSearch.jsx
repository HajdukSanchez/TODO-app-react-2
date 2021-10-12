import React, { useState } from 'react'
import './TodoSearch.css'

const TodoSearch = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  return <input className='Search' type='text' placeholder='Search your TODO' value={searchValue} onChange={handleValueChange} />
}

export { TodoSearch }
