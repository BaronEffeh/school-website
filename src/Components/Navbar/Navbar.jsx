import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText, Link, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import logo from '../../assets/logo.png';
import logo from '../../assets/chins-logo-white.png';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
   const [sticky, setSticky] = useState(false);
   const [mobileMenu, setMobileMenu] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setSticky(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const toggleDrawer = () => {
      setMobileMenu(!mobileMenu);
   };

   return (
      <AppBar
         position="sticky"
         elevation={sticky ? 4 : 0}
         sx={{
            backgroundColor: sticky ? '#212EA0' : 'transparent',
            transition: '0.5s',
            paddingLeft: '3rem',
            paddingRight: '3rem',
         }}
      >
         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Link component={RouterLink} to="/">
               <Box component="img" src={logo} alt="logo" sx={{ width: { xs: 140, sm: 180 } }} />
            </Link>

            {/* Top Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
               <Button color="inherit" component={RouterLink} to="/">
                  Home
               </Button>
               <Button color="inherit" component={RouterLink} to="/about">
                  About us
               </Button>
               <Button color="inherit" component={RouterLink} to="/programs">
                  Programs
               </Button>
               <Button color="inherit" component={RouterLink} to="/admissions">
                  Admissions
               </Button>
               <Button color="inherit" component={RouterLink} to="/campus">
                  Campus
               </Button>
               <Button
                  variant="contained"
                  component={RouterLink}
                  to="/contact"
                  sx={{
                     backgroundColor: 'white',
                     color: 'black',
                     borderRadius: '30px',
                     '&:hover': {
                        backgroundColor: '#f0f0f0',
                     },
                  }}
               >
                  Contact us
               </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ display: { md: 'none' } }}>
               <MenuIcon />
            </IconButton>

            {/* Mobile Drawer Menu */}
            <Drawer anchor="right" open={mobileMenu} onClose={toggleDrawer}>
               <List sx={{ width: 200 }}>
                  <ListItem button component={RouterLink} to="/" onClick={toggleDrawer}>
                     <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem button component={RouterLink} to="/about" onClick={toggleDrawer}>
                     <ListItemText primary="About us" />
                  </ListItem>
                  <ListItem button component={RouterLink} to="/programs" onClick={toggleDrawer}>
                     <ListItemText primary="Programs" />
                  </ListItem>
                  <ListItem button component={RouterLink} to="/admissions" onClick={toggleDrawer}>
                     <ListItemText primary="Admissions" />
                  </ListItem>
                  <ListItem button component={RouterLink} to="/campus" onClick={toggleDrawer}>
                     <ListItemText primary="Campus" />
                  </ListItem>
                  <ListItem button component={RouterLink} to="/contact" onClick={toggleDrawer}>
                     <Button
                        variant="contained"
                        fullWidth
                        color='primary'
                     // sx={{
                     //    backgroundColor: 'white',
                     //    color: '#212EA0',
                     //    '&:hover': {
                     //       backgroundColor: '#f0f0f0',
                     //    },
                     // }}
                     >
                        Contact us
                     </Button>
                  </ListItem>
               </List>
            </Drawer>
         </Toolbar>
      </AppBar>
   );
};

export default Navbar;







// import React, { useEffect, useState } from 'react';
// import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText, Link, Box } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import logo from '../../assets/logo.png';
// import { Link as RouterLink } from 'react-router-dom';

// const Navbar = () => {
//    const [sticky, setSticky] = useState(false);
//    const [mobileMenu, setMobileMenu] = useState(false);

//    useEffect(() => {
//       const handleScroll = () => {
//          setSticky(window.scrollY > 50);
//       };
//       window.addEventListener('scroll', handleScroll);
//       return () => {
//          window.removeEventListener('scroll', handleScroll);
//       };
//    }, []);

//    const toggleDrawer = () => {
//       setMobileMenu(!mobileMenu);
//    };

