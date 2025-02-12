import { Box, Link, Typography } from '@mui/material';
import { Alert, AlertTitle, Snackbar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';

const Response = () => {
  const [open, setOpen] = useState(true);
  return (
    <Box>
      <Box
        sx={{ mt: 6, color: 'wheat' }}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        textAlign='center'
      >
        <Typography variant='h6' gutterBottom>
          Thank you for reaching out. Your message has been sent successfully.
        </Typography>
        <Typography variant='h6' gutterBottom>
          I will get back to you as soon as possible.
        </Typography>
        <Typography variant='h6'>
          Alternatively, you can{' '}
          <Link
            href='https://www.linkedin.com/in/elian-marube-2891a52bb/'
            target='_blank'
            rel='noopener noreferrer'
            color='primary'
            underline='hover'
          >
            send me a DM on LinkedIn
          </Link>
          .
        </Typography>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity='success'
          variant='filled'
          icon={<CheckCircleIcon fontSize='inherit' />}
          sx={{ bgcolor: 'green', color: 'white' }}
        >
          <AlertTitle>Success</AlertTitle>
          Your message has been received! 🎉
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Response;
