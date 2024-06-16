import React, { useState } from 'react';
import './AuthPage.css';

const AuthPage = () => {
   const [isLogin, setIsLogin] = useState(true);

   const toggleForm = () => {
      setIsLogin(!isLogin);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      // Form submission logic
   };

   return (
      <div className="auth-page">
         <div className="auth-container">
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form className="auth-form" onSubmit={handleSubmit}>
               {!isLogin && (
                  <div className="form-group">
                     <label htmlFor="name">Name</label>
                     <input type="text" id="name" placeholder="Enter your name" required />
                  </div>
               )}
               <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your email" required />
               </div>
               <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="Enter your password" required />
               </div>
               {!isLogin && (
                  <div className="form-group">
                     <label htmlFor="confirm-password">Confirm Password</label>
                     <input type="password" id="confirm-password" placeholder="Confirm your password" required />
                  </div>
               )}
               <button type="submit" className="auth-button">
                  {isLogin ? 'Login' : 'Sign Up'}
               </button>
            </form>
            <p className="toggle-text">
               {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
               <span onClick={toggleForm}>
                  {isLogin ? 'Sign Up' : 'Login'}
               </span>
            </p>
         </div>
      </div>
   );
};

export default AuthPage;
