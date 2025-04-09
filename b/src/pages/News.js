import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  alpha,
} from '@mui/material';
import { motion } from 'framer-motion';

const News = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const newsItems = [
    {
      title: 'New Feature Release',
      description: 'We are excited to announce the launch of our new interactive dashboard with enhanced analytics capabilities.',
      date: 'March 15, 2024',
      category: 'Updates',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      title: 'Security Enhancement',
      description: 'Our platform has been upgraded with the latest security measures to ensure your data is always protected.',
      date: 'March 10, 2024',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      title: 'Performance Improvements',
      description: 'We have optimized our system for better performance and faster response times.',
      date: 'March 5, 2024',
      category: 'Performance',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    },
    {
      title: 'User Interface Update',
      description: 'Experience our new modern and intuitive user interface designed for better usability.',
      date: 'March 1, 2024',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
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
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 6,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Latest News
          </Typography>

          <Grid 
            container 
            spacing={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            {newsItems.map((news, index) => (
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
                  style={{ width: '100%', height: '100%' }}
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
                        src={news.image}
                        alt={news.title}
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
                          justifyContent: 'space-between',
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: '#FF6B6B',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                          }}
                        >
                          {news.category}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: 'rgba(0,0,0,0.5)',
                            fontWeight: 400,
                          }}
                        >
                          {news.date}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          fontWeight: 700,
                          color: '#000',
                          letterSpacing: '0.5px',
                          mb: 1,
                        }}
                      >
                        {news.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.6,
                          color: 'rgba(0,0,0,0.7)',
                          fontSize: '1rem',
                          fontWeight: 400,
                        }}
                      >
                        {news.description}
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
  );
};

export default News; 