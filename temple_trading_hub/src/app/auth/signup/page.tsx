import { Container, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';

const signUp = () => {
  return (
    <div>
      <Container maxWidth='sm'>
        <Typography variant='h5' component='h5' align='center' margin={2}>
          Sign Up
        </Typography>
        Existing User?<Link href={'/auth/signin'}>Sign In</Link>
        <Stack spacing={2}>
          <TextField fullWidth label='Email' id='email' />
          <TextField fullWidth label='Password' id='email' />
        </Stack>
      </Container>
    </div>
  );
};

export default signUp;
