// src/Components/MenSection.jsx

import React, { useContext } from 'react';
import { Typography, Card, CardMedia, CardContent, CardActions, Button, Stack, Box } from '@mui/material';
import { ShopContext } from '../context/shop-context';  // Adjust the import path if necessary
import { womenSectionData } from './women-section-data'; // Import the data

const WomenSection = () => {
    const { addToCart, cartItems } = useContext(ShopContext);  // Use ShopContext to access cart methods

    return (
        <Box id="women-section">
            <Typography variant="h4" mt={6} mb={6}>Women's Collection -</Typography>
            <Stack direction="row" justifyContent="space-evenly" sx={{ flexWrap: "wrap" }}>
                {womenSectionData.map((trek) => {
                    const cartItemCount = cartItems[womenSectionData.id] || 0;
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

export default WomenSection;
