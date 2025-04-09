import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Dashboard = () => {
  const [news] = useState([
    {
      id: 1,
      title: 'Breaking News Story',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://source.unsplash.com/random/800x600?news',
    },
    {
      id: 2,
      title: 'Technology Update',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://source.unsplash.com/random/800x600?technology',
    },
    {
      id: 3,
      title: 'Business Insights',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      image: 'https://source.unsplash.com/random/800x600?business',
    },
  ]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Your Dashboard
          </Typography>
          <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
            <Slider {...sliderSettings}>
              {news.map((item) => (
                <Box key={item.id} sx={{ p: 1 }}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="300"
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Paper>
        </Box>

        <Grid container spacing={3}>
          {news.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.content}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Dashboard; 