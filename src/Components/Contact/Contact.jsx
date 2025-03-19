import { useState } from 'react';
import { Box, Typography, Grid2, TextField, Button } from '@mui/material';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const allowedOrigins = [
  'http://localhost:3000',
  'https://elianmarube.netlify.app',
];

const API_BASE_URL = allowedOrigins.includes(window.location.origin)
  ? 'https://nodemailer-t3dp.onrender.com'
  : 'http://localhost:5000';

const Contact = () => {
  const urlLinkedIn =
    'https://www.linkedin.com/in/elian-marube-2891a52bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
  const urlTwitter = 'https://x.com/wannaBeMase?t=paWjfK31TtNa79ijK0Jm8g&s=09';
  const urlGitHub = 'https://github.com/Elian-hub';

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [emailErrorText, setEmailErrorText] = useState('');

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
  const validateMessage = (message) => message.trim().length >= 10;

  const nameHandler = (e) => {
    const value = e.target.value;
    if (validateName(value) || value === '') {
      setName(value);
      setNameValid(value.trim().length > 1);
    }
  };
  const emailHandler = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (validateEmail(value)) {
      setEmailValid(true);
      setEmailErrorText('');
    } else {
      setEmailValid(false);
      setEmailErrorText('Enter a valid email (e.g., example@domain.com)');
    }
  };

  const messageHandler = (e) => {
    const value = e.target.value;
    setMessage(value);
    setMessageValid(validateMessage(value));
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   const isNameValid = name.trim().length > 0 && validateName(name);
  //   const isEmailValid = validateEmail(email);
  //   const isMessageValid = validateMessage(message);

  //   setNameValid(isNameValid);
  //   setEmailValid(isEmailValid);
  //   setMessageValid(isMessageValid);

  //   if (!isNameValid || !isEmailValid || !isMessageValid) {
  //     return;
  //   }

  //   navigate('/feedback');
  // };

  const submitHandler = async (e) => {
    e.preventDefault();

    const isNameValid = name.trim().length > 0 && validateName(name);
    const isEmailValid = validateEmail(email);
    const isMessageValid = validateMessage(message);

    setNameValid(isNameValid);
    setEmailValid(isEmailValid);
    setMessageValid(isMessageValid);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Email sent successfully:', data);
        navigate('/feedback');
      } else {
        console.error('Failed to send email:', data);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(10, 10, 10, 1)',
        width: '100%',
        minHeight: '100dvh',
        margin: '0',
        display: 'flex',
        pt: 4,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
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
        sx={{ mt: 6, px: 3 }}
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
              backdropFilter: 'blur(8px)',
            }}
          >
            <Box component='form' onSubmit={submitHandler}>
              <Grid2 container spacing={2} sx={{ mt: 4 }}>
                <Grid2 container item spacing={2}>
                  <Grid2 item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label='Name'
                      name='name'
                      variant='filled'
                      value={name}
                      error={!nameValid}
                      helperText={!nameValid && 'Please input a valid name'}
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
                      helperText={!emailValid ? emailErrorText : ''}
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
                    rows={2}
                    variant='filled'
                    value={message}
                    error={!messageValid}
                    helperText={!messageValid && 'Please input a valid message'}
                    onChange={messageHandler}
                    sx={{
                      borderRadius: '8px',
                      input: { backgroundColor: 'white' },
                    }}
                  />
                </Grid2>
              </Grid2>

              <Grid2
                item
                xs={12}
                sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}
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
      <Box sx={{ paddingTop: '4rem', paddingBottom: '7rem', mt: '4rem' }}>
        <Typography variant='body2' color='grey' align='center'>
          © {new Date().getFullYear()}{' '}
          <span style={{ color: 'blue' }}>Elian Marube.</span> All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
