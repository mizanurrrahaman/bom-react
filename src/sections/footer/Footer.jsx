import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer id="footer">
        <div class="container">
             <div class="footer_wrapper">
                 <div class="footer_item">
                     <h3> <i class="fa-brands fa-first-order"></i>finsweet</h3>
                     <p> We are always open to discuss your project and improve your online presence.</p>
                 </div>
                 <div class="footer_list">
                     <h3> Lets Talk!</h3>
                    <p> We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p> 
                     <div class="footer_icon">
                        <a href="#" class="icon"> <i class="fa-brands fa-facebook"></i></a>
                        <a href="#" class="icon"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#" class="icon"> <i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="icon"> <i class="fa-brands fa-linkedin"></i></a>

                     </div>

                 </div>

             </div>
             <div class="footer_service"> 
                   <div class="footer_item"> 
                    <div class="footer_contact">
                        <h4> Email me at</h4>
                        <a href="#"> contact@website.com</a>
                     </div>
                     <div class="footer_contact">
                        <h4>Call us</h4>
                        <a href="#"> 0927 6277 28525</a>
                     </div>

                   </div>
             </div>
        </div>

        <div class="footer_nav">
            <div class="footer_navbar">
                 <div class="footer_add">
                   <h5> Copyright 2022, Finsweet.com</h5>
                 </div>
                 <div class="footer_menu">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>

                    </ul>
                 </div>
            </div>
        </div>
          
     </footer>
  )
}

export default Footer