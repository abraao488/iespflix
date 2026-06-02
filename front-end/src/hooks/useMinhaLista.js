import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'iespflix_lista'

function readList() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export function useMinhaLista() {
  const [lista, setLista] = useState(readList)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista))
  }, [lista])

  const hasItem = useCallback((id) => lista.some((item) => item.id === id), [lista])

  const toggleItem = useCallback((item) => {
    setLista((current) => {
      if (current.some((saved) => saved.id === item.id)) {
        return current.filter((saved) => saved.id !== item.id)
      }
      return [item, ...current]
    })
  }, [])

  return { lista, hasItem, toggleItem }
}
