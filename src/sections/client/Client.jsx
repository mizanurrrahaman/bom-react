import React from 'react'
import './client.css'
const Client = () => {
  return (
    <section id="client">
           <div className="container">
               <div className="client_wrapper">
                    <div className="client_heading">
                         <h2> What our clients say about us</h2>
                         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </div>
                    <div className="client_main">
                         <div className="client_item">
                              <h3> "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
                              <div className="client_info">
                                   <div className="client_avater">
                                       <img src="./images/woman-in-collared-shirt-774909.png" alt="Logo"/>
                                   </div>
                                   <div className="client_details">
                                     <h4> Jenny Wilson</h4>
                                     <h5> Vice President</h5>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
           </div>
      </section>
  )
}

export default Client