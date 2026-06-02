import { FALLBACK_POSTER, getImageUrl } from '../services/api.js'

export default function ContentCard({ item, inList, onOpen, onToggleList, onDelete, compact = false }) {
  const title = item.titulo || item.title

  function useFallbackPoster(event) {
    event.currentTarget.src = FALLBACK_POSTER
  }

  return (
    <article className={`content-card ${compact ? 'content-card-compact' : ''}`} onClick={() => onOpen?.(item)}>
      <div className="poster-wrapper">
        <img className="movie-poster" src={getImageUrl(item)} alt={title} loading="lazy" onError={useFallbackPoster} />
        <span className={`type-badge ${item.tipo === 'SERIE' || item.type === 'Serie' ? 'series' : 'film'}`}>{item.tipo || item.type || 'FILME'}</span>
      </div>
      <div className="content-card-info">
        <div className="mini-actions" onClick={(event) => event.stopPropagation()}>
          <button title="Assistir" aria-label="Assistir" onClick={() => onOpen?.(item)}>▶</button>
          <button title={inList ? 'Adicionado a minha lista' : 'Adicionar a minha lista'} aria-label={inList ? 'Adicionado a minha lista' : 'Adicionar a minha lista'} className={inList ? 'active' : ''} onClick={() => onToggleList?.(item)}>{inList ? '✓' : '+'}</button>
          {onDelete && <button title="Excluir" aria-label="Excluir" onClick={() => onDelete(item)}>x</button>}
        </div>
        <h3>{title}</h3>
        <p>{item.ano || '2026'} | 16+ | {item.duracaoMinutos || 100} min</p>
        {item.criticScore && <p className="critic-score">{item.criticScore}</p>}
        {item.imdbRating && <p className="critic-score">{item.imdbRating}</p>}
        <div className="chip-line">
          <span>{item.genero || item.genre || 'Drama'}</span>
          <span>{item.tipo || item.type || 'FILME'}</span>
        </div>
      </div>
    </article>
  )
}
