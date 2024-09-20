import React from 'react'
import './PageBanner.css';

class PageBanner extends React.Component {
   render() {
      let pageTitle;
      let pageDescription;
      switch (this.props.page) {
         case 'about':
            pageTitle = 'About Us';
            pageDescription = 'Home / About';
            break;
         case 'campus':
            pageTitle = 'Life in Campus';
            pageDescription = 'Home / Campus';
            break;
         case 'contact':
            pageTitle = 'Contact Us';
            pageDescription = 'Home / Contact';
            break;
         case 'admissions':
            pageTitle = 'Admissions';
            pageDescription = 'Home / Admissions';
            break;
         case 'gallery':
            pageTitle = 'Gallery';
            pageDescription = 'Home / Gallery';
            break;
         case 'Terms of Service':
            pageTitle = 'Terms of Service';
            pageDescription = 'Home / Terms of Service';
            break;
         case 'Privacy Policy':
            pageTitle = 'Privacy Policy';
            pageDescription = 'Home / Privacy Policy';
            break;

         default:
            pageTitle = 'Our Programs';
            pageDescription = 'Home / Programs'
            break;
      }
      return (
         <div className='page-banner' >
            <div className='page-banner-img'></div>
            <div className='page-banner-text'>
               <h1>{pageTitle}</h1>
               <p>{pageDescription}</p>
            </div>
         </div>
      )
   }
}

export default PageBanner
