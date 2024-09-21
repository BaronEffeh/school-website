import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Contact from '../Components/Home/Contact/Contact'
import Title from '../Components/Title/Title'
import PageBanner from '../Components/PageBanner/PageBanner'

const ContactPage = () => {
   useEffect(() => {
      document.title = "Contact - CHINS";
   }, []);

   return (
      <div className='container'>
         <Helmet>
            <title>Contact - CHINS</title>
            <meta name="description" content="CHINS Contact, Academic environment, Contact, Email Address, Phone Number, and academic offerings." />
         </Helmet>

         <PageBanner page='contact' />

         <Title subTitle='Contact Us' title='Get in Touch' />

         <Contact />
      </div>
   )
}

export default ContactPage
