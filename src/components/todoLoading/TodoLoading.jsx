import React from 'react'
import './TodoLoading.css'

const numberOfLoaders = [1, 2, 3, 4] // ? For increase or decrees the loaders that we show

const TodoLoading = () => {
  return (
    <>
      {numberOfLoaders.map((index) => (
        <div className='TodoLoading__Container' key={index}>
          <span className='TodoLoading__Button'></span>
          <p className='TodoLoading__Text'>Loading...</p>
          <span className='TodoLoading__Button'></span>
        </div>
      ))}
    </>
  )
}

export { TodoLoading }
