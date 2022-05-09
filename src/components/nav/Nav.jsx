import React from 'react'
import './Nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { GrReactjs } from 'react-icons/gr'
import {BsLaptop } from 'react-icons/bs'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? 'active' : " "}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? 'active' : " "}><AiOutlineUser /></a>
      <a href="#technology" onClick={() => setActiveNav("#technology")} className={activeNav === "#technology" ? 'active' : " "}><GrReactjs /></a>
      <a href="#project" onClick={() => setActiveNav("#project")} className={activeNav === "#project" ? 'active' : " "}><BsLaptop /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? 'active' : " "}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav