// SignInSide.js
'use client';

import { UserAuth } from '@context/AuthContext';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState, useEffect } from 'react'; // Import useState and useEffect
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Link as MuiLink,
  CssBaseline,
  Avatar,
} from '@mui/material';
import Link from 'next/link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const signInSchema = yup.object({
  email: yup.string().required('Provide @temple.edu Email').email().min(13, 'Email too short').max(60, 'Email too long'),
  password: yup.string().required('Please enter your password'),
});

const SignInSide = () => {
  const { user, signIn } = UserAuth();
  const [error, setError] = useState(''); // State for error message

  useEffect(() => {
    if (user) {
      window.location.href = '/'; // Redirect to home or dashboard as appropriate
    }
  }, [user]);

  const handleSignIn = async (values) => {
    try {
      console.log('Attempting to sign in with:', values.email, values.password);  // Log values
      await signIn(values.email, values.password);
    } catch (error) {
      // Log the error or show an error message
      console.error("Authentication failed", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: handleSignIn,
  });

  return (
    <Container component='main' maxWidth='xs' sx={{ height: '75vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <CssBaseline />
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign In
        </Typography>
        <Box component='form' noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                name='email'
                autoComplete='email'
                placeholder='Email Address*'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                type='password'
                id='password'
                autoComplete='current-password'
                placeholder='Password*'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
          </Grid>
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container justifyContent='center'>
            <Grid item>
              New to the platform? <MuiLink href='/auth/signup'>Sign Up</MuiLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignInSide;
