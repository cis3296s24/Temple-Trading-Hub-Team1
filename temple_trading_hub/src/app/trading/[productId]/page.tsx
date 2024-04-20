'use client';
import { useEffect, useState } from 'react';
import { db } from '@firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Container, Button, Typography, Divider } from '@mui/material';
import { UserAuth } from '@context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import IntroDivider from './IntroDivider'; // Import the IntroDivider component

const ProductPage = ({ params }: any) => {
  const { user } = UserAuth();
  const [product, setProduct] = useState();
  const { productId }: any = params;

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        const docRef = doc(db, 'listings', productId);
        const docSnap: any = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.log('Product not found');
        }
      }
    };

    fetchProduct();
  }, []);
  const router = useRouter();
  const routeToEdit = (product: any) => {
    router.push("/trading/edit");
  }

  return (
    <Container maxWidth='xs' sx={{ p: 2 }}>
      {/* Display the IntroDivider component */}
      {/* <IntroDivider /> */}
      <Container maxWidth='xs' sx={{ p: 2 }}>
        <Container sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: 4, padding: 2 }}>
          {product && product.imageUrl && (
            <img
              src={product.imageUrl}
              alt={product.image}
              style={{ width: '100%', borderRadius: 4 }}
            />
          )}
          <Typography variant='h4' align='center' color='text.secondary' gutterBottom>
            {product && product.title}
          </Typography>
          <Divider />
          <Typography variant='body1' color='text.secondary' gutterBottom>
            Description: {product && product.description}
          </Typography>
          <Divider />
          <Typography variant='body2' color='text.secondary' gutterBottom>
            Price: {product && product.price}
          </Typography>
          <Button
            sx={{ marginTop: 2, fontSize: '1rem', padding: '8px 16px' }}
            color='primary'
            variant='contained'
            fullWidth
            href={`mailto:${product && product.userEmail}`}>
            Contact User
          </Button>
          {user && product && user.uid === product.userID && (
            <Link
              href={{
                pathname: '../trading/edit/',
                query: { id: productId }
              }}
            >
              Edit Trade
            </Link>
          )}
        </Container>
      </Container>
    </Container>
  );
};

export default ProductPage;
