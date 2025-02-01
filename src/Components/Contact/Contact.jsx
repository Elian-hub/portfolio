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
        width: '100%',
        margin: '0',
      }}
    >
      <Typography
        variant='h4'
        sx={{ color: 'white', fontWeight: 'bold', mt: 4 }}
      >
        Get In Touch
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 item size={{ xs: 12, md: 6 }}>
          <Typography variant='h5' sx={{ color: 'white', fontWeight: 'bold' }}>
            CONTACT
          </Typography>
          <Box>
            <Typography variant='body1' sx={{ color: 'white' }}>
              <FaEnvelope style={{ marginRight: '8px' }} />
              elianmars13@gmail.com
            </Typography>
            <Typography variant='body1' sx={{ color: 'white' }}>
              <FaPhone style={{ marginRight: '8px' }} />
              (+254)748249859
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 2,
            }}
          >
            <Typography
              variant='h5'
              sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}
            >
              FOLLOW ME
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <a href={urlGitHub} target='_blank' rel='noopener noreferrer'>
                <FaGithub color='white' size={20} />
              </a>
              <a href={urlLinkedIn} target='_blank' rel='noopener noreferrer'>
                <FaLinkedin color='white' size={20} />
              </a>
              <a href={urlTwitter} target='_blank' rel='noopener noreferrer'>
                <FaTwitter color='white' size={20} />
              </a>
            </Box>
          </Box>
          <Grid2 item size={{ xs: 12, md: 8 }}>
            <Typography
              variant='h5'
              sx={{ color: 'white', fontWeight: 'bold' }}
            >
              SEND ME A NOTE
            </Typography>
            <Box sx={{ p: 3 }}>
              <Box
                onSubmit={submitHandler}
                component='form'
                sx={{
                  backgroundColor: 'transparent',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Grid2 container spacing={2}>
                  <Grid2 item size={{ xs: 12, md: 6 }}>
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
                        borderRadius: '1rem',
                        input: { backgroundColor: 'white' },
                      }}
                    />

                    <TextField
                      fullWidth
                      label='Email'
                      name='email'
                      variant='filled'
                      value={name}
                      error={!emailValid}
                      helperText={!emailValid && 'Please input an email'}
                      onChange={emailHandler}
                      sx={{
                        borderRadius: '1rem',
                        input: { backgroundColor: 'white' },
                      }}
                    />

                    <Grid2>
                      <Grid2
                        item
                        size={{ xs: 12, md: 12 }}
                        sx={{ paddingBottom: '2rem' }}
                      >
                        <TextField
                          fullWidth
                          label='Message'
                          name='message'
                          multiline
                          rows={4}
                          variant='filled'
                          value={message}
                          error={!messageValid}
                          helperText={!messageValid && 'Please input a message'}
                          onChange={messageHandler}
                          sx={{ textarea: { backgroundColor: 'white' } }}
                        />
                      </Grid2>
                    </Grid2>
                    <Button variant='contained' type='submit'>
                      Send Message
                    </Button>
                  </Grid2>
                </Grid2>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Contact;
