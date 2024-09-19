import React from 'react';
import { Box, Grid, Typography, CardMedia } from '@mui/material';
import program_1 from '../../../assets/program-1.png';
import program_2 from '../../../assets/program-2.png';
import program_3 from '../../../assets/program-3.png';
import program_icon_1 from '../../../assets/program-icon-1.png';
import program_icon_2 from '../../../assets/program-icon-2.png';
import program_icon_3 from '../../../assets/program-icon-3.png';

const programsData = [
   {
      image: program_1,
      icon: program_icon_1,
      title: 'Graduation Degree',
   },
   {
      image: program_2,
      icon: program_icon_2,
      title: 'Master Degree',
   },
   {
      image: program_3,
      icon: program_icon_3,
      title: 'Post Graduation',
   },
];

const Programs = () => {
   return (
      <Box sx={{ mt: 10, mb: 10 }}>
         <Grid container spacing={3} justifyContent="center">
            {programsData.map((program, index) => (
               <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                     sx={{
                        position: 'relative',
                        '&:hover .caption': { opacity: 1, paddingTop: 0 },
                     }}
                  >
                     <CardMedia
                        component="img"
                        image={program.image}
                        alt={program.title}
                        sx={{
                           width: '100%',
                           borderRadius: '10px',
                        }}
                     />
                     <Box
                        className="caption"
                        sx={{
                           position: 'absolute',
                           top: 0,
                           left: 0,
                           bottom: 0,
                           right: 0,
                           backgroundColor: 'rgba(0, 15, 152, 0.3)',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           flexDirection: 'column',
                           borderRadius: '10px',
                           color: '#fff',
                           cursor: 'pointer',
                           opacity: 0,
                           paddingTop: '70%',
                           transition: '0.4s',
                        }}
                     >
                        <CardMedia
                           component="img"
                           image={program.icon}
                           alt={program.title}
                           sx={{ width: 60, mb: 1 }}
                        />
                        <Typography>{program.title}</Typography>
                     </Box>
                  </Box>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};

export default Programs;






// import React from 'react'
// import './Programs.css';
// import program_1 from '../../../assets/program-1.png';
// import program_2 from '../../../assets/program-2.png';
// import program_3 from '../../../assets/program-3.png';
// import program_icon_1 from '../../../assets/program-icon-1.png';
// import program_icon_2 from '../../../assets/program-icon-2.png';
// import program_icon_3 from '../../../assets/program-icon-3.png';

// const Programs = () => {
//    return (
//       <div className='programs'>
//          <div className="program">
//             <img src={program_1} alt="" />
//             <div className="caption">
//                <img src={program_icon_1} alt="" />
//                <p>Graduation Degree</p>
//             </div>
//          </div>
//          <div className="program">
//             <img src={program_2} alt="" />
//             <div className="caption">
//                <img src={program_icon_2} alt="" />
//                <p>Master Degree</p>
//             </div>
//          </div>
//          <div className="program">
//             <img src={program_3} alt="" />
//             <div className="caption">
//                <img src={program_icon_3} alt="" />
//                <p>Post Graduation</p>
//             </div>
//          </div>
//       </div>
//    )
// }

// export default Programs
