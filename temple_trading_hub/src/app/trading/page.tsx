'use client';
import * as React from 'react';
import "../Styles/global.css";
import styles from '../Styles/trading.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import { motion, useAnimation } from 'framer-motion';
import '@fontsource/inter/300.css'; // 300 represents the font weight
import '@fontsource/jua/400.css';
import Image from 'next/image';
import Link from 'next/link';
import { UserAuth } from '@context/AuthContext';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Item from "@components/Item";
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
const trading = () =>{
    return(
    <div>
        <div className={styles.trading}>
           What are you looking for?<TextField id="filled-basic" className={styles.outlinedTextField} label="Filled" variant="filled"/>
        </div>
        <div className={styles.trading_content}>
        <Item imageUrl={Plato} item_name="Plato complete works" item_condition="Good Condition"/> 
            <Item imageUrl={Sweater} item_name="pastel-sweater" item_condition="Never Worn"/> 
            <Item imageUrl={StanleyCup} item_name="Stanley Cup - white" item_condition="never used"/> 
            <Item imageUrl={vans} item_name="Low Top Vans - Black" item_condition="Heavily Used"/> 
            <Item imageUrl={Rev} item_name="Revenge Hoodie Embroidered" item_condition="Never Worn"/> 
            <Item imageUrl={airp} item_name="Airpod Pros" item_condition="used"/> 
            <Item imageUrl={rila} item_name="Rilakuma - pancake" item_condition="used"/> 
            <Item imageUrl={mac} item_name="macbook" item_condition="used"/> 
            <Item imageUrl={Wjacket} item_name="Winter jacket" item_condition="used"/> 
            <Item imageUrl={phl} item_name="Phillies Jersey" item_condition="used"/> 
            <Item imageUrl={Rmouse} item_name="Razer mouse" item_condition="used"/> 
            <Item imageUrl={Aguitar} item_name="acoustic guitar" item_condition="used"/> 
        </div>
    </div>
    );
}

export default trading;