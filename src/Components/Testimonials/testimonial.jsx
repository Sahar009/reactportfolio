import React from 'react'
import './testimonial.css'
import AVTR1 from '../../Others/av3.jpg'
import AVTR2 from '../../Others//av2.png'
import AVTR3 from '../../Others/back.jpeg'
import AVTR4 from '../../Others/av5.png'
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";




const data = [
  {
    avatar:AVTR1,
    name: 'Adeyemi Debola',
    review: 'Created and manages my web page from time to time, efficient in timing'
  },
  {
    avatar:AVTR2,
    name: 'Bamgboye Pelumi',
    review: 'A call to when i have issues with my website'
  },
  {
    avatar:AVTR3,
    name: 'O.P.M.T TECH',
    review: " One of the best front-end developer i've worked with, Codes are easy to read."
  },
  {
    avatar:AVTR4,
    name: 'Idowu Kalejaiye',
    review: " Built my  company's website that has thousands of visitors daily, Really trust worthy."
  }
]
const testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials_container' 
      pagination={{ clickable: true }} 
      modules={[Pagination]} 
      slidesPerView={1} 
      spaceBetween={40}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
            <SwiperSlide key={index} className='testimonial'>
          <div className='client_avatar'>
            <img src={avatar} alt={name}  />   
          </div>
          <h5 className='client_name'>{name}</h5>
          <small className='client_review'>
                {review}        
          </small>

        </SwiperSlide>
            )
          })
        }

        </Swiper>
    </section>
  )
}

export default testimonial