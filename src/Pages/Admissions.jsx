import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PageBanner from '../Components/PageBanner/PageBanner'
import AdmissionPage from '../Components/AdmissionPage/AdmissionPage'

const Admissions = () => {
   useEffect(() => {
      document.title = "Admissions - Edusity";
   }, []);

   return (
      <div className='container'>
         <Helmet>
            <title>Admissions - Edusity</title>
            <meta name="description" content="Edusity Admissions, Academic standerd, Admissions, and academic offerings." />
         </Helmet>

         <PageBanner page='admissions' />

         {/* <h1>Admission Page!</h1>
         <p>This page is under construction! Coming up soon...</p> */}

         <AdmissionPage />
      </div>
   )
}

export default Admissions;
