import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Toast from '../components/Toast.jsx'
import { conteudoService, filmeService, omdbService } from '../services/api.js'

const emptyForm = {
  titulo: '',
  tipo: 'FILME',
  genero: 'Acao',
  ano: new Date().getFullYear(),
  duracaoMinutos: 100,
  relevancia: 8.0,
  sinopse: '',
  trailerUrl: '',
  posterUrl: 'https://picsum.photos/seed/iespflix-novo/500/750',
  salvarFilmeLegado: true,
}

export default function AdicionarConteudo() {
  const [form, setForm] = useState(emptyForm)
  const [loadingPoster, setLoadingPoster] = useState(false)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState(null)
  const navigate = useNavigate()

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function buscarPoster() {
    if (!form.titulo.trim()) {
      setToast({ type: 'error', message: 'Digite um titulo antes de buscar poster.' })
      return
    }
    setLoadingPoster(true)
    try {
      const { data } = await omdbService.buscar(form.titulo)
      if (data?.Poster && data.Poster !== 'N/A') {
        update('posterUrl', data.Poster)
        setToast({ type: 'success', message: 'Poster encontrado no OMDb.' })
      } else {
        const seed = encodeURIComponent(form.titulo)
        update('posterUrl', `https://picsum.photos/seed/${seed}/500/750`)
        setToast({ type: 'info', message: 'OMDb nao retornou poster. Usei um poster cinematografico automatico.' })
      }
    } catch {
      setToast({ type: 'error', message: 'Nao foi possivel buscar no OMDb agora.' })
    } finally {
      setLoadingPoster(false)
    }
  }

  async function salvar(event) {
    event.preventDefault()
    setSaving(true)
    try {
      const payload = {
        titulo: form.titulo,
        tipo: form.tipo,
        genero: form.genero,
        ano: Number(form.ano),
        duracaoMinutos: Number(form.duracaoMinutos),
        relevancia: Number(form.relevancia),
        sinopse: form.sinopse,
        trailerUrl: form.trailerUrl,
        posterUrl: form.posterUrl,
      }
      await conteudoService.criar(payload)
      if (form.salvarFilmeLegado && form.tipo === 'FILME') {
        await filmeService.criar({
          titulo: form.titulo,
          genero: form.genero,
          ano: Number(form.ano),
          duracaoMinutos: Number(form.duracaoMinutos),
          sinopse: form.sinopse,
        })
      }
      setToast({ type: 'success', message: 'Conteudo salvo no backend.' })
      setTimeout(() => navigate('/'), 700)
    } catch {
      setToast({ type: 'error', message: 'Erro ao salvar conteudo. Confira os campos obrigatorios.' })
    } finally {
      setSaving(false)
    }
  }

  return (
    <section className="page add-page">
      <div className="admin-header">
        <Link to="/browse">Voltar</Link>
        <h1>Adicionar Conteudo</h1>
      </div>

      <form className="add-layout" onSubmit={salvar}>
        <aside className="poster-preview">
          <img src={form.posterUrl} alt="Preview da capa" />
          <label>URL da capa</label>
          <input value={form.posterUrl} onChange={(event) => update('posterUrl', event.target.value)} />
          <button type="button" className="secondary" onClick={buscarPoster} disabled={loadingPoster}>
            {loadingPoster ? 'Buscando...' : 'Buscar poster no OMDb'}
          </button>
        </aside>

        <div className="admin-form">
          <label>Titulo *</label>
          <input value={form.titulo} onChange={(event) => update('titulo', event.target.value)} required />

          <label>Tipo *</label>
          <div className="segmented">
            <button type="button" className={form.tipo === 'FILME' ? 'active' : ''} onClick={() => update('tipo', 'FILME')}>FILME</button>
            <button type="button" className={form.tipo === 'SERIE' ? 'active' : ''} onClick={() => update('tipo', 'SERIE')}>SERIE</button>
          </div>

          <div className="form-row">
            <div>
              <label>Genero *</label>
              <input value={form.genero} onChange={(event) => update('genero', event.target.value)} required />
            </div>
            <div>
              <label>Ano *</label>
              <input type="number" value={form.ano} onChange={(event) => update('ano', event.target.value)} required />
            </div>
            <div>
              <label>Duracao (min) *</label>
              <input type="number" value={form.duracaoMinutos} onChange={(event) => update('duracaoMinutos', event.target.value)} required />
            </div>
          </div>

          <label>Relevancia: {form.relevancia}</label>
          <input className="range-input" type="range" min="0" max="10" step="0.1" value={form.relevancia} onChange={(event) => update('relevancia', event.target.value)} />

          <label>Sinopse</label>
          <textarea value={form.sinopse} onChange={(event) => update('sinopse', event.target.value)} />

          <label>URL do Trailer</label>
          <input value={form.trailerUrl} onChange={(event) => update('trailerUrl', event.target.value)} />

          <label className="check-line">
            <input type="checkbox" checked={form.salvarFilmeLegado} onChange={(event) => update('salvarFilmeLegado', event.target.checked)} />
            Salvar tambem no CRUD legado de filmes quando o tipo for FILME
          </label>

          <div className="actions right">
            <Link className="button-link secondary" to="/browse">Cancelar</Link>
            <button disabled={saving}>{saving ? 'Salvando...' : 'Salvar'}</button>
          </div>
        </div>
      </form>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </section>
  )
}
