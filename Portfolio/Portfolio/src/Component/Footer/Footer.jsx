import './Footer.css'
import {BsLinkedin} from "react-icons/bs"
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Made With Love</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/haniyeh-nematollahi-9a9530166" target='"https://www.linkedin.com/in/haniyeh-nematollahi-9a9530166"'><BsLinkedin /></a>
        <a href="https://instagram.com/_.haniiii95?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target='"https://instagram.com/_.haniiii95?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"'><BsInstagram/></a>
        <a href="https://twitter.com/Hih86302093" target='"https://twitter.com/Hih86302093"'><BsTwitter /></a>
      </div>

    </footer>
  )
}

export default Footer