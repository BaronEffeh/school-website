import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Home/Hero/Hero'
import Title from '../Components/Title/Title'
import Programs from '../Components/Home/Programs/Programs'
import About from '../Components/Home/About/About'
import VideoPlayer from '../Components/Home/VideoPlayer/VideoPlayer'
import Campus from '../Components/Home/Campus/Campus'
import Testimonials from '../Components/Home/Testimonials/Testimonials'
import Contact from '../Components/Home/Contact/Contact'
import Footer from '../Components/Footer/Footer'

const Home = () => {

   const [playState, setPlayState] = useState(false);

   return (
      <div className='home' >
         {/* <Navbar /> */}
         <Hero />
         <div className="container">
            <Title subTitle='Our PROGRAMS' title='What We Offer' />
            <Programs />
            <About setPlayState={setPlayState} />
            <Title subTitle='Gallery' title='Campus Photos' />
            <Campus />
            <Title subTitle='Testimonials' title='What Student Says' />
            <Testimonials />
            <Title subTitle='Contact Us' title='Get in Touch' />
            <Contact />
            {/* <Footer /> */}
         </div>
         <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
   )
}

export default Home
