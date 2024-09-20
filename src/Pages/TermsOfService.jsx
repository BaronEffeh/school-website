import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Typography, Box } from '@mui/material';
// import PageBanner from '../Components/PageBanner/PageBanner';

const TermsOfService = () => {
   useEffect(() => {
      document.title = "Terms of Service - Edusity";
   }, []);

   return (
      <div className='container' style={{ backgroundColor: "#cad2d9" }} >
         <Helmet>
            <title>Terms of Service - Edusity</title>
            <meta name="description" content="Learn more about Edusity Terms of Service, Terms of Service, and academic offerings." />
         </Helmet>
         {/* <PageBanner page='Terms of Service' /> */}
         <Container>
            {/* <h3>Terms of Service</h3>
            <p>This page is under construction! Coming up soon...</p> */}
            <h1></h1>
            <Box sx={{ marginBottom: 4, paddingTop: 16 }}>
               <Typography variant="h4" gutterBottom>
                  Terms of Service
               </Typography>

               <Typography variant="h6" gutterBottom>
                  1. Introduction
               </Typography>
               <Typography variant="body1" paragraph>
                  Welcome to Edusity’s official website. By accessing or using our website, you agree to comply with and be bound by the following terms of service.
               </Typography>

               <Typography variant="h6" gutterBottom>
                  2. Eligibility
               </Typography>
               <Typography variant="body1" paragraph>
                  You must be at least 18 years old or have parental or guardian consent to use this website.
               </Typography>

               <Typography variant="h6" gutterBottom>
                  3. User Accounts
               </Typography>
               <Typography variant="body1" paragraph>
                  You are responsible for maintaining the confidentiality of your login credentials.
               </Typography>

               <Typography variant="h6" gutterBottom>
                  4. Prohibited Activities
               </Typography>
               <Typography variant="body1" paragraph>
                  You agree not to use the website for any unlawful purposes or in violation of any Nigerian laws.
               </Typography>

               {/* Add more sections as needed */}
            </Box>
         </Container>
      </div>
   );
};

export default TermsOfService;
