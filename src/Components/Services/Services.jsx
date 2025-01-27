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
    <div>
      <Grid2 container spacing={4} direction='row'>
        <Grid2 item xs={12} sm={6} md={4} mt={6}>
          <Card>
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
              <Box display='flex' justifyContent='center' minWidth={100}>
                <Button variant='outlined'>click me</Button>
                <Button variant='contained'>show more</Button>
              </Box>
            </CardActions>
          </Card>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component='img'
              image='./assets/images/img2.jpg'
              alt='img'
            ></CardMedia>
            <CardContent>
              <Typography variant='h4'>Web Development</Typography>
              <Typography variant='p'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                modi iste, nisi dignissimos, reiciendis illum sapiente
                blanditiis eligendi nemo debitis delectus architecto eum ipsum
                excepturi alias enim optio corrupti sed!
              </Typography>
            </CardContent>
            <CardActions>
              <Box display='flex' justifyContent='center' minWidth={100}>
                <Button variant='outlined'>click me</Button>
                <Button variant='contained'>show more</Button>
              </Box>
            </CardActions>
          </Card>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component='img'
              image='./assets/images/img3.jpeg'
              alt='img'
            ></CardMedia>
            <CardContent>
              <Typography variant='h4'>Smart Contract Development</Typography>
              <Typography variant='p'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                modi iste, nisi dignissimos, reiciendis illum sapiente
                blanditiis eligendi nemo debitis delectus architecto eum ipsum
                excepturi alias enim optio corrupti sed!
              </Typography>
            </CardContent>
            <CardActions>
              <Box display='flex' justifyContent='center' minWidth={100}>
                <Button variant='outlined'>click me</Button>
                <Button variant='contained'>show more</Button>
              </Box>
            </CardActions>
          </Card>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Services;
