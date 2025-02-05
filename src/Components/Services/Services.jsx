//import React from 'react'
import {
  Grid2,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  CardMedia,
} from '@mui/material';

const Services = () => {
  return (
    <Box
      margin={0}
      sx={{
        backgroundColor: 'rgba(10, 10, 10, 1)',
        width: '100%',
        margin: '0',
      }}
    >
      <Box sx={{ paddingTop: '5%' }}>
        <Grid2 container spacing={4} justifyContent='center'>
          <Grid2 item xs={12} sm={6} md={4}>
            <Card sx={{ width: 350, height: 500 }}>
              <CardMedia
                component='img'
                image='./assets/images/img1.jpg'
                alt='img'
              ></CardMedia>
              <CardContent>
                <Typography variant='h4'>UI/UX, Graphic Design</Typography>
                <Typography variant='p'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                  modi iste, nisi dignissimos, reiciendis illum sapiente
                  blanditiis eligendi nemo debitis delectus architecto eum ipsum
                  excepturi alias enim optio corrupti sed!
                </Typography>
              </CardContent>
              <CardActions>
                <Box
                  display='flex'
                  justifyContent='center'
                  minWidth='100%'
                  gap={2}
                >
                  <Button variant='outlined'>click me</Button>
                  <Button variant='contained'>show more</Button>
                </Box>
              </CardActions>
            </Card>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={4}>
            <Card sx={{ width: 350, height: 500 }}>
              <CardMedia
                component='img'
                image='./assets/images/img2.jpg'
                alt='img'
              ></CardMedia>
              <CardContent>
                <Typography variant='h4'>Web Development</Typography>
                <Typography variant='p'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  minima earum perspiciatis culpa qui soluta commodi quod alias
                  distinctio, laboriosam delectus, natus ducimus tempore unde
                  magnam incidunt mollitia architecto! Quae.
                </Typography>
              </CardContent>
              <CardActions>
                <Box
                  display='flex'
                  justifyContent='center'
                  minWidth='100%'
                  gap={2}
                >
                  <Button variant='outlined'>click me</Button>
                  <Button variant='contained'>show more</Button>
                </Box>
              </CardActions>
            </Card>
          </Grid2>
          <Grid2 item xs={12} sm={6} md={4}>
            <Card sx={{ width: 350, height: 500 }}>
              <CardMedia
                component='img'
                image='./assets/images/img3.jpeg'
                alt='img'
              ></CardMedia>
              <CardContent>
                <Typography variant='h4'>Smart Contract Development</Typography>
                <Typography variant='p'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  quas blanditiis, molestias libero ea vel minima delectus
                  dolore suscipit enim?
                </Typography>
              </CardContent>
              <CardActions>
                <Box
                  display='flex'
                  justifyContent='center'
                  minWidth='100%'
                  gap={2}
                >
                  <Button variant='outlined'>click me</Button>
                  <Button variant='contained'>show more</Button>
                </Box>
              </CardActions>
            </Card>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default Services;
