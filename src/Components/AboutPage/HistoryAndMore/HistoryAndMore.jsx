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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illum voluptate modi ea quidem enim dolore, laudantium molestias natus eligendi, alias sint vero in accusamus. Perferendis ipsum illum assumenda ad. Eaque sequi repellendus aliquid reiciendis corporis minus totam esse saepe distinctio facere ratione repellat blanditiis qui ex quia vero consequatur voluptate eligendi doloremque, praesentium provident atque quo accusamus magnam? Vero? Modi ullam ut nisi quis vel perferendis sint consequuntur, voluptatibus tenetur ducimus temporibus voluptate fugit impedit quaerat asperiores nam quibusdam magnam laborum ad quod. Facere iure repudiandae officiis error quos? Numquam deleniti vel non, distinctio saepe asperiores quam, quo eius natus, quidem iusto. Quo, accusamus odio incidunt quisquam eos officiis dolore sapiente, molestias dolor odit ipsam dolorem sequi minima reprehenderit? Omnis rerum sint soluta ut itaque sapiente eveniet, ipsam tenetur iusto eligendi aliquid aliquam neque atque unde excepturi eius error, enim accusamus obcaecati maxime quo debitis. Non asperiores recusandae eum?
               </Typography>
            </Grid>
         </Grid>
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
