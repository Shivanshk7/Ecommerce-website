import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ShopContext } from '../../context/shop-context'; // Ensure this path is correct
import NavBar from '../../Components/NavBar'; // Ensure this path is correct
import { CartItem } from './cart-item'; // Ensure this path is correct
import { menSectionData } from '../../Components/men-section-data';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Box, Button, Typography } from '@mui/material'; // Import Button and Typography

import './cart.css';

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const navigate = useNavigate(); // Initialize navigate

    const totalAmount = getTotalCartAmount();

    const theme = createTheme({
        palette: {
            primary: {
                main: '#00bfff',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <NavBar />
                <Container>
                    <div className="cart">
                        <Typography variant="h4" gutterBottom>
                            Your Cart Items
                        </Typography>
                        <div className="cartItems">
                            {menSectionData.map(MenSection => {
                                if (cartItems[MenSection.id] !== 0) {
                                    return <CartItem key={MenSection.id} data={MenSection} />;
                                }
                                return null; // Ensure to return null if the condition is not met
                            })}
                        </div>

                        {totalAmount > 0 ? (
                            <div className="checkout">
                                <Typography variant="h6">
                                    Subtotal: Rs.{totalAmount}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate("/Home")}
                                >
                                    Continue Shopping
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate("/Payment")}
                                >
                                    Checkout
                                </Button>
                            </div>
                        ) : (
                            <Typography variant="h5">Your Shopping Cart is Empty</Typography>
                        )}
                    </div>
                </Container>
            </Box>
        </ThemeProvider>
    );
};
