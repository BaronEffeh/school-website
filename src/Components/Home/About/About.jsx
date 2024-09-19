import React from 'react';
import { Box, Typography, Button, CardMedia, Grid } from '@mui/material';
import about_img from '../../../assets/about.png';
import play_icon from '../../../assets/play-icon.png';
import white_arrow from '../../../assets/white-arrow.png';
import { Link } from 'react-router-dom';

const About = ({ setPlayState }) => {
   return (
      <Box sx={{ mt: 10, mb: 10 }}>
         <Grid container spacing={5} alignItems="center">
            {/* Left Section */}
            <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
               <CardMedia
                  component="img"
                  image={about_img}
                  alt="About University"
                  sx={{
                     borderRadius: '10px',
                     width: '100%',
                  }}
               />
               <CardMedia
                  component="img"
                  image={play_icon}
                  alt="Play Icon"
                  onClick={() => setPlayState(true)}
                  sx={{
                     width: '60px',
                     position: 'absolute',
                     top: '50%',
                     left: '50%',
                     transform: 'translate(-50%, -50%)',
                     cursor: 'pointer',
                  }}
               />
            </Grid>

            {/* Right Section */}
            <Grid item xs={12} md={6}>
               <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#212EA0' }}>
                  ABOUT UNIVERSITY
               </Typography>
               <Typography
                  variant="h4"
                  sx={{
                     color: '#000F38',
                     fontWeight: 'bold',
                     mt: 2,
                     mb: 2,
                     maxWidth: '400px',
                  }}
               >
                  Nurturing Tomorrow's Leaders Today
               </Typography>
               <Typography variant="body1" sx={{ color: '#676767', mb: 2, textAlign: 'justify' }}>
                  Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
               </Typography>
               <Typography variant="body1" sx={{ color: '#676767', mb: 2, textAlign: 'justify' }}>
                  With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
               </Typography>
               <Typography variant="body1" sx={{ color: '#676767', mb: 2, textAlign: 'justify' }}>
                  Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
               </Typography>
               <Button
                  component={Link}
                  to="/about"
                  variant="contained"
                  color="primary"
                  sx={{
                     borderRadius: '30px',
                     backgroundColor: '#212EA0',
                     '&:hover': { backgroundColor: '#2a38b4' },
                     mt: 2,
                     '& img': {
                        ml: 1,
                     },
                  }}
               >
                  Read more
                  <CardMedia
                     component="img"
                     image={white_arrow}
                     alt="Arrow"
                     sx={{ width: 16, ml: 1 }}
                  />
               </Button>
            </Grid>
         </Grid>
      </Box>
   );
};

export default About;






// import React from 'react'
// import './About.css';
// import about_img from '../../../assets/about.png';
// import play_icon from '../../../assets/play-icon.png';
// import white_arrow from '../../../assets/white-arrow.png';
// import { Link } from 'react-router-dom';

// const About = ({ setPlayState }) => {
//    return (
//       <div className='about'>
//          <div className="about-left">
//             <img src={about_img} alt="" className='about-img' />
//             <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} />
//          </div>
//          <div className="about-right">
//             <h3>ABOUT UNIVERSITY</h3>
//             <h2>Nurturing Tomorrow's Leaders Today</h2>
//             <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
//             <p>With a focus on innovation, hand-on learning , and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
//             <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achive your goals and unlock your full potential in sharing the future of education.</p>
//             <Link to='/about'><button className='btn dark-btn'>Read more <img src={white_arrow} alt="" /></button></Link>
//          </div>
//       </div>
//    )
// }

// export default About
