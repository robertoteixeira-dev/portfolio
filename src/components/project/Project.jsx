import React from 'react'
import './Project.css'
import IMG1 from '../../assets/login.gif'
import IMG2 from '../../assets/BrFood.gif'
import IMG3 from '../../assets/Web.gif'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My project',
    githug: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'My project',
    githug: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'My project',
    githug: 'https://github.com',
    demo: 'https://github.com'
  },
]

const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container project_container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="project_item">
                <div className="project_item-image">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <div className="project_item-cta">
                    <a href={github} className="btn" target="_blank">GitHub</a>
                    <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div >

    </section >
  )
}

export default Project

//Dribbble.com - free images for template