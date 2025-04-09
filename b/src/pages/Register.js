import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { register } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await register(formData);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8,
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: '100%' }}
        >
          <Paper
            elevation={24}
            sx={{
              p: 4,
              borderRadius: 4,
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h4"
                component="h1"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Create Account
              </Typography>
            </motion.div>

            <form onSubmit={handleSubmit}>
              <motion.div variants={itemVariants}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  sx={{ mb: 3 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  sx={{ mb: 3 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  sx={{ mb: 3 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  sx={{ mb: 4 }}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderRadius: 3,
                  }}
                >
                  Sign Up
                </Button>
              </motion.div>
            </form>

            <motion.div
              variants={itemVariants}
              style={{ textAlign: 'center', marginTop: '2rem' }}
            >
              <Typography variant="body2" color="text.secondary">
                Already have an account?{' '}
                <Link
                  component={RouterLink}
                  to="/login"
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Sign In
                </Link>
              </Typography>
            </motion.div>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Register; 