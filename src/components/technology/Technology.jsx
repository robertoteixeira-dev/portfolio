import React from 'react'
import './Technology.css'
import { BsPatchCheckFill } from 'react-icons/bs'
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
              <BsPatchCheckFill />
            </article>
          </div>
        </div>

        <div className="technology_backend">
          <h3>Backend Development</h3>
        </div>

      </div>
    </section>
  )
}

export default Technology