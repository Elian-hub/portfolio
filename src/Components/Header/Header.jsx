import { Link } from 'react-router-dom';
import { Box, Typography, AppBar, Toolbar } from '@mui/material';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const urlLinkedIn =
    'https://www.linkedin.com/in/elian-marube-2891a52bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
  const urlTwitter = 'https://x.com/wannaBeMase?t=paWjfK31TtNa79ijK0Jm8g&s=09';
  const urlGitHub = 'https://github.com/Elian-hub';

  return (
    <>
      <AppBar
        position='sticky'
        sx={{ background: 'transparent', display: 'flex' }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            cursor: 'pointer',
          }}
        >
          <Typography variant='h5' fontWeight='bold' color='white'>
            Elian Marube
          </Typography>

          <Box
            display='flex'
            gap={2}
            sx={{ flexGrow: 1, justifyContent: 'center' }}
          >
            <Link to='/' style={{ textDecoration: 'none' }}>
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
            <Link to='/about' style={{ textDecoration: 'none' }}>
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
            <Link to='/services' style={{ textDecoration: 'none' }}>
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
            <Link to='/contact' style={{ textDecoration: 'none' }}>
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
                Contact Me
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              display: 'flex',
            }}
            gap={2}
          >
            <a href={urlGitHub} target='blank'>
              <FaGithub color='white' />
            </a>
            <a href={urlLinkedIn} target='blank'>
              <FaLinkedin color='white' />
            </a>
            <a href={urlTwitter} target='blank'>
              <FaTwitter color='white' />
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
