const integrantes = [
  ['Anakin Skywalker', 'Backend Dev'],
  ['Bulma Briefs', 'Frontend Dev'],
  ['Darth Vader', 'Arquiteto de Software'],
  ['Gohan Son', 'Dev Full Stack'],
  ['Goku Son', 'Tech Lead'],
  ['Luke Skywalker', 'Backend Dev'],
  ['Piccolo Daimaoh', 'DBA'],
  ['Princess Leia Organa', 'UI/UX Designer'],
  ['Seiya de Pegasus', 'DevOps'],
  ['Vegeta Prince', 'QA Engineer'],
]

export default function Equipe() {
  return (
    <section className="page admin-page">
      <div className="page-heading">
        <span className="overline">Creditos</span>
        <h1>A Equipe IESPFLIX</h1>
        <p>Cards no estilo dark, com avatar e papel no projeto.</p>
      </div>
      <div className="team-grid">
        {integrantes.map(([nome, funcao]) => (
          <div className="team-card" key={nome}>
            <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(nome)}&background=E50914&color=fff&size=120&bold=true`} alt={nome} />
            <h2>{nome}</h2>
            <p>{funcao}</p>
            <div className="actions center"><button className="secondary">GitHub</button><button className="secondary">LinkedIn</button></div>
          </div>
        ))}
      </div>
    </section>
  )
}
