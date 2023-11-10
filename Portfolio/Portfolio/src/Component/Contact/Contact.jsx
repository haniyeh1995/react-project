import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {MdOutlineMailOutline} from 'react-icons/md'
import {LiaTelegramPlane} from 'react-icons/lia'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4uis6r9', 'template_l3h5tsb', form.current, 'CHZBYqbJHPkddmDzm')

    e.target.reset()
  };

  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>haniyeh.nemati20@gmail.com</h5>
            <a href="mailto:haniyeh.nemati20@gmail.com" target='blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+989128475374</h5>
            <a href="https://wa.me/+989128475374" target='blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <LiaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@haniii_1995</h5>
            <a href="https://t.me/haniii_1995" target='blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'/>
          <input type="email" name='email' placeholder='Your Email'/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact