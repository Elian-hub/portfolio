import { Box, Typography, Grid2, Stack } from '@mui/material';
import {
  AccessibilityNewRounded,
  BrushRounded,
  CycloneRounded,
  DevicesFoldRounded,
  RocketLaunchRounded,
  SettingsSuggestRounded,
  ViewQuiltRounded,
} from '@mui/icons-material';

const Services = () => {
  return (
    <Box
      margin={0}
      sx={{
        backgroundColor: 'rgba(10, 10, 10, 1)',
        width: '100%',
        minHeight: '100dvh',
        margin: '0',
        pt: 4,
      }}
    >
      <Typography
        variant='h3'
        sx={{ color: 'gray', fontWeight: 'bold', textAlign: 'center' }}
      >
        What I Do
      </Typography>
      <Box>
        <Grid2
          container
          rowGap={8}
          sx={{ padding: { xs: '0.5rem', md: '3rem' }, paddingBottom: '3rem' }}
        >
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <Stack direction='row' spacing={4}>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                sx={{
                  opacity: '50%',
                  backgroundColor: 'blue',
                  borderRadius: '1rem',
                  height: '5rem',
                }}
              >
                <CycloneRounded
                  sx={{ fontSize: 50, padding: 2, color: 'white' }}
                />
              </Box>
              <Stack direction='column'>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'left',
                    typography: { xs: 'h6', md: 'h5' },
                  }}
                >
                  Responsive Design
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ color: 'gray', textAlign: 'left' }}
                >
                  Creating responsive layouts that adjust seamlessly to
                  different screen sizes and devices, ensuring an optimal
                  viewing experience for every user.
                </Typography>
              </Stack>
            </Stack>
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <Stack direction='row' spacing={4}>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                sx={{
                  opacity: '50%',
                  backgroundColor: 'blue',
                  borderRadius: '1rem',
                  height: '5rem',
                }}
              >
                <AccessibilityNewRounded
                  sx={{ fontSize: 50, padding: 2, color: 'white' }}
                />
              </Box>
              <Stack direction='column'>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'left',
                    typography: { xs: 'h6', md: 'h5' },
                  }}
                >
                  Accessibility Enhancement
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ color: 'gray', textAlign: 'left' }}
                >
                  Integrating accessibility best practices to make your
                  application usable for individuals with disabilities,
                  enhancing inclusivity.
                </Typography>
              </Stack>
            </Stack>
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <Stack direction='row' spacing={4}>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                sx={{
                  opacity: '50%',
                  backgroundColor: 'blue',
                  borderRadius: '1rem',
                  height: '5rem',
                }}
              >
                <SettingsSuggestRounded
                  sx={{ fontSize: 50, padding: 2, color: 'white' }}
                />
              </Box>
              <Stack direction='column'>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'left',
                    typography: { xs: 'h6', md: 'h5' },
                  }}
                >
                  Backend Development
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ color: 'gray', textAlign: 'left' }}
                >
                  Developing scalable backend services with Node.js, Express,
                  and MongoDB to deliver robust and efficient server-side
                  solutions for your application.
                </Typography>
              </Stack>
            </Stack>
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <Stack direction='row' spacing={4}>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                sx={{
                  opacity: '50%',
                  backgroundColor: 'blue',
                  borderRadius: '1rem',
                  height: '5rem',
                }}
              >
                <DevicesFoldRounded
                  sx={{ fontSize: 50, padding: 2, color: 'white' }}
                />
              </Box>
              <Stack direction='column'>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'left',
                    typography: { xs: 'h6', md: 'h5' },
                  }}
                >
                  Cross-Browser Compatibility
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ color: 'gray', textAlign: 'left' }}
                >
                  Making sure your application functions reliably across various
                  web browsers, delivering a consistent experience for all
                  users.
                </Typography>
              </Stack>
            </Stack>
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <Stack direction='row' spacing={4}>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                sx={{
                  opacity: '50%',
                  backgroundColor: 'blue',
                  borderRadius: '1rem',
                  height: '5rem',
                }}
              >
                <ViewQuiltRounded
                  sx={{ fontSize: 50, padding: 2, color: 'white' }}
                />
              </Box>
              <Stack direction='column'>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'left',
                    typography: { xs: 'h6', md: 'h5' },
                  }}
                >
                  UI Design
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ color: 'gray', textAlign: 'left' }}
                >
                  Creating intuitive user interfaces that are simple to
                  navigate, improving user satisfaction and engagement.
                </Typography>
              </Stack>
            </Stack>
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <Stack direction='row' spacing={4}>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                sx={{
                  opacity: '50%',
                  backgroundColor: 'blue',
                  borderRadius: '1rem',
                  height: '5rem',
                }}
              >
                <RocketLaunchRounded
                  sx={{ fontSize: 50, padding: 2, color: 'white' }}
                />
              </Box>
              <Stack direction='column'>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'left',
                    typography: { xs: 'h6', md: 'h5' },
                  }}
                >
                  Performance Optimization
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ color: 'gray', textAlign: 'left' }}
                >
                  Boosting your web application&apos;s performance by minimizing
                  load times, eliminating lag, and ensuring seamless user
                  interactions.
                </Typography>
              </Stack>
            </Stack>
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 6 }}>
            <Stack direction='row' spacing={4}>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                sx={{
                  opacity: '50%',
                  backgroundColor: 'blue',
                  borderRadius: '1rem',
                  height: '5rem',
                }}
              >
                <BrushRounded
                  sx={{ fontSize: 50, padding: 2, color: 'white' }}
                />
              </Box>
              <Stack direction='column'>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'left',
                    typography: { xs: 'h6', md: 'h5' },
                  }}
                >
                  Graphic Design
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ color: 'gray', textAlign: 'left' }}
                >
                  Creating stunning visual designs using Adobe Illustrator and
                  Photoshop, ensuring high-quality graphics for branding,
                  marketing, and digital media.
                </Typography>
              </Stack>
            </Stack>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default Services;
