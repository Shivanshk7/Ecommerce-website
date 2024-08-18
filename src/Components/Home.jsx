import React from 'react';
import { Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import HeroSection from './HeroSection';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';
import MenSection from './MenSection';
import WomenSection from './WomenSection';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00bfff',
    },
  },
});

const Home = () => {
  const { setIsLoggedIn, setAuthUser } = useAuth();
  const navigate = useNavigate();

  const logOut = () => {
    setIsLoggedIn(false);
    setAuthUser(null);
    navigate('/'); // Navigate to Dashboard after logout
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <NavBar />
        <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <HeroSection />
          <MenSection />
          <WomenSection />
        </Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
          <Button variant="contained" color="primary" onClick={logOut}>
            Log Out
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
