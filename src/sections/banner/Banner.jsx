import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <section id="banner">
           <div className="container">
               <div className="banner_wrapper">
                    <div className="banner_content">
                         <h1> Building stellar websites for early startups</h1>
                         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                         <div className="banner_btn">
                              <a href="#"> View our work</a>
                              <a href="#"> View Pricing<i className="fa-solid fa-arrow-right"></i></a>
                         </div>
                    </div>
                    <div className="banner_img">
                    <img src="./images/Illustration.png" alt="Logo" />
                    </div>
               </div>
           </div>
      </section>
  )
}
export default Banner