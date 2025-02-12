import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CircularProgress, Box, Typography, Container } from '@mui/material';
import { AnimatePresence } from 'framer-motion';

import bg3 from '/assets/images/bg3.jpg';
import './App.css';
import Header from './Components/Header/Header';
import './scss/main.scss';
import Intro from './Components/Intro/Intro';
import About from './Components/AboutMe/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import PageWrapper from './Components/PageWrapper/PageWrapper';
import Response from './Components/Response/Response';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

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
        minHeight: '100vh',
        backgroundImage: `url(${bg3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
        overflowY: 'auto',
      }}
    >
      <div>
        <Header />
        <AnimatePresence node='wait'>
          <Routes location={location} key={location.pathname}>
            <Route
              path='/'
              element={
                <PageWrapper>
                  <Intro />
                </PageWrapper>
              }
              exact
            />
            <Route
              path='/about'
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
              exact
            />
            <Route
              path='/services'
              element={
                <PageWrapper>
                  <Services />
                </PageWrapper>
              }
              exact
            />
            <Route
              path='/contact'
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
              exact
            />
            <Route path='/feedback' element={<Response />} exact />
          </Routes>
        </AnimatePresence>
      </div>
    </Container>
  );
}

export default App;
