import React from 'react'
import './AboutWelcomeMessage.css';
import about_img from '../../assets/about.png';

const AboutWelcomeMessage = () => {
   return (
      <div>
         <div className="about-welcome-msg">
            <img src={about_img} alt="" className='about-welcome-img' />

            <h3 className="about-welcom-title">ABOUT UNIVERSITY</h3>
            <h2 className="about-welcom-head">Nurturing Tomorrow's Leaders Today</h2>
            <p className="about-welcom-text">Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p className="about-welcom-text">With a focus on innovation, hand-on learning , and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
            <p className="about-welcom-text">Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achive your goals and unlock your full potential in sharing the future of education.</p>

            <p className="about-welcom-text">
               At Educity, we are dedicated to fostering a nurturing and stimulating environment where students can achieve their full potential. Our commitment to academic excellence, combined with a focus on character development, prepares our students to thrive in an ever-changing world.</p>
         </div>


      </div>
   )
}

export default AboutWelcomeMessage
