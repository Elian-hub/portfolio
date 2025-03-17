import { useTypewriter } from 'react-simple-typewriter';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Intro = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Designer', 'Footballer'],
    loop: {},
    typeSpeed: 140,
    deleteSpeed: 50,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100dvh',
        textAlign: 'center',
        gap: 2,
      }}
    >
      <Typography variant='h5' fontWeight='bold' color='white'>
        Hello human,
      </Typography>
      <Typography variant='h4' fontWeight='bold' color='blue'>
        I&apos;m a{' '}
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '4-xl' }}>
          {text}
        </span>
      </Typography>

      <Button
        variant='contained'
        component={Link}
        to='/about'
        sx={{
          height: '3rem',
          width: '10rem',
          display: 'flex',
          borderRadius: '1.2rem',
          color: 'white',
          backgroundColor: 'blue',
          '&:hover': { color: 'white', backgroundColor: 'inherit' },
        }}
      >
        See More
      </Button>
    </Box>
  );
};

export default Intro;
