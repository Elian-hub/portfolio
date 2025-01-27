//import React from 'react';

const About = () => {
  return (
    <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center px-6'>
      <div className='max-w-4xl text-center'>
        <h1 className='text-4xl font-bold'>
          I’m <span className='text-blue-500'>Elian Marube</span>, a Web
          Developer
        </h1>
        <p className='mt-4 text-lg leading-relaxed'>
          I am a passionate developer with expertise in React JS, JavaScript,
          HTML, CSS, and Material UI. My skill set extends beyond front-end
          development to include graphic design, showcasing my creativity and
          attention to detail.
        </p>
        <p className='mt-4 text-lg leading-relaxed'>
          I am also proficient in Solidity, allowing me to explore and
          contribute to blockchain and smart contract development. My versatile
          skill set combines technical expertise with creative problem-solving,
          enabling me to build innovative and user-friendly solutions.
        </p>
      </div>

      <div className='mt-8 flex flex-col items-center sm:flex-row sm:justify-between sm:items-start sm:w-full sm:max-w-4xl'>
        <div className='text-center sm:text-left'>
          <p>
            <strong>Name:</strong> Elian Marube
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href='mailto:elianmars13@gmail.com' className='text-blue-500'>
              elianmars13@gmail.com
            </a>
          </p>
          <p>
            <strong>Age:</strong> 22
          </p>
          <p>
            <strong>Location:</strong> Nakuru, Kenya
          </p>
        </div>
        <a
          href='/assets/Elian CV.pdf'
          className='mt-4 sm:mt-0 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'
          download
        >
          Download CV
        </a>
      </div>

      <div className='mt-12 flex justify-around w-full sm:max-w-lg'>
        <div className='text-center'>
          <p className='text-4xl font-bold opacity-50'>1+</p>
          <p>Years Experience</p>
        </div>
        <div className='text-center'>
          <p className='text-4xl font-bold opacity-50'>4+</p>
          <p>Projects Done</p>
        </div>
      </div>
    </div>
  );
};

export default About;
