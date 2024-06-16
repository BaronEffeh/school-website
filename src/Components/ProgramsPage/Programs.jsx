import React, { useState } from 'react';
import './ProgramsPage.css';
import { Link } from 'react-router-dom';
import MathImage from '../../assets/programImgs/math.jpg';
import ScienceImage from '../../assets/programImgs/science.jpg';
import LiteratureImage from '../../assets/programImgs/literature.jpg';
import ArtImage from '../../assets/programImgs/art.jpg';
import ICTImage from '../../assets/programImgs/ict.png';
import HistoryImage from '../../assets/programImgs/history.jpg';
import PHEImage from '../../assets/programImgs/phe.jpg';
import MusicImage from '../../assets/programImgs/music.jpg';

const programs = [
   {
      title: 'Mathematics',
      description: 'Our mathematics program focuses on developing problem-solving skills and logical reasoning. Students will explore advanced topics and apply mathematical theories to real-world scenarios.',
      image: MathImage,
      popularity: 5,
      dateAdded: '2023-01-01'
   },
   {
      title: 'Science',
      description: 'Explore the wonders of the natural world through our comprehensive science curriculum. Engage in hands-on experiments and learn about the latest scientific discoveries.',
      image: ScienceImage,
      popularity: 8,
      dateAdded: '2023-02-01'
   },
   {
      title: 'Literature',
      description: 'Dive into classic and contemporary works with our engaging literature program. Analyze literary masterpieces and develop critical thinking and writing skills.',
      image: LiteratureImage,
      popularity: 7,
      dateAdded: '2023-03-01'
   },
   {
      title: 'Art',
      description: 'Express your creativity and develop your artistic skills in our art program. From painting to sculpture, students will explore various artistic mediums and techniques.',
      image: ArtImage,
      popularity: 6,
      dateAdded: '2023-04-01'
   },
   {
      title: 'Information Technology and Computing (ITC)',
      description: 'Our ITC program equips students with essential skills in computer science, programming, and digital literacy. Students will learn to develop software, manage databases, and understand the fundamentals of cybersecurity.',
      image: ICTImage,
      popularity: 9,
      dateAdded: '2023-05-01'
   },
   {
      title: 'History',
      description: 'The history program offers an in-depth study of global historical events and movements. Students will analyze primary sources, understand historical contexts, and develop a comprehensive view of the past.',
      image: HistoryImage,
      popularity: 4,
      dateAdded: '2023-06-01'
   },
   {
      title: 'Physical Education',
      description: 'Our physical education program promotes fitness, teamwork, and healthy lifestyles. Students participate in a variety of sports and activities that develop physical skills and encourage lifelong wellness.',
      image: PHEImage,
      popularity: 3,
      dateAdded: '2023-07-01'
   },
   {
      title: 'Music',
      description: 'The music program nurtures students’ musical talents through performance, theory, and composition. Students will have opportunities to participate in ensembles, learn instruments, and appreciate different musical genres.',
      image: MusicImage,
      popularity: 10,
      dateAdded: '2023-08-01'
   }
];

const ITEMS_PER_PAGE = 4;

const Programs = () => {
   const [expandedIndex, setExpandedIndex] = useState(null);
   const [searchQuery, setSearchQuery] = useState('');
   const [sortOrder, setSortOrder] = useState('alphabetical');
   const [currentPage, setCurrentPage] = useState(1);

   const handleExpand = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
   };

   const handleSearch = (event) => {
      setSearchQuery(event.target.value.toLowerCase());
      setCurrentPage(1);
   };

   const handleSort = (event) => {
      setSortOrder(event.target.value);
      setCurrentPage(1);
   };

   const sortPrograms = (programs) => {
      switch (sortOrder) {
         case 'alphabetical':
            return [...programs].sort((a, b) => a.title.localeCompare(b.title));
         case 'popularity':
            return [...programs].sort((a, b) => b.popularity - a.popularity);
         case 'dateAdded':
            return [...programs].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
         default:
            return programs;
      }
   };

   const filteredPrograms = programs.filter(program =>
      program.title.toLowerCase().includes(searchQuery) ||
      program.description.toLowerCase().includes(searchQuery)
   );

   const sortedPrograms = sortPrograms(filteredPrograms);

   const totalPages = Math.ceil(sortedPrograms.length / ITEMS_PER_PAGE);
   const displayedPrograms = sortedPrograms.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

   const handlePrevPage = () => {
      setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
   };

   const handleNextPage = () => {
      setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);
   };

   return (
      <div className="programs-page">
         <main className="main-content">
            <h1 className="programs-head">Our Programs</h1>
            <input
               type="text"
               placeholder="Search programs..."
               value={searchQuery}
               onChange={handleSearch}
               className="program-search"
            />
            <div className="program-sort">
               <label>Sort by: </label>
               <select value={sortOrder} onChange={handleSort}>
                  <option value="alphabetical">Alphabetical</option>
                  <option value="popularity">Popularity</option>
                  <option value="dateAdded">Date Added</option>
               </select>
            </div>
            <div className="programs-container">
               {displayedPrograms.map((program, index) => (
                  <div className="program-card" id={program.title.toLowerCase()} key={index} onClick={() => handleExpand(index)}>
                     <img src={program.image} alt={program.title} className="program-image" />
                     <h2 className="programs-title">
                        {program.title}
                     </h2>
                     {expandedIndex === index && (
                        <p className="program-description">{program.description}</p>
                     )}
                  </div>
               ))}
            </div>
            <div className="pagination">
               <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
               <span>Page {currentPage} of {totalPages}</span>
               <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
         </main>
         <aside className="side-links">
            <h2>Quick Links</h2>
            <ul>
               {programs.map((program, index) => (
                  <li key={index}>
                     <a href={`#${program.title.toLowerCase()}`}>{program.title}</a>
                  </li>
               ))}
               <li><Link to="/admissions">Admissions</Link></li>
            </ul>
         </aside>
      </div>
   );
};

export default Programs;
