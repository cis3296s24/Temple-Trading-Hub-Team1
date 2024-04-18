import React from 'react';
import styles from '../Styles/Item.module.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

interface ItemProps {
  imageUrl: string;
  item_name: string;
  image: string;
  description: string;
  userEmail: string;
  price: string;
}

const Item: React.FC<ItemProps> = ({
  imageUrl,
  item_name,
  image,
  description,
  userEmail,
  price,
}) => {
  return (
    <Link href={`/trading/${item_name}`}>
      <Card variant='outlined'>
        <CardHeader title={item_name} />
        <CardMedia component='img' image={imageUrl} alt={image} />
        <CardContent>
          <Typography variant='h6'>Price: {price}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Item;