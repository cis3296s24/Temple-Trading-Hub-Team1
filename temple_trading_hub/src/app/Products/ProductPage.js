import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '@firebase';
import { doc, getDoc } from 'firebase/firestore';
import Head from 'next/head';
import Link from 'next/link';

const ProductPage = () => {
 const router = useRouter();
 const { id } = router.query;
 const [item, setItem] = useState(null);
 const [error, setError] = useState(null);

 useEffect(() => {
    const fetchItem = async () => {
      if (id) {
        try {
          console.log(`Fetching product with id: ${id}`);
          const docRef = doc(db, "listings", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setItem(docSnap.data());
          } else {
            console.log("No such document!");
            setError("No such document!");
          }
        } catch (error) {
          console.error("Failed to fetch item:", error);
          setError("Failed to fetch item.");
        }
      }
    };

    fetchItem();
 }, [id]);

 if (error) {
    return <div>Error: {error}</div>;
 }

 if (!item) {
    return <div>Loading...</div>;
 }

 return (
    <div>
      <Head>
        <title>{item.title}</title>
        <meta name="description" content={item.description} />
      </Head>
      <h1>{item.title}</h1>
      <img src={item.imageUrl || '/default-image.jpg'} alt={item.title} />
      <p>{item.description}</p>
      <p>Price: {item.price}</p>
      <p>Category: {item.category}</p>
    </div>
 );
};

export default ProductPage;
