import './Header.css'
import CTA from './CTA'
import me from '../../assets/me.jpg'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h4>Hello Everyone I am</h4>
        <h1>Haniyeh Nematollahi</h1>
        <h2 className='text-light'>Frontend Developer</h2>
        <CTA/>
        <div className='me'>
          <img src={me} alt="me"/>
        </div>
        <a href="#Contact" className='scroll__down'>Scroll Down</a>
        <div className='header__socials'>
          <a href="https://www.linkedin.com/in/haniyeh-nematollahi-9a9530166" target='https://www.linkedin.com/in/haniyeh-nematollahi-9a9530166'><BsLinkedin/></a>
          <a href="https://github.com/haniyeh1995" target='https://github.com/haniyeh1995'><BsGithub/></a>
          <a href="https://instagram.com/_.haniiii95?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target='https://instagram.com/_.haniiii95?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'><BsInstagram/></a>
        </div>

      </div>
    </header>
  )
}

export default Header