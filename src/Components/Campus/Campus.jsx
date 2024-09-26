import React from 'react';
import './CampusPage.css';
import CampusImage1 from '../../assets/campusImgs/library.jpg';
import CampusImage2 from '../../assets/campusImgs/science-labs.jpg';
import CampusImage3 from '../../assets/campusImgs/sports-complex.jpg';
import CampusImage5 from '../../assets/campusImgs/computer-lab.jpeg';
import CampusImage4 from '../../assets/campusImgs/art-studio.jpg';
// import white_arrow from '../../../assets/white-arrow.png';
import white_arrow from '../../assets/white-arrow.png';
import { Link } from 'react-router-dom';

const facilities = [
   {
      title: 'Library',
      description: 'Our library offers a vast collection of books, journals, and digital resources to support students’ academic pursuits.',
      image: CampusImage1,
   },
   {
      title: 'Science Labs',
      description: 'Equipped with modern technology, our science labs provide a hands-on learning environment for students.',
      image: CampusImage2,
   },
   {
      title: 'Sports Complex',
      description: 'The sports complex features a gym, swimming pool, and various courts to promote physical fitness and teamwork.',
      image: CampusImage3,
   },
   {
      title: 'Computer Lab',
      description: 'The sports complex features a gym, swimming pool, and various courts to promote physical fitness and teamwork.',
      image: CampusImage5,
   },
   {
      title: 'Art Studio',
      description: 'Our art studio is a creative space where students can explore and express their artistic talents.',
      image: CampusImage4,
   },
];

const Campus = () => {
   return (
      <div className="campus-page">
         <h1 className="campus-head">Our Campus</h1>
         <div className="facilities-container">
            {facilities.map((facility, index) => (
               <div className="facility-card" key={index}>
                  <img src={facility.image} alt={facility.title} className="facility-image" />
                  <h2 className="facility-title">{facility.title}</h2>
                  <p className="facility-description">{facility.description}</p>
               </div>
            ))}
         </div>
         <div className="gallery-link">
            <Link to='/gallery' style={{ alignItems: 'center', justifyItems: 'center', margin: 'auto' }}><button className='btn dark-btn'>Go To Gallery <img src={white_arrow} alt="" /></button></Link>
         </div>
      </div>
   );
};

export default Campus;
