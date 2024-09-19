import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
// import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Home/Hero/Hero'
import Title from '../Components/Title/Title'
import Programs from '../Components/Home/Programs/Programs'
import About from '../Components/Home/About/About'
import VideoPlayer from '../Components/Home/VideoPlayer/VideoPlayer'
import Campus from '../Components/Home/Campus/Campus'
import Testimonials from '../Components/Home/Testimonials/Testimonials'
import Contact from '../Components/Home/Contact/Contact'
import Milestones from '../Components/Home/Milestones/Milestones'
// import Footer from '../Components/Footer/Footer'

const Home = () => {
   useEffect(() => {
      document.title = "Edusity";
   }, []);

   const [playState, setPlayState] = useState(false);

   return (
      <div className='home' >
         <Helmet>
            <title>Edusity</title>
            <meta name="description" content="Edusity Home Page, About Edusity, Testimonials, Edusity Campus, Academic environment, Home, Edusity Contact, and academic offerings." />
         </Helmet>
         {/* <Navbar /> */}
         <Hero />
         <div className="container">
            <Title subTitle='Our PROGRAMS' title='What We Offer' />
            <Programs />

            <About setPlayState={setPlayState} />

            <Title subTitle='Gallery' title='Campus Photos' />
            <Campus />

            <Milestones />

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
