'use client';
import {
  AppBar,
  Box,
  Container,
  Fab,
  ImageList,
  ImageListItem,
  Toolbar,
} from '@mui/material';
import '../styles/About.css';
import ThreadsCard from '@components/ThreadsCard';
import AddIcon from '@mui/icons-material/Add';
import useScreenSize from '@hooks/useScreenSize';
import { useState, useEffect, use } from 'react';
import { UserAuth } from '@context/AuthContext';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@firebase';

const Threads = () => {
  const [cols, setCols] = useState(3);
  const screenSize = useScreenSize();
  const { user } = UserAuth();

  const displayThread = async () => {
    const querySnapshot = await getDocs(collection(db, 'threads'));
    querySnapshot.forEach((doc) => {
      return (
        <ImageListItem key={doc.uid}>
          <ThreadsCard image={doc.imageUrl} />
        </ImageListItem>
      );
    });
  };

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
        {displayThread}
      </ImageList>
      {user && (
        <AppBar
          position='fixed'
          color='transparent'
          sx={{ top: 'auto', bottom: 0, boxShadow: 'none', padding: '15px' }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Link href={'/threads/create'}>
              <Fab variant='extended' color='secondary'>
                <AddIcon sx={{ mr: 1 }} />
                Create Thread
              </Fab>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
      )}
    </Container>
  );
};
export default Threads;
