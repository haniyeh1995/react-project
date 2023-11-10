import './Portfolio.css'
import { portfolios } from './Constant'

const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="div container portfolio__container">
        {
          portfolios.map((portfolio) => {
            return (
              <article key={`${portfolio.title}${portfolio.id}`} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={portfolio.image} alt={portfolio.title} />
                </div>
                <h3>{portfolio.title}</h3>
                <div className="portfolio__item-cta">
                  <a href={portfolio.github} className='btn' target='blank'>Github</a>
                  {/* <a href={portfolio.demo} className='btn btn-primary' target='blank'>Live Demo</a> */}
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio