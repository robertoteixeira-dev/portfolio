import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import Typical from 'react-typical'
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

        <div className="about_tech">

          <img src={ME} alt='' />

          <h5 className="personality">
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                "Self-Learner",
                1000,
                "Team Player",
                1000,
                "Organized",
                1000,
                "Hard Worker",
                1000,
                "Technology Lover",
                1000,
              ]}
            />
          </h5>
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
              <small><BsPatchCheckFill /> Computer Science</small><br />
              <small><BsPatchCheckFill /> IT Technician</small>
            </article>

            <article className="about_card">
              <BsLaptopFill className="about_icon" />
              <h5>Projects</h5>
              <small>+10 Completed</small>
            </article>
          </div>

          <p>
            I'm a self-directed, action-oriented Full-Stack Developer passionate about technology and software development. Graduated as IT technician and currently a Computer Science Studant with ability to collect and manage information efficiently and accurately.
            Good object-oriented programming knowledge. Great written and verbal communications skills in all the three languages that I speak (English, Spanish and Portuguese) and a strong desire to work hard and perform well.
            Engaged in the search for suitable solutions and specs that best meet the needs of the project.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>


      </div>
    </section>
  )
}

export default About