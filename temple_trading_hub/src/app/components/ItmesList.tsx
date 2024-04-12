// ItemsList.js
import React, { useEffect, useState } from 'react';
import { collection, getFirestore, query, getDocs, where } from 'firebase/firestore';
import Item from './Item';
import { DocumentData } from 'firebase/firestore';

const ItemsList = () => {
    const [items, setItems] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
        try {
            const db = getFirestore();
            const itemsCollection = collection(db, 'listings');
            const querySnapshot = await getDocs(query(itemsCollection, where('userID', '==', 'IT7O6fATWOhMKz57HonJJ8g6ZrF2')));
            console.log('Query snapshot:', querySnapshot);
            const itemsData = querySnapshot.docs.map(doc => ({ id: doc.id, title: doc.data().title, condition: doc.data().condition, images: doc.data().imageUrl }));
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
        {items.map(item => (
            <Item
                key={item.id} // Using the document ID as the key
                imageUrl={item.images?.[0]}
                item_name={item.title}
                item_condition={item.condition}
            />
        ))}
    </React.Fragment>
);
  
};

export default ItemsList;
