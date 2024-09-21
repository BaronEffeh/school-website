import React from 'react';
import { Box, Grid, Typography, TextField, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import msg_icon from '../../../assets/msg-icon.png';
import mail_icon from '../../../assets/mail-icon.png';
import phone_icon from '../../../assets/phone-icon.png';
import location_icon from '../../../assets/location-icon.png';
import white_arrow from '../../../assets/white-arrow.png';

const Contact = () => {
   return (
      <Box sx={{ maxWidth: '90%', mx: 'auto', mt: 8, mb: 15 }}>
         <Grid container spacing={4} justifyContent="space-between">
            {/* Contact Information Section */}
            <Grid item xs={12} md={6}>
               <Typography variant="h5" sx={{ color: '#000F38', fontWeight: 500, display: 'flex', alignItems: 'center', mb: 3 }}>
                  Send us a message
                  <Box component="img" src={msg_icon} alt="Message Icon" sx={{ width: 35, ml: 1 }} />
               </Typography>
               <Typography variant="body1" sx={{ mb: 3 }}>
                  Feel free to reach out through our contact form or any of our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
               </Typography>
               <List>
                  <ListItem>
                     <ListItemIcon>
                        <Box component="img" src={mail_icon} alt="Mail Icon" sx={{ width: 25 }} />
                     </ListItemIcon>
                     <ListItemText primary="info@chins.edu.ng" />
                  </ListItem>
                  <ListItem>
                     <ListItemIcon>
                        <Box component="img" src={phone_icon} alt="Phone Icon" sx={{ width: 25 }} />
                     </ListItemIcon>
                     <ListItemText primary="+234 701-292-8822" />
                  </ListItem>
                  <ListItem>
                     <ListItemIcon>
                        <Box component="img" src={location_icon} alt="Location Icon" sx={{ width: 25 }} />
                     </ListItemIcon>
                     <ListItemText primary="23 Yaounde Street, Wuse Zone 6, FCT - Abuja, Nigeria." />
                  </ListItem>
               </List>
            </Grid>

            {/* Contact Form Section */}
            <Grid item xs={12} md={6}>
               <Box component="form">
                  <TextField
                     label="Your name"
                     name="name"
                     variant="outlined"
                     fullWidth
                     required
                     sx={{ mb: 3 }}
                     placeholder="Enter your name"
                  />
                  <TextField
                     label="Phone Number"
                     name="phone"
                     type="tel"
                     variant="outlined"
                     fullWidth
                     required
                     sx={{ mb: 3 }}
                     placeholder="Enter your mobile number"
                  />
                  <TextField
                     label="Write your message here"
                     name="message"
                     multiline
                     rows={6}
                     variant="outlined"
                     fullWidth
                     required
                     placeholder="Enter your message here"
                     sx={{ mb: 3 }}
                  />
                  <Button
                     type="submit"
                     variant="contained"
                     color="primary"
                     // fullWidth
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        backgroundColor: '#212EA0',
                        '&:hover': { backgroundColor: '#2a38b4' },
                     }}
                  >
                     Submit now
                     <Box component="img" src={white_arrow} alt="Arrow Icon" sx={{ width: 20, ml: 1 }} />
                  </Button>
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
};

export default Contact;






// import React from 'react'
// import './Contact.css';
// import msg_icon from '../../../assets/msg-icon.png';
// import mail_icon from '../../../assets/mail-icon.png';
// import phone_icon from '../../../assets/phone-icon.png';
// import location_icon from '../../../assets/location-icon.png';
// import white_arrow from '../../../assets/white-arrow.png';

// const Contact = () => {
//    return (
//       <div className='contact'>
//          <div className="contact-col">
//             <h3>Send us a message <img src={msg_icon} alt="" /></h3>
//             <p>Feel free to reach out through our contact form or any of our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
//             <ul>
//                <li><img src={mail_icon} alt="" />info@CHINS.edu</li>
//                <li><img src={phone_icon} alt="" />+234 701-292-8822</li>
//                <li><img src={location_icon} alt="" />23 Yaounde Street, Wuse Zone 6, <br /> FCT - Abuja. Nigeria.</li>
//             </ul>
//          </div>
//          <div className="contact-col">
//             <form action="">
//                <label>Your name</label>
//                <input type="text" name='name' placeholder='Enter your name' required />
//                <label>Phone Number</label>
//                <input type="tel" name='phone' placeholder='Enter you mobile number' required />
//                <label>Write your message here</label>
//                <textarea name="message" rows="6" placeholder='Enter your message here' required></textarea>
//                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
//             </form>
//             {/* <span>sending...</span> */}
//          </div>
//       </div>
//    )
// }

// export default Contact
