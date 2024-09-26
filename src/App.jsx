import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar';
import AboutPage from './Pages/AboutPage';
import Footer from './Components/Footer/Footer';
import ProgramsPage from './Pages/ProgramsPage';
import CampusPage from './Pages/CampusPage';
import ContactPage from './Pages/ContactPage';
import Admissions from './Pages/Admissions';
import Error404 from './Pages/Error404';
import GalleryPage from './Pages/GalleryPage';
import SignUpLogInPage from './Pages/SignUpLogInPage';
import TermsOfService from './Pages/TermsOfService';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import { CssBaseline } from '@mui/material';
import ScrollToTop from './Components/Context/ScrollToTop';

const App = () => {

  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/school-website' element={<Home />} />
          <Route path='/programs' element={<ProgramsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/campus' element={<CampusPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/admissions' element={<Admissions />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/login' element={<SignUpLogInPage />} />
          <Route path='/terms-of-service' element={<TermsOfService />} />
          <Route path='/policy' element={<PrivacyPolicy />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
