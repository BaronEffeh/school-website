import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

const Error404 = () => {
   useEffect(() => {
      document.title = "Error 404 - CHINS";
   }, []);

   return (
      <div className='container' style={{ backgroundColor: "#cad2d9" }} >
         <Helmet>
            <title>Error 404 - CHINS</title>
            <meta name="description" content="CHINS Error 404, Error 404." />
         </Helmet>
         <Container sx={{ alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ marginBottom: 4, paddingTop: 8, paddingBottom: 16, alignItems: "center", justifyContent: "center", textAlign: "center" }}>
               <Typography variant='h2' gutterBottom sx={{ alignItems: "center", justifyContent: "center", paddingTop: 16, fontWeight: 700 }}>
                  Oops! Page Not Found.
               </Typography>
               <Typography variant='h4' gutterBottom sx={{ fontWeight: 700 }}>
                  Error 404
               </Typography>
               <Typography variant='body1'>
                  Sorry, the page you're looking for have either been removed or does not exist!
               </Typography>
               <Link to='/'><button className='btn dark-btn'>Go back to Home page</button></Link>
            </Box>
         </Container>
      </div>
   )
}

export default Error404
