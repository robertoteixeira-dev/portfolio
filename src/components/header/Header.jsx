import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import Typical from 'react-typical'
import Infinity from 'react'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="presentation">
        <h5>Hello, I'm</h5>
        <h1>Roberto Teixeira</h1>
        <h5 className="text-light">
          {" "}
          <Typical 
            loop={Infinity}
            steps={[
              "Front-End Developer",
              1000,
              "React Developer",
              1000,
              "Becoming a Full-Stack Dev",
              1000,
              "MERN and PERN Stack Dev",
              1000,
              "Front-End Developer",
              1000,  
            ]}
          />
        </h5>
        </div>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        
        <div className="my_image">
          <FaReact className="icon_dev icon_react" />
        </div>

        <div className="my_image">
          <FaNodeJs className="icon_dev icon_node" />
        </div>

        <div className="my_image">
          <DiJavascript1 className="icon_dev icon_javascript" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header