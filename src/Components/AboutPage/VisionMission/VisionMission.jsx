import React from 'react'
import './VisionMission.css';

const VisionMission = () => {
   return (
      <div>
         <div className="statement-cards">

            <div className="statement-card">
               <div className='statement-card-title'><h1>Our Mission</h1></div>
               <p>Our mission is to provide a comprehensive education that empowers students to become lifelong learners, critical thinkers, and responsible global citizens. We strive to cultivate an inclusive community where diversity is celebrated, and every student feels valued and supported.</p>
            </div>

            <div className="statement-card">
               <div className='statement-card-title'><h1>Our Vision</h1></div>
               <p>We envision a future where our students are leaders in their chosen fields, making meaningful contributions to society. Through innovative teaching practices, a rigorous curriculum, and a focus on the holistic development of each student, we aim to inspire a love for learning that extends beyond the classroom.</p>
            </div>

            <div className="statement-card">
               <div className='statement-card-title'><h1>Our Core Value</h1></div>
               <p>
                  <b>Knowledge:</b> We cultivate a love for learning, encouraging intellectual curiosity and the pursuit of academic excellence.<br />

                  <b>Service:</b> We promote a spirit of community engagement and leadership, inspiring students to serve others with compassion and humility.<br />

                  <b>Dignity:</b> We uphold the dignity of every individual, fostering a culture of respect, integrity, and inclusivity.
               </p>
            </div>
         </div>
      </div>
   )
}

export default VisionMission
