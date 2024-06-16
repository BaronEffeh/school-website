import React from 'react';
import './AdmissionPage.css';
import { Link } from 'react-router-dom';

const AdmissionPage = () => {
   return (
      <div className="admission-page">
         <main className='main-content'>
            <header className="admission-header">
               <h1>Admissions</h1>
               <p>Welcome to our admissions page! Here you will find all the information you need to apply to our school.</p>
            </header>

            <section className="admission-info">
               <h2>Admission Process</h2>
               <p>Our admission process is designed to be straightforward and transparent. Follow these steps to apply:</p>
               <ol>
                  <li>Complete the online application form at <Link to="#">https://www.edusity.edu.ng</Link> or visit the school to obtain the form.</li>
                  <li>Submit the required documents, including transcripts and recommendation letters.</li>
                  <li>Attend an interview (if applicable).</li>
                  <li>Receive your admission decision.</li>
               </ol>
            </section>
            <section className="inter-school-transfer">
               <h2>Inter School Transfer</h2>
               <p>Studaents who are transferred are required to follow these steps to apply:</p>
               <ol>
                  <li>Complete the online application form at <Link to="#">https://www.edusity.edu.ng</Link> or visit the school to obtain the form.</li>
                  <li>Produce an evidence of transfer from the previous school.</li>
                  <li>Attach copies of their previous results to the completed form.</li>
                  <li>Write a placement test.</li>
                  <li>Receive your admission decision.</li>
               </ol>
            </section>
            <section className="admission-requirements">
               <h2>Admission Requirements</h2>
               <ul>
                  <li>Completed application form.</li>
                  <li>Academic transcripts.</li>
                  <li>Recommendation letters.</li>
                  <li>Personal statement or essay.</li>
                  <li>Interview (if applicable).</li>
               </ul>
            </section>
            <section className="contact-info">
               <h2>Contact Us</h2>
               <p>If you have any questions or need further information, please feel free to contact our admissions office:</p>
               <p>Email: admissions@edusity.edu</p>
               <p>Phone: (+234) 701-292-8822</p>
               <p>Address: 23 Yaounde St., Wuse Zone 6, FCT - Abuja. Nigeria</p>
            </section>
         </main>

         <aside className="side-links">
            <h2>Quick Links</h2>
            <ul>
               <li><Link to="/admissions">Admissions</Link> </li>
               <li><Link to="/admissions">Admissions</Link> </li>
               <li><Link to="/admissions">Admissions</Link> </li>
            </ul>
         </aside>
      </div>
   );
};

export default AdmissionPage;
