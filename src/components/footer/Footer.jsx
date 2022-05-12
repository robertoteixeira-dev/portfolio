import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#technology">Technologies</a></li>
        <li><a href="#project">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/roberto-teixeira-developer/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/robertoteixeira-dev" target="_blank"><FaGithub/></a>
       
      </div>

      <div className="footer_copyright">
        <small>&copy; Developed by Roberto Teixeira Developer</small>
      </div>
    </footer>
  )
}

export default Footer