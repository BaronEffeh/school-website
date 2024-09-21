import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Gallery from '../Components/Gallery/Gallery';
import PhotoGallery from '../assets/PhotoGallery/PhotoGallery';
import PageBanner from '../Components/PageBanner/PageBanner';
import { Box, Typography } from '@mui/material';

const GalleryPage = () => {
   useEffect(() => {
      document.title = "Gallery - CHINS";
   }, []);

   return (
      <div className='container'>
         <Helmet>
            <title>Gallery - CHINS</title>
            <meta name="description" content="CHINS Gallery, Academic environment, Gallery, CHINS media, and academic offerings." />
         </Helmet>

         <PageBanner page='gallery' />
         <Box sx={{ paddingLeft: '2rem' }}>
            <Typography variant='h3'>Gallery</Typography>
            {/* <h1 style={{ marginTop: "5rem" }}></h1> */}
         </Box>

         <Gallery images={PhotoGallery} />
      </div>
   )
}

export default GalleryPage
