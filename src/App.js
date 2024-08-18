import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './Contexts/AuthContext'; // Ensure this path is correct
import { ShopContextProvider } from './context/shop-context';  
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Contact from './pages/contact';
import { Cart } from "./pages/cart/cart";// Ensure this path is correct
import { Box } from '@mui/material';
import Payment from './pages/Payment';

function App() {
  return (
    <AuthProvider>
      <ShopContextProvider>
        <Router>
          <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </Box>
        </Router>
      </ShopContextProvider>
    </AuthProvider>
  );
}

function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/" />;
}

export default App;
