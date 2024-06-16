import React from 'react'
import PageBanner from '../Components/PageBanner/PageBanner'
import AdmissionPage from '../Components/AdmissionPage/AdmissionPage'

const Admissions = () => {
   return (
      <div className='container'>

         <PageBanner page='admissions' />

         <h1>Admission Page!</h1>
         <p>This page is under construction! Coming up soon...</p>

         <AdmissionPage />
      </div>
   )
}

export default Admissions
