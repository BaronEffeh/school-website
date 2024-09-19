import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PageBanner from '../Components/PageBanner/PageBanner'
import Campus from '../Components/Campus/Campus'

const CampusPage = () => {
   useEffect(() => {
      document.title = "Campus - Edusity";
   }, []);

   return (
      <div className='container'>
         <Helmet>
            <title>Campus - Edusity</title>
            <meta name="description" content="Edusity Campus, Academic environment, Campus, and academic offerings." />
         </Helmet>
         <PageBanner page='campus' />

         <Campus />
      </div>
   )
}

export default CampusPage