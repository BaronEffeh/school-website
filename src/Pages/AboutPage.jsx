import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PageBanner from '../Components/PageBanner/PageBanner';
import Contact from '../Components/Home/Contact/Contact';
import AboutWelcomeMessage from '../Components/AboutPage/AboutWelcomeMessage';
import VisionMission from '../Components/AboutPage/VisionMission/VisionMission';
import HistoryAndMore from '../Components/AboutPage/HistoryAndMore/HistoryAndMore';
import Academics from '../Components/AboutPage/Academics/Academics';
import Extracurricular from '../Components/AboutPage/Extracurricular/Extracurricular';
import Community from '../Components/AboutPage/Community/Community';
import Milestones from '../Components/Home/Milestones/Milestones';

const AboutPage = () => {
   useEffect(() => {
      document.title = "About - Edusity";
   }, []);

   return (
      <div className='container'>
         <Helmet>
            <title>About - Edusity</title>
            <meta name="description" content="Learn more about Edusity, our mission, vision, history, and academic offerings." />
         </Helmet>
         <PageBanner page='about' />
         <AboutWelcomeMessage />
         <VisionMission />
         <HistoryAndMore />
         <Academics />
         <Extracurricular />
         <Community />
         <Milestones />
         <Contact />
      </div>
   );
};

export default AboutPage;






// import React from 'react'
// import { Helmet } from 'react-helmet'
// import PageBanner from '../Components/PageBanner/PageBanner'
// import Contact from '../Components/Home/Contact/Contact'
// import AboutWelcomeMessage from '../Components/AboutPage/AboutWelcomeMessage'
// import VisionMission from '../Components/AboutPage/VisionMission/VisionMission'
// import HistoryAndMore from '../Components/AboutPage/HistoryAndMore/HistoryAndMore'
// import Academics from '../Components/AboutPage/Academics/Academics'
// import Extracurricular from '../Components/AboutPage/Extracurricular/Extracurricular'
// import Community from '../Components/AboutPage/Community/Community'
// import Milestones from '../Components/Home/Milestones/Milestones'

// const AboutPage = () => {
//    return (
//       <div className='container'>
//          <Helmet>
//             <title>About - Edusity</title>
//             <meta name="description" content="This is the home page of my website." />
//          </Helmet>
//          <PageBanner page='about' />

//          <AboutWelcomeMessage />

//          <VisionMission />

//          <HistoryAndMore />

//          <Academics />

//          <Extracurricular />

//          <Community />

//          <Milestones />
//          {/* <h1>About Page!</h1>
//          <p>This Page is under c0Nstruct10N! Still developing...</p> */}

//          <Contact />
//       </div>
//    )
// }

// export default AboutPage
