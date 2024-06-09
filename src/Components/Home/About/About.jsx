import React from 'react'
import './About.css';
import about_img from '../../../assets/about.png';
import play_icon from '../../../assets/play-icon.png';
import white_arrow from '../../../assets/white-arrow.png';
import { Link } from 'react-router-dom';

const About = ({ setPlayState }) => {
   return (
      <div className='about'>
         <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} />
         </div>
         <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hand-on learning , and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achive your goals and unlock your full potential in sharing the future of education.</p>
            <Link to='/about'><button className='btn dark-btn'>Read more <img src={white_arrow} alt="" /></button></Link>
         </div>
      </div>
   )
}

export default About
