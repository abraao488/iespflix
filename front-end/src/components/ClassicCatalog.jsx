import ContentCard from './ContentCard.jsx'
import { homeSections } from '../data/moviesData.js'

export default function ClassicCatalog({ onOpen, hasItem, onToggleList }) {
  return (
    <>
      {homeSections.map((section) => (
        <section className="carousel-row premium-catalog-row" key={section.title}>
          <div className="row-title">
            <h2>{section.title}</h2>
            <span>Catalogo premium IESPFLIX</span>
          </div>
          <div className="carousel-track">
            {section.movies.map((item) => (
              <ContentCard
                key={item.id}
                item={item}
                inList={hasItem(item.id)}
                onOpen={onOpen}
                onToggleList={onToggleList}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
