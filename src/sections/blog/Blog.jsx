import React from 'react'
import './blog.css'

const Blog = () => {
  return (
    <section id="blog">
    <div className="container">
     <div className="blog_heading">
         <h2> Our blog</h2>
     </div>
        
        <div className="blog_wrapper">
          <div className="blog_item">  
             <div className="blog_images">
                 <img src="./images/blog.png" alt="not found"/>    
             </div>
             <div className="blog_para">
               <a> 19 Jan 2022</a>
               <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
               <p> See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
               <h5>Read More<i className="fa-solid fa-arrow-right"></i></h5>
             </div>
           </div>
           <div className="blog_item">  
               <div className="blog_images">
               <img src="./images/blog.png" alt="not found"/> 
               </div>
               <div className="blog_para">
                 <a> 19 Jan 2022</a>
                 <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                 <p> See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                 <h5>Read More<i className="fa-solid fa-arrow-right"></i></h5>
               </div>
             </div>

             <div className="blog_item">  
               <div className="blog_images">
               <img src="./images/blog.png" alt="not found"/> 
               </div>
               <div className="blog_para">
                 <a> 19 Jan 2022</a>
                 <h4>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h4>
                 <p> See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                 <h5>Read More<i className="fa-solid fa-arrow-right"></i></h5>
               </div>
             </div>

        </div>
    </div>
</section>
  )
}

export default Blog