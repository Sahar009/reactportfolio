import React from 'react'
import './about.css'
import ME from '../../Others/me3.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {RiFolderShieldFill} from 'react-icons/ri'



const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <BsAwardFill className='about_icon'/>

              <h5>Experience</h5>
              <small> 3+ years working experience</small>

            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>

              <h5>Clients</h5>
              <small>17+ Worldwide</small>

            </article>
            <article className='about_card'>
              <RiFolderShieldFill className='about_icon'/>

              <h5>Projects</h5>
              <small> 13+ completed</small>

            </article>

          </div>
          <p>
           Hey There!, I'm a front-end Developer, I build Applications & websites, still playing around & my favorite tool is React!! 

          </p>
          
          <a href="#contact"className=' btn btn-primary'>Lets Talk</a>
          
        </div>

      </div>
    </section>
  )
}

export default about