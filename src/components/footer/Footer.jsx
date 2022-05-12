import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Technologies</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/roberto-teixeira-developer/"><BsLinkedin/></a>
        <a href="https://github.com/robertoteixeira-dev"><FaGithub/></a>
       
      </div>
    </footer>
  )
}

export default Footer