import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import { Box, Button, Typography, TextField } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
});

const Dashboard = () => {
  const { authUser, isLoggedIn, setIsLoggedIn, setAuthUser } = useAuth();
  const navigate = useNavigate();

  const logIn = (values) => {
    // Simulate authentication
    setIsLoggedIn(true);
    setAuthUser({ Name: values.username });
    navigate('/home'); // Navigate to Home after login
  };

  const logOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setAuthUser(null);
  };

  return (
    <Box>
      {isLoggedIn ? (
        <>
          <Typography variant="h6">User is currently: Logged-In.</Typography>
          {authUser ? <Typography variant="h6">User name: {authUser.Name}</Typography> : null}
          <br />
          <Button variant="contained" color="primary" onClick={logOut}>
            Log Out
          </Button>
        </>
      ) : (
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={logIn}
        >
          {({ errors, touched }) => (
            <Form>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                maxWidth={400}
                mx="auto"
                my={4}
                p={3}
                border={1}
                borderRadius={1}
                borderColor="grey.400"
              >
                <Typography variant="h3" component="div" gutterBottom>
                  Login
                </Typography>
                <Box mb={2} width="100%">
                  <Field
                    name="username"
                    as={TextField}
                    label="Username"
                    variant="outlined"
                    fullWidth
                    error={touched.username && Boolean(errors.username)}
                    helperText={<ErrorMessage name="username" />}
                  />
                </Box>
                <Box mb={2} width="100%">
                  <Field
                    name="password"
                    type="password"
                    as={TextField}
                    label="Password"
                    variant="outlined"
                    fullWidth
                    error={touched.password && Boolean(errors.password)}
                    helperText={<ErrorMessage name="password" />}
                  />
                </Box>
                <Button type="submit" variant="contained" color="primary">
                  Log In
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      )}
    </Box>
  );
};

export default Dashboard;
