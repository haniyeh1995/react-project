import './Services.css'
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id='Services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container container__service">
        <article className="service">
          <div className="service__head">
            <h3>Front-End Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Interface (UI) Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Development Frameworks</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cross-Browser Compatibility</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Version Control By Github</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Animation</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Business Management</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Business Strategy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>business OKR and KPI's</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Negotiation with Top merchants</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Achieve Targets</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Human resources</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adjust Contract</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services