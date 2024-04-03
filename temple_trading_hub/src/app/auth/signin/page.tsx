import { Container, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';

const signIn = () => {
  return (
    <div>
      <Container maxWidth='sm'>
        <Typography variant='h5' component='h5' align='center' margin={2}>
          Sign In
        </Typography>
        New User?<Link href={'/auth/signup'}>Sign Up</Link>
        <Stack spacing={2}>
          <TextField fullWidth label='Email' id='email' />
        </Stack>
      </Container>
    </div>
  );
};

export default signIn;
