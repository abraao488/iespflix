import { useState } from 'react'
import { api } from '../services/api.js'

export default function Favoritos() {
  const [usuarioId, setUsuarioId] = useState('1')
  const [items, setItems] = useState([])

  async function carregar() {
    const { data } = await api.get(`/api/v1/favoritos/usuario/${usuarioId}`)
    setItems(data)
  }

  return (
    <section className="page">
      <h1>Favoritos</h1>
      <div className="toolbar">
        <input value={usuarioId} onChange={(e) => setUsuarioId(e.target.value)} placeholder="ID do usuario" />
        <button onClick={carregar}>Carregar favoritos</button>
      </div>
      <div className="grid">{items.map((item) => <div className="card" key={item.conteudoId}><span className="chip">{item.usuarioNome}</span><h2>{item.conteudoTitulo}</h2><p>{item.criadoEm}</p></div>)}</div>
    </section>
  )
}
