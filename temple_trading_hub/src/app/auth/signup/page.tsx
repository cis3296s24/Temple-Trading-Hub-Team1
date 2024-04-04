'use client';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserAuth } from '@context/AuthContext';

const signUp = () => {
  const router = useRouter();
  const { user, signUp } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignUp = async (e: any) => {
    e.preventDefault();
    await signUp(email, password);
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      if (user) {
        router.push('/');
      }
    };
    checkAuthentication();
  }, [user]);
  return (
    <div>
      <Container maxWidth='sm'>
        <Typography variant='h5' component='h5' align='center' margin={2}>
          Sign Up
        </Typography>
        Existing User?<Link href={'/auth/signin'}>Sign In</Link>
        <form onSubmit={handleSignUp}>
          <Stack spacing={2} sx={{ backgroundColor: 'white' }}>
            <TextField
              fullWidth
              label='Email'
              id='email'
              type='email'
              sx={{ color: 'white' }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label='Password'
              id='password'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type='submit'>Sign Up</Button>
          </Stack>
        </form>
      </Container>
    </div>
  );
};

export default signUp;
