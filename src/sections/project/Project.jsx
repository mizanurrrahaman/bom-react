import React from 'react'
import './project.css'
const Project = () => {
  return (
    <section id="project">
    <div className="container">
        <div className="project_heading">
            <h2>View our projects </h2>
            <a href="#"> View More<i className="fa-solid fa-arrow-right"></i></a>
        </div>
         <div className="project_main">
             <div className="big_project">
                <img src="./images/Card.jpg" alt="not found"/>   
                <div className="overlay">
                    <h4> Workhub office Webflow Webflow Design</h4>
                    <p> Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                    <a href="#"> View project<i className="fa-solid fa-arrow-right"></i></a>
                </div>
             </div>

             <div className="small_item">
              <div className="small_project">
                   <div className="small_project_item">
                         <img src="./images/Rectangle 1313.jpg" alt="not found"/>  
                         <div className="overlay">
                               <h4> Unisaas Website Design</h4>
                               <a> View portfolio<i className="fa-solid fa-arrow-right"></i></a>
                         </div>
                   </div>
                </div>

                <div className="small_project">
                   <div className="small_project_item">
                         <img src="./images/Card (1).jpg" alt="not found"/>
                         <div className="overlay">
                               <h4> Unisaas Website Design</h4>
                               <a> View portfolio<i className="fa-solid fa-arrow-right"></i></a>
                         </div>
                   </div>
                </div>

             </div>
            
         </div>
    </div>
</section>
  )
}

export default Project