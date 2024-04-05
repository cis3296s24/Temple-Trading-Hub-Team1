'use client';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserAuth } from '@context/AuthContext';
import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from 'firebase/auth';
import { auth } from '@firebase';

const signUp = () => {
  const router = useRouter();
  const { user, signUp } = UserAuth();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const handleSignUp = async (e: any) => {
    e.preventDefault();
    await signUp(email, password);
    sendSignInLinkToEmail(auth, email, {
      // this is the URL that we will redirect back to after clicking on the link in mailbox
      url: 'http://localhost:3000/auth/signup',
      handleCodeInApp: true,
    })
      .then(() => {
        localStorage.setItem('email', email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      if (user) {
        router.push('/');
      } else {
        // user is not signed in but the link is valid
        if (isSignInWithEmailLink(auth, window.location.href)) {
          // now in case user clicks the email link on a different device, we will ask for email confirmation
          let email = localStorage.getItem('email');
          if (!email) {
            email = window.prompt('Please provide your email');
          }
          // after that we will complete the login process
          signInWithEmailLink(
            auth,
            //@ts-ignore
            localStorage.getItem('email'),
            window.location.href
          )
            .then((result) => {
              // we can get the user from result.user but no need in this case
              console.log(result.user);
              localStorage.removeItem('email');
              router.push('/');
            })
            .catch((err) => {
              console.log(err);
              router.push('/auth/signup');
            });
        } else {
          console.log('enter email and sign in');
        }
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
