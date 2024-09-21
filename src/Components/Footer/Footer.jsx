import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <div className='footer container'>
         <p>&copy; 2024 CHINS. All right reserved.</p>
         <ul>
            <li><Link to='terms-of-service'>Terms of Services</Link></li>
            <li><Link to='policy'>Privacy Policy</Link></li>
         </ul>
      </div>
   )
}

export default Footer
