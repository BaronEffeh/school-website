import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import dark_arrow from '../../../assets/dark-arrow.png';
import heroImage from '../../../assets/hero.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
   const navigate = useNavigate();

   const handleExplor = () => {
      navigate('/campus');
   }

   return (
      <Box
         sx={{
            width: '100%',
            minHeight: '100vh',
            backgroundImage: `linear-gradient(rgba(8, 0, 58, 0.7), rgba(8, 0, 58, 0.7)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-5rem',
            marginBottom: '7rem'
         }}
      >
         <Container maxWidth="md" sx={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <Typography
               variant="h1"
               sx={{
                  fontSize: { xs: '30px', sm: '40px', md: '60px' },
                  fontWeight: 600,
                  marginBottom: '20px',
               }}
            >
               We Ensure better education for a better world
            </Typography>
            <Typography
               variant="body1"
               sx={{
                  maxWidth: '700px',
                  margin: '10px auto 20px',
                  lineHeight: 1.4,
                  fontSize: { xs: '14px', md: '18px' },
               }}
            >
               Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
            </Typography>
            <Button
               variant="contained"
               onClick={handleExplor}
               sx={{
                  backgroundColor: '#fff',
                  color: '#08003A',
                  borderRadius: '30px',
                  padding: '10px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 'auto',
                  fontWeight: 'bold',
                  '&:hover': {
                     backgroundColor: '#f0f0f0',
                  },
               }}
               endIcon={<ArrowForwardIcon />}
            // endIcon={<Box component="img" src={dark_arrow} alt="arrow" />}
            >
               Explore more
            </Button>
         </Container>
      </Box>
   );
};

export default Hero;






// import React from 'react'
// import './Hero.css';
// import dark_arrow from '../../../assets/dark-arrow.png';

// const Hero = () => {
//    return (
//       <div className='hero container'>
//          <div className="hero-text">
//             <h1>We Ensure better education for a better world</h1>
//             <p>Our cutting-edge curriculum is designed to empower students with the knowladge, skills, and experiences needed to excel in the dynamic field of education</p>
//             <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
//          </div>
//       </div>
//    )
// }

// export default Hero
