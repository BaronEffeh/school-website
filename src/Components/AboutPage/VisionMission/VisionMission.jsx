import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const VisionMission = () => {
   return (
      <Box sx={{ mt: 6 }}>
         <Box
            sx={{
               display: 'grid',
               gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
               gap: 3,
            }}
         >
            {/* Mission Card */}
            <Paper
               elevation={3}
               sx={{
                  borderRadius: 1,
                  p: 3,
                  boxShadow: '0px 4px 8px rgb(0 0 0 / 20%), 0px 6px 20px rgb(0 0 0 / 19%)',
                  '&:hover': {
                     color: '#212EA0',
                     borderTop: '4px solid #212EA0',
                  },
               }}
            >
               <Box
                  sx={{
                     backgroundColor: '#f7f4f4',
                     color: '#212121',
                     textAlign: 'center',
                     width: '80%',
                     margin: '-25px auto 0',
                     borderTop: '4px solid #212EA0',
                     borderRadius: '0 0 10px 10px',
                     boxShadow: '0px 4px 8px rgb(0 0 0 / 20%), 0px 6px 20px rgb(0 0 0 / 19%)',
                     py: 1,
                  }}
               >
                  <Typography variant="h5"  >Our Mission</Typography>
               </Box>
               <Typography sx={{ mt: 3, lineHeight: '1.5rem' }}>
                  Our mission is to provide a comprehensive education that empowers students to become lifelong learners, critical thinkers, and responsible
                  global citizens. We strive to cultivate an inclusive community where diversity is celebrated, and every student feels valued and supported.
               </Typography>
            </Paper>

            {/* Vision Card */}
            <Paper
               elevation={3}
               sx={{
                  borderRadius: 1,
                  p: 3,
                  boxShadow: '0px 4px 8px rgb(0 0 0 / 20%), 0px 6px 20px rgb(0 0 0 / 19%)',
                  '&:hover': {
                     color: '#212EA0',
                     borderTop: '4px solid #212EA0',
                  },
               }}
            >
               <Box
                  sx={{
                     backgroundColor: '#f7f4f4',
                     color: '#212121',
                     textAlign: 'center',
                     width: '80%',
                     margin: '-25px auto 0',
                     borderTop: '4px solid #212EA0',
                     borderRadius: '0 0 10px 10px',
                     boxShadow: '0px 4px 8px rgb(0 0 0 / 20%), 0px 6px 20px rgb(0 0 0 / 19%)',
                     py: 1,
                  }}
               >
                  <Typography variant="h5">Our Vision</Typography>
               </Box>
               <Typography sx={{ mt: 3, lineHeight: '1.5rem' }}>
                  We envision a future where our students are leaders in their chosen fields, making meaningful contributions to society. Through innovative
                  teaching practices, a rigorous curriculum, and a focus on the holistic development of each student, we aim to inspire a love for learning
                  that extends beyond the classroom.
               </Typography>
            </Paper>

            {/* Core Value Card */}
            <Paper
               elevation={3}
               sx={{
                  borderRadius: 1,
                  p: 3,
                  boxShadow: '0px 4px 8px rgb(0 0 0 / 20%), 0px 6px 20px rgb(0 0 0 / 19%)',
                  '&:hover': {
                     color: '#212EA0',
                     borderTop: '4px solid #212EA0',
                  },
               }}
            >
               <Box
                  sx={{
                     backgroundColor: '#f7f4f4',
                     color: '#212121',
                     textAlign: 'center',
                     width: '80%',
                     margin: '-25px auto 0',
                     borderTop: '4px solid #212EA0',
                     borderRadius: '0 0 10px 10px',
                     boxShadow: '0px 4px 8px rgb(0 0 0 / 20%), 0px 6px 20px rgb(0 0 0 / 19%)',
                     py: 1,
                  }}
               >
                  <Typography variant="h5">Our Core Value</Typography>
               </Box>
               <Typography sx={{ mt: 3, lineHeight: '1.5rem' }}>
                  <b>Knowledge:</b> We cultivate a love for learning, encouraging intellectual curiosity and the pursuit of academic excellence.
                  <br />
                  <b>Service:</b> We promote a spirit of community engagement and leadership, inspiring students to serve others with compassion and humility.
                  <br />
                  <b>Dignity:</b> We uphold the dignity of every individual, fostering a culture of respect, integrity, and inclusivity.
               </Typography>
            </Paper>
         </Box>
      </Box>
   );
};

export default VisionMission;






// import React from 'react'
// import './VisionMission.css';

// const VisionMission = () => {
//    return (
//       <div>
//          <div className="statement-cards">

//             <div className="statement-card">
//                <div className='statement-card-title'><h1>Our Mission</h1></div>
//                <p>Our mission is to provide a comprehensive education that empowers students to become lifelong learners, critical thinkers, and responsible global citizens. We strive to cultivate an inclusive community where diversity is celebrated, and every student feels valued and supported.</p>
//             </div>

//             <div className="statement-card">
//                <div className='statement-card-title'><h1>Our Vision</h1></div>
//                <p>We envision a future where our students are leaders in their chosen fields, making meaningful contributions to society. Through innovative teaching practices, a rigorous curriculum, and a focus on the holistic development of each student, we aim to inspire a love for learning that extends beyond the classroom.</p>
//             </div>

//             <div className="statement-card">
//                <div className='statement-card-title'><h1>Our Core Value</h1></div>
//                <p>
//                   <b>Knowledge:</b> We cultivate a love for learning, encouraging intellectual curiosity and the pursuit of academic excellence.<br />

//                   <b>Service:</b> We promote a spirit of community engagement and leadership, inspiring students to serve others with compassion and humility.<br />

//                   <b>Dignity:</b> We uphold the dignity of every individual, fostering a culture of respect, integrity, and inclusivity.
//                </p>
//             </div>
//          </div>
//       </div>
//    )
// }

// export default VisionMission
