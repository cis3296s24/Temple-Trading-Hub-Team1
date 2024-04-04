'use client';

import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

const signIn = () => {
  const [email, setEmail] = useState('');

  //@ts-ignore
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(`email: ${email}`);
  };

  return (
    <div>
      <Container maxWidth='sm'>
        <Typography variant='h5' component='h5' align='center' margin={2}>
          Sign In
        </Typography>
        <Stack spacing={2} sx={{ backgroundColor: 'white' }}>
          <form onSubmit={handleSignIn}>
            <TextField
              fullWidth
              label='Email'
              id='email'
              //@ts-ignore
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button type='submit'>Sign in</Button>
          </form>
        </Stack>
        New User? <Link href={'/auth/signup'}>Sign Up</Link>
      </Container>
    </div>
  );
};

export default signIn;
