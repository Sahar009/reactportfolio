import React from 'react'
import './header.css'
import CTA from './CTA'  
import ME from '../../Others/about.jpg'
import Headersocials from './headersocials'

const header = () => {
  return (
   <header>
     <div className="container header_container">
    <h5>Hello I'm</h5>
    <h1> Akinwumi Sehinde</h1>
    <h5 className='text-light'>Front-End Developer</h5>
    <CTA/>
    <Headersocials/>
    <div className='me'>
      <img src={ME} alt="me" />
    </div>

    <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
   
   </header>
  )
}

export default header