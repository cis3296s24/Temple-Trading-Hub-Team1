'use client';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import { motion, useAnimation } from 'framer-motion';
import styles from '../Styles/TopBar.module.css';
import '@fontsource/inter/300.css'; // 300 represents the font weight
import '@fontsource/jua/400.css';
import Image from 'next/image';
import Link from 'next/link';
import { UserAuth } from '@context/AuthContext';
import { useEffect } from 'react';

const TopBar = () => {
  const { user, signOut } = UserAuth();

  useEffect(() => {}, [user]);
  return (
    <div className={styles.topBar}>
      <Link href={'/'} className={styles.section}>
        <Image
          src='/Images/r&w_T_SVG.svg'
          alt='Vercel Logo'
          className={styles.vercelLogo}
          width={100}
          height={100}
          priority
        />
        Temple Trading Hub
      </Link>
      <div className={styles.section2}></div>
      <div className={styles.topButtons}>
        <Stack spacing={2} direction='row'>
          <Button className={styles.buttonstyle} variant='text'>
            <Link href={'/'}>Home</Link>
          </Button>
          {/* fix later
                    <span>|</span> */}
          <Button className={styles.buttonstyle} variant='text'>
            <Link href={'/trading'}>Trading</Link>
          </Button>
          <Button className={styles.buttonstyle} variant='text'>
            <Link href={'/about'}>About Us</Link>
          </Button>
          {!user ? (
            <Button className={styles.buttonstyle} variant='text'>
              <Link href={'/auth/signin'}>Sign In</Link>
            </Button>
          ) : (
            <Button className={styles.buttonstyle} variant='text'>
              <Link href={'/auth/signin'}>Sign Out</Link>
            </Button>
          )}
        </Stack>
      </div>
    </div>
  );
};

export default TopBar;
