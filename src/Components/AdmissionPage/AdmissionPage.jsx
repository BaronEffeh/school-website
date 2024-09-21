import React from 'react';
import { Box, Typography, Link as MuiLink, List, ListItem, ListItemText, Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const AdmissionPage = () => {
   return (
      <Container>
         <Grid container spacing={4}>
            <Grid item xs={12} md={8}>

               <header sx={{ mb: 4 }} >
                  <h1 className="programs-head">Admissions</h1>

                  <Typography variant="body1" sx={{ mb: 2 }}>
                     Welcome to our admissions page! Here you will find all the information you need to apply to our school.
                  </Typography>
               </header>
               <Paper elevation={3} sx={{ padding: 4, mb: 4 }}>


                  <section>
                     <Typography variant="h5" gutterBottom >
                        Admission Process
                     </Typography>
                     <Typography variant="body1" gutterBottom>
                        Our admission process is designed to be straightforward and transparent. Follow these steps to apply:
                     </Typography>
                     <List>
                        <ListItem>
                           <ListItemText
                              primary={
                                 <>
                                    1. Complete the online application form at{' '}
                                    <MuiLink component={Link} to="#">
                                       https://www.CHINS.edu.ng
                                    </MuiLink>{' '}
                                    or visit the school to obtain the form.
                                 </>
                              }
                           />
                        </ListItem>


                        <ListItem>
                           <ListItemText primary="2. Submit the required documents, including transcripts and recommendation letters." />
                        </ListItem>
                        <ListItem>
                           <ListItemText primary="3. Attend an interview (if applicable)." />
                        </ListItem>
                        <ListItem>
                           <ListItemText primary="4. Receive your admission decision." />
                        </ListItem>
                     </List>
                  </section>

                  <section>
                     <Typography variant="h5" gutterBottom mt={4}>
                        Inter School Transfer
                     </Typography>
                     <Typography variant="body1" gutterBottom>
                        Students who are transferred are required to follow these steps to apply:
                     </Typography>
                     <List>
                        <ListItem>
                           <ListItemText
                              primary={
                                 <>
                                    1. Complete the online application form at{' '}
                                    <MuiLink component={Link} to="#">
                                       https://www.CHINS.edu.ng
                                    </MuiLink>{' '}
                                    or visit the school to obtain the form.
                                 </>
                              }
                           />
                        </ListItem>
                        <ListItem>
                           <ListItemText primary="2. Produce an evidence of transfer from the previous school." />
                        </ListItem>
                        <ListItem>
                           <ListItemText primary="3. Attach copies of their previous results to the completed form." />
                        </ListItem>
                        <ListItem>
                           <ListItemText primary="4. Write a placement test." />
                        </ListItem>
                        <ListItem>
                           <ListItemText primary="5. Receive your admission decision." />
                        </ListItem>
                     </List>
                  </section>

                  <section>
                     <Typography variant="h5" gutterBottom mt={4}>
                        Admission Requirements
                     </Typography>
                     <List>
                        <ListItem>
                           <ListItemText primary="• Completed application form." />
                        </ListItem>
                        <ListItem>
                           <ListItemText primary="• Academic transcripts." />
                        </ListItem>
                        <ListItem>
                           <ListItemText primary="• Recommendation letters." />
                        </ListItem>
                        <ListItem>
                           <ListItemText primary="• Personal statement or essay." />
                        </ListItem>
                        <ListItem>
                           <ListItemText primary="• Interview (if applicable)." />
                        </ListItem>
                     </List>
                  </section>

                  <section>
                     <Typography variant="h5" gutterBottom mt={4}>
                        Contact Our Admission Office
                     </Typography>
                     <Typography variant="body1">
                        If you have any questions or need further information, please feel free to contact our admissions office:
                     </Typography>
                     <Typography variant="body1">
                        <strong>Email:</strong> admissions@CHINS.edu
                     </Typography>
                     <Typography variant="body1">
                        <strong>Phone:</strong> (+234) 701-292-8822
                     </Typography>
                     <Typography variant="body1">
                        <strong>Address:</strong> 23 Yaounde St., Wuse Zone 6, FCT - Abuja. Nigeria
                     </Typography>
                  </section>
               </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
               <Paper elevation={3} sx={{ padding: 4, mb: 4 }}>
                  <Typography variant="h5" gutterBottom>
                     Quick Links
                  </Typography>
                  <List>
                     <ListItem>
                        <MuiLink component={Link} to="/admissions">
                           <ListItemText primary="Admissions" />
                        </MuiLink>
                     </ListItem>
                     <ListItem>
                        <MuiLink component={Link} to="/admissions">
                           <ListItemText primary="Admissions" />
                        </MuiLink>
                     </ListItem>
                     <ListItem>
                        <MuiLink component={Link} to="/admissions">
                           <ListItemText primary="Admissions" />
                        </MuiLink>
                     </ListItem>
                     <ListItem>
                        <MuiLink component={Link} to="/admissions">
                           <ListItemText primary="Admissions" />
                        </MuiLink>
                     </ListItem>
                  </List>
               </Paper>
            </Grid>
         </Grid>
      </Container>
   );
};

export default AdmissionPage;






// import React from 'react';
// import './AdmissionPage.css';
// import { Link } from 'react-router-dom';

// const AdmissionPage = () => {
//    return (

//       <div className="admission-page">
//          <main className='main-content'>
//             <header className="admission-header">
//                <h1>Admissions</h1>
//                <p>Welcome to our admissions page! Here you will find all the information you need to apply to our school.</p>
//             </header>

//             <section className="admission-info">
//                <h2>Admission Process</h2>
//                <p>Our admission process is designed to be straightforward and transparent. Follow these steps to apply:</p>
//                <ol>
//                   <li>Complete the online application form at <Link to="#">https://www.CHINS.edu.ng</Link> or visit the school to obtain the form.</li>
//                   <li>Submit the required documents, including transcripts and recommendation letters.</li>
//                   <li>Attend an interview (if applicable).</li>
//                   <li>Receive your admission decision.</li>
//                </ol>
//             </section>
//             <section className="inter-school-transfer">
//                <h2>Inter School Transfer</h2>
//                <p>Studaents who are transferred are required to follow these steps to apply:</p>
//                <ol>
//                   <li>Complete the online application form at <Link to="#">https://www.CHINS.edu.ng</Link> or visit the school to obtain the form.</li>
//                   <li>Produce an evidence of transfer from the previous school.</li>
//                   <li>Attach copies of their previous results to the completed form.</li>
//                   <li>Write a placement test.</li>
//                   <li>Receive your admission decision.</li>
//                </ol>
//             </section>
//             <section className="admission-requirements">
//                <h2>Admission Requirements</h2>
//                <ul>
//                   <li>Completed application form.</li>
//                   <li>Academic transcripts.</li>
//                   <li>Recommendation letters.</li>
//                   <li>Personal statement or essay.</li>
//                   <li>Interview (if applicable).</li>
//                </ul>
//             </section>
//             <section className="contact-info">
//                <h2>Contact Us</h2>
//                <p>If you have any questions or need further information, please feel free to contact our admissions office:</p>
//                <p>Email: admissions@CHINS.edu</p>
//                <p>Phone: (+234) 701-292-8822</p>
//                <p>Address: 23 Yaounde St., Wuse Zone 6, FCT - Abuja. Nigeria</p>
//             </section>
//          </main>

//          <aside className="side-links">
//             <h2>Quick Links</h2>
//             <ul>
//                <li><Link to="/admissions">Admissions</Link> </li>
//                <li><Link to="/admissions">Admissions</Link> </li>
//                <li><Link to="/admissions">Admissions</Link> </li>
//                <li><Link to="/admissions">Admissions</Link> </li>
//             </ul>
//             <h2>Quick Links</h2>
//             <ul>
//                <li><Link to="/admissions">Admissions</Link> </li>
//                <li><Link to="/admissions">Admissions</Link> </li>
//                <li><Link to="/admissions">Admissions</Link> </li>
//                <li><Link to="/admissions">Admissions</Link> </li>
//             </ul>
//          </aside>

//       </div>

//    );
// };

// export default AdmissionPage;
