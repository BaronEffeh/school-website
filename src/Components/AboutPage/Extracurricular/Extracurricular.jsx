import React from 'react';
import { Box, Grid, Typography, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import extracurricular_1 from '../../../assets/galeryImgs/extracurricular-1.png';
import extracurricular_7 from '../../../assets/galeryImgs/extracurricular-2.png';
import extracurricular_8 from '../../../assets/galeryImgs/extracurricular-3.png';
import extracurricular_9 from '../../../assets/galeryImgs/extracurricular-4.png';
import extracurricular_5 from '../../../assets/galeryImgs/extracurricular-5.png';
import extracurricular_6 from '../../../assets/galeryImgs/extracurricular-6.png';
import extracurricular_10 from '../../../assets/galeryImgs/extracurricular-7.png';
import extracurricular_11 from '../../../assets/galeryImgs/extracurricular-8.png';
import extracurricular_4 from '../../../assets/galeryImgs/extracurricular-9.png';
import extracurricular_2 from '../../../assets/galeryImgs/extracurricular-10.jpg';
import extracurricular_3 from '../../../assets/galeryImgs/extracurricular-11.jpg';

const Extracurricular = () => {
   const images = [
      extracurricular_1,
      extracurricular_2,
      extracurricular_3,
      extracurricular_4,
      extracurricular_6,
      extracurricular_9,
      extracurricular_5,
      extracurricular_7,
      extracurricular_8,
      extracurricular_10,
      extracurricular_11,
   ];

   return (
      <Box sx={{ textAlign: 'center', mt: 5, mx: 'auto', maxWidth: '1200px' }}>
         {/* Description Section */}
         <Box sx={{ mx: 5, mb: 5 }}>
            <Typography variant="h4" sx={{ color: '#212EA0', mb: 2 }}>
               Extracurricular Activities
            </Typography>
            <Divider sx={{ width: '5rem', height: '4px', mx: 'auto', mb: 2, backgroundColor: '#212EA0' }} />
            <Typography sx={{ fontSize: '18px' }}>
               We believe that learning extends beyond the classroom. Our vibrant extracurricular programs provide students with opportunities to explore their interests, develop new skills, and build lasting friendships. From athletics and arts to clubs and community service, <b>there is something for everyone at Edusity.</b>
            </Typography>
         </Box>

         {/* Image Grid Section */}
         <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {images.map((imageUrl, index) => (
               <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                     component="img"
                     src={imageUrl}
                     alt={`Extracurricular ${index}`}
                     sx={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                     }}
                  />
               </Grid>
            ))}
         </Grid>

         {/* Gallery Button */}
         <Link to="/gallery" style={{ textDecoration: 'none' }}>
            <Button
               variant="contained"
               sx={{
                  mt: 4,
                  backgroundColor: '#212EA0',
                  '&:hover': { backgroundColor: '#2a38b4' },
               }}
            >
               See more in Gallery
            </Button>
         </Link>
      </Box>
   );
};

export default Extracurricular;






// import React from 'react'
// import './Extracurricular.css';
// import { Link } from 'react-router-dom';
// import extracurricular_1 from '../../../assets/galeryImgs/extracurricular-1.png';
// import extracurricular_7 from '../../../assets/galeryImgs/extracurricular-2.png';
// import extracurricular_8 from '../../../assets/galeryImgs/extracurricular-3.png';
// import extracurricular_9 from '../../../assets/galeryImgs/extracurricular-4.png';
// import extracurricular_5 from '../../../assets/galeryImgs/extracurricular-5.png';
// import extracurricular_6 from '../../../assets/galeryImgs/extracurricular-6.png';
// import extracurricular_10 from '../../../assets/galeryImgs/extracurricular-7.png';
// import extracurricular_11 from '../../../assets/galeryImgs/extracurricular-8.png';
// import extracurricular_4 from '../../../assets/galeryImgs/extracurricular-9.png';
// import extracurricular_2 from '../../../assets/galeryImgs/extracurricular-10.jpg';
// import extracurricular_3 from '../../../assets/galeryImgs/extracurricular-11.jpg';

// const Extracurricular = () => {

//    const images = [
//       extracurricular_1,
//       extracurricular_2,
//       extracurricular_3,
//       extracurricular_4,
//       extracurricular_6,
//       extracurricular_9,
//       extracurricular_5,
//       extracurricular_7,
//       extracurricular_8,
//       extracurricular_10,
//       extracurricular_11,
//       extracurricular_11,
//    ];

//    return (
//       <div className="extracurricular-activities">
//          <div className="extracurricular-desc">
//             <h1 className='extracurricular-title'>Extracurricular Activities</h1>
//             <hr />
//             <p className='extracurricular-text'>We believe that learning extends beyond the classroom. Our vibrant extracurricular programs provide students with opportunities to explore their interests, develop new skills, and build lasting friendships. From athletics and arts to clubs and community service, <b>there is something for everyone at Edusity.</b></p>
//          </div>
//          <div className="extracurricular-imgs">
//             {images.map((imageUrl, index) => (
//                <div key={index}>
//                   <img src={imageUrl} alt="" />
//                </div>
//             ))}
//             {/* <img src={extracurricular_1} alt="" />
//             <img src={extracurricular_2} alt="" />
//             <img src={extracurricular_3} alt="" />
//             <img src={extracurricular_1} alt="" />
//             <img src={extracurricular_1} alt="" />
//             <img src={extracurricular_1} alt="" /> */}
//          </div>
//          <Link to='/gallery'><button className='btn dark-btn' style={{ marginLeft: '45%', marginTop: '2rem' }}>See more in Gallery</button></Link>
//       </div>
//    )
// }

// export default Extracurricular
