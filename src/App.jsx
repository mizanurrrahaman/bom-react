import { useState } from 'react'
import Heading from './components/Heading'
import Peragraph from './components/Peragraph'
import CourseImg from './assets/images/web.jpg'
import Navbar from './sections/navbar/Navbar'
import Work from './sections/work/Work'
import Banner from './sections/banner/Banner'
import Project from './sections/project/Project'
import Features from './sections/features/features'
import Client from './sections/client/Client'
import Faq from './sections/faq/Faq'
import Inquiry from './sections/inquiry/Inquiry'
import Blog from './sections/blog/Blog'
import Footer from './sections/footer/Footer'


//console.log(CourseImg);



function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Navbar/>
     <Banner/>
     <Work/>
     <Project/>
     <Features/>
     <Client/>
     <Faq/>
     <Inquiry/>
     <Blog/>
     <Footer/>
    </>
  )
}

export default App
