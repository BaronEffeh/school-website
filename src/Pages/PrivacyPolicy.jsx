import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Typography, Box } from '@mui/material';
// import PageBanner from '../Components/PageBanner/PageBanner';

const PrivacyPolicy = () => {
   useEffect(() => {
      document.title = "Privacy Policy - Edusity";
   }, []);

   return (
      <div className='container' style={{ backgroundColor: "#cad2d9" }} >
         <Helmet>
            <title>Privacy Policy - Edusity</title>
            <meta name="description" content="Learn more about Edusity Privacy Policy, Privacy Policy, and academic offerings." />
         </Helmet>
         {/* <PageBanner page='Privacy Policy' /> */}
         <Container>
            {/* <h3>Privacy Policy</h3>
            <p>This page is under construction! Coming up soon...</p> */}
            <Box sx={{ paddingTop: 16, marginBottom: 4 }}>
               <Typography variant="h4" gutterBottom>
                  Privacy Policy
               </Typography>

               <Typography variant="h6" gutterBottom>
                  1. Introduction
               </Typography>
               <Typography variant="body1" paragraph>
                  At Edusity, we respect your privacy and are committed to protecting your personal data.
               </Typography>

               <Typography variant="h6" gutterBottom>
                  2. Information We Collect
               </Typography>
               <Typography variant="body1" paragraph>
                  We collect personal information such as your name, email, and phone number when you provide it through forms on the website.
               </Typography>

               <Typography variant="h6" gutterBottom>
                  3. How We Use Your Information
               </Typography>
               <Typography variant="body1" paragraph>
                  We may use your information to provide you with services, respond to inquiries, and improve our website.
               </Typography>

               <Typography variant="h6" gutterBottom>
                  4. Data Security
               </Typography>
               <Typography variant="body1" paragraph>
                  We implement appropriate security measures to protect your data but cannot guarantee the absolute security of your information.
               </Typography>

               {/* Add more sections as needed */}
            </Box>
         </Container>
      </div>
   );
};

export default PrivacyPolicy;
