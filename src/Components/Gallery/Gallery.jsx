import React, { useState } from 'react';
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  Typography,
  Button,
  IconButton,
  Pagination,
  Box,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
// import { ArrowBack, ArrowForward } from '@mui/icons-material';

const Gallery = ({ images }) => {
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false); // For modal dialog
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // To store the index of the clicked image

  const itemsPerPage = 12;

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSearchTerm('');
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCategory('All');
    setCurrentPage(1);
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const filteredImages = images.filter((image) => {
    if (category !== 'All' && image.category !== category) {
      return false;
    }
    if (searchTerm && !image.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedImages = filteredImages.slice(startIndex, startIndex + itemsPerPage);

  const handleClickOpen = (index) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % displayedImages.length);
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + displayedImages.length) % displayedImages.length);
  };

  return (
    <Box sx={{ padding: '2rem' }}>
      {/* Search and Filter Section */}
      <Grid container spacing={3} sx={{ marginBottom: '2rem' }}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="category-label">Sort by Category</InputLabel>
            <Select
              labelId="category-label"
              value={category}
              label="Sort by Category"
              onChange={handleCategoryChange}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Academic">Academic</MenuItem>
              <MenuItem value="Ceremony">Ceremony</MenuItem>
              <MenuItem value="Graduation">Graduation</MenuItem>
              <MenuItem value="Sports">Sports/Recreation</MenuItem>
              <MenuItem value="Community">Community Involvement</MenuItem>
              <MenuItem value="Visitors">Visitors</MenuItem>
              <MenuItem value="NYSC">NYSC</MenuItem>
              <MenuItem value="Nature">Nature</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Search by title"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Grid>
      </Grid>

      {/* Image Gallery Section */}
      <Grid container spacing={2}>
        {displayedImages.map((image, index) => (
          <Grid item xs={6} sm={4} md={3} key={image.id}>
            <Paper
              elevation={3}
              sx={{
                overflow: 'hidden',
                borderRadius: '8px',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)', cursor: 'pointer' },
              }}
              onClick={() => handleClickOpen(index)}
            >
              <img
                src={image.image}
                alt={image.title}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              <Typography variant="body2" align="center" sx={{ padding: '0.5rem' }}>
                {image.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Pagination Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2rem',
        }}
      >
        <IconButton
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          {/* <ArrowBack /> */}
        </IconButton>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          siblingCount={1}
          boundaryCount={1}
          color="primary"
          sx={{ marginX: '1rem' }}
        />
        <IconButton
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          {/* <ArrowForward /> */}
        </IconButton>
      </Box>

      {/* Dialog for showing image with Next, Previous and Close buttons */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{displayedImages[selectedImageIndex]?.title}</DialogTitle>
        <DialogContent>
          <img
            src={displayedImages[selectedImageIndex]?.image}
            alt={displayedImages[selectedImageIndex]?.title}
            style={{ width: '100%', maxHeight: '600px', objectFit: 'contain' }}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'space-between' }}>
          <Button onClick={handlePreviousImage} disabled={selectedImageIndex === 0}>
            Previous
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleNextImage} disabled={selectedImageIndex === displayedImages.length - 1}>
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Gallery;








// import React, { useState } from 'react';
// import './Gallery.css';
// import left_arrow from '../../assets/left.svg';
// import right_arrow from '../../assets/right-arrow.png';

