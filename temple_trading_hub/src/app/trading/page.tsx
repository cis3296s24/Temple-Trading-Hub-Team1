'use client';
import * as React from 'react';
import '../Styles/global.css';
import styles from '../Styles/trading.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import { motion, useAnimation } from 'framer-motion';
import '@fontsource/inter/300.css'; // 300 represents the font weight
import '@fontsource/jua/400.css';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import { UserAuth } from '@context/AuthContext';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import { AppBar, Toolbar, Fab, Container, Avatar } from '@mui/material';
import ItemsList from '../components/ItmesList';
import img5 from '../Images/used_iphone_xr.webp';
import useScreenSize from '@hooks/useScreenSize';

const XR = img5.src;

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

const trading = () => {
  const { user } = UserAuth();
  const [cols, setCols] = useState(3);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.width > 1000) {
      setCols(3);
    } else if (screenSize.width < 760) {
      setCols(1);
    } else {
      setCols(2);
    }
  }, [screenSize.width, user]);

  return (
    <Container maxWidth='lg' sx={{ padding: '30px' }}>
      <ImageList variant='masonry' cols={cols} gap={10}>
        {/* <div className={styles.trading}>
            What are you looking for?
            <TextField id='filled-basic' variant='outlined' />
  </div> */}
        <ItemsList />
      </ImageList>
      {user && (
        <AppBar
          position='fixed'
          color='transparent'
          sx={{ top: 'auto', bottom: 0, boxShadow: 'none', padding: '15px' }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Link href={'/createtrade'}>
              <Button color='primary' variant='contained'>
                <AddIcon sx={{ mr: 1 }} />
                Create Trade
              </Button>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
      )}
    </Container>
  );
};

export default trading;
