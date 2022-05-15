import React from 'react'
import './Project.css'
import IMG1 from '../../assets/login.gif'
import IMG2 from '../../assets/BrFood.gif'
import IMG3 from '../../assets/Portfolio.gif'
import IMG4 from '../../assets/Web.gif'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Memegram',
    description: 'This is a Full Stack Instagram clone project for sharing memes with RESTful API developed with React.JS, Node.JS, Express and PostgreSQL',
    repository: 'https://github.com/robertoteixeira-dev/memegram',
    demo: 'https://github.com/robertoteixeira-dev/memegram-api'
  },
  {
    id: 2,
    image: IMG2,
    title: 'BrFood',
    description: 'This is a Front-End restaurant website project specialist in Brazilian food developed with HTML, CSS and JavaScript',
    repository: 'https://github.com/robertoteixeira-dev/BrFood_Website',
    demo: 'https://hardcore-goldstine-dc5850.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio',
    description: 'This Project is my professional portfolio website developed with React.JS and using Email.JS to manage the messages that I receive from the portfolio website',
    repository: 'https://github.com/robertoteixeira-dev/portfolio',
    demo: 'https://cozy-mousse-0924e9.netlify.app/'
  },
  {
  id: 4,
  image: IMG4,
  title: 'Come to ARG',
  description: 'This is a Front-End Blog Project about tourism in Argentina developed with HTML and CSS',
  repository: 'https://github.com/robertoteixeira-dev/Come-to-ARG_Blog',
  demo: 'https://cometoarg.netlify.app/'
},
]

const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container project_container">

        {
          data.map(({ id, image, title, description, repository, demo }) => {
            return (
              <article key={id} className="project_item">
                <div className="project_item-image">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <h4>{description}</h4>
                  <div className="project_item-cta">
                    <a href={repository} className="btn" target="_blank">GitHub</a>
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