// const Gallery = ({ images }) => {
//   const [category, setCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 12;

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//     setSearchTerm('');
//     setCurrentPage(1);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setCategory('All');
//     setCurrentPage(1);
//   };

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const filteredImages = images.filter((image) => {
//     if (category !== 'All' && image.category !== category) {
//       return false;
//     }
//     if (searchTerm && !image.title.toLowerCase().includes(searchTerm.toLowerCase())) {
//       return false;
//     }
//     return true;
//   });

//   const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const displayedImages = filteredImages.slice(startIndex, startIndex + itemsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   // Academic, Graduation, Sports/Recreation, Community Involvement, Ceremony, Visitors, NYSC

//   return (
//     <div>
//       <div className="gallery-bar-section">
//         <div className='gallery-bar-section-item'>
//           <label>
//             Sort by Category:
//             <select value={category} onChange={handleCategoryChange}>
//               <option value="All">All</option>
//               <option value="Academic">Academic</option>
//               <option value="Ceremony">Ceremony</option>
//               <option value="Graduation">Graduation</option>
//               <option value="Sports">Sports/Recreation</option>
//               <option value="Community">Community Involvement</option>
//               <option value="Visitors">Visitors</option>
//               <option value="NYSC">NYSC</option>
//               <option value="Nature">Nature</option>
//               <option value="Animal">Animal</option>
//               <option value="Architecture">Architecture</option>
//             </select>
//           </label>
//         </div>
//         <div className='gallery-bar-section-item'>
//           <label>
//             Search:
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               placeholder="Search by title"
//             />
//           </label>
//         </div>
//       </div>
//       <div className="photo-gallery">
//         {displayedImages.map((image) => (
//           <div key={image.id} className="gallery-item">
//             <img src={image.image} alt={image.title} />
//             <p>{image.title}</p></div>
//         ))}
//       </div>
//       <div className="pagination">
//         <button onClick={handlePreviousPage} disabled={currentPage === 1} className='page-nav' >
//           <img src={left_arrow} alt="" style={{ height: '30px', width: '30px' }} className='left-arrow' />
//         </button>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             className={index + 1 === currentPage ? 'active' : ''}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button onClick={handleNextPage} disabled={currentPage === totalPages} className='page-nav'>
//           Next <img src={right_arrow} alt="" style={{ height: '30px', width: '30px' }} className='left-arrow' />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Gallery;






// import React, { useState } from 'react';
// import PhotoGallery from '../../assets/PhotoGallery/PhotoGallery';

// const images = [
//   { id: 1, src: 'path/to/image1.jpg', category: 'Nature', title: 'Forest' },
//   { id: 2, src: 'path/to/image2.jpg', category: 'Nature', title: 'River' },
//   { id: 3, src: 'path/to/image3.jpg', category: 'Animals', title: 'Dog' },
//   { id: 4, src: 'path/to/image4.jpg', category: 'Animals', title: 'Cat' },
//   { id: 5, src: 'path/to/image5.jpg', category: 'Architecture', title: 'Building' },
//   { id: 6, src: 'path/to/image6.jpg', category: 'Nature', title: 'Mountain' },
//   { id: 7, src: 'path/to/image7.jpg', category: 'Animals', title: 'Bird' },
//   { id: 8, src: 'path/to/image8.jpg', category: 'Architecture', title: 'Bridge' },
//   { id: 9, src: 'path/to/image9.jpg', category: 'Nature', title: 'Sunset' },
//   { id: 10, src: 'path/to/image10.jpg', category: 'Animals', title: 'Elephant' },
//   { id: 11, src: 'path/to/image11.jpg', category: 'Architecture', title: 'Skyscraper' },
//   { id: 12, src: 'path/to/image12.jpg', category: 'Nature', title: 'Beach' },
//   { id: 13, src: 'path/to/image13.jpg', category: 'Animals', title: 'Lion' },
//   { id: 14, src: 'path/to/image14.jpg', category: 'Architecture', title: 'Castle' },
// ];

// const Gallery = () => {
//   const [category, setCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//     setSearchTerm('');
//     setCurrentPage(1);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setCategory('All');
//     setCurrentPage(1);
//   };

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const filteredImages = images.filter((image) => {
//     if (category !== 'All' && image.category !== category) {
//       return false;
//     }
//     if (searchTerm && !image.title.toLowerCase().includes(searchTerm.toLowerCase())) {
//       return false;
//     }
//     return true;
//   });

//   const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const displayedImages = filteredImages.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <div>
//       <div>
//         <label>
//           Category:
//           <select value={category} onChange={handleCategoryChange}>
//             <option value="All">All</option>
//             <option value="Nature">Nature</option>
//             <option value="Animals">Animals</option>
//             <option value="Architecture">Architecture</option>
//           </select>
//         </label>
//       </div>
//       <div>
//         <label>
//           Search:
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Search by title"
//           />
//         </label>
//       </div>
//       <div className="gallery">
//         {displayedImages.map((image) => (
//           <div key={image.id} className="gallery-item">
//             <img src={image.src} alt={image.title} />
//             <p>{image.title}</p>
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             className={index + 1 === currentPage ? 'active' : ''}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>


//       <div>
//         <h2>Props test</h2>
//         {PhotoGallery.map((item, i) => {
//           return <Item key={i} id={item.id} name={item.title} image={item.image} category={item.category} />
//         })}
//       </div>
//     </div>
//   );
// };

// export default Gallery;
