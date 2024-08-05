import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header/Header';
import './scss/main.scss';
import Intro from './Components/Intro/Intro';

function App() {
  return (
    <div>
      {' '}
      <Header />
      <Intro />
    </div>
  );
}

export default App;
