// src/Components/MenSection.jsx

import React, { useContext } from 'react';
import { Typography, Card, CardMedia, CardContent, CardActions, Button, Stack, Box } from '@mui/material';
import { ShopContext } from '../context/shop-context';  // Adjust the import path if necessary
import { menSectionData } from './men-section-data'; // Import the data

const MenSection = () => {
    const { addToCart, cartItems } = useContext(ShopContext);  // Use ShopContext to access cart methods

    return (
        <Box id="men-section">
            <Typography variant="h4" mt={6} mb={6}>Men's Collection -</Typography>
            <Stack direction="row" justifyContent="space-evenly" sx={{ flexWrap: "wrap" }}>
                {menSectionData.map((trek) => {
                    const cartItemCount = cartItems[trek.id] || 0;
                    return (
                        <Card key={trek.id} sx={{ maxWidth: "350px", mb: 2 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={trek.image}
                                alt={trek.name}
                            />
                            <CardContent>
                                <Typography variant="h5">{trek.name}</Typography>
                                <Typography variant="body1">Rs. {trek.price}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    onClick={() => addToCart(trek.id)}
                                >
                                    {`Add To Cart ${cartItemCount > 0 ? `(${cartItemCount})` : ""}`}
                                </Button>
                            </CardActions>
                        </Card>
                    );
                })}
            </Stack>
        </Box>
    );
};

export default MenSection;
