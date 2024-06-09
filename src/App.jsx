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

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/programs' element={<ProgramsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/campus' element={<CampusPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/admissions' element={<Admissions />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
