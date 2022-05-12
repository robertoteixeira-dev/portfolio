import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h8rk8pu', 'template_endw5vf', form.current, 'vpSssLkOUKZGRYExB')
    
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            < MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>robertoteixeira.developer@gmail.com</h5>
            <a href="robertoteixeira.developer@gmail.com" target="_blank">Get in Touch</a>
          </article>

          <article className="contact_option">
            <BsLinkedin className="contact_option-icon"/>
            <h4>LindekIn</h4>
            <h5>roberto-teixeira-developer/</h5>
            <a href="https://www.linkedin.com/in/roberto-teixeira-developer/" target="_blank">Let's Talk</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact