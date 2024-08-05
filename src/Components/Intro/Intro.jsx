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
      <h2>
        I'm a {''}
        <span style={{ fontweight: 'bold', color: 'white' }}>{text}</span>
        <Cursor />
      </h2>
    </div>
  );
};

export default Intro;
