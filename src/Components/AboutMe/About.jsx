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
  const cvUrl = './assets/CVs/CV.pdf';
  const email = 'elianmars13@gmail.com';
  return (
    <Box
      margin={0}
      sx={{
        backgroundColor: 'rgba(10, 10, 10, 1)',
        minHeight: '100dvh',
        width: '100%',
        margin: '0',
        pt: 4,
        display: 'flex',
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
        About Me
      </Typography>

      <Grid2
        container
        spacing={10}
        mt={2}
        maxWidth='md'
        sx={{ mx: { xs: '2rem' } }} //margin left and right for extra small screens
      >
        <Grid2 item size={{ xs: 12, md: 6 }}>
          <Typography
            variant='h4'
            style={{ textAlign: 'left', color: 'white' }}
            sx={{ mt: 4, fontWeight: 'bold' }}
          >
            I&apos;m{' '}
            <span style={{ color: 'blue', fontWeight: 'bold' }}>
              Elian Marube,
            </span>{' '}
            a Web Developer.
          </Typography>
          <Typography
            variant='body1'
            style={{ textAlign: 'justify', color: 'grey' }}
            sx={{ mt: 2 }}
          >
            I am a passionate developer with expertise in React JS, JavaScript,
            HTML, CSS, and Material UI. My skill set extends beyond front-end
            development to include graphic design, showcasing my creativity and
            attention to detail.
          </Typography>
          <Typography
            variant='body1'
            style={{ textAlign: 'justify', color: 'grey' }}
            sx={{ mt: 2 }}
          >
            I am also proficient in Solidity, allowing me to explore and
            contribute to blockchain and smart contract development. My
            versatile skill set combines technical expertise with creative
            problem-solving, enabling me to build innovative and user-friendly
            solutions.
          </Typography>
        </Grid2>
        <Grid2
          item
          size={{ xs: 12, md: 6 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: { xs: 0, md: 15 },
          }}
          gap={4}
        >
          <Box style={{ textAlign: 'left', color: 'grey' }}>
            <Typography variant='h6'>
              <strong style={{ color: 'white', opacity: '70%' }}>Name: </strong>
              Elian Marube
            </Typography>
            <Typography variant='h6'>
              <strong style={{ color: 'white', opacity: '70%' }}>
                Email:{' '}
              </strong>
              <Link href={`mailto:${email}`} color='blue' underline='hover'>
                {email}
              </Link>
            </Typography>
            <Typography variant='h6'>
              <strong style={{ color: 'white', opacity: '70%' }}>Age: </strong>
              22
            </Typography>
            <Typography variant='h6'>
              <strong style={{ color: 'white', opacity: '70%' }}>
                Location:{' '}
              </strong>
              Nakuru, Kenya.
            </Typography>
          </Box>
          <Box>
            <Button
              href={cvUrl}
              target='_blank'
              variant='outlined'
              sx={{
                backgroundColor: 'transparent',
                height: '3rem',
                width: '10rem',
                display: 'flex',
                borderRadius: '1.5rem',
                color: 'grey',
                borderBlockColor: 'grey',
                '&:hover': { borderBlockColor: 'blue', color: 'white' },
              }}
            >
              Download CV
            </Button>
          </Box>
        </Grid2>
        <Stack
          direction={{ xs: 'row', md: 'row' }}
          divider={<Divider orientation='vertical' color='white' flexItem />}
          spacing={5}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mx: 'auto',
            mb: 2,
          }}
        >
          <Box>
            <Stack direction={'column'} alignItems={'center'}>
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
    </Box>
  );
};

export default About;
