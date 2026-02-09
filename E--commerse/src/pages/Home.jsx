import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Buttons from '../Components/Buttons/Button';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';

export default function Home() {


  const features = [
    {
      icon: <ShoppingCartIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Easy Shopping',
      description: 'Browse and shop from our wide collection of products with just a few clicks.',
    },
    {
      icon: <StorefrontIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Best Deals',
      description: 'Get the best prices and exclusive offers on all products.',
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery to your doorstep across the country.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Secure Payment',
      description: 'Safe and secure payment methods for your peace of mind.',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navigation Bar */}
      <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'background.paper', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            E-Commerce Store
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" >
              Products
            </Button>
            <Button color="inherit" >
              Demo Data
            </Button>
            <Button variant="contained" color="primary" size="small">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, primary.main 0%, primary.dark 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center',
          backgroundImage: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Welcome to Our E-Commerce Store
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Discover amazing products at unbeatable prices
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ textTransform: 'none', fontSize: '1.1rem' }}
            >
              View Products
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ textTransform: 'none', fontSize: '1.1rem' }}
            >
              Learn More
            </Button>
            <Buttons
              variant="contained"
              color="primary"
              size="small"
              onClick={() => console.log('Login clicked')}
            >
              Login
            </Buttons>
          </Box>
        </Container>

      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 6 }}>
          Why Choose Us?
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  transition: 'transform 0.3s, boxShadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 3,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 6, mt: 4 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Ready to Start Shopping?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            Join thousands of satisfied customers and find exactly what you're looking for.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            k={() => ('/demo')}
            sx={{ textTransform: 'none', fontSize: '1.1rem' }}
          >
            Browse Products Now
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: 'primary.dark',
          color: 'white',
          py: 4,
          mt: 'auto',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2">
            © 2026 E-Commerce Store. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            Made with React and Material-UI v6
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
