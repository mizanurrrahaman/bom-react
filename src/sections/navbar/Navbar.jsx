import React from 'react'
import './navbar.css'


const  Navbar = () => {
  return (
     <nav id="navbar">
           <div className="container">
                <div className="nav_wrapper">
                    <div className="nav_logo">
                    <img src="./images/Vector.png" alt="Logo" />
                    </div>
                    <div className="menu">
                         <ul>
                              <li>
                                   <a href="#"> home</a>
                              </li>

                              <li>
                                   <a href="#"> about us</a>
                              </li>
                              <li>
                                   <a href="#"> features</a>
                              </li>
                              <li>
                                   <a href="#"> Pricing</a>
                              </li>
                              <li>
                                   <a href="#">FAQ</a>
                              </li>
                              <li>
                                   <a href="#"> Blog</a>
                              </li>
                         </ul>
                         <div className="nav_btn">
                              <a href="#">Contact us</a>
                         </div>
                    </div>
                </div>
           </div>
      </nav>
  )
}

export default Navbar