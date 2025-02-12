import { Box } from '@mui/material';
import { Alert, AlertTitle, Snackbar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';

const Response = () => {
  const [open, setOpen] = useState(true);
  return (
    <Box>
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