//    return (
//       <AppBar
//          position="sticky"
//          elevation={sticky ? 4 : 0}
//          sx={{
//             backgroundColor: sticky ? '#212EA0' : 'transparent',
//             transition: '0.5s',
//          }}
//       >
//          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//             {/* Logo */}
//             <Link component={RouterLink} to="/">
//                <Box component="img" src={logo} alt="logo" sx={{ width: { xs: 140, sm: 180 } }} />
//             </Link>

//             {/* Top Links */}
//             <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//                <Button color="inherit" component={RouterLink} to="/">
//                   Home
//                </Button>
//                <Button color="inherit" component={RouterLink} to="/about">
//                   About us
//                </Button>
//                <Button color="inherit" component={RouterLink} to="/programs">
//                   Programs
//                </Button>
//                <Button color="inherit" component={RouterLink} to="/admissions">
//                   Admissions
//                </Button>
//                <Button color="inherit" component={RouterLink} to="/campus">
//                   Campus
//                </Button>
//                <Button variant="contained" color="secondary" component={RouterLink} to="/contact" sx={{ borderRadius: "30px" }} >
//                   Contact us
//                </Button>
//             </Box>

//             {/* Mobile Menu Icon */}
//             <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ display: { md: 'none' } }}>
//                <MenuIcon />
//             </IconButton>

//             {/* Mobile Drawer Menu */}
//             <Drawer anchor="right" open={mobileMenu} onClose={toggleDrawer}>
//                <List sx={{ width: 200 }}>
//                   <ListItem button component={RouterLink} to="/" onClick={toggleDrawer}>
//                      <ListItemText primary="Home" />
//                   </ListItem>
//                   <ListItem button component={RouterLink} to="/about" onClick={toggleDrawer}>
//                      <ListItemText primary="About us" />
//                   </ListItem>
//                   <ListItem button component={RouterLink} to="/programs" onClick={toggleDrawer}>
//                      <ListItemText primary="Programs" />
//                   </ListItem>
//                   <ListItem button component={RouterLink} to="/admissions" onClick={toggleDrawer}>
//                      <ListItemText primary="Admissions" />
//                   </ListItem>
//                   <ListItem button component={RouterLink} to="/campus" onClick={toggleDrawer}>
//                      <ListItemText primary="Campus" />
//                   </ListItem>
//                   <ListItem button component={RouterLink} to="/contact" onClick={toggleDrawer}>
//                      <Button variant="contained" color="secondary" fullWidth>
//                         Contact us
//                      </Button>
//                   </ListItem>
//                </List>
//             </Drawer>
//          </Toolbar>
//       </AppBar>
//    );
// };

// export default Navbar;







// import React, { useEffect, useState } from 'react'
// import './Navbar.css';
// import logo from '../../assets/logo.png';
// import menu_icon from '../../assets/menu-icon.png';
// import { Link } from 'react-router-dom';

// const Navbar = () => {

//    const [sticky, setSticky] = useState(false);

//    useEffect(() => {
//       window.addEventListener('scroll', () => {
//          window.scrollY > 50 ? setSticky(true) : setSticky(false);
//       })
//    }, []);

//    const [mobileMenu, setMobileMenu] = useState(false);
//    const toggleMenu = () => {
//       mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
//    }

//    return (
//       <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
//          <div className="top-nav">
//             <ul className='top-nav-menu'>
//                <li><Link to='http://localhost:3000/' className='top-nav-menu-item' target='#blank'>E-Portal</Link></li>
//                <li><Link to='/alumni' className='top-nav-menu-item'>Alumni</Link></li>
//                <li><Link to='/pta' className='top-nav-menu-item'>PTA</Link></li>
//             </ul>
//          </div>
//          <Link to="/"><img src={logo} alt="" className='logo' /></Link>
//          <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
//             <li><Link to="/">Home</Link> </li>
//             <li><Link to="/about">About us</Link></li>
//             <li><Link to="/programs">Programs</Link></li>
//             <li><Link to="/admissions">Admissions</Link></li>
//             <li><Link to="/campus">Campus</Link></li>
//             <li><Link to="/contact"><button className='btn'>Contact us</button></Link></li>
//          </ul>
//          <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
//       </nav>
//    )
// }

// export default Navbar
