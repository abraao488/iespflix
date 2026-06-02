import { useEffect, useMemo, useState } from 'react'
import { feriadoService } from '../services/api.js'

const meses = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

export default function Feriados() {
  const [ano, setAno] = useState(new Date().getFullYear())
  const [items, setItems] = useState([])

  useEffect(() => {
    feriadoService.listar(ano).then(({ data }) => setItems(data)).catch(() => setItems([]))
  }, [ano])

  const grouped = useMemo(() => {
    return items.reduce((acc, item) => {
      const date = new Date(`${item.date}T00:00:00`)
      const month = date.getMonth()
      acc[month] = [...(acc[month] || []), item]
      return acc
    }, {})
  }, [items])

  return (
    <section className="page admin-page">
      <div className="page-heading row">
        <div>
          <span className="overline">BrasilAPI</span>
          <h1>Feriados Nacionais</h1>
          <p>Fluxo visual: Frontend /backend/api/v1/feriados/{ano} Spring Boot BrasilAPI retorno.</p>
        </div>
        <input className="year-input" type="number" value={ano} onChange={(e) => setAno(e.target.value)} />
      </div>

      <div className="flow-panel">
        <span>Frontend</span><span>/api/v1/feriados/{ano}</span><span>Spring Boot</span><span>BrasilAPI</span><span>Retorno</span>
      </div>

      <div className="holiday-list">
        {Object.entries(grouped).map(([month, holidays]) => (
          <section className="month-block" key={month}>
            <h2>{meses[Number(month)]}</h2>
            {holidays.map((holiday) => {
              const date = new Date(`${holiday.date}T00:00:00`)
              return <p key={`${holiday.date}-${holiday.name}`}><span>{date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}</span>{holiday.name}</p>
            })}
          </section>
        ))}
      </div>
    </section>
  )
}
