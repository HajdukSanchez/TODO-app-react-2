import React from 'react'
import './TodoSearch.css'

const TodoSearch = () => {
  const handleValueChange = (event) => {
    console.log(event.target.value)
  }

  return <input className='Search' type='text' placeholder='Search your TODO' onChange={handleValueChange} />
}

export { TodoSearch }
