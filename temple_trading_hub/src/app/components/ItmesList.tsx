// ItemsList.tsx
import React, { useEffect, useState } from 'react';
import {
  collection,
  getFirestore,
  query,
  getDocs,
  where,
  Query,
  DocumentData,
  Firestore
} from 'firebase/firestore';
import Item from './Item';
import { ImageListItem } from '@mui/material';

interface ItemsListProps {
  userID?: string;
  category?: string;
}

interface ItemData {
  id: string;
  title: string;
  price: string;
  imageUrl: string[];
  image: string[];
  description: string;
  userEmail: string;
  category: string;
}

const ItemsList: React.FC<ItemsListProps> = ({ userID, category }) => {
  const [items, setItems] = useState<ItemData[]>([]);

  useEffect(() => {
    const db: Firestore = getFirestore();
    const itemsCollection = collection(db, 'listings');
    let itemsQuery: Query<DocumentData> = query(itemsCollection);

    if (userID) {
      itemsQuery = query(itemsCollection, where('userID', '==', userID));
    }
    if (category && category !== 'all') {
      itemsQuery = query(itemsCollection, where('category', '==', category));
    }

    const fetchItems = async () => {
      try {
        const querySnapshot = await getDocs(itemsQuery);
        const itemsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          title: doc.data().title,
          price: doc.data().price,
          imageUrl: doc.data().imageUrl,
          image: doc.data().images,
          description: doc.data().description,
          userEmail: doc.data().userEmail,
          category: doc.data().category,
        }));
        setItems(itemsData);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [userID, category]);

  return (
    <>
      {items.map((item) => (
        <ImageListItem key={item.id}>
          <Item
            imageUrl={item.imageUrl[0]}
            item_name={item.title}
            image={item.image[0]}
            description={item.description}
            userEmail={item.userEmail}
            price={item.price}
          />
        </ImageListItem>
      ))}
    </>
  );
};

export default ItemsList;
