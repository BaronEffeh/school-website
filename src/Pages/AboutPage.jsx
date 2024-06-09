import React from 'react'
import PageBanner from '../Components/PageBanner/PageBanner'
import Contact from '../Components/Home/Contact/Contact'
import AboutWelcomeMessage from '../Components/AboutPage/AboutWelcomeMessage'
import VisionMission from '../Components/AboutPage/VisionMission/VisionMission'
import HistoryAndMore from '../Components/AboutPage/HistoryAndMore/HistoryAndMore'
import Academics from '../Components/AboutPage/Academics/Academics'
import Extracurricular from '../Components/AboutPage/Extracurricular/Extracurricular'
import Community from '../Components/AboutPage/Community/Community'

const AboutPage = () => {
   return (
      <div className='container'>
         <PageBanner page='about' />

         <AboutWelcomeMessage />

         <VisionMission />

         <HistoryAndMore />

         <Academics />

         <Extracurricular />

         <Community />

         {/* <h1>About Page!</h1>
         <p>This Page is under c0Nstruct10N! Still developing...</p> */}

         <Contact />
      </div>
   )
}

export default AboutPage
