import { useEffect, useRef, useState } from 'react'
import ContentCard from './ContentCard.jsx'
import LoadingSkeleton from './LoadingSkeleton.jsx'
import { api, normalizePage } from '../services/api.js'

export default function CarouselRow({ titulo, endpoint, onOpen, hasItem, onToggleList }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const rowRef = useRef(null)

  useEffect(() => {
    setLoading(true)
    api.get(endpoint)
      .then(({ data }) => setItems(normalizePage(data).content ?? []))
      .catch(() => setItems([]))
      .finally(() => setLoading(false))
  }, [endpoint])

  function scrollBy(direction) {
    rowRef.current?.scrollBy({ left: direction * 720, behavior: 'smooth' })
  }

  return (
    <section className="carousel-row">
      <div className="row-title">
        <h2>{titulo}</h2>
        <span>Ver tudo</span>
      </div>
      <div className="carousel-wrap">
        <button className="row-arrow left" onClick={() => scrollBy(-1)} aria-label="Anterior">&lt;</button>
        <div className="carousel-track" ref={rowRef}>
          {loading ? <LoadingSkeleton count={8} /> : items.map((item) => (
            <ContentCard
              key={item.id}
              item={item}
              inList={hasItem?.(item.id)}
              onOpen={onOpen}
              onToggleList={onToggleList}
            />
          ))}
        </div>
        <button className="row-arrow right" onClick={() => scrollBy(1)} aria-label="Proximo">&gt;</button>
      </div>
    </section>
  )
}
