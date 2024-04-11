'use client';
import * as React from 'react';
import "../Styles/global.css";
import styles from '../Styles/trading.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import { motion, useAnimation } from 'framer-motion';
import '@fontsource/inter/300.css'; // 300 represents the font weight
import '@fontsource/jua/400.css';
import Image from 'next/image';
import Link from 'next/link';
import { UserAuth } from '@context/AuthContext';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, CardActions } from '@mui/material';
import Item from "@components/Item";
import ItemsList from '../components/ItmesList';
import img1 from "../images/plato_complete_works.jpg"
import RevHoodie from "../images/Revenge_Hoodie.webp";
import img2 from "../images/Stanley_cup_pic.jpg";
import img3 from "../Images/sweater_for_Trade.webp";
import img4 from "../Images/worn_Vans.webp"
import img5 from "../Images/used_iphone_xr.webp"
import img6 from "../images/airpods.webp"
import img7 from "../images/rilakuma.webp"
import img8 from "../images/macbook.jpg"
import img9 from "../images/winter_jacket.jpg"
import img10 from "../images/phillies.jpg"
import img11 from "../images/razer_mouse.png"
import img12 from "../images/A_guitar.jpg"
const Rev = RevHoodie.src;
const Plato = img1.src;
const StanleyCup = img2.src;
const Sweater = img3.src;
const vans = img4.src;
const XR = img5.src;
const airp = img6.src;
const rila = img7.src;
const mac = img8.src;
const Wjacket = img9.src;
const phl = img10.src;
const Rmouse = img11.src;
const Aguitar = img12.src;

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  const card = (
    <React.Fragment>
      <CardContent>
      <Image src={XR} alt="Item Image" width={200} height={200} /> 
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  
const trading = () =>{
    return(
    <div>
        <div className={styles.trading}>
           What are you looking for?<TextField id="filled-basic" className={styles.outlinedTextField} label="Filled" variant="filled"/>
        </div>
        <div className={styles.trading_content}>
            <Card variant="outlined">{card}</Card>
            <Item imageUrl={Plato} item_name="Plato complete works" item_condition="Good Condition"/> 
            <ItemsList />
        </div>
    </div>
    );
}

export default trading;