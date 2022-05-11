import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import './Header.css'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/roberto-teixeira-developer/" target="_blank"><BsLinkedin className="social_icons"/></a>
        <a href="https://github.com/robertoteixeira-dev" target="_blank"><FaGithub className="social_icons"/></a>
    </div>
  )
}

export default HeaderSocials