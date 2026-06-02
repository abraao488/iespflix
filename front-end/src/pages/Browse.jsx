import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ContentCard from '../components/ContentCard.jsx'
import ContentModal from '../components/ContentModal.jsx'
import { moviesData } from '../data/moviesData.js'
import { useMinhaLista } from '../hooks/useMinhaLista.js'
import { useContentReactions } from '../hooks/useContentReactions.js'

export default function Browse() {
  const location = useLocation()
  const initialTipo = new URLSearchParams(location.search).get('tipo') || ''
  const [filters, setFilters] = useState({ tipo: initialTipo, genero: '', q: '' })
  const [debouncedQ, setDebouncedQ] = useState('')
  const [pageNumber, setPageNumber] = useState(0)
  const [selected, setSelected] = useState(null)
  const { hasItem, toggleItem } = useMinhaLista()
  const { getReaction, rateItem } = useContentReactions()

  useEffect(() => {
    const tipo = new URLSearchParams(location.search).get('tipo') || ''
    setFilters((current) => ({ ...current, tipo }))
    setPageNumber(0)
  }, [location.search])

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedQ(filters.q), 400)
    return () => clearTimeout(timeout)
  }, [filters.q])

  const allContent = useMemo(() => {
    return moviesData
  }, [])

  const filteredContent = useMemo(() => {
    const q = normalizeText(debouncedQ)
    const tipo = filters.tipo
    const genero = normalizeText(filters.genero)

    return allContent.filter((item) => {
      const itemTipo = item.tipo || (item.type === 'Serie' ? 'SERIE' : 'FILME')
      const itemGenero = normalizeText(item.genero || item.genre || '')
      const title = normalizeText(item.titulo || item.title || '')
      const synopsis = normalizeText(item.sinopse || item.synopsis || '')

      if (tipo && itemTipo !== tipo) return false
      if (genero && !itemGenero.includes(genero)) return false
      if (q && !title.includes(q) && !synopsis.includes(q)) return false

      return true
    })
  }, [allContent, debouncedQ, filters.genero, filters.tipo])

  const genreOptions = useMemo(() => {
    const genres = new Set()

    for (const item of allContent) {
      const itemGenres = String(item.genero || item.genre || '').split(',')
      for (const genre of itemGenres) {
        const trimmed = genre.trim()
        if (trimmed) genres.add(trimmed)
      }
    }

    return Array.from(genres).sort((a, b) => a.localeCompare(b))
  }, [allContent])

  const page = useMemo(() => {
    const size = 12
    const totalPages = Math.max(Math.ceil(filteredContent.length / size), 1)
    const number = Math.min(pageNumber, totalPages - 1)
    const start = number * size

    return {
      content: filteredContent.slice(start, start + size),
      number,
      totalPages,
      totalElements: filteredContent.length,
      size,
    }
  }, [filteredContent, pageNumber])

  const related = useMemo(() => {
    if (!selected) return []
    const selectedGenre = normalizeText(selected.genero || selected.genre || '').split(',')[0]
    return allContent.filter((item) => item.id !== selected.id && normalizeText(item.genero || item.genre || '').includes(selectedGenre)).slice(0, 12)
  }, [allContent, selected])

  return (
    <section className="page browse-page">
      <div className="page-heading">
        <span className="overline">Browse</span>
        <h1>Catalogo Completo</h1>
        <p>Exibindo {page.content.length} de {page.totalElements} resultados.</p>
      </div>

      <div className="browse-filters">
        <div className="segmented">
          <button className={!filters.tipo ? 'active' : ''} onClick={() => { setFilters({ ...filters, tipo: '' }); setPageNumber(0) }}>Todos</button>
          <button className={filters.tipo === 'FILME' ? 'active' : ''} onClick={() => { setFilters({ ...filters, tipo: 'FILME' }); setPageNumber(0) }}>Filmes</button>
          <button className={filters.tipo === 'SERIE' ? 'active' : ''} onClick={() => { setFilters({ ...filters, tipo: 'SERIE' }); setPageNumber(0) }}>Series</button>
        </div>
        <select value={filters.genero} onChange={(event) => { setFilters({ ...filters, genero: event.target.value }); setPageNumber(0) }}>
          <option value="">Todos os generos</option>
          {genreOptions.map((genero) => <option key={genero} value={genero}>{genero}</option>)}
        </select>
        <input value={filters.q} onChange={(event) => { setFilters({ ...filters, q: event.target.value }); setPageNumber(0) }} placeholder="Buscar por titulo ou sinopse" />
      </div>

      <div className="browse-grid">
        {page.content.map((item) => (
          <ContentCard
            key={item.id}
            item={item}
            inList={hasItem(item.id)}
            onOpen={setSelected}
            onToggleList={toggleItem}
          />
        ))}
      </div>

      <div className="pagination netflix-pagination">
        <button className="secondary" disabled={page.number === 0} onClick={() => setPageNumber(page.number - 1)}>Anterior</button>
        <span>Pagina {page.number + 1} de {Math.max(page.totalPages, 1)}</span>
        <button className="secondary" disabled={page.number + 1 >= page.totalPages} onClick={() => setPageNumber(page.number + 1)}>Proxima</button>
      </div>

      <ContentModal
        item={selected}
        related={related}
        inList={selected ? hasItem(selected.id) : false}
        reaction={selected ? getReaction(selected.id) : null}
        onClose={() => setSelected(null)}
        onToggleList={toggleItem}
        onRate={rateItem}
        onOpen={setSelected}
      />
    </section>
  )
}

function normalizeText(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}
