import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

const milestones = [
   {
      icon: <GroupIcon
         color='primary'
         sx={{
            backgroundColor: '#212EA0',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            color: '#fff'
         }}
      />,
      number: 265,
      label: 'Students'
   },
   {
      icon: <MenuBookIcon
         color='primary'
         sx={{
            backgroundColor: '#212EA0',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            color: '#fff'
         }}
      />,
      number: 17,
      label: 'Subjects',
      suffix: '+'
   },
   {
      icon: <Diversity3Icon
         color='primary'
         sx={{
            backgroundColor: '#212EA0',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            color: '#fff'
         }}
      />,
      number: 45,
      label: 'Staff'
   },
   {
      icon: <SchoolIcon
         color='primary'
         sx={{
            backgroundColor: '#212EA0',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            color: '#fff'
         }}
      />,
      number: 925,
      label: 'Alumni Across the Globe',
      suffix: '+'
   },
   {
      icon: <AutoAwesomeIcon
         color='primary'
         sx={{
            backgroundColor: '#212EA0',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            color: '#fff'
         }}
      />,
      number: 58,
      label: 'Scholarships',
      suffix: '+'
   },
   {
      icon: <FamilyRestroomIcon
         color='primary'
         sx={{
            backgroundColor: '#212EA0',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            color: '#fff'
         }}
      />,
      number: 680,
      label: 'Happy Parents'
   },
];

const Milestones = () => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,     // Trigger when 20% of the component is visible
   });

   return (
      <Grid
         container
         spacing={4}
         alignItems="center"
         justifyContent="center"
         sx={{ mt: 4 }}
         ref={ref}
      >
         {milestones.map((milestone, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
               <Card elevation={3} sx={{ textAlign: 'center', padding: 2 }}>
                  <CardContent>
                     {milestone.icon}
                     <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                        {/* Conditionally trigger CountUp when inView is true */}
                        {inView ? (
                           <CountUp start={0} end={milestone.number} duration={3} />
                        ) : (
                           0 // Placeholder until component is in view
                        )} {milestone.suffix || ''} {milestone.label}
                     </Typography>
                  </CardContent>
               </Card>
            </Grid>
         ))}
      </Grid>
   );
};

export default Milestones;






// import React from 'react';
// import { Grid, Card, CardContent, Typography } from '@mui/material';
// import CountUp from 'react-countup'; // Import CountUp
// import SchoolIcon from '@mui/icons-material/School';
// import GroupIcon from '@mui/icons-material/Group';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import Diversity3Icon from '@mui/icons-material/Diversity3';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

// // Define the milestones with separate number and text
// const milestones = [
//    { icon: <GroupIcon color='primary' />, number: 265, label: 'Students' },
//    { icon: <MenuBookIcon color='primary' />, number: 17, label: 'Subjects', suffix: '+' },
//    { icon: <Diversity3Icon color='primary' />, number: 45, label: 'Staff' },
//    { icon: <SchoolIcon color='primary' />, number: 740, label: 'Alumni Across the Globe', suffix: '+' },
//    { icon: <AutoAwesomeIcon color='primary' />, number: 58, label: 'Scholarships', suffix: '+' },
//    { icon: <FamilyRestroomIcon color='primary' />, number: 680, label: 'Happy Parents' },
// ];

// const Milestones = () => {
//    return (
//       <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
//          {milestones.map((milestone, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//                <Card elevation={3} sx={{ textAlign: 'center', padding: 2 }}>
//                   <CardContent>
//                      {milestone.icon}
//                      <Typography variant="h5" component="div" sx={{ mt: 2 }}>
//                         <CountUp start={0} end={milestone.number} duration={3} /> {milestone.suffix || ''} {milestone.label}
//                      </Typography>
//                   </CardContent>
//                </Card>
//             </Grid>
//          ))}
//       </Grid>
//    );
// };

// export default Milestones;





// import React from 'react';
// import { Grid, Card, CardContent, Typography } from '@mui/material';
// import SchoolIcon from '@mui/icons-material/School';
// import GroupIcon from '@mui/icons-material/Group';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import Diversity3Icon from '@mui/icons-material/Diversity3';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

// const milestones = [
//    { icon: <GroupIcon color='primary' />, title: '265 Students' },
//    { icon: <MenuBookIcon color='primary' />, title: '17+ Subjects' },
//    { icon: <Diversity3Icon color='primary' />, title: '45 Staff' },
//    { icon: <SchoolIcon color='primary' />, title: '740+ Alumni Across the Globe' },
//    { icon: <AutoAwesomeIcon color='primary' />, title: '58+ Schoolaships' },
//    { icon: <FamilyRestroomIcon color='primary' />, title: '680 Happy Parents' },
// ];

// const Milestones = () => {
//    return (
//       <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ mt: 4 }}>
//          {milestones.map((milestone, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//                <Card elevation={3} sx={{ textAlign: 'center', padding: 2 }}>
//                   <CardContent>
//                      {milestone.icon}
//                      <Typography variant="h5" component="div" sx={{ mt: 2 }}>
//                         {milestone.title}
//                      </Typography>
//                   </CardContent>
//                </Card>
//             </Grid>
//          ))}
//       </Grid>
//    );
// };

// export default Milestones;
