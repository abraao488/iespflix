import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DEFAULT_PROFILE_ICON } from '../data/profileIcons.js'

export default function AccountMenu({
  user,
  profiles = [],
  activeProfile,
  activeProfileId,
  onSwitchProfile,
  onAddProfile,
  onDeleteProfile,
  onLoginClick,
  onLogout,
}) {
  const [open, setOpen] = useState(false)
  const [managing, setManaging] = useState(false)
  const [newProfileName, setNewProfileName] = useState('')
  const menuRef = useRef(null)
  const currentProfile = activeProfile || profiles[0] || { name: user?.nome || 'Harlen', avatar: DEFAULT_PROFILE_ICON }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
        setManaging(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function closeMenu() {
    setOpen(false)
    setManaging(false)
  }

  function submitProfile(event) {
    event.preventDefault()
    onAddProfile?.(newProfileName)
    setNewProfileName('')
  }

  return (
    <div className="account-menu" ref={menuRef}>
      <button className="account-entry profile-trigger" type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-haspopup="menu">
        <img className="account-avatar-img" src={currentProfile.avatar || DEFAULT_PROFILE_ICON} alt="Minha Conta" />
        <span className="profile-caret">▾</span>
      </button>
      {open && (
        <div className="account-dropdown netflix-profile-dropdown" role="menu">
          {profiles.map((profile) => (
            <div className="profile-manage-row" key={profile.id}>
              <button className={`profile-menu-row ${profile.id === activeProfileId ? 'active' : ''}`} type="button" onClick={() => { onSwitchProfile?.(profile.id); setManaging(false) }}>
                <img className="profile-mini-avatar img" src={profile.avatar || DEFAULT_PROFILE_ICON} alt="" />
                <span>{profile.name}</span>
              </button>
              {managing && profiles.length > 1 && (
                <button className="profile-delete-button" type="button" aria-label={`Apagar ${profile.name}`} onClick={() => onDeleteProfile?.(profile.id)}>x</button>
              )}
            </div>
          ))}

          {managing && (
            <form className="profile-add-form" onSubmit={submitProfile}>
              <input value={newProfileName} onChange={(event) => setNewProfileName(event.target.value)} placeholder="Nome do perfil" />
              <button type="submit">Adicionar</button>
            </form>
          )}

          <button className="profile-menu-link" type="button" onClick={() => setManaging((value) => !value)}>
            {managing ? 'Concluir perfis' : 'Gerenciar perfis'}
          </button>
          <div className="profile-divider" />
          <NavLink to="/conta" onClick={closeMenu}>Conta</NavLink>
          <button className="profile-menu-link" type="button" onClick={closeMenu}>Centro de ajuda</button>
          <button className="profile-menu-link" type="button" onClick={() => { closeMenu(); onLogout?.() }}>
            {user ? 'Sair do IESPFLIX' : 'Sair da IESPFLIX'}
          </button>
        </div>
      )}
    </div>
  )
}
