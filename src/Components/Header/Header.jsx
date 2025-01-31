import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const urlLinkedIn =
    'https://www.linkedin.com/in/elian-marube-2891a52bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
  const urlTwitter = 'https://x.com/wannaBeMase?t=paWjfK31TtNa79ijK0Jm8g&s=09';
  const urlGitHub = 'https://github.com/Elian-hub';
  return (
    <Box display='flex' gap={2}>
      <Box display='flex'>
        <Typography variant='h5' fontWeight='bold' color='white'>
          Elian Marube
        </Typography>
      </Box>
      <Box display='flex' gap={2}>
        <Link to='/'>
          <Typography
            variant='h6'
            color='white'
            sx={{
              '&:hover': {
                color: 'black',
                cursor: 'pointer',
              },
            }}
          >
            Home
          </Typography>
        </Link>
        <Link to='/about'>
          <Typography
            variant='h6'
            color='white'
            sx={{
              '&:hover': {
                color: 'black',
                cursor: 'pointer',
              },
            }}
          >
            About
          </Typography>
        </Link>
        <Link to='/services'>
          <Typography
            variant='h6'
            color='white'
            sx={{
              '&:hover': {
                color: 'black',
                cursor: 'pointer',
              },
            }}
          >
            Services
          </Typography>
        </Link>
      </Box>
      <Box display='flex' gap={2}>
        <a href={urlGitHub} target='blank'>
          <FaGithub />
        </a>
        <a href={urlLinkedIn} target='blank'>
          <FaLinkedin />
        </a>
        <a href={urlTwitter} target='blank'>
          <FaTwitter />
        </a>
      </Box>
    </Box>
  );
};

export default Header;
