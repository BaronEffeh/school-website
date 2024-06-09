import React from 'react'
import { Link } from 'react-router-dom';

const Error404 = () => {
   return (
      <div className='container'>
         <div className="error404" style={{ margin: '10rem' }}>
            <h1>Oops! Page Not Found.</h1>
            <h3>Error 404</h3>
            <p>Sorry, the page you're looking for have either been removed or does not exist!</p>
            <Link to='/'><button className='btn dark-btn'>Go back to Home page</button></Link>
         </div>
      </div>
   )
}

export default Error404
