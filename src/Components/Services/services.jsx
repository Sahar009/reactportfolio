import React from 'react'
import './services.css'
import {BsCheck2All} from 'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='services'>
          <div className='services_head'>
            <h3>Web Development </h3>
          </div>
          <ul className='services_list'>
            <li
            ><BsCheck2All className='service_list-icons' />
            <p> Web Design</p>
            </li>
            <li
            ><BsCheck2All className='service_list-icons' />
            <p> IOS/ Android Applications</p>
            </li>
            <li
            ><BsCheck2All className='service_list-icons' />
            <p> Community Web Portals</p>
            </li>
            <li
            ><BsCheck2All className='service_list-icons' />
            <p> E-commerece Applications</p>
            </li>
            <li
            ><BsCheck2All className='service_list-icons' />
            <p> Custom Web Applications</p>
            </li>
            
           
            <li
            ><BsCheck2All className='service_list-icons' />
            <p> Custom Templates</p>
            </li>
            
          </ul>
        </article>
        {/* end or ui */}
        <article className='services'>
          <div className='services_head'>
            <h3>Other Services</h3>
          </div>
          <ul className='services_list'>
          <li
            ><BsCheck2All className='service_list-icons' />
            <p> Payment Gateway</p>
            </li>
            <li
            ><BsCheck2All className='service_list-icons' />
            <p> User Interface & Experience</p>
            </li>
            <li
            ><BsCheck2All className='service_list-icons' />
            <p> Real time programming</p>
            </li>
            <li
            ><BsCheck2All className='service_list-icons' />
            <p> Software Workflow</p>
            </li>
            <li
            ><BsCheck2All className='service_list-icons' />
            <p> Testing & Debugging</p>
            </li>
            
           
            
          </ul>
          </article>

          {/* end of webdev */}
       
      </div>
    </section>
  )
}

export default services