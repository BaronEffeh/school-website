import React from 'react'
import Contact from '../Components/Home/Contact/Contact'
import Title from '../Components/Title/Title'
import PageBanner from '../Components/PageBanner/PageBanner'

const ContactPage = () => {
   return (
      <div className='container'>

         <PageBanner page='contact' />
         <h1>Contact Us!</h1>
         <p>This page is under construction! Coming up soon...</p>

         <Title subTitle='Contact Us' title='Get in Touch' />

         <Contact />
      </div>
   )
}

export default ContactPage
