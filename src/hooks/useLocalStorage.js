import { useEffect, useState } from 'react'

const useLocalStorage = (itemName, initialValue) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [item, setItem] = useState(initialValue)
  const [synchronizedItem, setSynchronizedItem] = useState(false)

  // * We simulate an API call
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem)
        setLoading(false)
        setSynchronizedItem(true)
      } catch (error) {
        setError(true)
        console.error(error)
      }
    }, 2000)
  }, [synchronizedItem])

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    } catch (error) {
      setError(true)
      console.error(error)
    }
  }

  const synchronize = () => {
    setLoading(true)
    setSynchronizedItem(false)
  }

  return {
    item,
    saveItem,
    loading,
    error,
    synchronize,
  }
}

export { useLocalStorage }
