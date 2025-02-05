import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CircularProgress, Box, Typography, Container } from '@mui/material';
import bg3 from '/assets/images/bg3.jpg';
import './App.css';
import Header from './Components/Header/Header';
import './scss/main.scss';
import Intro from './Components/Intro/Intro';
import About from './Components/AboutMe/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 3 seconds
    }, 3000);

    // Cleanup the timer in case of component unmounting
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Box
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
        alignContent='center'
      >
        <CircularProgress thickness={10} size={70} sx={{ color: 'white' }} />
        <Typography
          variant='h6'
          color='white'
          fontWeight='bold'
          fontFamily='cursive'
        >
          Loading...
        </Typography>
      </Box>
    );
  }
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        //width: '100vw',
        //height: '100vh',
        backgroundImage: `url(${bg3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        padding: 0,
      }}
    >
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
