import React from 'react'
import Gallery from '../Components/Gallery/Gallery';
import PhotoGallery from '../assets/PhotoGallery/PhotoGallery';
import PageBanner from '../Components/PageBanner/PageBanner';

const GalleryPage = () => {
   return (
      <div className='container'>

         <PageBanner page='gallery' />
         <h1 style={{ marginTop: "5rem" }}>Gallery</h1>
         <p>This page is under construction! Coming up soon!</p>

         <Gallery images={PhotoGallery} />
      </div>
   )
}

export default GalleryPage
