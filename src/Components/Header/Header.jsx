import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FcAbout, FcServices } from 'react-icons/fc';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-gray-800 fixed top-0 left-0 w-full flex flex-col md:flex-row items-center md:items-center md:justify-between p-4'>
      <div className='flex justify-between items-center w-full md:w-auto'>
        <h1 className='text-2x text-white font-bold'>myPortfolio</h1>
        <button
          onClick={toggleMenu}
          className='text-white text-2xl md:hidden focus:outline-none'
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul
        className={`text-white flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 lg:inline-block transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden md:block'
        }`}
      >
        <li className='lg:inline-block'>
          <Link to='/'>
            <FaHome className='inline-block w-5 h-5 mr-1'></FaHome>
            HOME
          </Link>
        </li>
        <li className='lg:inline-block'>
          <Link to='/about'>
            <FcAbout className='inline-block w-5 h-5 mr-1'></FcAbout>
            ABOUT ME
          </Link>
        </li>
        <li className='lg:inline-block'>
          <Link to='/services'>
            <FcServices className='inline-block w-5 h-5 mr-1'></FcServices>
            SERVICES
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
