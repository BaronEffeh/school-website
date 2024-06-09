import React, { useEffect, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

   const [sticky, setSticky] = useState(false);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
   }, []);

   const [mobileMenu, setMobileMenu] = useState(false);
   const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
   }

   return (
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
         <div className="top-nav">
            <ul className='top-nav-menu'>
               <li><Link to='/e-portal'>E-Portal</Link></li>
               <li><Link to='/alumni'>Alumni</Link></li>
               <li><Link to='/pta'>PTA</Link></li>
            </ul>
         </div>
         <Link to="/"><img src={logo} alt="" className='logo' /></Link>
         <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/campus">Campus</Link></li>
            <li><Link to="/contact"><button className='btn'>Contact us</button></Link></li>
         </ul>
         <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
      </nav>
   )
}

export default Navbar
