import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const urlLinkedIn = 'https://www.linkedin.com/in/elian-marube-2891a52bb/';
  const urlTwitter = 'https://x.com/wannaBeMase?t=paWjfK31TtNa79ijK0Jm8g&s=09';
  const urlGitHub = 'https://github.com/Elian-hub';

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Me', path: '/contact' },
  ];

  return (
    <AppBar
      position='sticky'
      sx={{
        background:
          location.pathname === '/' ? 'transparent' : 'rgba(0, 0, 0, 0.7)',
        boxShadow: 'none',
      }}
    >
      <Box
        sx={{
          maxWidth: 1140,
          width: '100%',
          margin: '0 auto',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h5' fontWeight='bold' color='white'>
            Elian Marube
          </Typography>

          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              flexGrow: 1,
              justifyContent: 'center',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  variant='h6'
                  sx={{
                    color: location.pathname === link.path ? 'grey' : 'white',
                    '&:hover': {
                      color: 'grey',
                      cursor: 'pointer',
                    },
                  }}
                >
                  {link.name}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: 'flex' }} gap={{ xs: 1, md: 2 }}>
            <a href={urlGitHub} target='_blank' rel='noopener noreferrer'>
              <FaGithub color='white' />
            </a>
            <a href={urlLinkedIn} target='_blank' rel='noopener noreferrer'>
              <FaLinkedin color='white' />
            </a>
            <a href={urlTwitter} target='_blank' rel='noopener noreferrer'>
              <FaTwitter color='white' />
            </a>
          </Box>
        </Toolbar>
      </Box>

      <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: '100vh',
            backgroundColor: 'black',
            opacity: 0.8,
          }}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.name} component={Link} to={link.path}>
                <ListItemText
                  style={{
                    color: location.pathname === link.path ? 'grey' : 'white',
                    transition: 'color 0.3s ease-in-out',
                    '&:hover': {
                      color: 'grey',
                    },
                  }}
                  primary={link.name}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
