import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import about_img from '../../assets/about.png';

const AboutWelcomeMessage = () => {
   return (
      <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
         <Box
            sx={{
               display: 'flex',
               flexDirection: { xs: 'column', md: 'row' },
               alignItems: 'center',
            }}
         >
            {/* Image */}
            <Box
               component="img"
               src={about_img}
               alt="About University"
               sx={{
                  objectFit: 'cover',
                  width: { xs: '100%', md: '300px' },
                  borderRadius: '20px',
                  mb: { xs: 3, md: 0 },
                  mr: { md: 5 },
               }}
            />

            {/* Text Section */}
            <Box sx={{ flex: 1 }}>
               <Typography variant="h6" sx={{ color: '#212EA0', fontWeight: 'bold' }}>
                  ABOUT UNIVERSITY
               </Typography>
               <Typography
                  variant="h4"
                  sx={{
                     color: '#000F38',
                     fontWeight: 'bold',
                     mt: 2,
                     mb: 3,
                  }}
               >
                  Nurturing Tomorrow's Leaders Today
               </Typography>
               <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: '2rem' }}>
                  Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
               </Typography>
               <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: '2rem', mt: 2 }}>
                  With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
               </Typography>
            </Box>
         </Box>
         <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: '2rem', mt: 2 }}>
            Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
         </Typography>
         <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: '2rem', mt: 2 }}>
            At CHINS, we are dedicated to fostering a nurturing and stimulating environment where students can achieve their full potential. Our commitment to academic excellence, combined with a focus on character development, prepares our students to thrive in an ever-changing world.
         </Typography>
      </Container>
   );
};

export default AboutWelcomeMessage;





// import React from 'react';
// import './AboutWelcomeMessage.css';
// import about_img from '../../assets/about.png';

// const AboutWelcomeMessage = () => {
//    return (
//       <div>
//          <div className="about-welcome-msg">
//             <img src={about_img} alt="" className='about-welcome-img' />

//             <h3 className="about-welcom-title">ABOUT UNIVERSITY</h3>
//             <h2 className="about-welcom-head">Nurturing Tomorrow's Leaders Today</h2>
//             <p className="about-welcom-text">Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
//             <p className="about-welcom-text">With a focus on innovation, hand-on learning , and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
//             <p className="about-welcom-text">Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achive your goals and unlock your full potential in sharing the future of education.</p>

//             <p className="about-welcom-text">
//                At Educity, we are dedicated to fostering a nurturing and stimulating environment where students can achieve their full potential. Our commitment to academic excellence, combined with a focus on character development, prepares our students to thrive in an ever-changing world.</p>
//          </div>
//       </div>
//    );
// };

// export default AboutWelcomeMessage
