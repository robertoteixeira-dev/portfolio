import React from 'react'
import './Project.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container project_container">
        
        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG1} alt="" />
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" className="btn" target="_blank">GitHub</a>
            <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG2} alt="" />
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" className="btn" target="_blank">GitHub</a>
            <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG3} alt="" />
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" className="btn" target="_blank">GitHub</a>
            <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG4} alt="" />
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" className="btn" target="_blank">GitHub</a>
            <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

      </div>

    </section>
  )
}

export default Project

//Dribbble.com - free images for template