import React from 'react'
import './portfolio.css'
import IMG1 from '../../Others/back.jpeg'
import IMG2 from '../../Others/my works2.jpg'
import IMG3 from '../../Others/my works.jpg'
import IMG4 from '../../Others/myworks7.jpeg'
import IMG5 from '../../Others/myworks5.jpeg'
import IMG6 from '../../Others/myworks6.jpg'



const data = [{
  id: 1,
  image:IMG1,
  title: 'Architecture Gallary website',
  github:'https://github.com'
},
{ 
  id: 2,
  image:IMG2,
  title: 'Personal portfolio website',
  github:'https://github.com'

},
{ 
  id: 3,
  image:IMG3,
  title: 'Money Chat Web Application',
  github:'https://github.com'

},
{ 
  id: 4,
  image:IMG4,
  title: 'E-commerce Web Application',
  github:'https://github.com/Sahar009/nolongecommerce'

},
{ 
  id: 5,
  image:IMG6,
  title: 'Sport Prediction website',
  github:'https://github.com/Sahar009/reactsport'

},
{ 
  id: 6,
  image:IMG5,
  title: 'Chat web Application',
  github:'https://github.com/Sahar009/blogsite'

}

]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
       {
         data.map(({id, image, title, github}) => {
           return (
            <article key={id} className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={image} alt={title} />
            </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            
          </article>
          
     
           )
         })
       }
    
      </div>
    </section>
  )
}

export default portfolio