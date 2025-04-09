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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error('Login failed:', error);
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
                Welcome Back
              </Typography>
            </motion.div>

            <form onSubmit={handleSubmit}>
              <motion.div variants={itemVariants}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  Sign In
                </Button>
              </motion.div>
            </form>

            <motion.div
              variants={itemVariants}
              style={{ textAlign: 'center', marginTop: '2rem' }}
            >
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{' '}
                <Link
                  component={RouterLink}
                  to="/register"
                  sx={{
                    color: 'primary.main',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Sign Up
                </Link>
              </Typography>
            </motion.div>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Login; 