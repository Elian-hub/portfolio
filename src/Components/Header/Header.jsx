import { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const urlLinkedIn =
    'https://www.linkedin.com/in/elian-marube-2891a52bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
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
        background: 'transparent',
        width: '100%',
        left: 0,
        right: 0,
        boxShadow: 'none',
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
                color='white'
                sx={{
                  '&:hover': {
                    color: 'black',
                    cursor: 'pointer',
                  },
                }}
              >
                {link.name}
              </Typography>
            </Link>
          ))}
        </Box>

        <Box sx={{ display: 'flex' }} gap={2}>
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

      <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.name} component={Link} to={link.path}>
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
