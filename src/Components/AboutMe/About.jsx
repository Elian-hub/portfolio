import {
  Box,
  Typography,
  Button,
  Link,
  Grid2,
  Stack,
  Divider,
} from '@mui/material';

const About = () => {
  const cvUrl = './assets/Elian CV.pdf';
  const email = 'elianmars13@gmail.com';
  return (
    <Grid2 container spacing={10} mt={2}>
      <Grid2 item size={{ xs: 12, md: 6 }}>
        <Typography
          variant='h4'
          style={{ textAlign: 'left' }}
          sx={{ mt: 4, fontWeight: 'bold' }}
        >
          I&apos;m{' '}
          <span style={{ color: 'white', fontWeight: 'bold' }}>
            Elian Marube
          </span>{' '}
          a Web Developer.
        </Typography>
        <Typography variant='h6' style={{ textAlign: 'left' }} sx={{ mt: 2 }}>
          I am a passionate developer with expertise in React JS, JavaScript,
          HTML, CSS, and Material UI. My skill set extends beyond front-end
          development to include graphic design, showcasing my creativity and
          attention to detail.
        </Typography>
        <Typography variant='h6' style={{ textAlign: 'left' }} sx={{ mt: 2 }}>
          I am also proficient in Solidity, allowing me to explore and
          contribute to blockchain and smart contract development. My versatile
          skill set combines technical expertise with creative problem-solving,
          enabling me to build innovative and user-friendly solutions.
        </Typography>
      </Grid2>
      <Grid2
        item
        size={{ xs: 12, md: 6 }}
        sx={{ display: 'flex', flexDirection: 'column' }}
        gap={4}
        mt={4}
      >
        <Box style={{ textAlign: 'left' }}>
          <Typography variant='h6'>
            <strong>Name:</strong>Elian Marube
          </Typography>
          <Typography variant='h6'>
            <strong>Email:</strong>
            <Link href={`mailto:${email}`} color='blue' underline='hover'>
              {email}
            </Link>
          </Typography>
          <Typography variant='h6'>
            <strong>Age:</strong>22
          </Typography>
          <Typography variant='h6'>
            <strong>Location:</strong>Nakuru, Kenya.
          </Typography>
        </Box>
        <Box>
          <Button
            href={cvUrl}
            variant='contained'
            sx={{
              color: 'white',
              height: '40px',
              width: '400px',
              display: 'flex',
            }}
          >
            Download CV
          </Button>
        </Box>
      </Grid2>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        divider={<Divider orientation='vertical' color='white' flexItem />}
        spacing={5}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mx: 'auto',
        }}
      >
        <Box>
          <Stack direction={'column'}>
            <Typography variant='h2' sx={{ color: 'grey' }}>
              3+
            </Typography>
            <Typography variant='h5' sx={{ color: 'white' }}>
              Years of Experience
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Stack direction={'column'}>
            <Typography variant='h2' sx={{ color: 'grey' }}>
              5+
            </Typography>
            <Typography variant='h5' sx={{ color: 'white' }}>
              Projects Done
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Grid2>
  );
};

export default About;
