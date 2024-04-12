'use client';
import * as React from 'react';
import '../Styles/global.css';
import styles from '../Styles/trading.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import { motion, useAnimation } from 'framer-motion';
import '@fontsource/inter/300.css'; // 300 represents the font weight
import '@fontsource/jua/400.css';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import { UserAuth } from '@context/AuthContext';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import TextField from '@mui/material/TextField';
import {
  Typography,
  CardActions,
  CardHeader,
  AppBar,
  Toolbar,
  Fab,
} from '@mui/material';
import Item from '@components/Item';
import ItemsList from '../components/ItmesList';
import img5 from '../Images/used_iphone_xr.webp';

const XR = img5.src;

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardHeader title={'testing'} />
    <CardContent>
      <Image src={XR} alt='Item Image' width={200} height={200} />
      <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant='h5' component='div'>
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
        adjective
      </Typography>
      <Typography variant='body2'>
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size='small'>Learn More</Button>
    </CardActions>
  </React.Fragment>
);

const trading = () => {
  const { user } = UserAuth();

  useEffect(() => {}, [user]);
  return (
    <div>
      <Box sx={{ width: 'auto', height: 'auto', overflowY: 'scroll' }}>
        <ImageList variant='masonry' cols={1} gap={8}>
          <div className={styles.trading}>
            What are you looking for?
            <TextField
              id='filled-basic'
              className={styles.outlinedTextField}
              label='Filled'
              variant='filled'
            />
          </div>
          <div className={styles.trading_content}>
            <Card variant='outlined'>{card}</Card>
            <Item
              imageUrl={XR}
              item_name='Plato complete works'
              item_condition='Good Condition'
            />
            <ItemsList />
          </div>
        </ImageList>
      </Box>
      {user && (
        <AppBar
          position='fixed'
          color='transparent'
          sx={{ top: 'auto', bottom: 0, boxShadow: 'none', padding: '15px' }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Link href={'/createtrade'}>
              <Fab variant='extended' color='secondary'>
                <AddIcon sx={{ mr: 1 }} />
                Create Thread
              </Fab>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
};

export default trading;
