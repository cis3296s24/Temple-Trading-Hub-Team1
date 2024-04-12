import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, CardActions, CardHeader, CardMedia } from '@mui/material';
import Box from '@mui/material/Box';
//import { motion, useAnimation } from 'framer-motion';
import styles from "../Styles/Item.module.css"
import '@fontsource/inter/300.css'; // 300 represents the font weight
import '@fontsource/jua/400.css';
import Image from 'next/image';
import Link from 'next/link';

interface ItemProps {
    imageUrl: string;
    item_name: string;
    item_condition: string;
    id: string; // Add an id prop for the item's unique identifier
}

const Item: React.FC<ItemProps> = ({ imageUrl, item_name, item_condition, id }) => {
    return (
        <div className={styles.item}>
            <Link href={`/app/Products/ProductPage?id=${id}`}> {/* Use the id prop in the Link */}
                <a>
                    <Image src={imageUrl} alt="Item Image" width={200} height={200} />
                    <div className={styles.item_info}>
                        {item_name}
                    </div>
                    <div className={styles.item_info}>
                        {item_condition}
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default Item;