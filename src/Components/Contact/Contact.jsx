import { useState } from 'react';
import { Box, Typography, Grid2, TextField, Button } from '@mui/material';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';

const Contact = () => {
  const urlLinkedIn =
    'https://www.linkedin.com/in/elian-marube-2891a52bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
  const urlTwitter = 'https://x.com/wannaBeMase?t=paWjfK31TtNa79ijK0Jm8g&s=09';
  const urlGitHub = 'https://github.com/Elian-hub';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  const nameHandler = (e) => {
    setName(e.target.value);
    setNameValid(true);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    setEmailValid(true);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
    setMessageValid(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      setNameValid(false);
      return;
    }

    if (email.trim().length === 0) {
      setEmailValid(false);
      return;
    }
    if (message.trim().length === 0) {
      setMessageValid(false);
      return;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(10, 10, 10, 1)',
        height: '100vh',
        margin: '0',
        pt: 4,
        px: 4,
      }}
    >
      <Typography
        variant='h3'
        sx={{ color: 'gray', fontWeight: 'bold', textAlign: 'center' }}
      >
        Get In Touch
      </Typography>

      <Grid2
        container
        spacing={4}
        justifyContent='center'
        alignItems='center'
        sx={{ mt: 8, px: 3 }}
      >
        <Grid2 item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Typography
            variant='h5'
            sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}
          >
            CONTACT
          </Typography>
          <Box>
            <Typography
              variant='body1'
              sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <FaEnvelope /> elianmars13@gmail.com
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                mt: 1,
              }}
            >
              <FaPhone /> (+254)748249859
            </Typography>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography
              variant='h5'
              sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}
            >
              FOLLOW ME
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
              <a href={urlGitHub} target='_blank' rel='noopener noreferrer'>
                <FaGithub color='white' size={28} />
              </a>
              <a href={urlLinkedIn} target='_blank' rel='noopener noreferrer'>
                <FaLinkedin color='white' size={28} />
              </a>
              <a href={urlTwitter} target='_blank' rel='noopener noreferrer'>
                <FaTwitter color='white' size={28} />
              </a>
            </Box>
          </Box>
        </Grid2>

        <Grid2 item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Typography
            variant='h5'
            sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}
          >
            SEND ME A NOTE
          </Typography>
          <Box
            sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              p: 4,
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Box component='form' onSubmit={submitHandler}>
              <Grid2 container spacing={2}>
                <Grid2 container item spacing={2}>
                  <Grid2 item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label='Name'
                      name='name'
                      variant='filled'
                      value={name}
                      error={!nameValid}
                      helperText={!nameValid && 'Please input a name'}
                      onChange={nameHandler}
                      sx={{
                        borderRadius: '8px',
                        input: { backgroundColor: 'white' },
                      }}
                    />
                  </Grid2>
                  <Grid2 item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label='Email'
                      name='email'
                      variant='filled'
                      value={email}
                      error={!emailValid}
                      helperText={!emailValid && 'Please input an email'}
                      onChange={emailHandler}
                      sx={{
                        borderRadius: '8px',
                        input: { backgroundColor: 'white' },
                      }}
                    />
                  </Grid2>
                </Grid2>

                <Grid2 item xs={12}>
                  <TextField
                    fullWidth
                    label='Message'
                    name='message'
                    multiline
                    rows={3}
                    variant='filled'
                    value={message}
                    error={!messageValid}
                    helperText={!messageValid && 'Please input a message'}
                    onChange={messageHandler}
                    sx={{ textarea: { backgroundColor: 'white' } }}
                  />
                </Grid2>
              </Grid2>

              <Grid2
                item
                xs={12}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <Button
                  type='submit'
                  variant='outlined'
                  sx={{
                    backgroundColor: 'transparent',
                    height: '3rem',
                    width: '10rem',
                    display: 'flex',
                    borderRadius: '3rem',
                    color: 'grey',
                    borderBlockColor: 'grey',
                    '&:hover': { borderBlockColor: 'blue', color: 'white' },
                  }}
                >
                  Send Message
                </Button>
              </Grid2>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Contact;
