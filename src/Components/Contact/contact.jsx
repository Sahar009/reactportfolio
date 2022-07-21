import React from 'react'
import './contact.css'
import{MdAttachEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdAttachEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5> akinwumisehinde@gmail.com</h5>
            <a href="mailto:akinwumisehinde@gmail.com" target='_blank'> Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5> +234(8101126131)</h5>
            <a href="https://api.whatsapp.com/send?phone=23408101126131" target='_blank'> Send a message</a>
          </article>
         
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>


            <input type="email"name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact