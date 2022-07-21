import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {BsFillBookmarkStarFill } from 'react-icons/bs'
import {FcServices } from 'react-icons/fc'
import {BiMessageMinus} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
     <a href="#" onClick={()=> setActiveNav('#')} className={ activeNav ==='#' ? 'active' : ''}><FaHome /></a>
     <a href="#about" onClick={() => setActiveNav('#about')} className={ activeNav ==='#about' ? 'active' : ''}><FiUser /></a>
     <a href="#experience" onClick={() => setActiveNav('#experience')} className={ activeNav ==='#experience' ? 'active' : ''}><BsFillBookmarkStarFill /></a>
     <a href="#services" onClick={() => setActiveNav('#services')} className={ activeNav ==='#services' ? 'active' : ''}><FcServices /></a>
     <a href="#contact" onClick={() => setActiveNav('#contact')} className={ activeNav ==='#contact' ? 'active' : ''}><BiMessageMinus /></a>
     
     

   </nav>
  )
}

export default Nav