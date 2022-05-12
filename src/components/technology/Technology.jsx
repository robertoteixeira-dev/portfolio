import React from 'react'
import './Technology.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { SiMongodb, SiCss3, SiPostgresql, SiExpress } from 'react-icons/si'
import { DiJavascript1 } from 'react-icons/di'
import { FaReact, FaNodeJs, FaHtml5 } from 'react-icons/fa'

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
                <FaHtml5 className="technology_icons"/>
              </div>
            </article>

            <article className="technology_details">
              <BsPatchCheckFill className="technology_details-icon"/>
              <div>
                <h4>CSS</h4>
                <SiCss3 className="technology_icons"/>
              </div>
            </article>

            <article className="technology_details">
              <BsPatchCheckFill className="technology_details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <DiJavascript1 className="technology_icons"/>
              </div>
            </article>

            <article className="technology_details">
              <BsPatchCheckFill className="technology_details-icon"/>
              <div>
                <h4>React.JS</h4>
                <FaReact className="technology_icons"/>
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
                <FaNodeJs className="technology_icons"/>
              </div>
            </article>

            <article className="technology_details">
              <BsPatchCheckFill className="technology_details-icon"/>
              <div>
                <h4>PostgreSQL</h4>
                <SiPostgresql className="technology_icons"/>
              </div>
            </article>

            <article className="technology_details">
              <BsPatchCheckFill className="technology_details-icon"/>
              <div>
                <h4>MongoDB</h4>
                <SiMongodb className="technology_icons"/>
              </div>
            </article>

            <article className="technology_details">
              <BsPatchCheckFill className="technology_details-icon"/>
              <div>
                <h4>Express JS</h4>
                <SiExpress className="technology_icons"/>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Technology