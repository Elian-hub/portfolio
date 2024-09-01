import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FcAbout, FcServices } from 'react-icons/fc';
import './Header.css';

const Header = () => {
  return (
    <div className='bg-gray-800 fixed top-0 left-0 w-full flex flex-col md:flex-row items-center md:items-center md:justify-between p-4'>
      <div className='flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0'>
        <h1 className='text-2x text-white font-bold cursor-pointer'>
          myPortfolio
        </h1>
      </div>
      <ul className='text-white flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4'>
        <li>
          <a href='/'>
            <FaHome className='inline-block w-4 h-4 mr-1'></FaHome>
            HOME
          </a>
        </li>
        <li>
          <a href='/'>
            <FcAbout className='inline-block w-4 h-4 mr-1'></FcAbout>
            ABOUT ME
          </a>
        </li>
        <li>
          <a href='/'>
            <FcServices className='inline-block w-4 h-4 mr-1'></FcServices>
            SERVICES
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
