// ItemsList.js
import React, { useEffect, useState } from 'react';
import {
  collection,
  getFirestore,
  query,
  getDocs,
  where,
} from 'firebase/firestore';
import Item from './Item';
import { DocumentData } from 'firebase/firestore';
import { ImageListItem } from '@mui/material';

const ItemsList = () => {
  const [items, setItems] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = collection(db, 'listings');
        const querySnapshot = await getDocs(query(itemsCollection));
        console.log('Query snapshot:', querySnapshot);
        const itemsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          //   condition: doc.data().condition,
          price: doc.data().price,
          imageUrl: doc.data().imageUrl,
          image: doc.data().images,
          description: doc.data().description,
          userEmail: doc.data().userEmail,
        }));
        console.log('Items data:', itemsData);
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <React.Fragment>
      {items.map((item) => (
        <ImageListItem key={item.id}>
          <Item
            imageUrl={item.imageUrl?.[0]}
            item_name={item.title}
            image={item.image?.[0]}
            description={item.description}
            userEmail={item.userEmail}
            price={item.price}
            id={item.id}
          />
        </ImageListItem>
      ))}
    </React.Fragment>
  );
};

export default ItemsList;
