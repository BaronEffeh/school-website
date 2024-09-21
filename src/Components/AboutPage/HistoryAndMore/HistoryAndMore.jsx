import React from 'react';
import { Box, Grid, Typography, Divider } from '@mui/material';
import about_img_1 from '../../../assets/about-img-1.png';

const HistoryAndMore = () => {
   return (
      <Box sx={{ mt: 8 }}>
         <Typography variant="h4" align="center" sx={{ color: '#212EA0' }}>
            Our History
         </Typography>
         <Divider
            sx={{
               width: '5rem',
               height: '4px',
               backgroundColor: '#212EA0',
               my: 3,
               mx: 'auto',
            }}
         />
         <Grid container spacing={3}>
            {/* Left Section (Image) */}
            <Grid item xs={12} md={6}>
               <Box
                  component="img"
                  src={about_img_1}
                  alt="About Us"
                  sx={{
                     width: '100%',
                     borderRadius: '10px',
                     objectFit: 'cover',
                  }}
               />
               <Typography variant="h6" sx={{ mt: 2 }}>
                  Image description
               </Typography>
            </Grid>

            {/* Right Section (Text) */}
            <Grid item xs={12} md={6}>
               <Typography
                  sx={{
                     textAlign: 'justify',
                     lineHeight: '2rem',
                  }}
               >
                  Founded in 1987, CHINS has a long-standing tradition of excellence in education and community development. What began as a small institution with a handful of dedicated teachers has grown into a thriving academic community committed to nurturing students' intellectual, emotional, and social growth.
               </Typography>

               <Typography variant='h6' mt={2} sx={{ borderLeft: '3px solid #212EA0', paddingLeft: '1rem' }}>
                  Early Beginnings
               </Typography>
               <Typography
                  sx={{
                     textAlign: 'justify',
                     lineHeight: '2rem',
                  }}
               >
                  CHINS was established with the vision of creating an inclusive and dynamic learning environment where students are encouraged to achieve academic excellence while developing a strong sense of personal and social responsibility. The school started with a modest building, a few classrooms, and an unwavering commitment to the belief that education has the power to transform lives.
               </Typography>
            </Grid>
         </Grid>

         <Typography variant='h6' mt={2} sx={{ borderLeft: '3px solid #212EA0', paddingLeft: '1rem' }}>
            Growth and Expansion
         </Typography>
         <Typography
            sx={{
               textAlign: 'justify',
               lineHeight: '2rem',
            }}
         >
            As the years passed, the school experienced significant growth. Our curriculum expanded to include a wide range of subjects designed to provide students with the knowledge and skills needed to excel in a rapidly changing world. From its humble beginnings, CHINS now boasts state-of-the-art facilities, modern classrooms, science and computer labs, a well-stocked library, and extensive extracurricular programs that cater to the diverse interests and talents of our students.
         </Typography>

         <Typography variant='h6' mt={2} sx={{ borderLeft: '3px solid #212EA0', paddingLeft: '1rem' }}>
            Commitment to Excellence
         </Typography>
         <Typography
            sx={{
               textAlign: 'justify',
               lineHeight: '2rem',
            }}
         >
            Throughout our history, we have remained committed to the values upon which the school was founded—Knowledge for Service and Dignity. Our students are consistently recognized for their academic achievements, leadership qualities, and contributions to society. With a focus on holistic development, we strive to prepare them not only for success in their future careers but also for meaningful lives of purpose and service.
         </Typography>

         <Typography variant='h6' mt={2} sx={{ borderLeft: '3px solid #212EA0', paddingLeft: '1rem' }}>
            Looking Ahead
         </Typography>
         <Typography
            sx={{
               textAlign: 'justify',
               lineHeight: '2rem',
            }}
         >
            As we move forward, CHINS continues to adapt to the challenges and opportunities of the 21st century. We are proud of our legacy but also focused on the future, embracing innovative teaching methods and technologies that enhance learning experiences. Our goal is to continue providing a world-class education that empowers students to think critically, act compassionately, and contribute positively to their communities.
         </Typography>
         <Typography
            sx={{
               textAlign: 'justify',
               lineHeight: '2rem',
            }}
         >
            Today, CHINS stands as a beacon of educational excellence, where students of all backgrounds come together to learn, grow, and make a difference. We invite you to join us in this journey of discovery and achievement as we continue to shape the leaders of tomorrow.
         </Typography>
      </Box>
   );
};

export default HistoryAndMore;






// import React from 'react'
// import './HistoryAndMore.css';
// import about_img_1 from '../../../assets/about-img-1.png';

// const HistoryAndMore = () => {
//    return (
//       <div className='our-history'>
//          <h1 className='our-history-title sub-title'>Our History</h1>
//          <hr className='underline' />
//          <div className="history">
//             <div className="history-left">
//                <img src={about_img_1} alt="" />
//                <h3>Image description</h3>
//             </div>
//             <div className="history-right">
//                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illum voluptate modi ea quidem enim dolore, laudantium molestias natus eligendi, alias sint vero in accusamus. Perferendis ipsum illum assumenda ad.
//                   Eaque sequi repellendus aliquid reiciendis corporis minus totam esse saepe distinctio facere ratione repellat blanditiis qui ex quia vero consequatur voluptate eligendi doloremque, praesentium provident atque quo accusamus magnam? Vero?
//                   Modi ullam ut nisi quis vel perferendis sint consequuntur, voluptatibus tenetur ducimus temporibus voluptate fugit impedit quaerat asperiores nam quibusdam magnam laborum ad quod. Facere iure repudiandae officiis error quos?
//                   Numquam deleniti vel non, distinctio saepe asperiores quam, quo eius natus, quidem iusto. Quo, accusamus odio incidunt quisquam eos officiis dolore sapiente, molestias dolor odit ipsam dolorem sequi minima reprehenderit?
//                   Omnis rerum sint soluta ut itaque sapiente eveniet, ipsam tenetur iusto eligendi aliquid aliquam neque atque unde excepturi eius error, enim accusamus obcaecati maxime quo debitis. Non asperiores recusandae eum?</p>
//             </div>
//          </div>
//       </div>
//    )
// }

// export default HistoryAndMore
