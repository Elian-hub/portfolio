import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import './scss/main.scss';
import Intro from './Components/Intro/Intro';
import About from './Components/About Me/About';
import Services from './Components/Services/Services';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay (e.g., fetching data or resources)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds
    }, 3000);

    // Cleanup the timer in case of component unmounting
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen text-white text-2xl'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
