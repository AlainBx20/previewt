import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme,
  useMediaQuery,
  Box,
  alpha,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard,
  Person,
  Login,
  Logout,
  Close,
} from '@mui/icons-material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Features', path: '/features' },
    { text: 'News', path: '/news' },
    ...(user
      ? [
          { text: 'Dashboard', path: '/dashboard', icon: <Dashboard /> },
          { text: 'Profile', path: '/profile', icon: <Person /> },
        ]
      : [
          { text: 'Login', path: '/login', icon: <Login /> },
          { text: 'Register', path: '/register', icon: <Person /> },
        ]),
  ];

  const drawer = (
    <List sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Box>
      {menuItems.map((item) => (
        <ListItem
          button
          component={Link}
          to={item.path}
          key={item.text}
          onClick={handleDrawerToggle}
          sx={{
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
            },
          }}
        >
          {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
          <ListItemText
            primary={item.text}
            primaryTypographyProps={{
              sx: {
                color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                fontWeight: location.pathname === item.path ? 600 : 400,
              },
            }}
          />
        </ListItem>
      ))}
      {user && (
        <ListItem
          button
          onClick={handleLogout}
          sx={{
            '&:hover': {
              backgroundColor: alpha(theme.palette.error.main, 0.1),
            },
          }}
        >
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              sx: {
                color: 'error.main',
                fontWeight: 600,
              },
            }}
          />
        </ListItem>
      )}
    </List>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar
        position="sticky"
        sx={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 700,
              fontSize: '1.5rem',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(45deg, #2563eb 30%, #7c3aed 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AlaaPreview
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  startIcon={item.icon}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 600,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: 'linear-gradient(45deg, #2563eb 30%, #7c3aed 90%)',
                      transform: 'scaleX(0)',
                      transformOrigin: 'right',
                      transition: 'transform 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                      transform: 'scaleX(1)',
                      transformOrigin: 'left',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
              {user && (
                <Button
                  onClick={handleLogout}
                  startIcon={<Logout />}
                  sx={{
                    color: 'error.main',
                    fontWeight: 600,
                  }}
                >
                  Logout
                </Button>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          >
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              PaperProps={{
                sx: {
                  width: 250,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(8px)',
                },
              }}
            >
              {drawer}
            </Drawer>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar; 