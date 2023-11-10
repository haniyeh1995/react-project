import './About.css'
import ME from '../../assets/me3.jpg'
import { FaAward } from "react-icons/fa";
import {AiOutlineUserSwitch} from 'react-icons/ai'
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>
            <article className="about__card">
              <AiOutlineUserSwitch className='about__icon' />
              <h5>Clients</h5>
              <small>+300 in Iran</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>+30 Completed</small>
            </article>
          </div>
          <p>
          Over past years, I worked in the field of sales and business development, but I realized that my interest is in programming, So I started self-studying, participating in training courses and Do a lot of projects. I'm trying to developing myself in this field and starting a new chapter of my life.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About