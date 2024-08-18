import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Grid, Box, RadioGroup, FormControlLabel, Radio, InputAdornment } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from '../Components/NavBar'; // Corrected import path
import { CreditCard, DateRange, Lock, Payment as PaymentIcon, AccountBalance } from '@mui/icons-material'; // Renamed Payment to PaymentIcon to avoid conflict

// Define the theme with custom primary color
const theme = createTheme({
    palette: {
        primary: {
            main: '#00bfff', // Custom primary color
        },
    },
});

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [upiId, setUpiId] = useState('');

    const handlePayment = () => {
        // Handle payment submission logic
        console.log('Payment submitted');
    };

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <NavBar />
                <Container maxWidth="sm" sx={{ marginTop: 4 }}>
                    <Typography variant="h4" gutterBottom align="center">
                        Payment Details
                    </Typography>
                    <Paper elevation={3} sx={{ padding: 3 }}>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <RadioGroup
                                        value={paymentMethod}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    >
                                        <FormControlLabel
                                            value="card"
                                            control={<Radio />}
                                            label="Credit/Debit Card"
                                            sx={{ display: 'flex', alignItems: 'center' }}
                                            icon={<CreditCard />}
                                        />
                                        <FormControlLabel
                                            value="upi"
                                            control={<Radio />}
                                            label="UPI"
                                            sx={{ display: 'flex', alignItems: 'center' }}
                                            icon={<PaymentIcon />}
                                        />
                                    </RadioGroup>
                                </Grid>
                                {paymentMethod === 'card' && (
                                    <>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Card Number"
                                                variant="outlined"
                                                fullWidth
                                                value={cardNumber}
                                                onChange={(e) => setCardNumber(e.target.value)}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <CreditCard />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Expiry Date"
                                                variant="outlined"
                                                type="month"
                                                fullWidth
                                                value={expiryDate}
                                                onChange={(e) => setExpiryDate(e.target.value)}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <DateRange />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="CVV"
                                                variant="outlined"
                                                type="password"
                                                fullWidth
                                                value={cvv}
                                                onChange={(e) => setCvv(e.target.value)}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Lock />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                    </>
                                )}
                                {paymentMethod === 'upi' && (
                                    <Grid item xs={12}>
                                        <TextField
                                            label="UPI ID"
                                            variant="outlined"
                                            fullWidth
                                            value={upiId}
                                            onChange={(e) => setUpiId(e.target.value)}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <PaymentIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                )}
                                <Grid item xs={12}>
                                    <TextField
                                        label="Billing Address"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        value={billingAddress}
                                        onChange={(e) => setBillingAddress(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountBalance />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        onClick={handlePayment}
                                        endIcon={<PaymentIcon />}
                                    >
                                        Pay Now
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default Payment;

