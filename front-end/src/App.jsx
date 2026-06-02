import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Browse from './pages/Browse.jsx'
import MinhaLista from './pages/MinhaLista.jsx'
import Gostei from './pages/Gostei.jsx'
import Conta from './pages/Conta.jsx'
import AdicionarConteudo from './pages/AdicionarConteudo.jsx'
import Filmes from './pages/Filmes.jsx'
import Usuarios from './pages/Usuarios.jsx'
import Sessoes from './pages/Sessoes.jsx'
import Ingressos from './pages/Ingressos.jsx'
import Favoritos from './pages/Favoritos.jsx'
import Planos from './pages/Planos.jsx'
import Feriados from './pages/Feriados.jsx'
import Equipe from './pages/Equipe.jsx'
import Requisitos from './pages/Requisitos.jsx'
import AccountMenu from './components/AccountMenu.jsx'
import LoginModal from './components/LoginModal.jsx'
import { moviesData } from './data/moviesData.js'
import { useProfiles } from './hooks/useProfiles.js'
import { authService, authStorage } from './services/api.js'

export default function App() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [user, setUser] = useState(authStorage.getUser)
  const [loginOpen, setLoginOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const { profiles, activeProfile, activeProfileId, switchProfile, addProfile, updateProfile, deleteProfile } = useProfiles(user)

  const updates = useMemo(() => {
    return moviesData
      .filter((item) => item.newRelease || item.relevant || item.featured)
      .slice(-5)
      .reverse()
  }, [])

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!authStorage.getToken()) return
    authService.me()
      .then(({ data }) => {
        authStorage.setSession(data)
        setUser(data)
      })
      .catch(() => {
        authStorage.clear()
        setUser(null)
      })
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname, location.search])

  function logout() {
    authStorage.clear()
    setUser(null)
    setNotificationsOpen(false)
  }

  return (
    <div className="app-shell">
      <header className={`navbar ${scrolled ? 'navbar-solid' : ''}`}>
        <Link className="logo" to="/" aria-label="IESPFLIX - Inicio">
          <img src="/iespflix-logo.png" alt="" aria-hidden="true" />
        </Link>
        <nav className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/browse?tipo=SERIE">Series</NavLink>
          <NavLink to="/browse?tipo=FILME">Filmes</NavLink>
          <NavLink to="/minha-lista">Minha Lista</NavLink>
          <NavLink to="/gostei">Gostei</NavLink>
          <NavLink to="/novo">Novo</NavLink>
          <NavLink className="mobile-search-link" to="/browse">Buscar</NavLink>
        </nav>
        <div className="navbar-actions">
          <Link className="nav-icon-button search-link" to="/browse" aria-label="Buscar">
            <img className="nav-action-icon" src="/icons/search-icon.png" alt="" aria-hidden="true" />
          </Link>
          <button
            className={`nav-icon-button notification-button ${notificationsOpen ? 'active' : ''}`}
            type="button"
            aria-label="Notificacoes"
            aria-expanded={notificationsOpen}
            onClick={() => setNotificationsOpen((open) => !open)}
          >
            <img className="nav-action-icon" src="/icons/notification-icon.png" alt="" aria-hidden="true" />
            <span className="notification-dot" aria-hidden="true" />
          </button>
          {notificationsOpen && (
            <div className="notifications-popover">
              <strong>Atualizacoes</strong>
              {updates.map((item) => (
                <Link key={item.id} to="/browse" onClick={() => setNotificationsOpen(false)}>
                  <span>Novo no IESPFLIX</span>
                  <b>{item.titulo || item.title}</b>
                  <small>{item.tipo || item.type} | {item.ano || item.year || '2026'}</small>
                </Link>
              ))}
            </div>
          )}
          <button
            className={`mobile-menu-button ${mobileMenuOpen ? 'active' : ''}`}
            type="button"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <AccountMenu
            user={user}
            profiles={profiles}
            activeProfile={activeProfile}
            activeProfileId={activeProfileId}
            onSwitchProfile={switchProfile}
            onAddProfile={addProfile}
            onDeleteProfile={deleteProfile}
            onLoginClick={() => setLoginOpen(true)}
            onLogout={logout}
          />
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/conteudos" element={<Browse />} />
          <Route path="/minha-lista" element={<MinhaLista />} />
          <Route path="/gostei" element={<Gostei />} />
          <Route path="/conta" element={<Conta user={user} activeProfile={activeProfile} profiles={profiles} onUpdateProfile={updateProfile} />} />
          <Route path="/novo" element={<AdicionarConteudo />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/sessoes" element={<Sessoes />} />
          <Route path="/ingressos" element={<Ingressos />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/feriados" element={<Feriados />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/requisitos" element={<Requisitos />} />
        </Routes>
      </main>
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} onAuthenticated={setUser} />
    </div>
  )
}
