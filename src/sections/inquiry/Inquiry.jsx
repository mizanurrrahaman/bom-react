import React from 'react'
import './inquiry.css'

const Inquiry = () => {
  return (
    <section id="inquiry">
          <div className='container'>
               <div className='inquiry_wrapper'>
                  <div className='inquiry_img'>
                     <picture>
                        <img src="./images/woman-writing-on-paper-3228878.jpg" alt="not found"/> 
                     </picture>
                     <div className="overlay">
                             <h2> Building stellar websites for early startups</h2>
                             <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                     </div>    
                  </div>
                  <div className='inquiry_from'>
                       <h4> Send inquiry</h4>
                       <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                       <from>
                           <input type="text" placeholder='Enter your text'/>
                           <input type="" placeholder='Email'/>
                           <input type="url" placeholder="Paste your Figma design URL"></input>
                           <button type='button'> Send an Inquiry </button>
                       </from>
                       <a> Get in touch with us <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
               </div>
          </div>
     </section>
  )
}

export default Inquiry