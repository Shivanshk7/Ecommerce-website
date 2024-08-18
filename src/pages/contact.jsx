import React from 'react';
import { Typography, TextField, Button, Container, Paper, Grid, InputAdornment } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from '../Components/NavBar'; // Corrected import path
import { Person, Phone, Message, Send } from '@mui/icons-material'; // Import Material Icons

const theme = createTheme({
    palette: {
        primary: {
            main: '#00bfff',
        },
        background: {
            default: '#f5f5f5'
        }
    },
    typography: {
        h1: {
            fontSize: '2rem',
            fontWeight: 'bold',
        },
    },
});

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            message: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('This is Required'),
            lastName: Yup.string().required('This is Required'),
            phone: Yup.string().required('This is Required'),
            message: Yup.string().required('This is Required')
        }),
        onSubmit: (values) => {
            console.log('form submitted', values);
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ background: theme.palette.background.default, minHeight: '100vh' }}>
                <NavBar />
                <Container sx={{ mt: 6 }}>
                    <Typography variant="h1" align="center" mb={4}>
                        Contact Us
                    </Typography>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={8} md={6}>
                            <Paper elevation={3} sx={{ padding: 3 }}>
                                <Box component="form" onSubmit={formik.handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="First Name"
                                                type="text"
                                                variant="outlined"
                                                fullWidth
                                                name="firstName"
                                                onChange={formik.handleChange}
                                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                                onBlur={formik.handleBlur}
                                                helperText={formik.touched.firstName && formik.errors.firstName}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Person />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="Last Name"
                                                type="text"
                                                variant="outlined"
                                                fullWidth
                                                name="lastName"
                                                onChange={formik.handleChange}
                                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                                onBlur={formik.handleBlur}
                                                helperText={formik.touched.lastName && formik.errors.lastName}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Person />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Phone Number"
                                                type="text"
                                                variant="outlined"
                                                fullWidth
                                                name="phone"
                                                onChange={formik.handleChange}
                                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                                onBlur={formik.handleBlur}
                                                helperText={formik.touched.phone && formik.errors.phone}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Phone />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Message"
                                                type="text"
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                                fullWidth
                                                name="message"
                                                onChange={formik.handleChange}
                                                error={formik.touched.message && Boolean(formik.errors.message)}
                                                onBlur={formik.handleBlur}
                                                helperText={formik.touched.message && formik.errors.message}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Message />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Box textAlign="center" mt={2}>
                                        <Button
                                            size="large"
                                            variant="contained"
                                            type="submit"
                                            endIcon={<Send />}
                                        >
                                            Send
                                        </Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default Contact;
