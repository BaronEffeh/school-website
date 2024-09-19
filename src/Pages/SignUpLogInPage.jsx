import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AuthPage from '../Components/SignUpLogIn/AuthPage';

const SignUpLogInPage = () => {
   useEffect(() => {
      document.title = "Login - Edusity";
   }, []);

   return (
      <div style={{ marginTop: "-5rem", marginBottom: "5.5rem" }}>
         <Helmet>
            <title>Login - Edusity</title>
            <meta name="description" content="Edusity Login, Academic Portal, Edusity Portal, E-Portal, and academic offerings." />
         </Helmet>
         <AuthPage />
      </div>
   );
};

export default SignUpLogInPage
