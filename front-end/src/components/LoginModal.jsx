import { useState } from 'react'
import Toast from './Toast.jsx'
import { authService, authStorage } from '../services/api.js'

const emptyLogin = { email: 'anakin@iespflix.com', senha: '123456' }
const emptyRegister = { nome: '', email: '', senha: '', cpfCnpj: '', cep: '' }

export default function LoginModal({ open, onClose, onAuthenticated }) {
  const [mode, setMode] = useState('login')
  const [login, setLogin] = useState(emptyLogin)
  const [register, setRegister] = useState(emptyRegister)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  if (!open) return null

  async function submit(event) {
    event.preventDefault()
    setLoading(true)
    try {
      const { data } = mode === 'login'
        ? await authService.login(login)
        : await authService.register(register)
      authStorage.setSession(data)
      onAuthenticated(data)
      setToast({ type: 'success', message: 'Perfil carregado com sucesso.' })
      setTimeout(onClose, 300)
    } catch {
      setToast({ type: 'error', message: 'Nao foi possivel autenticar. Confira email e senha.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-backdrop" onClick={onClose}>
      <form className="login-card" onSubmit={submit} onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close account-close" onClick={onClose}>X</button>
        <h1>{mode === 'login' ? 'Entrar' : 'Criar perfil'}</h1>
        <p>{mode === 'login' ? 'Use anakin@iespflix.com / 123456 para entrar rapido.' : 'Crie uma conta com JWT real no backend.'}</p>

        {mode === 'login' ? (
          <>
            <input value={login.email} onChange={(event) => setLogin({ ...login, email: event.target.value })} placeholder="Email" />
            <input type="password" value={login.senha} onChange={(event) => setLogin({ ...login, senha: event.target.value })} placeholder="Senha" />
          </>
        ) : (
          <>
            <input value={register.nome} onChange={(event) => setRegister({ ...register, nome: event.target.value })} placeholder="Nome" />
            <input value={register.email} onChange={(event) => setRegister({ ...register, email: event.target.value })} placeholder="Email" />
            <input type="password" value={register.senha} onChange={(event) => setRegister({ ...register, senha: event.target.value })} placeholder="Senha" />
            <input value={register.cpfCnpj} onChange={(event) => setRegister({ ...register, cpfCnpj: event.target.value })} placeholder="CPF/CNPJ opcional" />
            <input value={register.cep} onChange={(event) => setRegister({ ...register, cep: event.target.value })} placeholder="CEP opcional" />
          </>
        )}

        <button disabled={loading}>{loading ? 'Carregando...' : mode === 'login' ? 'Entrar' : 'Criar conta'}</button>
        <button type="button" className="link-button" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
          {mode === 'login' ? 'Novo por aqui? Criar perfil.' : 'Ja tenho conta.'}
        </button>
      </form>
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  )
}
