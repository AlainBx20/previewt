import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: 'center' }}
            >
              © {new Date().getFullYear()} Alaa Ben Chouikhaa. All rights reserved.
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: 'center' }}
            >
              This website is for preview purposes only.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
              }}
            >
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '0.875rem' }}
              >
                Terms
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '0.875rem' }}
              >
                Privacy
              </Link>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer; 