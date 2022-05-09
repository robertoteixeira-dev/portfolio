import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FaGraduationCap } from 'react-icons/fa'
import { BsLaptopFill } from 'react-icons/bs'
import { BsPatchCheckFill } from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>+1 Year Working</small>
            </article>

            <article className="about_card_edu">
              <FaGraduationCap className="about_icon" />
              <h5>Education</h5>
              <small><BsPatchCheckFill /> Computer Science Studant</small>
              <small><BsPatchCheckFill /> Graduated IT Technician</small>
            </article>

            <article className="about_card">
              <BsLaptopFill className="about_icon" />
              <h5>Projects</h5>
              <small>+10 Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, perspiciatis nisi fugiat doloremque ea illum quaerat soluta quis repellendus omnis perferendis deserunt ex vitae ducimus quidem iste. Repellendus, molestiae laudantium.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About