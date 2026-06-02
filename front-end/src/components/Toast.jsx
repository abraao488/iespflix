import { useEffect } from 'react'

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return undefined
    const timeout = setTimeout(onClose, 3000)
    return () => clearTimeout(timeout)
  }, [toast, onClose])

  if (!toast) return null

  return (
    <div className={`toast toast-${toast.type || 'info'}`}>
      <strong>{toast.title || 'IESPFLIX'}</strong>
      <span>{toast.message}</span>
    </div>
  )
}
