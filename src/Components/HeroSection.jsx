import React from 'react';
import { Typography, Grid, Button, Box } from '@mui/material';
import { Link } from 'react-scroll';
import hillhikers from '../images/cloth1.jpg';

const HeroSection = () => {
  return (
    <Grid container direction="row" alignItems="center" sx={{ flex: 1 }}>
      <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
        <Typography variant="h3">ABOUT FLINKIRT</Typography>
        <Typography variant="body1" sx={{ marginY: 2 }}>
          Fashion is an art. You express who you are through what you're wearing.
        </Typography>
        <Link to="men-section" smooth={true} duration={500}>
          <Button size="large" variant="contained" sx={{ borderRadius: 5, mr: 2 }}>
            Men
          </Button>
        </Link>
        <Link to="women-section" smooth={true} duration={500}>
          <Button size="large" variant="contained" sx={{ borderRadius: 5 }}>
            Women
          </Button>
        </Link>
      </Grid>
      <Grid container item xs={12} sm={6} justifyContent="center" order={{ xs: 1, sm: 2 }}>
        <Box component="img" src={hillhikers} sx={{ width: '100%', height: 'auto', maxWidth: 400 }} />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
