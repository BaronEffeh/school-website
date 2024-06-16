import React from 'react'
import PageBanner from '../Components/PageBanner/PageBanner';
import Programs from '../Components/ProgramsPage/Programs';

const ProgramsPage = () => {
   return (
      <div className='container'>
         <PageBanner page='programs' />
         <h1>Our Programs Page</h1>
         <p>This page is under construction! Coming up soon...</p>

         <Programs />

      </div>
   )
}

export default ProgramsPage
