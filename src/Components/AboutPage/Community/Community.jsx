import React from 'react';
import { Box, Grid, Typography, Divider } from '@mui/material';
import community_involvement_1 from '../../../assets/community/community_1.jpg';
import community_involvement_2 from '../../../assets/community/community_2.jpg';
import community_involvement_3 from '../../../assets/community/community_3.jpg';
import community_involvement_4 from '../../../assets/community/community_4.jpg';

const Community = () => {
   const images = [
      community_involvement_1,
      community_involvement_2,
      community_involvement_3,
      community_involvement_4,
   ];

   return (
      <Box sx={{ textAlign: 'center', mt: 5, mx: 'auto', maxWidth: '1200px' }}>
         {/* Description Section */}
         <Box sx={{ mx: 5, mb: 5 }}>
            <Typography variant="h4" sx={{ color: '#212EA0', mb: 2 }}>
               Community Involvement
            </Typography>
            <Divider sx={{ width: '5rem', height: '4px', mx: 'auto', mb: 2, backgroundColor: '#212EA0' }} />
            <Typography sx={{ lineHeight: '1.5rem', fontSize: '18px' }}>
               At CHINS, we are proud of our strong ties to the local community. Through partnerships with local organizations, volunteer initiatives, and community events, our students learn the importance of giving back and making a positive impact on the world around them.
            </Typography>
         </Box>

         {/* Image Grid Section */}
         <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {images.map((imageUrl, index) => (
               <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                     component="img"
                     src={imageUrl}
                     alt={`Community Involvement ${index}`}
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
      </Box>
   );
};

export default Community;






// import React from 'react'
// import './Community.css';
// import community_involvement_1 from '../../../assets/community/community_1.jpg'
// import community_involvement_2 from '../../../assets/community/community_2.jpg'
// import community_involvement_3 from '../../../assets/community/community_3.jpg'
// import community_involvement_4 from '../../../assets/community/community_4.jpg'

// const Community = () => {

//    const images = [
//       community_involvement_1,
//       community_involvement_2,
//       community_involvement_3,
//       community_involvement_4,
//    ];

//    return (
//       <div className='community-involvement'>
//          <div className="community-involvement-desc">
//             <h1 className='community-involvement-title sub-title'>Community Involvement</h1>
//             <hr className='underline' />
//             <p>At CHINS, we are proud of our strong ties to the local community. Through partnerships with local organizations, volunteer initiatives, and community events, our students learn the importance of giving back and making a positive impact on the world around them.</p>
//          </div>
//          <div className="community-involvement-imgs">
//             {images.map((imageUrl, index) => (
//                <div key={index}>
//                   <img src={imageUrl} alt="" />
//                </div>
//             ))}
//          </div>
//       </div>
//    )
// }

// export default Community
