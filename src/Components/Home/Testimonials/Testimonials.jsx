// import React, { useRef } from 'react';
// import { Box, Grid, Typography, CardMedia, IconButton, Avatar, Paper } from '@mui/material';
// import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
// import next_icon from '../../../assets/next-icon.png';
// import back_icon from '../../../assets/back-icon.png';
// import user_1 from '../../../assets/user-1.png';
// import user_2 from '../../../assets/user-2.png';
// import user_3 from '../../../assets/user-3.png';
// import user_4 from '../../../assets/user-4.png';

// const testimonialsData = [
//    {
//       name: 'Baron Effeh',
//       company: 'CHINS, Nigeria',
//       img: user_1,
//       feedback:
//          "Choosing to pursue my degree at CHINS was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
//    },
//    {
//       name: 'Baron Effeh',
//       company: 'CHINS, Nigeria',
//       img: user_2,
//       feedback:
//          "Choosing to pursue my degree at CHINS was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
//    },
//    {
//       name: 'Baron Effeh',
//       company: 'CHINS, Nigeria',
//       img: user_3,
//       feedback:
//          "Choosing to pursue my degree at CHINS was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
//    },
//    {
//       name: 'Baron Effeh',
//       company: 'CHINS, Nigeria',
//       img: user_4,
//       feedback:
//          "Choosing to pursue my degree at CHINS was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
//    },
// ];

// const Testimonials = () => {
//    const slider = useRef(null);
//    let tx = 0;

//    const slideForward = () => {
//       if (tx > -50) {
//          tx -= 25;
//       }
//       slider.current.style.transform = `translateX(${tx}%)`;
//    };

//    const slideBackward = () => {
//       if (tx < 0) {
//          tx += 25;
//       }
//       slider.current.style.transform = `translateX(${tx}%)`;
//    };

//    return (
//       <Box sx={{ position: 'relative', mt: 10, mb: 10, px: 5 }}>
//          <IconButton
//             onClick={slideBackward}
//             sx={{
//                position: 'absolute',
//                top: '50%',
//                left: '0',
//                transform: 'translateY(-50%)',
//                backgroundColor: '#212EA0',
//                color: '#fff',
//                zIndex: 1,
//             }}
//          >
//             <ArrowBackIos />
//          </IconButton>
//          <IconButton
//             onClick={slideForward}
//             sx={{
//                position: 'absolute',
//                top: '50%',
//                right: '0',
//                transform: 'translateY(-50%)',
//                backgroundColor: '#212EA0',
//                color: '#fff',
//                zIndex: 1,
//             }}
//          >
//             <ArrowForwardIos />
//          </IconButton>

//          <Box
//             ref={slider}
//             sx={{
//                display: 'flex',
//                transition: 'transform 0.5s ease',
//                width: '200%',
//             }}
//          >
//             {testimonialsData.map((testimonial, index) => (
//                <Grid item key={index} sx={{ flexBasis: '100%', px: 2 }}>
//                   <Paper
//                      elevation={3}
//                      sx={{
//                         p: 4,
//                         borderRadius: '10px',
//                         backgroundColor: '#f9f9f9',
//                      }}
//                   >
//                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//                         <Avatar
//                            alt={testimonial.name}
//                            src={testimonial.img}
//                            sx={{
//                               width: 65,
//                               height: 65,
//                               border: '4px solid #212EA0',
//                               mr: 2,
//                            }}
//                         />
//                         <Box>
//                            <Typography variant="h6" sx={{ color: '#212EA0', fontWeight: 'bold' }}>
//                               {testimonial.name}
//                            </Typography>
//                            <Typography variant="body2" sx={{ color: '#676767' }}>
//                               {testimonial.company}
//                            </Typography>
//                         </Box>
//                      </Box>
//                      <Typography variant="body1" sx={{ color: '#676767', lineHeight: 1.6 }}>
//                         {testimonial.feedback}
//                      </Typography>
//                   </Paper>
//                </Grid>
//             ))}
//          </Box>
//       </Box>
//    );
// };

// export default Testimonials;





import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import './Testimonials.css';
import next_icon from '../../../assets/next-icon.png';
import back_icon from '../../../assets/back-icon.png';
import user_1 from '../../../assets/user-1.png';
import user_2 from '../../../assets/user-2.png';
import user_3 from '../../../assets/user-3.png';
import user_4 from '../../../assets/user-4.png';

const Testimonials = () => {

   const slider = useRef();
   let tx = 0;

   const slideForward = () => {
      if (tx > -50) {
         tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
   }

   const slideBackward = () => {
      if (tx < 0) {
         tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
   }

   return (
      <Box>
         <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
               <ul ref={slider}>
                  <li>
                     <div className="slide">
                        <div className="user-info">
                           <img src={user_1} alt="" />
                           <div>
                              <h3>Baron Effeh</h3>
                              <span>CHINS, Nigeria</span>
                           </div>
                        </div>
                        <Typography>
                           Choosing to pursue my degree at CHINS was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </Typography>
                     </div>
                  </li>
                  <li>
                     <div className="slide">
                        <div className="user-info">
                           <img src={user_2} alt="" />
                           <div>
                              <h3>Baron Effeh</h3>
                              <span>CHINS, Nigeria</span>
                           </div>
                        </div>
                        <Typography>
                           Choosing to pursue my degree at CHINS was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </Typography>
                     </div>
                  </li>
                  <li>
                     <div className="slide">
                        <div className="user-info">
                           <img src={user_3} alt="" />
                           <div>
                              <h3>Baron Effeh</h3>
                              <span>CHINS, Nigeria</span>
                           </div>
                        </div>
                        <Typography>
                           Choosing to pursue my degree at CHINS was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </Typography>
                     </div>
                  </li>
                  <li>
                     <div className="slide">
                        <div className="user-info">
                           <img src={user_4} alt="" />
                           <div>
                              <h3>Baron Effeh</h3>
                              <span>CHINS, Nigeria</span>
                           </div>
                        </div>
                        <Typography>
                           Choosing to pursue my degree at CHINS was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                        </Typography>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </Box>
   )
}

export default Testimonials
