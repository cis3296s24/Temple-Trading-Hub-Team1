'use client';
import '../../Styles/global.css';
import styles from '../../styles/profile.module.css';
import React from "react";
import { Avatar, IconButton, Tooltip, Box, Radio, RadioGroup, FormControlLabel, Typography,  } from '@mui/material';
import { UserAuth } from '@context/AuthContext';
import { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@firebase';
import ItemsList from '../../components/ItmesList';
import ImageList from '@mui/material/ImageList';
import useScreenSize from '@hooks/useScreenSize';




const profile = () => {
  const { user } = UserAuth();
  const [userData, setUserData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('basic'); // Default selected option
  const screenSize = useScreenSize();
  const [cols, setCols] = useState(3);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const data = [];
      querySnapshot.forEach((doc) => {
        const temp = doc.data();
        data.push(temp);
      });
      setUserData(data);
    };
    getData();
  }, [user]);

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
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ width: '30%', marginRight: '2rem', mt: '-10rem' }}>
      <Avatar 
          sx={{ bgcolor: '#A31F37', color: 'white', mr: 1, width: 100, height: 100,  fontSize: '3rem', }}
            aria-label='user'>
            {user?.email ? user.email[0] : null}
        </Avatar>
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
          <FormControlLabel value="basic" control={<Radio />} label="Basic Info" />
          <FormControlLabel value="items" control={<Radio />} label="Your Items" />
          <FormControlLabel value="threads" control={<Radio />} label="Your Threads" />
          {/* Add more options as needed */}
        </RadioGroup>
      </Box>
      <Box sx={{ width: '70%', paddingTop: '-0rem', overflowY: 'scroll', }}>
        <Box sx={{ overflowY: 'auto', maxHeight: '80vh' }}>
            {selectedOption === 'basic' && (
              <div>
                <h1>Your Info</h1>
                <br/>
                <h1>Email: {user?.email ? user.email : null}</h1>
                <h1>User ID: {user?.userId ? user.userId : null}</h1>
              </div>
            )}
            {selectedOption === 'items' && (
              <div>
                <ImageList variant='masonry' cols={cols} gap={10}>
                  <ItemsList />
                </ImageList>
              </div>
            )}
            {selectedOption === 'threads' && (
              <div>
                <h1>Your Threads</h1>
              </div>
            )}
        </Box>
      </Box>
    </Box>


    // <div className={styles.profile}>
    //   <div>
    //   <Avatar 
    //     sx={{ bgcolor: '#A31F37', color: 'white', mr: 1, width: 100, height: 100,  fontSize: '3rem', }}
    //       aria-label='user'>
    //       {user?.email ? user.email[0] : null}
    //   </Avatar>
    //   <h1>profile</h1>
    //   </div>
    //   <div>

    //   </div>
    // </div>


  );
};

export default profile;
