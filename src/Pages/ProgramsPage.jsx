import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PageBanner from '../Components/PageBanner/PageBanner';
import Programs from '../Components/ProgramsPage/Programs';

const ProgramsPage = () => {
   useEffect(() => {
      document.title = "Programs - Edusity";
   }, []);

   return (
      <div className='container'>
         <Helmet>
            <title>Programs - Edusity</title>
            <meta name="description" content="Edusity Programs, Academic Programs, Programs, Subjects, and academic offerings." />
         </Helmet>
         <PageBanner page='programs' />

         <Programs />

      </div>
   )
}

export default ProgramsPage
