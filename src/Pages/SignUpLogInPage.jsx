import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AuthPage from '../Components/SignUpLogIn/AuthPage';

const SignUpLogInPage = () => {
   useEffect(() => {
      document.title = "Login - CHINS";
   }, []);

   return (
      <div style={{ marginTop: "-5rem", marginBottom: "5.5rem" }}>
         <Helmet>
            <title>Login - CHINS</title>
            <meta name="description" content="CHINS Login, Academic Portal, CHINS Portal, E-Portal, and academic offerings." />
         </Helmet>
         <AuthPage />
      </div>
   );
};

export default SignUpLogInPage
