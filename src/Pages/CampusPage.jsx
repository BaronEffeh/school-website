import React from 'react'
import PageBanner from '../Components/PageBanner/PageBanner'
import Campus from '../Components/Campus/Campus'

const CampusPage = () => {
   return (
      <div className='container'>
         <PageBanner page='campus' />
         <h1>Campus Page!</h1>
         <p>This page is under construction! Coming up soon...</p>

         <Campus />
      </div>
   )
}

export default CampusPage
