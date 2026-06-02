import { useEffect, useMemo, useState } from 'react'
import { DEFAULT_PROFILE_ICON, profileIcons } from '../data/profileIcons.js'
import { useContentReactions } from '../hooks/useContentReactions.js'
import { useMinhaLista } from '../hooks/useMinhaLista.js'

export default function Conta({ user, activeProfile, profiles, onUpdateProfile }) {
  const { lista } = useMinhaLista()
  const { likedItems, reactions } = useContentReactions()
  const [editingProfile, setEditingProfile] = useState(false)
  const [profileForm, setProfileForm] = useState({ name: activeProfile?.name || '', avatar: activeProfile?.avatar || DEFAULT_PROFILE_ICON })

  useEffect(() => {
    setProfileForm({ name: activeProfile?.name || '', avatar: activeProfile?.avatar || DEFAULT_PROFILE_ICON })
  }, [activeProfile])

  const stats = useMemo(() => {
    const disliked = Object.values(reactions).filter((entry) => entry.type === 'dislike').length
    return [
      ['Perfil ativo', activeProfile?.name || 'Harlen'],
      ['Perfis criados', profiles.length],
      ['Titulos na lista', lista.length],
      ['Titulos curtidos', likedItems.length],
      ['Titulos descurtidos', disliked],
    ]
  }, [activeProfile?.name, likedItems.length, lista.length, profiles.length, reactions])

  function saveProfile(event) {
    event.preventDefault()
    if (!activeProfile?.id) return
    onUpdateProfile?.(activeProfile.id, profileForm)
    setEditingProfile(false)
  }

  return (
    <section className="page account-page">
      <div className="page-heading">
        <span className="overline">Conta</span>
        <h1>Informacoes da conta</h1>
        <p>Dados principais da sua conta e atividade salva neste navegador.</p>
      </div>

      <div className="account-layout">
        <section className="account-panel">
          <h2>Dados pessoais</h2>
          <dl className="account-info-list">
            <div><dt>Nome</dt><dd>{user?.nome || activeProfile?.name || 'Visitante'}</dd></div>
            <div><dt>Email</dt><dd>{user?.email || 'Nao informado'}</dd></div>
            <div><dt>ID do usuario</dt><dd>{user?.id || 'Sessao local'}</dd></div>
            <div><dt>Status</dt><dd>{user ? 'Autenticado' : 'Usando perfil local'}</dd></div>
          </dl>
        </section>

        <section className="account-panel">
          <div className="account-panel-title">
            <h2>Perfil atual</h2>
            <button className="secondary" type="button" onClick={() => setEditingProfile((value) => !value)}>
              {editingProfile ? 'Cancelar' : 'Editar perfil'}
            </button>
          </div>

          {!editingProfile ? (
            <div className="account-current-profile">
              <img src={activeProfile?.avatar || DEFAULT_PROFILE_ICON} alt="" />
              <div>
                <strong>{activeProfile?.name || 'Harlen'}</strong>
                <span>{profiles.length} perfil(is) disponiveis</span>
              </div>
            </div>
          ) : (
            <form className="profile-editor" onSubmit={saveProfile}>
              <div className="profile-editor-preview">
                <img src={profileForm.avatar || DEFAULT_PROFILE_ICON} alt="" />
                <label>
                  Nome do perfil
                  <input value={profileForm.name} onChange={(event) => setProfileForm((current) => ({ ...current, name: event.target.value }))} placeholder="Nome do perfil" required />
                </label>
              </div>

              <div className="platform-avatar-grid" aria-label="Imagens prontas da IESPFLIX">
                {profileIcons.map(([id, label, url]) => (
                  <button
                    className={`platform-avatar-choice ${profileForm.avatar === url ? 'selected' : ''}`}
                    key={id}
                    type="button"
                    title={label}
                    aria-label={label}
                    onClick={() => setProfileForm((current) => ({ ...current, avatar: url }))}
                  >
                    <img src={url} alt="" />
                  </button>
                ))}
              </div>

              <div className="actions right">
                <button className="secondary" type="button" onClick={() => setEditingProfile(false)}>Cancelar</button>
                <button type="submit">Salvar perfil</button>
              </div>
            </form>
          )}
        </section>

        <section className="account-panel account-stats">
          <h2>Resumo</h2>
          {stats.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </section>
      </div>
    </section>
  )
}
