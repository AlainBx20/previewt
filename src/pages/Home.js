import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Paper,
  alpha,
  Stack,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      title: 'Latest News',
      description: 'Stay updated with the latest news and updates from around the world.',
      icon: '📰',
      color: '#FF6B6B',
      image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      title: 'Interactive Dashboard',
      description: 'Access your personalized dashboard with real-time updates and analytics.',
      icon: '📊',
      color: '#4ECDC4',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      title: 'Secure Authentication',
      description: 'Your data is protected with state-of-the-art security measures.',
      icon: '🔒',
      color: '#FFB347',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      title: 'Smart Analytics',
      description: 'Get insights and make data-driven decisions with our advanced analytics tools.',
      icon: '📈',
      color: '#A78BFA',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          pointerEvents: 'none',
        },
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(255,107,107,0.05) 0%, rgba(78,205,196,0.05) 100%)',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant={isMobile ? 'h3' : 'h1'}
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    position: 'relative',
                    textAlign: 'center',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -10,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100px',
                      height: '4px',
                      background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                      borderRadius: '2px',
                    },
                  }}
                >
                  Welcome to AlaaPreview
                </Typography>
                <Typography
                  variant={isMobile ? 'h6' : 'h5'}
                  sx={{
                    mb: 4,
                    fontWeight: 300,
                    letterSpacing: '0.5px',
                    color: alpha('#000', 0.8),
                    textAlign: 'center',
                  }}
                >
                  Experience the future of web applications with our cutting-edge features
                  and modern design.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 4,
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <Button
                    component={RouterLink}
                    to="/register"
                    variant="contained"
                    size="large"
                    sx={{
                      background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                      color: 'white',
                      padding: '12px 32px',
                      borderRadius: '12px',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                      transform: 'scale(1)',
                      transition: 'all 0.3s ease-in-out',
                      position: 'relative',
                      zIndex: 2,
                      '&:hover': {
                        background: 'linear-gradient(45deg, #FF6B6B 40%, #4ECDC4 100%)',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                        transform: 'scale(1.05)',
                      },
                      '&:active': {
                        transform: 'scale(0.95)',
                      },
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/login"
                    variant="outlined"
                    size="large"
                    sx={{
                      color: '#FF6B6B',
                      borderColor: '#FF6B6B',
                      padding: '12px 32px',
                      borderRadius: '12px',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      transform: 'scale(1)',
                      transition: 'all 0.3s ease-in-out',
                      position: 'relative',
                      zIndex: 2,
                      '&:hover': {
                        borderColor: '#FF6B6B',
                        backgroundColor: 'rgba(255, 107, 107, 0.04)',
                        transform: 'scale(1.05)',
                      },
                      '&:active': {
                        transform: 'scale(0.95)',
                      },
                    }}
                  >
                    Sign In
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    color: alpha('#000', 0.7),
                    mt: 6,
                    mb: 2,
                  }}
                >
                  <Typography variant="body2">Trusted by thousands of users</Typography>
                  <Divider orientation="vertical" flexItem sx={{ bgcolor: alpha('#000', 0.2) }} />
                  <Typography variant="body2">24/7 Support</Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 5, position: 'relative' }}>
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid 
              container 
              spacing={4}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'stretch',
              }}
            >
              {features.map((feature, index) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <motion.div
                    variants={itemVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ width: '100%' }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        background: '#ffffff',
                        borderRadius: '16px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease-in-out',
                        overflow: 'hidden',
                        border: '1px solid rgba(0,0,0,0.05)',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          height: '240px',
                          overflow: 'hidden',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.02) 100%)',
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={feature.image}
                          alt={feature.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease-in-out',
                            '&:hover': {
                              transform: 'scale(1.05)',
                            },
                          }}
                        />
                      </Box>
                      <CardContent
                        sx={{
                          flexGrow: 1,
                          p: 4,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: 1,
                          }}
                        >
                          <Typography
                            variant="h2"
                            sx={{
                              fontSize: '2.5rem',
                              color: feature.color,
                              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                            }}
                          >
                            {feature.icon}
                          </Typography>
                          <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                              fontWeight: 700,
                              color: '#000',
                              letterSpacing: '0.5px',
                            }}
                          >
                            {feature.title}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            lineHeight: 1.6,
                            color: 'rgba(0,0,0,0.7)',
                            fontSize: '1rem',
                            fontWeight: 400,
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 