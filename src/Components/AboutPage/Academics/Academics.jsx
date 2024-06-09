import React from 'react'
import './Academics.css';
import program_img from '../../../assets/programs.png';
import academic from '../../../assets/academic.png';
import faculty from '../../../assets/faculty.jpg';
import white_arrow from '../../../assets/white-arrow.png';
import { Link } from 'react-router-dom';

const Academics = () => {
   return (
      <div className='academics'>
         <h1 className='academics-title'>Academics</h1>
         <hr />
         <div className="academic-events">
            <div className="academic-event">
               <img src={academic} alt="" />
               <h2 className='academic-event-subtitle'>Academic Programs</h2>
               <p className='academic-event-text'>At Edusity, we offer a wide range of academic programs designed to meet the needs and interests of our diverse student body. From foundational courses to advanced electives, our curriculum is tailored to challenge and inspire students at every grade level. Our programs emphasize critical thinking, creativity, and real-world application, preparing students for higher education and beyond.</p>
               {/* <Link to='/#'><button className='btn dark-btn'>Read more <img src={white_arrow} alt="" /></button></Link> */}
               <Link to='/programs'><button className='btn dark-btn'>Read more <img src={white_arrow} alt="" style={{ width: '20px' }} /></button></Link>
            </div>
            <div className="academic-event">
               <img src={faculty} alt="" />
               <h2 className='academic-event-subtitle'>Our Faculty</h2>
               <p className='academic-event-text'>Our experienced and passionate educators are at the heart of Edusity. They bring a wealth of knowledge and a deep commitment to student success. By employing innovative teaching methods and staying abreast of the latest educational research, our faculty members ensure that our students receive a top-quality education that is both engaging and effective.</p>
               <Link to='/programs'><button className='btn dark-btn'>Read more <img src={white_arrow} alt="" style={{ width: '20px' }} /></button></Link>
            </div>
            <div className="academic-event">
               <img src={program_img} alt="" />
               <h2 className='academic-event-subtitle'>Facilities</h2>
               <p className='academic-event-text'>Our state-of-the-art facilities provide a safe and stimulating environment for learning and growth. With modern classrooms, advanced science and technology labs, extensive sports fields, and creative arts spaces, we ensure that our students have access to the resources they need to succeed.</p>
               <Link to='/programs'><button className='btn dark-btn'>Read more <img src={white_arrow} alt="" style={{ width: '20px' }} /></button></Link>
            </div>
         </div>
      </div>
   )
}

export default Academics
