import { useTypewriter } from 'react-simple-typewriter';
import { Box, Typography } from '@mui/material';

const Intro = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Designer', 'Footballer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 70,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        gap: 2,
      }}
    >
      <Typography variant='h5'>Hello human,</Typography>
      <Typography variant='h4' fontWeight='bold'>
        I&apos;m a{' '}
        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '4-xl' }}>
          {text}
        </span>
      </Typography>
    </Box>
  );
};

export default Intro;
