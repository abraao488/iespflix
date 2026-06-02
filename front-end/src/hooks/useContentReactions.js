import { useCallback, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'iespflix_reacoes'

function readReactions() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

export function useContentReactions() {
  const [reactions, setReactions] = useState(readReactions)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reactions))
  }, [reactions])

  const getReaction = useCallback((id) => reactions[id]?.type || null, [reactions])

  const rateItem = useCallback((item, type) => {
    setReactions((current) => {
      const currentType = current[item.id]?.type
      if (currentType === type) {
        const next = { ...current }
        delete next[item.id]
        return next
      }

      return {
        ...current,
        [item.id]: {
          type,
          item,
          updatedAt: new Date().toISOString(),
        },
      }
    })
  }, [])

  const likedItems = useMemo(() => {
    return Object.values(reactions)
      .filter((entry) => entry.type === 'like')
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .map((entry) => entry.item)
  }, [reactions])

  return { reactions, getReaction, rateItem, likedItems }
}
