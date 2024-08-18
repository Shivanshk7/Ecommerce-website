import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Add this import
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        FlinKirt
                    </Typography>
                    <Link to="/Home" style={{ textDecoration: 'none' }}>
                        <Button variant='contained' color="primary" sx={{ mr: 2 }}>
                            Home
                        </Button>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <Button variant='contained' color="primary" sx={{ mr: 2 }}>
                            Contact
                        </Button>
                    </Link>
                    <Link to="/cart">
                        <Button variant='contained' color="primary" sx={{ mr: 2 }} endIcon={<ShoppingCartIcon />}>
                            Cart
                        </Button>
                    </Link>
            </Toolbar>
        </AppBar>
    </Box >
  );
}
