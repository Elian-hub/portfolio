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
    <div>
      <p>Hello human,</p>
      <h1>
        I'm a {''}
        <span
          className='text-2xl'
          style={{ fontweight: 'bold', color: 'white' }}
        >
          {text}
        </span>
        <Cursor />
      </h1>
    </div>
  );
};

export default Intro;
