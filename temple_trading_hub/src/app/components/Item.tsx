import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {
  Typography,
  CardActions,
  CardHeader,
  CardMedia,
  alpha,
} from '@mui/material';
import Box from '@mui/material/Box';
//import { motion, useAnimation } from 'framer-motion';
import styles from '../Styles/Item.module.css';
import '@fontsource/inter/300.css'; // 300 represents the font weight
import '@fontsource/jua/400.css';
import Image from 'next/image';

interface ItemProps {
  imageUrl: string; // Prop for the image URL
  item_name: string; // prop for the items name
  image: string;
  description: string;
  userEmail: string;
  price: string;
  // item_condition: string; // prop for the condition of the item
}

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

const Item: React.FC<ItemProps> = ({
  imageUrl,
  item_name,
  image,
  description,
  userEmail,
  price,
}) => {
  return (
    <React.Fragment>
      <Card
        variant='outlined'
        sx={(theme) => ({
          backgroundSize: 'cover',
          outline: '1px solid',
          outlineColor:
            theme.palette.mode === 'light'
              ? alpha('#d9bfbf', 0.5)
              : alpha('#fc9c9c', 0.1),
        })}>
        <CardHeader title={item_name} />
        <CardMedia component='img' image={imageUrl} alt={image} />
        <CardContent>
          <Typography variant='h6'>Price: {price}</Typography>
        </CardContent>
      </Card>
    </React.Fragment>
    // <div className={styles.item}>
    //    {/* Display the image */}
    //    <Image src={imageUrl} alt="Item Image" width={200} height={200} />
    //    <div className={styles.item_info}>
    //         {item_name}
    //    </div>
    //    <div className={styles.item_info}>
    //         {item_condition}
    //    </div>
    // </div>
  );
};

export default Item;
