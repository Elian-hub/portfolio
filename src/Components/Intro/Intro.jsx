import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Intro = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Designer', 'Footballer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 70,
  });

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 text-center md:text-left'>
      <p className='text-lg md:text-xl mb-4'>Hello human,</p>
      <h1 className='text-2xl md:text-3xl font-bold'>
        I'm a{' '}
        <span className='text-2xl text-white md:text-4xl font-bold'>
          {text}
        </span>
        <Cursor />
      </h1>
    </div>
  );
};

export default Intro;
