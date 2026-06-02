import { useEffect } from 'react'
import ContentCard from './ContentCard.jsx'
import { getImageUrl } from '../services/api.js'

export default function ContentModal({ item, related = [], inList, reaction, onClose, onToggleList, onRate, onOpen }) {
  useEffect(() => {
    if (!item) return undefined
    document.body.classList.add('modal-open')
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [item, onClose])

  if (!item) return null

  const title = item.titulo || item.title
  const synopsis = item.sinopse || item.synopsis || 'Sinopse nao informada.'
  const genre = item.genero || item.genre || 'Drama'
  const type = item.tipo || item.type || 'FILME'
  const isSeries = type === 'SERIE' || String(type).toLowerCase().includes('serie')
  const backdrop = item.backdrop || getImageUrl(item, '1920/1080')
  const relevance = item.relevance || `${Math.round(Number(item.relevancia || 9.8) * 10)}% relevante`
  const maturityRating = item.maturityRating || '14'
  const seasons = item.seasons || '1 temporada'
  const duration = item.duration || (item.duracaoMinutos ? `${item.duracaoMinutos} min` : '2h 10min')
  const cast = Array.isArray(item.cast) ? item.cast : String(item.elenco || '').split(',').map((name) => name.trim()).filter(Boolean)
  const tags = Array.isArray(item.tags) ? item.tags : String(genre).split(',').map((tag) => tag.trim()).filter(Boolean)

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <article className="content-modal" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Fechar">x</button>
        <div className="modal-banner" style={{ backgroundImage: `url(${backdrop})` }}>
          <div className="modal-hero-gradient">
            <h2>{title}</h2>
            <div className="modal-actions">
              <button className="watch-button" type="button">
                <span className="play-icon" aria-hidden="true" />
                {isSeries ? 'Proximo episodio' : 'Assistir'}
              </button>
              <button className={`circle-button ${inList ? 'active' : ''}`} type="button" title={inList ? 'Adicionado a minha lista' : 'Adicionar a minha lista'} aria-label={inList ? 'Adicionado a minha lista' : 'Adicionar a minha lista'} onClick={() => onToggleList?.(item)}>
                {inList ? <CheckIcon /> : <PlusIcon />}
              </button>
              <button className={`circle-button rating-button ${reaction === 'like' ? 'active' : ''}`} type="button" title="Curtir" aria-label="Curtir" aria-pressed={reaction === 'like'} onClick={() => onRate?.(item, 'like')}>
                <ThumbIcon />
              </button>
              <button className={`circle-button rating-button ${reaction === 'dislike' ? 'active' : ''}`} type="button" title="Descurtir" aria-label="Descurtir" aria-pressed={reaction === 'dislike'} onClick={() => onRate?.(item, 'dislike')}>
                <ThumbIcon down />
              </button>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-copy">
            <div className="modal-meta">
              <span className="relevance">{relevance}</span>
              <span>{isSeries ? seasons : duration}</span>
              <span className="maturity-rating">{maturityRating}</span>
              <span>{item.ano || item.year || '2026'}</span>
            </div>
            {isSeries && (
              <h3 className="episode-title">{item.episodeTitle || 'T1:E1 Episodio piloto'}</h3>
            )}
            <p className="modal-synopsis">{synopsis}</p>
          </div>
          <aside>
            <p><strong>Elenco:</strong> {(cast.length ? cast : ['Elenco nao informado']).join(', ')}</p>
            <p><strong>Generos:</strong> {(tags.length ? tags : ['Drama']).join(', ')}</p>
            <p><strong>Tipo:</strong> {isSeries ? 'Serie' : 'Filme'}</p>
            {item.criticScore && <p><strong>Nota:</strong> {item.criticScore}</p>}
            {item.imdbRating && <p><strong>IMDb:</strong> {item.imdbRating}</p>}
            {item.trailerUrl && <p><strong>Trailer:</strong> <a href={item.trailerUrl} target="_blank" rel="noreferrer">abrir link</a></p>}
          </aside>
        </div>
        {related.length > 0 && (
          <section className="modal-related">
            <h3>Mais assim</h3>
            <div className="carousel-track">
              {related.slice(0, 8).map((relatedItem) => (
                <ContentCard
                  compact
                  key={relatedItem.id}
                  item={relatedItem}
                  inList={inList}
                  onOpen={onOpen}
                  onToggleList={onToggleList}
                />
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  )
}

function PlusIcon() {
  return (
    <svg className="action-line-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="action-line-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="m5 12.5 4.2 4.2L19 6.8" />
    </svg>
  )
}

function ThumbIcon({ down = false }) {
  return (
    <svg className="thumb-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <g transform={down ? 'rotate(180 12 12)' : undefined}>
        <path d="M7.1 10.6v10.2H4.4a2 2 0 0 1-2-2v-6.2a2 2 0 0 1 2-2h2.7Z" />
        <path d="M7.1 19.8c1.7 0 3.3.9 4.6 1h5.6c1 0 1.8-.7 1.8-1.7 0-.5-.2-.9-.5-1.2.8-.2 1.4-.9 1.4-1.8 0-.6-.3-1.1-.7-1.4.7-.3 1.2-1 1.2-1.8 0-1.1-.9-1.9-1.9-1.9h-5.1l.7-2.6c.5-1.8-.3-4-2.2-5.1-.7-.4-1.5 0-1.7.8l-.5 2.5c-.2.8-.5 1.5-1 2.2L7.1 11" />
      </g>
    </svg>
  )
}
