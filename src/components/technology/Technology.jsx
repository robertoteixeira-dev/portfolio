import React from 'react'
import './Technology.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { FaHtml5 } from 'react-icons/fa'

const Technology = () => {
  return (
    <section id="technology">
      <h5>What Skills I Have</h5>
      <h2>Technologies</h2>

      <div className="container technology_container">

        <div className="technology_frontend">
          <h3>Frontend Development</h3>
          <div className="technology_content">
            <article className="technology_details">
              <BsPatchCheckFill className="technology_details-icon"/>
              <div>
                <h4>HTML</h4>
                <FaHtml5 />
              </div>
            </article>

            <article className="technology_details">
              <BsPatchCheckFill className="technology_details-icon"/>
              <div>
                <h4>CSS</h4>
                <FaHtml5 />
              </div>
            </article>

            <article className="technology_details">
              <BsPatchCheckFill className="technology_details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <FaHtml5 />
              </div>
            </article>

            <article className="technology_details">
              <BsPatchCheckFill className="technology_details-icon"/>
              <div>
                <h4>React.JS</h4>
                <FaHtml5 />
              </div>
            </article>
          </div>
        </div>

        <div className="technology_backend">
          <h3>Backend Development</h3>
          <div className="technology_content">
            <article className="technology_details">
              <BsPatchCheckFill className="technology_details-icon"/>
              <div>
                <h4>Node.JS</h4>
                <FaHtml5 />
              </div>
            </article>

            <article className="technology_details">
              <BsPatchCheckFill className="technology_details-icon"/>
              <div>
                <h4>PostgreSQL</h4>
                <FaHtml5 />
              </div>
            </article>

            <article className="technology_details">
              <BsPatchCheckFill className="technology_details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <FaHtml5 />
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Technology